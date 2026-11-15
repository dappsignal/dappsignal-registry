import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const readmePath = join(root, "README.md");
const start = "<!-- BEGIN GENERATED PROJECT MATRIX -->";
const end = "<!-- END GENERATED PROJECT MATRIX -->";
const schema = JSON.parse(readFileSync(join(root, "project.schema.json"), "utf8"));
const chains = schema.properties.chains.items.properties.chain_id.enum;
const labels = {
  ethereum: "Ethereum", base: "Base", "bnb-smart-chain": "BNB Smart Chain", solana: "Solana", polygon: "Polygon", hyperevm: "HyperEVM",
  arbitrum: "Arbitrum One", optimism: "OP Mainnet", avalanche: "Avalanche", monad: "Monad", plasma: "Plasma", mantle: "Mantle",
  gnosis: "Gnosis", unichain: "Unichain", linea: "Linea", sonic: "Sonic", "zksync-era": "ZKsync Era", scroll: "Scroll",
  ink: "Ink", berachain: "Berachain", ronin: "Ronin", "robinhood-chain": "Robinhood Chain", arc: "Arc", "world-chain": "World Chain",
};
const markdown = (value) => value.replace(/\\/g, "\\\\").replace(/[|\[\]<>*_`]/g, "\\$&").replace(/[\r\n]+/g, " ");
const projects = readdirSync(join(root, "projects")).filter((file) => file.endsWith(".json")).map((file) => {
  const source = readFileSync(join(root, "projects", file), "utf8");
  return { file, source, ...JSON.parse(source) };
}).sort((a, b) => a.name.localeCompare(b.name, "en") || a.slug.localeCompare(b.slug, "en"));

function cell(project, chainId) {
  const mapping = project.chains.find((chain) => chain.chain_id === chainId);
  const count = mapping?.addresses?.length ?? 0;
  if (!count) return "🔴";
  const line = project.source.split("\n").findIndex((line) => new RegExp(`"chain_id"\\s*:\\s*${JSON.stringify(chainId)}`).test(line)) + 1;
  if (!line) throw new Error(`Missing chain source line: ${project.file} / ${chainId}`);
  return `[🟢](projects/${encodeURIComponent(project.file)}#L${line} "${count} registered address${count === 1 ? "" : "es"}")`;
}

const lines = [
  start,
  "## Listed dApps by chain",
  "",
  `**${projects.length} dApps · ${chains.length} supported chains.** Projects are sorted alphabetically.`,
  "",
  "🟢 = at least one contract, program, or account address is registered for this dApp on that chain; click the dot to open its address records. 🔴 = no address is registered for that dApp/chain, including supported-chain listings with empty address mappings.",
  "",
  "This matrix describes registry address mappings. A green dot does not indicate current activity, complete protocol coverage, or a risk assessment.",
  "",
];
for (let index = 0; index < chains.length; index += 6) {
  const group = chains.slice(index, index + 6);
  const names = group.map((chain) => labels[chain] ?? chain);
  if (index) lines.push("<details>", `<summary>${names.join(" · ")}</summary>`, "");
  lines.push(`| dApp | ${names.map(markdown).join(" | ")} |`, `| :--- | ${group.map(() => ":---:").join(" | ")} |`);
  for (const project of projects) {
    lines.push(`| [${markdown(project.name)}](https://dappsignal.com/projects/${encodeURIComponent(project.slug)}) | ${group.map((chain) => cell(project, chain)).join(" | ")} |`);
  }
  lines.push("");
  if (index) lines.push("</details>", "");
}
lines.push(end);
const block = lines.join("\n");
const readme = readFileSync(readmePath, "utf8").replace(/\r\n/g, "\n");
const startIndex = readme.indexOf(start), endIndex = readme.indexOf(end);
if (startIndex < 0 || endIndex < startIndex || readme.lastIndexOf(start) !== startIndex || readme.lastIndexOf(end) !== endIndex) {
  throw new Error("README must contain exactly one generated project matrix marker pair.");
}
const updated = readme.slice(0, startIndex) + block + readme.slice(endIndex + end.length);
if (process.argv.includes("--check")) {
  if (updated !== readme) {
    console.error("README project matrix is outdated. Run node scripts/generate-catalog-readme.mjs and commit README.md.");
    process.exitCode = 1;
  } else console.log(`README matrix is current: ${projects.length} projects, ${chains.length} chains.`);
} else {
  writeFileSync(readmePath, updated);
  console.log(`Generated README matrix: ${projects.length} projects, ${chains.length} chains.`);
}

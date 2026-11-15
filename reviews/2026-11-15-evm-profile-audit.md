# 22 profil ve EVM adres incelemesi — 2026-11-15

6 profil için veri kaynağı açıldı; 16 profil aşağıdaki nedenlerle açılmadı. 179 yeni adres, 19 mevcut profile eklendi. Toplam 24 ağ, 65 ölçülebilir profil ve 298 izlenen adres var.

Ana ağ bytecode ve dar olay okuması doğrulanmıştır. Boş olay örneği sıfır yaşam boyu kullanıcı anlamına gelmez. Tam geçmiş, 24 saat ve protokolün tüm kontratlarının kapsandığı iddia edilmez.

| Profil | Sonuç | Kapsam / neden |
| --- | --- | --- |
| alchemy | Açılmadı | LightAccountFactory anahtar/fabrika adresi doğrulandı; fabrika createAccount içinde kendi olayını yayımlamıyor. Yeni hesap olayları için EntryPoint fabrika filtresi veya çağrı izi normalleştiricisi gerekli. Genel EntryPoint kullanıcıları Alchemy metriği sayılamaz. [Resmî kaynak](https://github.com/alchemyplatform/light-account/blob/develop/src/LightAccountFactory.sol) |
| ankr | Açılmadı | RPC çağrıları zincir dışıdır. ANKR token hareketleri veya staking olayları RPC hizmet kullanıcılarını ölçmez; özel kullanım/veri API kapsamı doğrulanmadı. [Resmî kaynak](https://www.ankr.com/docs/rpc-service/) |
| api3 | Açılmadı | DAO/token/staking hareketleri oracle verisini tüketen uygulamaların kullanımını temsil etmez. Mevcut ürün için uygun, güncel ve ayrıştırılabilir olay kaynağı doğrulanmadı. [Resmî kaynak](https://docs.api3.org/) |
| aragon | Açıldı | Selected official Aragon OSx DAO registry proxies are measured. Registry events cover DAO registration and updates, not all voting and treasury activity in separately deployed DAOs. [Resmî kaynak](https://www.npmjs.com/package/@aragon/osx-commons-configs/v/1.4.6) |
| dune | Açılmadı | Sorgular ve dashboard görüntülemeleri zincir dışıdır; bu ürün faaliyetini temsil eden projeye özel kullanım kontratı doğrulanmadı. [Resmî kaynak](https://docs.dune.com/) |
| elizaos | Açılmadı | Bağımsız geliştiricilerin ajanlarını ortak ELIZA token hareketinden ayıramayız; tüm ajan kullanımı için doğrulanmış ortak birinci taraf programı bulunamadı. [Resmî kaynak](https://docs.elizaos.ai/) |
| farcaster | Açıldı | Selected Farcaster identity, key and storage registries on OP Mainnet are measured. Offchain casts, feeds and mini-app activity are not included. [Resmî kaynak](https://docs.farcaster.xyz/learn/architecture/contracts) |
| io-net | Açılmadı | GPU işlerinin kapsamını temsil eden resmî özel Solana programı doğrulanamadı. IO/USDC ödeme ve ödül transferleri tek başına iş yürütme veya aktif müşteri sayısı değildir. [Resmî kaynak](https://docs.io.net/) |
| manifold | Açıldı | Selected Manifold ERC721 Edition v7 and ERC1155 Edition v7 claim extensions are measured. Immutable Creator Core implementations remain reference-only; separate creator proxy NFTs are not aggregated. [Resmî kaynak](https://github.com/manifoldxyz/manifold-contract-addresses) |
| matrixdock-gold | Açılmadı | İhraççının XAUm dağıtım dizini bu incelemede okunabilir içerik vermedi. İkincil sitelerdeki token adresleri resmî ihraççı kanıtı yerine kullanılmadı. [Resmî kaynak](https://matrixdock.gitbook.io/matrixdock-docs/english/gold-token-xaum/smart-contract/contract-address) |
| metamask | Açıldı | Selected official MetaMask Swaps routers are measured on the mapped EVM networks. This covers router events, not all MetaMask wallet users or activity. [Resmî kaynak](https://raw.githubusercontent.com/MetaMask/metamask-extension/main/shared/constants/swaps.ts) |
| moonpay-commerce | Açılmadı | Ödeme bağlantıları ve satıcı adreslerinden projeye özgü genel bir olay kaynağı doğrulanamadı. Ortak USDC veya Solana Pay trafiği tümüyle MoonPay Commerce sayılmadı. [Resmî kaynak](https://docs.hel.io/) |
| natix-network | Açılmadı | NATIX token/ödül hareketleri sürüş ve haritalama katkılarının tamamını temsil etmiyor; resmî, ayrıştırılabilir görev programı doğrulanamadı. [Resmî kaynak](https://docs.natix.network/) |
| opensea | Açılmadı | Seaport farklı pazar yerleri tarafından paylaşılır. OpenSea filtresiyle sipariş çözümleme veya çağrı izi olmadan tüm Seaport trafiği OpenSea kullanımı sayılamaz. [Resmî kaynak](https://docs.opensea.io/docs/seaport-overview) |
| phantom | Açılmadı | Genel cüzdan işlemleri ve paylaşılan Jupiter/0x rotaları Phantom uygulamasına özel değildir; resmî, tek başına ayrıştırılabilir swap/router kaynağı doğrulanamadı. [Resmî kaynak](https://docs.phantom.com/) |
| pocket-network | Açılmadı | RPC hizmet kullanımı zincir dışıdır. POKT token/staking/oturum uzlaşması tüm son kullanıcı RPC çağrılarını doğrudan ölçmez. [Resmî kaynak](https://docs.pokt.network/) |
| render-network | Açılmadı | RENDER token yakma/ödül hareketleri ile iş teslimi ve kullanıcı kapsamı eşdeğer değildir; iş kapsamını doğrulayan birinci taraf özel program kaynağı doğrulanamadı. [Resmî kaynak](https://know.rendernetwork.com/) |
| roam | Açılmadı | ROAM token/ödül transferleri Wi-Fi bağlantısı veya aktif erişim noktası kullanımına eşit değildir; atfedilebilir resmî ağ programı doğrulanamadı. [Resmî kaynak](https://www.roam.network/) |
| sequence | Açılmadı | Resmî Wallet Factory deploy işlevi CREATE2 yapıyor ve kendi adresinden olay yayımlamıyor. Cüzdan kurulum/kullanımı için fabrika çağrı izi ya da cüzdan adresi türetme indeksi gerekli. [Resmî kaynak](https://github.com/0xsequence/wallet-contracts/blob/master/contracts/Factory.sol) |
| space-id | Açıldı | Official SPACE ID .bnb and .arb name registries are measured. Registry ownership and resolver events cover these namespaces, not every name service integrated by the SDK. [Resmî kaynak](https://www.npmjs.com/package/@siddomains/sidjs/v/0.1.29) |
| stepn | Açılmadı | GMT/GST hareketleri oyun oturumlarını ve yürüyüş aktivitelerini ölçmez. Mevcut desteklenen oyun realm’leri için resmî ve özel faaliyet programı doğrulanamadı. [Resmî kaynak](https://support.stepn.com/) |
| the-graph | Açıldı | Selected Graph Horizon payment and escrow contracts on Arbitrum are measured. Settlement transactions are not a count of queries or all network users. [Resmî kaynak](https://thegraph.com/docs/en/contracts/) |

## Yeni ağlar

Polygon, HyperEVM, Arbitrum One, OP Mainnet, Avalanche, Monad, Plasma, Mantle, Gnosis, Unichain, Linea Mainnet, Sonic, ZKsync Era, Scroll, Ink, Berachain, Ronin, Robinhood Chain, Arc, World Chain.

## Adres kanıtları

Her ekleme için resmî URL, ağ, adres, doğrulanan blok, bytecode özeti, olay aralığı ve başlangıç pozisyonu [JSON inceleme kaydında](2026-11-15-evm-profile-audit.json) bulunur. Yayımlanmış fakat bytecode bulunamayan Manifold v8 adresleri kullanılmadı. Testnetler, implementasyon kontratları ve genel EntryPoint/Permit2 adresleri eklenmedi.

Orijinal dört sağlayıcı, Solana/Helius üretim dışı deneyi ve reklam/ödeme ayarları korunmuştur. 81 profilin tamamı da mevcut eşlemelerle karşılaştırıldı; yeni dağıtımı doğrulanmayanların mevcut kapsamı korunur, tüm EVM ağlarında dağıtımları olmadığı iddia edilmez.

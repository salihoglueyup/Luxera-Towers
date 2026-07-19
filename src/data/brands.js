// Marka kartları için geçici tek görsel (gerçek fotoğraflar verildikçe tek tek değişecek)
const PLACEHOLDER_IMAGE = '/images/exterior/11_2025-12-18_02-46-35_736f9b.webp';

export const getOffices = (t) => [
  {
    id: 1,
    name: 'Luxera Global A.Ş.',
    sector: t('brands.offices.o1.sector', 'Gayrimenkul Yatırım Fonu'),
    floor: t('brands.offices.o1.floor', '10-15. Katlar'),
    description: t('brands.offices.o1.desc', 'Luxera markasının uluslararası yatırımlarını ve fon yönetimini gerçekleştirdiği global yönetim merkezi.'),
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 2,
    name: 'Vanguard Mimarlık',
    sector: t('brands.offices.o2.sector', 'Mimari Tasarım'),
    floor: t('brands.offices.o2.floor', '30. Kat'),
    description: t('brands.offices.o2.desc', 'Uluslararası ödüllü mimari projeler üreten, Luxera Towers\'ın da konsept tasarımını üstlenen stüdyo.'),
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 3,
    name: 'Quantum Tech Solutions',
    sector: t('brands.offices.o3.sector', 'Yapay Zeka & Yazılım'),
    floor: t('brands.offices.o3.floor', '18-20. Katlar'),
    description: t('brands.offices.o3.desc', 'Büyük veri analitiği ve bulut teknolojileri üzerine odaklanan, EMEA bölgesi AR-GE merkezi.'),
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 4,
    name: 'Ziraat Katılım Bölge Ynt.',
    sector: t('brands.offices.o4.sector', 'Finans'),
    floor: t('brands.offices.o4.floor', '25-28. Katlar'),
    description: t('brands.offices.o4.desc', 'Kurumsal bankacılık ve uluslararası ticaret finansmanı süreçlerinin yönetildiği bölge müdürlüğü.'),
    image: PLACEHOLDER_IMAGE
  },
  {
    id: 5,
    name: 'Nexus Hukuk Bürosu',
    sector: t('brands.offices.o5.sector', 'Uluslararası Hukuk'),
    floor: t('brands.offices.o5.floor', '12. Kat'),
    description: t('brands.offices.o5.desc', 'Global ticaret ve gayrimenkul hukuku alanında uzmanlaşmış prestijli danışmanlık ofisi.'),
    image: PLACEHOLDER_IMAGE
  }
];

export const getStores = (t) => [
  { id: 1, name: 'Rolex', category: t('brands.stores.s1.category', 'Saat & Mücevherat'), floor: t('brands.stores.s1.floor', 'Zemin Kat'), logo: 'ROLEX', image: PLACEHOLDER_IMAGE },
  { id: 2, name: 'Louis Vuitton', category: t('brands.stores.s2.category', 'Lüks Moda'), floor: t('brands.stores.s2.floor', 'Zemin Kat'), logo: 'LOUIS VUITTON', image: PLACEHOLDER_IMAGE },
  { id: 3, name: 'Beymen', category: t('brands.stores.s3.category', 'Çok Katlı Mağazacılık'), floor: t('brands.stores.s3.floor', '1. Kat'), logo: 'BEYMEN', image: PLACEHOLDER_IMAGE },
  { id: 4, name: 'Apple Store', category: t('brands.stores.s4.category', 'Teknoloji'), floor: t('brands.stores.s4.floor', 'Zemin Kat'), logo: ' Apple', image: PLACEHOLDER_IMAGE },
  { id: 5, name: 'Sephora', category: t('brands.stores.s5.category', 'Kozmetik'), floor: t('brands.stores.s5.floor', '1. Kat'), logo: 'SEPHORA', image: PLACEHOLDER_IMAGE },
  { id: 6, name: 'Massimo Dutti', category: t('brands.stores.s6.category', 'Giyim'), floor: t('brands.stores.s6.floor', '1. Kat'), logo: 'Massimo Dutti', image: PLACEHOLDER_IMAGE },
  { id: 7, name: 'Swarovski', category: t('brands.stores.s7.category', 'Saat & Mücevherat'), floor: t('brands.stores.s7.floor', 'Zemin Kat'), logo: 'SWAROVSKI', image: PLACEHOLDER_IMAGE },
  { id: 8, name: 'Dior Beauty', category: t('brands.stores.s8.category', 'Kozmetik'), floor: t('brands.stores.s8.floor', '1. Kat'), logo: 'DIOR', image: PLACEHOLDER_IMAGE }
];

export const getDining = (t) => [
  { id: 1, name: 'Nusr-Et Steakhouse', category: t('brands.dining.d1.category', 'Fine Dining'), floor: t('brands.dining.d1.floor', 'Teras Kat'), description: t('brands.dining.d1.desc', 'Dünyaca ünlü steakhouse deneyimi ve eşsiz et lezzetleri.'), image: PLACEHOLDER_IMAGE },
  { id: 2, name: 'Show Market', category: t('brands.dining.d2.category', 'Market'), floor: t('brands.dining.d2.floor', 'Zemin Kat'), description: t('brands.dining.d2.desc', 'Günlük tüm ihtiyaçlarınız için taze ürünler, geniş market reyonları ve pratik alışveriş konforu.'), image: PLACEHOLDER_IMAGE },
  { id: 3, name: 'Divan Brasserie', category: t('brands.dining.d3.category', 'Restoran'), floor: t('brands.dining.d3.floor', '1. Kat'), description: t('brands.dining.d3.desc', 'Geleneksel Türk ve modern dünya mutfağının zarif buluşması.'), image: PLACEHOLDER_IMAGE },
  { id: 4, name: 'Godiva Cafe', category: t('brands.dining.d4.category', 'Tatlı & Kafe'), floor: t('brands.dining.d4.floor', 'Zemin Kat'), description: t('brands.dining.d4.desc', 'Orijinal Belçika çikolatası ile hazırlanan lüks tatlılar ve içecekler.'), image: PLACEHOLDER_IMAGE },
  { id: 5, name: 'Zuma', category: t('brands.dining.d5.category', 'Uzakdoğu Mutfağı'), floor: t('brands.dining.d5.floor', 'Teras Kat'), description: t('brands.dining.d5.desc', 'Modern Japon mutfağının en prestijli, ödüllü temsilcisi.'), image: PLACEHOLDER_IMAGE }
];

export const getBoardMembers = (t) => [
  { id: 1, name: '', role: t('brands.board.b1.role', 'Yönetim Kurulu Başkanı') },
  { id: 2, name: '', role: t('brands.board.b2.role', 'Genel Müdür / Başkan Yardımcısı') },
  { id: 3, name: '', role: t('brands.board.b3.role', 'Mali İşler Sorumlusu (Sayman)') },
  { id: 4, name: '', role: t('brands.board.b4.role', 'Denetim Kurulu Başkanı') },
  { id: 5, name: '', role: t('brands.board.b5.role', 'Halkla İlişkiler ve Genel Sekreter') },
  { id: 6, name: '', role: t('brands.board.b6.role', 'Yönetim Kurulu Üyesi') },
  { id: 7, name: '', role: t('brands.board.b7.role', 'Yönetim Kurulu Üyesi') },
  { id: 8, name: '', role: t('brands.board.b8.role', 'Tesis Müdürü') },
  { id: 9, name: '', role: t('brands.board.b9.role', 'Güvenlik Müdürü') },
  { id: 10, name: '', role: t('brands.board.b10.role', 'Teknik ve Operasyon Müdürü') }
];

// Konum — kategorize edilmiş yakınlık noktaları (POI).
// icon: lucide-react ikon adı (sayfada eşlenir).
export const getLocationPois = (t) => ({
  [t('location.cat1.title', 'Ulaşım')]: [
    { icon: 'Train', title: t('location.cat1.i1.t', 'Güneşli Metro İstasyonu'), time: t('location.cat1.i1.time', '200 m'), desc: t('location.cat1.i1.d', 'Yürüme mesafesinde metro erişimi') },
    { icon: 'Crosshair', title: t('location.cat1.i2.t', 'Basın Ekspres'), time: t('location.cat1.i2.time', '5 Dk'), desc: t('location.cat1.i2.d', 'İş ve yaşam aksının merkezinde') },
    { icon: 'Crosshair', title: t('location.cat1.i3.t', 'E-5 & TEM Otoyolları'), time: t('location.cat1.i3.time', '5 Dk'), desc: t('location.cat1.i3.d', 'Ana arterlere hızlı erişim') },
    { icon: 'Plane', title: t('location.cat1.i4.t', 'İstanbul Havalimanı'), time: t('location.cat1.i4.time', '25 Dk'), desc: t('location.cat1.i4.d', 'Dünyaya açılan kapı') },
  ],
  [t('location.cat2.title', 'Alışveriş')]: [
    { icon: 'ShoppingBag', title: t('location.cat2.i1.t', 'Mall of Istanbul'), time: t('location.cat2.i1.time', '5 Dk'), desc: t('location.cat2.i1.d', 'Alışverişin zirvesi') },
    { icon: 'ShoppingBag', title: t('location.cat2.i2.t', '212 İstanbul Power Outlet'), time: t('location.cat2.i2.time', '7 Dk'), desc: t('location.cat2.i2.d', 'Marka çeşitliliği') },
    { icon: 'Store', title: t('location.cat2.i3.t', 'Starcity AVM'), time: t('location.cat2.i3.time', '10 Dk'), desc: t('location.cat2.i3.d', 'Yakın çevre alışveriş') },
  ],
  [t('location.cat3.title', 'Sağlık')]: [
    { icon: 'HeartPulse', title: t('location.cat3.i1.t', 'Medipol Üniversite Hastanesi'), time: t('location.cat3.i1.time', '12 Dk'), desc: t('location.cat3.i1.d', 'Tam teşekküllü sağlık') },
    { icon: 'HeartPulse', title: t('location.cat3.i2.t', 'Çam ve Sakura Şehir Hastanesi'), time: t('location.cat3.i2.time', '15 Dk'), desc: t('location.cat3.i2.d', "Avrupa'nın en büyük hastanesi") },
  ],
  [t('location.cat4.title', 'Eğitim')]: [
    { icon: 'GraduationCap', title: t('location.cat4.i1.t', 'Altınbaş Üniversitesi'), time: t('location.cat4.i1.time', '10 Dk'), desc: t('location.cat4.i1.d', 'Yükseköğrenim') },
    { icon: 'GraduationCap', title: t('location.cat4.i2.t', 'Özel Okullar & Kolejler'), time: t('location.cat4.i2.time', '5-10 Dk'), desc: t('location.cat4.i2.d', 'Nitelikli eğitim seçenekleri') },
  ],
});

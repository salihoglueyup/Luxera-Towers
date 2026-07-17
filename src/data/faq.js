// Sık Sorulan Sorular ve Kategorileri.
export const getFaqCategories = (t) => [
  {
    category: t('faq.cat1.title', 'Proje & Satış Süreci'),
    faqs: [
      { question: t('faq.cat1.q1.q', 'Tapu teslimi ne zaman yapılacak?'), answer: t('faq.cat1.q1.a', 'Projemizde kat irtifaklı tapularımız hazırdır ve satış işlemlerinin hemen ardından devir yapılmaktadır.') },
      { question: t('faq.cat1.q2.q', 'Proje ne zaman teslim edilecek?'), answer: t('faq.cat1.q2.a', 'Projemizin teslim tarihi 2026 yılı son çeyreği olarak planlanmıştır.') },
      { question: t('faq.cat1.q3.q', 'Ödeme planı ve taksit seçenekleri nelerdir?'), answer: t('faq.cat1.q3.a', 'Peşin ödemede özel indirimlerin yanı sıra, 36 aya varan şirket bünyesinde senetli ödeme ve anlaşmalı bankalarla konut kredisi seçenekleri sunulmaktadır. Size özel esnek planlar için satış ekibimizle görüşebilirsiniz.') },
      { question: t('faq.cat1.q4.q', 'Daire tipleri ve metrekare aralıkları nedir?'), answer: t('faq.cat1.q4.a', 'Projemizde 1+1, 2+1 ve 3+1 daire tipleri bulunmaktadır. Metrekareler 75 m² ile 220 m² arasında değişmektedir.') }
    ]
  },
  {
    category: t('faq.cat2.title', 'Yatırım & Vatandaşlık'),
    faqs: [
      { question: t('faq.cat2.q1.q', 'Yabancı uyruklu alıcılar satın alabilir mi?'), answer: t('faq.cat2.q1.a', 'Evet. Yabancı yatırımcılarımız için tapu, vergi ve vatandaşlık süreçlerinde uçtan uca danışmanlık hizmeti sağlanmaktadır.') },
      { question: t('faq.cat2.q2.q', 'Vatandaşlık için uygun mu?'), answer: t('faq.cat2.q2.a', 'Evet, projemiz 400.000 USD ve üzeri alımlarda Türk Vatandaşlığı programına %100 uygundur.') },
      { question: t('faq.cat2.q3.q', 'Ticari alanların kiralama yönetimi yapılıyor mu?'), answer: t('faq.cat2.q3.a', 'Evet, profesyonel yönetim şirketimiz tarafından ticari ünitelerin (mağazalar ve ofisler) kiralama ve işletme süreçleri desteklenmektedir. AVM içindeki mağazalar için profesyonel "brand-mix" çalışması yürütülmektedir.') },
      { question: t('faq.cat2.q4.q', 'Bölgenin yatırım potansiyeli nasıldır?'), answer: t('faq.cat2.q4.a', 'Basın Ekspres yolu, İstanbul\'un en hızlı değerlenen iş ve finans merkezidir. Yeni metro hatları ve E-5 / TEM bağlantıları ile yüksek prim ve düzenli kira getirisi vaat etmektedir.') }
    ]
  },
  {
    category: t('faq.cat3.title', 'Yaşam & Ayrıcalıklar'),
    faqs: [
      { question: t('faq.cat3.q1.q', 'Aidatlara neler dahil olacak?'), answer: t('faq.cat3.q1.a', '7/24 profesyonel güvenlik, kapalı otopark kullanımı, fitness ve SPA alanları (kapalı yüzme havuzu, hamam, sauna), Executive Lounge kullanımı ve ortak alan bakım-peyzaj giderleri aidata dahildir.') },
      { question: t('faq.cat3.q2.q', 'Daire teslimlerinde donanım standartları nelerdir?'), answer: t('faq.cat3.q2.a', 'Tüm dairelerimiz uluslararası A+ kalite standartlarına uygun olarak inşa edilmektedir. Birinci sınıf ankastre mutfak setleri, akıllı ev altyapısı, VRF klima sistemi ve premium seramik/parke zemin kaplamaları standart olarak sunulmaktadır.') },
      { question: t('faq.cat3.q3.q', 'Vale ve Housekeeping hizmetleri ücretli mi?'), answer: t('faq.cat3.q3.a', 'Vale hizmetimiz rezidans sakinlerine özel ücretsiz sunulmakta olup, Housekeeping (kuru temizleme, özel temizlik vs.) ve oda servisi gibi kişisel hizmetler kullanıma bağlı olarak ücretlendirilmektedir (Pay-per-use sistemi).') },
      { question: t('faq.cat3.q4.q', 'Elektrikli araç şarj istasyonu bulunuyor mu?'), answer: t('faq.cat3.q4.a', 'Evet, kapalı otoparkımızın her katında yeterli sayıda yüksek hızlı elektrikli araç (EV) şarj istasyonu rezidans sakinlerimizin kullanımına hazırdır.') }
    ]
  },
  {
    category: t('faq.cat4.title', 'Ödeme & Teslim'),
    faqs: [
      { question: t('faq.cat4.q1.q', 'Peşin ödemede avantaj sağlanıyor mu?'), answer: t('faq.cat4.q1.a', 'Evet. Peşin ödemelerde döneme özel indirim oranları uygulanmaktadır. Güncel kampanya koşulları için satış ekibimizle görüşebilirsiniz.') },
      { question: t('faq.cat4.q2.q', 'Senetli (vadeli) ödeme mümkün mü?'), answer: t('faq.cat4.q2.a', 'Şirket bünyesinde 36 aya varan senetli ödeme seçenekleri sunulmaktadır. Ödeme planı; peşinat oranı ve vade tercihinize göre size özel olarak yapılandırılır.') },
      { question: t('faq.cat4.q3.q', 'Konut kredisi kullanabilir miyim?'), answer: t('faq.cat4.q3.a', 'Evet. Anlaşmalı bankalarımız aracılığıyla konut kredisi kullanımı mümkündür. Ekspertiz ve kredi başvuru sürecinde satış danışmanlarımız size yardımcı olur.') },
      { question: t('faq.cat4.q4.q', 'Teslim tarihi ve gecikme durumu nedir?'), answer: t('faq.cat4.q4.a', 'Projemizin teslimi 2026 yılı son çeyreği (Q4) olarak planlanmıştır. Teslim koşulları ve olası mücbir sebep hükümleri satış sözleşmenizde şeffaf biçimde yer alır.') }
    ]
  },
  {
    category: t('faq.cat5.title', 'Garanti & Bakım'),
    faqs: [
      { question: t('faq.cat5.q1.q', 'Yapı ve donanım garantisi ne kadar?'), answer: t('faq.cat5.q1.a', 'Yapısal imalatlar ilgili mevzuat kapsamındaki süreler boyunca; ankastre ürünler, mekanik ve elektrik sistemleri ise üretici/yüklenici garantisi kapsamında güvence altındadır.') },
      { question: t('faq.cat5.q2.q', 'Teslim sonrası bakım desteği var mı?'), answer: t('faq.cat5.q2.a', 'Profesyonel tesis yönetim ekibimiz teslim sonrasında ortak alan bakımı, teknik servis ve arıza taleplerinizi 7/24 karşılar. Talepler mobil uygulama üzerinden de iletilebilir.') },
      { question: t('faq.cat5.q3.q', 'Ortak alanların işletmesini kim yürütüyor?'), answer: t('faq.cat5.q3.a', 'Tüm ortak alanlar (havuz, fitness, lobi, peyzaj, güvenlik) profesyonel bir site/tesis yönetimi tarafından işletilir. Aidatlar ve hizmet kapsamı yönetim planında tanımlıdır.') }
    ]
  },
  {
    category: t('faq.cat6.title', 'KVKK & Gizlilik'),
    faqs: [
      { question: t('faq.cat6.q1.q', 'Paylaştığım kişisel veriler nasıl korunuyor?'), answer: t('faq.cat6.q1.a', 'Kişisel verileriniz 6698 sayılı KVKK’ya uygun olarak, yalnızca satış, pazarlama ve iletişim faaliyetleri kapsamında işlenir ve güvenli biçimde saklanır. Detaylar KVKK Aydınlatma Metni sayfamızda yer alır.') },
      { question: t('faq.cat6.q2.q', 'İletişim formundaki bilgilerim üçüncü taraflarla paylaşılıyor mu?'), answer: t('faq.cat6.q2.a', 'Bilgileriniz yalnızca talebinizi karşılamak amacıyla ve KVKK’nın 8. ve 9. maddelerindeki şartlar çerçevesinde, gerekli olduğu ölçüde iş ortaklarımızla paylaşılır. İzinsiz üçüncü taraf pazarlaması yapılmaz.') },
      { question: t('faq.cat6.q3.q', 'Verilerimin silinmesini talep edebilir miyim?'), answer: t('faq.cat6.q3.a', 'Evet. KVKK’nın 11. maddesi uyarınca verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz. Taleplerinizi yazılı olarak şirket merkezimize iletebilirsiniz.') }
    ]
  },
  {
    category: t('faq.cat7.title', 'Ticari Kiralama'),
    faqs: [
      { question: t('faq.cat7.q1.q', 'Ticari üniteler kiralık mı, satılık mı?'), answer: t('faq.cat7.q1.a', 'Projede hem satılık hem de kiralanabilir ticari üniteler bulunmaktadır. Cadde üzeri dükkânlar, AVM içi mağazalar, cafe/restoran ve ofis seçenekleri için satış ekibimizden bilgi alabilirsiniz.') },
      { question: t('faq.cat7.q2.q', 'Marka-mix (kiracı kompozisyonu) nasıl belirleniyor?'), answer: t('faq.cat7.q2.a', 'AVM içi ünitelerde ziyaretçi deneyimini ve ticari verimi en üst düzeyeye çıkarmak için profesyonel bir marka-mix planlaması yürütülür. Perakende, gastronomi, teknoloji ve hizmet dengeli biçimde konumlandırılır.') },
      { question: t('faq.cat7.q3.q', 'Ticari ünitelerin işletme yönetimi destekleniyor mu?'), answer: t('faq.cat7.q3.a', 'Evet. Profesyonel yönetim şirketimiz, ticari ünitelerin kiralama, tanıtım ve işletme süreçlerine destek verir; yatırımcı için kira takibi ve doluluk yönetimi kolaylaşır.') }
    ]
  }
];

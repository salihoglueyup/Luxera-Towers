import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, Clock, MapPin, CalendarPlus, ChevronRight } from 'lucide-react';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { events } from '../data/events';
import CtaBand from '../shared/ui/CtaBand';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';

import { useTranslation } from 'react-i18next';
import SEO from '../shared/seo/SEO';

const Events = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  // Sahte takvime ekle fonksiyonu (UI demo amacl)
  const handleAddToCalendar = (e) => {
    e.stopPropagation();
    alert("Google Takvim'e ekleniyor... (Demo)");
  };

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-32">
      <SEO 
        title={t('events.seo.title', 'Etkinlikler ve Haberler')}
        description={t('events.seo.desc', 'Luxera Towers sosyal yaşam takvimi, müzik dinletileri, kitap günleri ve en güncel gelişmeler.')}
        canonical="https://luxeratowers.com/etkinlikler"
      />

      <PageHero
        overline={t('events.hero.overline', 'Sosyal Yaşam & Gündem')}
        title={t('events.hero.title1', 'Etkinlikler &')}
        highlight={t('events.hero.title2', 'Haberler')}
        subtitle={t('events.hero.desc', 'Luxera Towers ekosistemindeki en güncel gelişmeler, özel kampanyalar ve size özel hazırlanan sosyal etkinlik takvimi.')}
        backgroundImage="/images/exterior/14_2025-12-18_02-46-35_78c2e7.webp"
      />

      <div className="max-w-[80rem] mx-auto px-6 mt-24 relative">
        <SectionHeader 
          title={t('events.timeline.title', 'Yaşam Takvimi')}
          subtitle={t('events.timeline.subtitle', 'Yaklaşan etkinliklerimizi ve en güncel proje haberlerimizi takip edin.')}
          watermark="GÜNDEM"
        />

        {/* Timeline Line (Dikey Cizgi) */}
        <div className="absolute left-[39px] md:left-1/2 top-[240px] bottom-0 w-px bg-gradient-to-b from-luxera-gold/0 via-luxera-gold/30 to-transparent hidden sm:block"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="space-y-12 md:space-y-24 mt-16"
        >
          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                variants={fadeUp}
                key={event.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot (Zaman Cizgisi Noktasi) */}
                <div className="hidden sm:flex absolute left-[39px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-luxera-navy border-4 border-luxera-gold z-10 items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Date Display (Sol/Sag taraftaki BǬyǬk Tarih) */}
                <div className={`hidden md:block w-1/2 ${isEven ? 'text-left pl-12' : 'text-right pr-12'}`}>
                  <div className="inline-block bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <Calendar size={24} className="text-luxera-gold mb-3 inline-block" />
                    <div className="text-3xl font-serif text-white">{event.date.split(' ')[0]}</div>
                    <div className="text-gray-400 font-medium uppercase tracking-widest text-sm mt-1">
                      {event.date.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                </div>

                {/* Event Card */}
                <div className="w-full md:w-1/2 z-20">
                  <div 
                    onClick={() => setSelected(event)}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-luxera-gold/50 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group cursor-pointer"
                  >
                    <div className="h-48 md:h-64 overflow-hidden relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      
                      <div className="absolute top-4 left-4">
                        <span className="text-luxera-navy font-bold text-xs uppercase tracking-widest px-4 py-2 bg-luxera-gold rounded-full shadow-lg">
                          {event.category}
                        </span>
                      </div>

                      {/* Mobil icin Tarih Gosterimi */}
                      <div className="absolute top-4 right-4 md:hidden">
                        <span className="text-white text-xs bg-black/60 backdrop-blur-md px-3 py-2 rounded-full border border-white/20 flex items-center gap-2">
                          <Calendar size={12} /> {event.date}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-luxera-gold transition-colors">{event.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8">{event.desc}</p>

                      <div className="flex items-center justify-between border-t border-white/10 pt-6">
                        {event.category.includes('Eğlence') || event.category.includes('Etkinlik') ? (
                          <button 
                            onClick={handleAddToCalendar}
                            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors border border-white/10"
                          >
                            <CalendarPlus size={16} className="text-luxera-gold" /> 
                            Takvime Ekle
                          </button>
                        ) : (
                          <div className="text-xs text-gray-500 uppercase tracking-widest">
                            {event.category}
                          </div>
                        )}
                        
                        <div className="w-10 h-10 rounded-full bg-luxera-gold/10 flex items-center justify-center group-hover:bg-luxera-gold text-luxera-gold group-hover:text-luxera-navy transition-colors">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CTA */}
      <CtaBand
        className="mt-32"
        title={t('events.cta.title', 'Etkinliklerden Haberdar Olun')}
        desc={t('events.cta.desc', 'Luxera Towers\'ın özel lansman, kampanya ve sosyal etkinliklerinden ilk siz haberdar olmak için bizimle iletişime geçin.')}
        primary={{ label: t('events.cta.primary', 'İletişime Geçin'), href: '/iletisim' }}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      {/* Detay Modalı */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-luxera-navy/90 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }} 
              animate={{ scale: 1, opacity: 1, y: 0 }} 
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-white/10 rounded-3xl w-full max-w-4xl relative z-10 overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-6 right-6 text-white hover:text-luxera-gold z-20 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 transition-colors"
              >
                <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent" />
              </div>
              
              {/* Modal Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-luxera-navy font-bold text-xs uppercase tracking-widest px-4 py-2 bg-luxera-gold rounded-full">
                    {selected.category}
                  </span>
                  <span className="text-gray-400 text-sm flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                    <Calendar size={14} /> {selected.date}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">{selected.title}</h3>
                
                <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 max-w-none">
                  <p>{selected.body}</p>
                </div>

                {(selected.category.includes('Eğlence') || selected.category.includes('Etkinlik')) && (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <button 
                      onClick={handleAddToCalendar}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest text-luxera-navy hover:text-white bg-luxera-gold hover:bg-transparent px-8 py-4 rounded-full transition-all duration-300 border border-luxera-gold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-none"
                    >
                      <CalendarPlus size={18} /> 
                      Takvime Ekle
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;

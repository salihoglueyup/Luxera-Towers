import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { offices } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import SEO from '../shared/seo/SEO';

const Offices = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title={t('offices.seo.title', 'Ofisler ve Şirketler')}
        description={t('offices.seo.desc', 'Luxera Towers A+ ofis katlarında yer alan ulusal ve uluslararası prestijli markalar.')}
        canonical="https://luxeratowers.com/ofisler"
      />
      <PageHero
        overline={t('offices.hero.overline', 'Ticari Alanlar')}
        title={t('offices.hero.title', 'Ofisler &')}
        highlight={t('offices.hero.highlight', 'Şirketler')}
        subtitle={t('offices.hero.subtitle', 'İş dünyasının devleri Luxera Towers\'ta buluşuyor. Modern ofis katlarımızda yer alan seçkin şirketler ve global markalar.')}
        backgroundImage="/images/exterior/12_2025-12-18_02-46-35_4cee27.webp"
      />

      <div className="max-w-[85rem] mx-auto px-6 mt-32">
        <SectionHeader 
          title={t('offices.section.title', 'Kurumsal Kiracılarımız')}
          subtitle={t('offices.section.subtitle', 'A+ ofis katlarımızda yer alan global ve ulusal markalar.')}
          watermark="OFİS"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {offices.map((office) => (
            <motion.div
              variants={fadeUp}
              key={office.id}
              className="relative h-[400px] rounded-2xl overflow-hidden group border border-white/10 hover:border-luxera-gold/50 transition-colors duration-500 shadow-xl"
            >
              {/* Arka Plan Resmi */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={office.image} 
                  alt={office.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 group-hover:from-black/90 group-hover:via-black/80 group-hover:to-black/40 transition-all duration-500"></div>
              </div>

              {/* Kart İçeriği */}
              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-luxera-gold mb-6 border border-white/20 group-hover:bg-luxera-gold group-hover:text-luxera-navy transition-colors duration-300">
                    <Briefcase size={22} />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-white mb-2">{office.name}</h3>
                  <p className="text-luxera-gold text-sm tracking-widest uppercase mb-4 font-semibold">{office.sector}</p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{office.description}</p>
                    
                    <div className="flex items-center justify-between border-t border-white/20 pt-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                        <Building size={16} className="text-luxera-gold" />
                        <span>{office.floor}</span>
                      </div>
                      <ChevronRight size={18} className="text-luxera-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Offices;

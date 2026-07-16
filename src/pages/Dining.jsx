import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Clock, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp } from '../shared/utils/animations';
import { dining } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import SEO from '../shared/seo/SEO';

const Dining = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title={t('dining.seo.title', 'Yeme & İçme')}
        description={t('dining.seo.desc', 'Luxera Towers gastronomi merkezinde dünyaca ünlü fine dining restoranları ve seçkin kafeler.')}
        canonical="https://luxeratowers.com/yeme-icme"
      />
      <PageHero
        overline={t('dining.hero.overline', 'Gastronomi Merkezi')}
        title={t('dining.hero.title', 'Yeme &')}
        highlight={t('dining.hero.highlight', 'İçme')}
        subtitle={t('dining.hero.subtitle', 'Dünya mutfağının en seçkin lezzetleri, Michelin yıldızlı şeflerin özel menüleri ve lüks kafe konseptleri.')}
        backgroundImage="/images/exterior/11_2025-12-18_02-46-35_736f9b.webp"
      />

      <div className="max-w-7xl mx-auto px-6 mt-32">
        <SectionHeader 
          title={t('dining.section.title', 'Gurme Restoranlar')}
          subtitle={t('dining.section.subtitle', 'Damak zevkinize hitap eden premium gastronomi deneyimi.')}
          watermark="LEZZET"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {dining.map((place) => (
            <motion.div
              variants={fadeUp}
              key={place.id}
              className="bg-luxera-charcoal/50 border border-luxera-gold/10 rounded-3xl overflow-hidden group hover:border-luxera-gold/30 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxera-charcoal/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-luxera-navy/80 backdrop-blur-md text-luxera-gold text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-luxera-gold/20">
                    {place.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-3xl font-serif text-white mb-4 group-hover:text-luxera-gold transition-colors">{place.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{place.description}</p>
                
                <div className="flex flex-col gap-3 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <MapPin size={16} className="text-luxera-gold" />
                    <span>{place.floor}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Clock size={16} className="text-luxera-gold" />
                    <span>10:00 - 23:00</span>
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

export default Dining;

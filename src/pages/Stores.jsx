import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, MapPin, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp } from '../shared/utils/animations';
import { stores } from '../data/brands';
import PageHero from '../shared/ui/PageHero';
import SectionHeader from '../shared/ui/SectionHeader';
import SEO from '../shared/seo/SEO';

const Stores = () => {
  const { t } = useTranslation();
  
  // Eşsiz kategorileri al
  const categories = ['Tümü', ...new Set(stores.map(s => s.category))];
  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredStores = activeCategory === 'Tümü' 
    ? stores 
    : stores.filter(s => s.category === activeCategory);

  return (
    <div className="bg-luxera-navy min-h-screen text-white pb-24">
      <SEO 
        title={t('stores.seo.title', 'Mağazalar ve Markalar')}
        description={t('stores.seo.desc', 'Luxera Towers AVM\'de yer alan lüks markalar, seçkin butikler ve teknoloji mağazaları.')}
        canonical="https://luxeratowers.com/magazalar"
      />
      <PageHero
        overline={t('stores.hero.overline', 'Premium Alışveriş')}
        title={t('stores.hero.title', 'Mağazalar &')}
        highlight={t('stores.hero.highlight', 'Markalar')}
        subtitle={t('stores.hero.subtitle', 'Dünyaca ünlü lüks moda markaları, seçkin mücevherat evleri ve teknoloji devleri, 87 mağazalık butik AVM\'mizde sizi bekliyor.')}
        backgroundImage="/images/exterior/1_2025-12-18_02-46-35_e84e9a.webp"
      />

      <div className="max-w-[90rem] mx-auto px-6 mt-32">
        <SectionHeader 
          title={t('stores.section.title', 'Marka Karması')}
          subtitle={t('stores.section.subtitle', 'Ayrıcalıklı bir alışveriş deneyimi için özenle seçilmiş markalar.')}
          watermark="AVM"
        />

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-luxera-gold text-luxera-navy shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                : 'bg-white/5 border border-white/10 text-gray-400 hover:border-luxera-gold/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mağazalar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStores.map((store, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={store.id}
                className="group relative h-[350px] rounded-2xl overflow-hidden bg-black"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={store.image} 
                    alt={store.name}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="bg-luxera-gold/20 backdrop-blur-md border border-luxera-gold/30 text-luxera-gold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                      {store.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShoppingBag size={14} className="text-white" />
                    </div>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Fake Logo Typography */}
                    <div className="mb-4">
                      <h3 className={`text-4xl text-white ${store.name === 'Rolex' || store.name === 'BEYMEN' ? 'font-serif' : 'font-sans font-bold'} tracking-wide`}>
                        {store.logo}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={14} className="text-luxera-gold" />
                      <span>{store.floor}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Stores;

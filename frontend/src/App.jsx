import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Share2, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-emerald-900">SAMM</div>

        <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest text-emerald-800">
          <a href="#" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="#tea-latte" className="hover:text-emerald-500 transition-colors">Tea Latte</a>
          <a href="#frappuccino" className="hover:text-emerald-500 transition-colors">Frappuccino</a>
          <a href="#ingredients" className="hover:text-emerald-500 transition-colors">Ingredients</a>
        </div>

        <div className="flex items-center space-x-4 text-emerald-900">
          <Share2 className="w-5 h-5 cursor-pointer hover:text-emerald-500" />
          <MessageCircle className="w-5 h-5 cursor-pointer hover:text-emerald-500" />
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-emerald-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 font-bold text-emerald-800">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#tea-latte" onClick={() => setIsMobileMenuOpen(false)}>Tea Latte</a>
              <a href="#frappuccino" onClick={() => setIsMobileMenuOpen(false)}>Frappuccino</a>
              <a href="#ingredients" onClick={() => setIsMobileMenuOpen(false)}>Ingredients</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 text-center bg-gradient-to-b from-emerald-50 to-white overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-10"
    >
      <motion.h1
        initial={{ letterSpacing: "-0.05em" }}
        animate={{ letterSpacing: "0em" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-7xl md:text-9xl font-black text-emerald-900 leading-none mb-4"
      >
        MATCHA<br />FUSION
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-sm md:text-base"
      >
        SAMM Special Edition
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 inline-block animate-bounce"
      >
        <div className="w-px h-12 bg-emerald-900 mx-auto"></div>
      </motion.div>
    </motion.div>

    {/* Background Decorative Elements */}
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -mr-32 -mt-32"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, -5, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -ml-48 -mb-48"
    />
  </section>
);

const ProductDetail = ({ id, title, subtitle, description, image, reverse }) => (
  <section id={id} className={`py-24 px-6 max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
    <motion.div
      initial={{ opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex-1 w-full"
    >
      <div className="relative group">
        <div className="absolute -inset-4 bg-emerald-100 rounded-3xl rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
        <img
          src={image}
          alt={title}
          className="relative rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
        />
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: reverse ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex-1 space-y-8"
    >
      <div className="space-y-2">
        <h2 className="text-3xl md:text-5xl font-black text-emerald-900 leading-tight">
          {title}
        </h2>
        <p className="text-emerald-600 font-medium text-lg">
          {subtitle}
        </p>
      </div>
      <p className="text-gray-600 leading-relaxed text-lg italic">
        {description}
      </p>
      <div className="pt-4">
        <button className="bg-emerald-900 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          View Details
        </button>
      </div>
    </motion.div>
  </section>
);

const IngredientCard = ({ name, japaneseName, image, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 transition-transform duration-500 group-hover:scale-110">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h4 className="text-emerald-900 font-black tracking-widest text-xs md:text-sm uppercase mb-1">
      {name}
    </h4>
    <p className="text-emerald-600/70 text-[10px] md:text-xs font-bold">
      {`{ ${japaneseName} }`}
    </p>
  </motion.div>
);

const Ingredients = () => {
  const ingredients = [
    { name: "Kabosu", japaneseName: "かぼす", image: "https://images.unsplash.com/photo-1591115850942-0266e744f9f7?auto=format&fit=crop&q=80&w=200" },
    { name: "Yuzu Peel", japaneseName: "ゆずピール", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9caab53?auto=format&fit=crop&q=80&w=200" },
    { name: "White Grape", japaneseName: "ホワイトグレープ", image: "https://images.unsplash.com/photo-1596333522244-2db100037440?auto=format&fit=crop&q=80&w=200" },
    { name: "Komatsuna", japaneseName: "小松菜", image: "https://images.unsplash.com/photo-1589332462316-0498762758ca?auto=format&fit=crop&q=80&w=200" },
    { name: "Almond", japaneseName: "アーモンド", image: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80&w=200" },
    { name: "Matcha Chocolate", japaneseName: "抹茶チョコレート", image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=200" },
    { name: "Mascarpone", japaneseName: "マスカルポーネ", image: "https://images.unsplash.com/photo-1633519125181-08479900821c?auto=format&fit=crop&q=80&w=200" }
  ];

  return (
    <section id="ingredients" className="py-32 px-6 bg-emerald-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 md:gap-12">
          {ingredients.map((ing, idx) => (
            <IngredientCard key={ing.name} {...ing} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-emerald-950 text-emerald-100/60 py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-4xl font-black tracking-tighter text-white">SAMM</div>

      <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
      </div>

      <div className="flex space-x-6 text-white">
        <Instagram className="w-6 h-6 cursor-pointer hover:text-emerald-400" />
        <Twitter className="w-6 h-6 cursor-pointer hover:text-emerald-400" />
        <Facebook className="w-6 h-6 cursor-pointer hover:text-emerald-400" />
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-emerald-900 text-center text-[10px] tracking-widest uppercase font-medium">
      © 2024 SAMM Corporation. All rights reserved. Not affiliated with Starbucks.
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-200 selection:text-emerald-900 scroll-smooth">
      <Navbar />

      <main>
        <Hero />

        <ProductDetail
          id="tea-latte"
          title="Matcha Fruity Blends Tea Latte"
          subtitle="抹茶 & フルーティ マスカルポーネ ティー ラテ"
          description="A delicate fusion of premium matcha and velvety mascarpone, enhanced with subtle notes of kabosu and yuzu for a sophisticated citrus finish."
          image="https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=1000"
        />

        <ProductDetail
          id="frappuccino"
          title="Matcha & Fruity Mascarpone Frappuccino®"
          subtitle="抹茶 & フルーティ マスカルポーネ フラペチーノ®"
          description="Experience the perfect balance of bittersweet matcha and creamy fruit-infused mascarpone, topped with crunchy almond and matcha chocolate bits."
          image="https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1000"
          reverse
        />

        <Ingredients />
      </main>

      <Footer />
    </div>
  );
}

export default App;


import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Instagram, MessageCircle, ArrowRight, X } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, HERO_IMAGE, INSTAGRAM_URL, WHATSAPP_BASE_URL } from './constants';
import { Product, CartItem, Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.PAPELARIA);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Feedback visual opcional: abrir o carrinho ou mostrar notificação
    // setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Fecha modal de imagem no Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-pink-200">
      {/* Header / Hero Section */}
      <header className="bg-white border-b-4 border-pink-300 pt-12 pb-10 px-4 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-pink-100 shadow-2xl overflow-hidden mb-6 cursor-zoom-in active:scale-95 transition-transform"
            onClick={() => setSelectedImage(HERO_IMAGE)}
          >
            <img src={HERO_IMAGE} alt="Logo Fefah Papelaria" className="w-full h-full object-cover" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-pacifico text-pink-600 mb-4 drop-shadow-sm">
            Fefah Papelaria
          </h1>
          
          <div className="space-y-3 mb-8">
            <p className="text-gray-700 text-lg font-medium leading-relaxed">
              ✨ Tudo aqui é muito lindo e diferente para você arrasar!
            </p>
            <p className="text-pink-500 text-xl font-bold animate-pulse">
              Saia do básico e surpreenda a todos com fofura. 💖
            </p>
            <p className="text-gray-600">
              Escolha seus itens favoritos e fale comigo pelo WhatsApp abaixo:
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-pink-200 transition-all hover:scale-105 active:scale-95"
            >
              <Instagram size={22} />
              Instagram
            </a>
            <a 
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle size={22} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Main Content / Navigation */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <div className="flex bg-white/60 p-2 rounded-2xl backdrop-blur-sm border border-white/40 shadow-sm mb-12">
            <button
              onClick={() => setActiveCategory(Category.PAPELARIA)}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeCategory === Category.PAPELARIA 
                ? 'bg-pink-500 text-white shadow-md scale-105' 
                : 'text-pink-600 hover:bg-pink-100'
              }`}
            >
              PAPELARIA
            </button>
            <button
              onClick={() => setActiveCategory(Category.MOCHILAS_ESTOJOS)}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                activeCategory === Category.MOCHILAS_ESTOJOS 
                ? 'bg-pink-500 text-white shadow-md scale-105' 
                : 'text-pink-600 hover:bg-pink-100'
              }`}
            >
              MOCHILAS e ESTOJOS
            </button>
          </div>

          {/* Grid de Produtos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
                onImageClick={(url) => setSelectedImage(url)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-pink-600 text-white p-5 rounded-full shadow-2xl hover:bg-pink-700 hover:scale-110 active:scale-90 transition-all group"
      >
        <div className="relative">
          <ShoppingCart size={32} />
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 bg-white text-pink-600 text-xs font-black h-7 w-7 rounded-full flex items-center justify-center shadow-lg border-2 border-pink-600 animate-bounce">
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {/* Modal de Imagem Ampliada */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-pink-400 transition-colors p-2 bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Produto ampliado" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(244,114,182,0.3)] scale-105 transition-transform duration-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Drawers e Sidebars */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-pink-200 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <img src={HERO_IMAGE} alt="Logo Pequeno" className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-200" />
          <p className="font-pacifico text-2xl text-pink-600 mb-2">Fefah Papelaria</p>
          <p className="text-gray-500 text-sm">© 2024 Todos os direitos reservados. Entregamos para todo o Brasil.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

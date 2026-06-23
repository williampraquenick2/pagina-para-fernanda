
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Instagram, MessageCircle, X } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, HERO_IMAGE, INSTAGRAM_URL, WHATSAPP_BASE_URL } from './constants';
import { Product, CartItem, Category } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.PAPELARIA);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [shouldAnimateCart, setShouldAnimateCart] = useState(false);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    
    // Mantemos apenas o feedback visual do ícone flutuante
    setShouldAnimateCart(true);
    setTimeout(() => setShouldAnimateCart(false), 300);
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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-pink-200">
      <header className="bg-white border-b-4 border-pink-300 pt-12 pb-10 px-4 rounded-b-[3rem] shadow-xl">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div 
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-pink-100 shadow-2xl overflow-hidden mb-6 cursor-zoom-in active:scale-95 transition-transform"
            onClick={() => setSelectedImage(HERO_IMAGE)}
          >
            <img src={HERO_IMAGE} alt="Logo Fefah" className="w-full h-full object-cover" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-pacifico text-pink-600 mb-6 drop-shadow-sm">
            Fefah Papelaria
          </h1>

          <div className="flex flex-wrap justify-center gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
              <Instagram size={22} /> Instagram
            </a>
            <a href={WHATSAPP_BASE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all">
              <MessageCircle size={22} /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12 animate-fade-in">
          <div className="flex flex-wrap justify-center bg-white/40 p-2 rounded-2xl backdrop-blur-sm border border-white/40 shadow-inner mb-12 gap-2">
            <button
              onClick={() => setActiveCategory(Category.PAPELARIA)}
              className={`px-6 md:px-10 py-3 rounded-xl font-bold transition-all text-xs md:text-base shadow-sm hover:shadow-md active:scale-95 ${
                activeCategory === Category.PAPELARIA 
                  ? 'bg-pink-500 text-white shadow-pink-300 shadow-md ring-1 ring-pink-400' 
                  : 'bg-white/80 text-pink-600 hover:bg-white'
              }`}
            >
              PAPELARIA
            </button>
            <button
              onClick={() => setActiveCategory(Category.SCOOPS_BOX)}
              className={`px-6 md:px-10 py-3 rounded-xl font-bold transition-all text-xs md:text-base shadow-sm hover:shadow-md active:scale-95 ${
                activeCategory === Category.SCOOPS_BOX 
                  ? 'bg-pink-500 text-white shadow-pink-300 shadow-md ring-1 ring-pink-400' 
                  : 'bg-white/80 text-pink-600 hover:bg-white'
              }`}
            >
              SCOOPS E BOX
            </button>
            <button
              onClick={() => setActiveCategory(Category.CADERNOS_ESTOJOS)}
              className={`px-6 md:px-10 py-3 rounded-xl font-bold transition-all text-xs md:text-base shadow-sm hover:shadow-md active:scale-95 ${
                activeCategory === Category.CADERNOS_ESTOJOS 
                  ? 'bg-pink-500 text-white shadow-pink-300 shadow-md ring-1 ring-pink-400' 
                  : 'bg-white/80 text-pink-600 hover:bg-white'
              }`}
            >
              CADERNOS E ESTOJOS
            </button>
          </div>

          {activeCategory === Category.SCOOPS_BOX && (
            <div className="w-full mb-10 bg-white/60 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/60 shadow-lg text-center max-w-5xl mx-auto">
              <span className="text-4xl md:text-5xl mb-4 block animate-bounce">✨🎁✨</span>
              <h2 className="text-2xl md:text-3xl font-black text-pink-700 mb-3 font-pacifico">
                Como Funciona a Brincadeira?
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8 font-medium text-sm md:text-base leading-relaxed">
                Garanta muitos mimos e itens de papelaria fofa por um valor bem menor do que o normal! 
                Escolha o seu Scoop ou Box favorito abaixo e divirta-se. Toque nas regras para ampliá-las! 💖
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {/* Scoop Rules */}
                <div className="bg-pink-50/50 p-5 rounded-2xl border border-pink-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <h4 className="text-lg font-black text-pink-600 mb-2 flex items-center gap-2">
                      <span>🍧</span> Regras dos Scoops
                    </h4>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Sorteamos miçangas coloridas de um copo mágico! Cada cor representa um produto super fofo (ex: coração vermelho = caneta luxo). No Scoop P você pode dar a sorte de pegar a miçanga premium; nos Scoops M e G o prêmio premium já é garantido!
                    </p>
                  </div>
                  <div 
                    onClick={() => setSelectedImage('https://i.imgur.com/uefdjpp.jpeg')}
                    className="relative cursor-pointer group overflow-hidden rounded-xl border border-pink-200 shadow-inner bg-white/50 aspect-[4/3] flex items-center justify-center"
                  >
                    <img 
                      src="https://i.imgur.com/uefdjpp.jpeg" 
                      alt="Regras dos Scoops" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      <span className="text-white text-xs font-bold bg-pink-600/90 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                        🔍 Ampliar Regras
                      </span>
                    </div>
                  </div>
                </div>

                {/* Box Rules */}
                <div className="bg-pink-50/50 p-5 rounded-2xl border border-pink-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                  <div>
                    <h4 className="text-lg font-black text-pink-600 mb-2 flex items-center gap-2">
                      <span>📦</span> Regras do Box
                    </h4>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      Prefere escolher você mesmo(a)? No Box você paga um valor fixo promocional e tem o direito de selecionar exatamente os mimos que quer levar para casa, seguindo a tabela de opções e limites de itens da foto oficial!
                    </p>
                  </div>
                  <div 
                    onClick={() => setSelectedImage('https://i.imgur.com/dKjQwcr.jpeg')}
                    className="relative cursor-pointer group overflow-hidden rounded-xl border border-pink-200 shadow-inner bg-white/50 aspect-[4/3] flex items-center justify-center"
                  >
                    <img 
                      src="https://i.imgur.com/dKjQwcr.jpeg" 
                      alt="Regras do Box" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = parent.querySelector('.box-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                    {/* Fallback visual se a imagem falhar */}
                    <div className="box-fallback hidden w-full h-full p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-100 to-pink-50">
                      <span className="text-4xl mb-2 animate-bounce">📦</span>
                      <p className="text-xs font-bold text-pink-700">Tabela de Escolha do Box</p>
                      <p className="text-[10px] text-gray-500 max-w-[200px] mt-1">Toque para tentar visualizar a imagem original de regras enviada!</p>
                    </div>
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                      <span className="text-white text-xs font-bold bg-pink-600/90 px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                        🔍 Ampliar Regras
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                  onImageClick={(url) => setSelectedImage(url)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/20 shadow-inner text-center w-full max-w-lg mx-auto">
              <span className="text-5xl mb-4 animate-bounce">
                {activeCategory === Category.CADERNOS_ESTOJOS ? '📚' : '🎁'}
              </span>
              <h3 className="text-2xl font-bold text-pink-700 mb-2">
                {activeCategory === Category.CADERNOS_ESTOJOS ? 'Cadernos e Estojos em Breve!' : 'Scoops e Box em Breve!'}
              </h3>
              <p className="text-gray-700 font-medium">Estamos preparando opções lindas e cheias de fofura para você. Fique de olho no nosso Instagram! 💖</p>
            </div>
          )}
        </div>
      </main>

      <button
        onClick={() => setIsCartOpen(true)}
        className={`fixed bottom-8 right-8 z-40 bg-pink-600 text-white p-5 rounded-full shadow-2xl hover:bg-pink-700 transition-all ${shouldAnimateCart ? 'animate-cart-bounce' : ''}`}
      >
        <div className="relative">
          <ShoppingCart size={32} />
          {totalItems > 0 && (
            <span className="absolute -top-3 -right-3 bg-white text-pink-600 text-xs font-black h-7 w-7 rounded-full flex items-center justify-center border-2 border-pink-600 shadow-md">
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white p-2 bg-white/10 rounded-full hover:bg-white/20" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Ampliado" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-all" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      
      <footer className="bg-white/40 py-12 text-center border-t border-white/20">
        <p className="text-pink-600 font-pacifico text-xl mb-2">Fefah Papelaria</p>
        <p className="text-gray-500 text-sm">💖 Feito com amor para você!</p>
      </footer>
    </div>
  );
};

export default App;


import React, { useState } from 'react';
import { Product } from '../types';
import { Plus, Minus, Search, ShoppingCart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onImageClick: (url: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onImageClick }) => {
  const [localQuantity, setLocalQuantity] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleIncrement = () => setLocalQuantity(prev => prev + 1);
  const handleDecrement = () => setLocalQuantity(prev => Math.max(1, prev - 1));

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, localQuantity);
    
    // Mostra feedback local "Adicionado"
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group border border-pink-100 flex flex-col h-full relative">
      {/* Feedback de Adicionado */}
      {showFeedback && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-pink-500/80 backdrop-blur-[2px] animate-in fade-in zoom-in duration-300 pointer-events-none">
          <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 scale-110">
            <Check size={18} className="text-green-500 font-bold" />
            <span className="text-pink-600 font-bold text-xs md:text-sm">Adicionado!</span>
          </div>
        </div>
      )}

      <div 
        className="relative aspect-square overflow-hidden cursor-zoom-in"
        onClick={() => onImageClick(product.imageUrl)}
      >
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <Search size={16} className="text-pink-500" />
        </div>
      </div>
      
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-xs md:text-sm leading-tight mb-2 flex-grow line-clamp-2">
          {product.name}
        </h3>
        
        <div className="mb-3">
          <span className="text-pink-600 font-bold text-base md:text-lg">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        {/* Seletor de Quantidade e Botão Add */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-pink-50 rounded-lg p-1 border border-pink-100">
            <button 
              onClick={handleDecrement}
              className="p-1 text-pink-600 hover:bg-white rounded-md transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="font-bold text-gray-700 text-sm">{localQuantity}</span>
            <button 
              onClick={handleIncrement}
              className="p-1 text-pink-600 hover:bg-white rounded-md transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button
            onClick={handleAdd}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl font-bold text-xs md:text-sm transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingCart size={16} />
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

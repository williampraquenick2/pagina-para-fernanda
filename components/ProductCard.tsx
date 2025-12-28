
import React from 'react';
import { Product } from '../types';
import { Plus, Search } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onImageClick: (url: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onImageClick }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group border border-pink-100 flex flex-col h-full">
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
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight mb-2 flex-grow">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-pink-600 font-bold text-lg">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-xl transition-colors active:scale-95 flex items-center gap-1"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

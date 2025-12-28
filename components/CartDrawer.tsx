
import React, { useState } from 'react';
import { CartItem } from '../types';
import { ShoppingCart, X, Plus, Minus, Send, Trash2, Star, Sparkles, ShoppingBag } from 'lucide-react';
import { WHATSAPP_BASE_URL, SPECIAL_OFFER_PRODUCT } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const [showOffer, setShowOffer] = useState(false);
  
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const formatMessage = (finalItems: CartItem[]) => {
    let message = `*Olá Fefah Papelaria!*\n*Gostaria de fazer um pedido:*\n\n`;
    const finalTotal = finalItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    finalItems.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: R$ ${finalTotal.toFixed(2).replace('.', ',')}*`;
    return message;
  };

  const handleInitialSendClick = () => {
    if (items.length === 0) return;
    
    // Verifica se a oferta já está no carrinho para não oferecer de novo
    const hasOffer = items.some(i => i.id === SPECIAL_OFFER_PRODUCT.id);
    if (hasOffer) {
      finalizeOrder(items);
    } else {
      setShowOffer(true);
    }
  };

  const finalizeOrder = (finalItems: CartItem[]) => {
    const message = formatMessage(finalItems);
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE_URL}&text=${encodedMessage}`, '_blank');
    setShowOffer(false);
  };

  const handleAcceptOffer = () => {
    const offerItem: CartItem = { ...SPECIAL_OFFER_PRODUCT, quantity: 1 };
    finalizeOrder([...items, offerItem]);
  };

  const handleDeclineOffer = () => {
    finalizeOrder(items);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-4 border-b flex items-center justify-between bg-pink-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-pink-600" />
            <h2 className="text-xl font-bold text-gray-800">Seu Carrinho</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-pink-100 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-4">
              <ShoppingCart size={64} strokeWidth={1} />
              <p className="text-lg">Seu carrinho está vazio</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-3 bg-pink-50/50 p-3 rounded-2xl border border-pink-100">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
                <div className="flex-grow">
                  <h4 className="font-semibold text-gray-800 text-sm leading-tight">{item.name}</h4>
                  <p className="text-pink-600 font-bold mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3 bg-white border border-pink-200 rounded-lg p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="hover:text-pink-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="hover:text-pink-600 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-white border-t space-y-4">
          <div className="flex items-center justify-between text-xl font-bold text-gray-800">
            <span>Total:</span>
            <span className="text-pink-600">R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
          
          <button
            disabled={items.length === 0}
            onClick={handleInitialSendClick}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Send size={20} />
            Enviar Pedido via WhatsApp
          </button>
        </div>
      </div>

      {/* MODAL DE SUPER OFERTA */}
      {showOffer && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-pink-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-sm overflow-hidden shadow-2xl animate-in zoom-in duration-300 relative border-4 border-yellow-400">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-pink-700 px-6 py-1 rounded-full font-black text-sm shadow-lg flex items-center gap-2">
                <Star size={16} fill="currentColor" />
                OFERTA ESPECIAL
                <Star size={16} fill="currentColor" />
              </div>
              <h3 className="text-white text-2xl font-bold mt-2">Deseja aproveitar?</h3>
              <p className="text-pink-100 text-sm mt-1 flex items-center justify-center gap-1">
                <Sparkles size={14} /> Somente hoje por um preço especial!
              </p>
            </div>

            <div className="p-6 flex flex-col items-center">
              <div className="w-48 h-48 rounded-2xl overflow-hidden mb-4 shadow-md bg-gray-50 border border-pink-100">
                <img 
                  src={SPECIAL_OFFER_PRODUCT.imageUrl} 
                  alt={SPECIAL_OFFER_PRODUCT.name} 
                  className="w-full h-full object-contain p-2"
                />
              </div>

              <h4 className="text-gray-800 font-bold text-center leading-tight mb-2">
                {SPECIAL_OFFER_PRODUCT.name}
              </h4>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-gray-400 line-through text-sm">R$ 41,00</span>
                <span className="text-pink-600 font-black text-3xl">R$ {SPECIAL_OFFER_PRODUCT.price.toFixed(2).replace('.', ',')}</span>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={handleAcceptOffer}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-black py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 group"
                >
                  <ShoppingBag className="group-hover:animate-bounce" />
                  SIM! EU QUERO!
                </button>
                <button
                  onClick={handleDeclineOffer}
                  className="w-full text-gray-500 hover:text-gray-700 font-bold py-2 text-sm transition-colors"
                >
                  Não, obrigado
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;

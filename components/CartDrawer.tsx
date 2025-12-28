
import React from 'react';
import { CartItem } from '../types';
import { ShoppingCart, X, Plus, Minus, Send, Trash2 } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../constants';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSendOrder = () => {
    if (items.length === 0) return;

    let message = `*Olá Fefah Papelaria!*\n*Gostaria de fazer um pedido:*\n\n`;
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: R$ ${total.toFixed(2)}*`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE_URL}&text=${encodedMessage}`, '_blank');
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
                  <p className="text-pink-600 font-bold mt-1">R$ {item.price.toFixed(2)}</p>
                  
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
            onClick={handleSendOrder}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
          >
            <Send size={20} />
            Enviar Pedido via WhatsApp
          </button>
          <p className="text-center text-xs text-gray-400">
            Finalize seu pedido e fale diretamente conosco!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

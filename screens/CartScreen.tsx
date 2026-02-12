import React, { useState } from 'react';
import { ChevronLeft, X, Minus, Plus, RefreshCw, Trash2, CheckCircle } from 'lucide-react';

interface CartScreenProps {
  onBack: () => void;
  onCheckout: () => void;
}

const initialCart = [
  { id: 1, name: '오리젠 오리지널 캣 1.8kg', option: '1.8kg / 1개', price: 32000, qty: 1, checked: true, sub: true, img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
  { id: 2, name: '템테이션 닭고기맛 85g', option: '단품 / 3개', price: 4500, qty: 3, checked: true, sub: false, img: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80' },
];

const CartScreen: React.FC<CartScreenProps> = ({ onBack, onCheckout }) => {
  const [cartItems, setCartItems] = useState(initialCart);

  const toggleCheck = (id: number) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const updateQty = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const selectedItems = cartItems.filter(item => item.checked);
  const totalItemPrice = selectedItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shippingFee = totalItemPrice > 50000 ? 0 : 3000;
  const totalPrice = totalItemPrice + shippingFee;

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Header */}
      <div className="px-2 h-14 flex items-center justify-between border-b border-gray-100 z-10 bg-white sticky top-0">
        <button onClick={onBack} className="p-2 text-gray-800">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold">장바구니</h1>
        <button className="p-2 text-gray-800 opacity-0">
          <X size={24} />
        </button>
      </div>

      {/* Cart List */}
      <div className="flex-1 overflow-y-auto pb-[180px] scrollbar-hide bg-gray-50">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[300px] text-gray-400">
             <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                <Trash2 size={32} className="text-gray-400" />
             </div>
             <p className="text-sm">장바구니에 담긴 상품이 없습니다.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div key={item.id} className="p-5 bg-white">
                <div className="flex items-start gap-3">
                   {/* Checkbox */}
                   <button onClick={() => toggleCheck(item.id)} className="mt-1">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${item.checked ? 'bg-rose-500 border-rose-500' : 'border-gray-300'}`}>
                         <CheckCircle size={14} className="text-white" />
                      </div>
                   </button>
                   
                   {/* Image */}
                   <div className="w-20 h-20 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden relative border border-gray-100">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      {item.sub && (
                         <div className="absolute bottom-0 w-full bg-black/60 text-white text-[9px] text-center py-0.5">
                            정기구독
                         </div>
                      )}
                   </div>

                   {/* Info */}
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                         <h3 className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">{item.name}</h3>
                         <button onClick={() => removeItem(item.id)} className="p-1 -mt-1 -mr-1 text-gray-400">
                            <X size={16} />
                         </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.option}</p>
                      
                      <div className="flex justify-between items-end mt-3">
                         <div className="font-bold text-gray-900">{(item.price * item.qty).toLocaleString()}원</div>
                         <div className="flex items-center border border-gray-200 rounded">
                            <button onClick={() => updateQty(item.id, -1)} className="p-1 px-2 text-gray-500"><Minus size={12} /></button>
                            <span className="text-xs font-bold text-gray-900 px-1">{item.qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="p-1 px-2 text-gray-500"><Plus size={12} /></button>
                         </div>
                      </div>
                   </div>
                </div>
                {item.sub && (
                   <div className="mt-3 bg-rose-50 px-3 py-2 rounded-lg flex items-center gap-2 text-xs text-rose-600 font-medium">
                      <RefreshCw size={12} />
                      4주 간격으로 배송됩니다 (무료배송)
                   </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Bottom Sheet (Sticky) */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 z-20 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <div className="px-5 py-4">
           <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-gray-500">총 상품금액</span>
              <span className="text-gray-900">{totalItemPrice.toLocaleString()}원</span>
           </div>
           <div className="flex justify-between items-center mb-4 text-sm">
              <span className="text-gray-500">배송비</span>
              <span className="text-gray-900">{shippingFee === 0 ? '무료' : `+${shippingFee.toLocaleString()}원`}</span>
           </div>
           
           <button className="w-full py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 mb-4 hover:bg-gray-50">
              쿠폰 적용하기
           </button>

           <div className="flex justify-between items-center mb-4 pt-4 border-t border-gray-100">
              <span className="font-bold text-gray-900">총 결제금액</span>
              <span className="text-xl font-bold text-rose-500">{totalPrice.toLocaleString()}원</span>
           </div>

           <button 
             onClick={onCheckout}
             disabled={selectedItems.length === 0}
             className={`w-full h-12 rounded-xl text-lg font-bold flex items-center justify-center transition-all ${
                selectedItems.length > 0
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-200 active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
             }`}
           >
              {selectedItems.length}개 상품 주문하기
           </button>
           <div className="safe-area-bottom h-2" />
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
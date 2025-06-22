import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipeName: string;
  price: number;
  onPaymentSuccess?: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ 
  isOpen, 
  onClose, 
  recipeName, 
  price, 
  onPaymentSuccess 
}) => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    if (paymentMethod === 'paypal') {
      // Simulate PayPal payment
      console.log('Processing PayPal payment for:', recipeName, '$' + price);
      alert('Redirecting to PayPal...\n\nPayment successful! You now have full access to this recipe.');
    } else if (paymentMethod === 'chapa') {
      // Simulate Chapa payment
      console.log('Processing Chapa payment for:', recipeName, '$' + price);
      alert('Redirecting to Chapa...\n\nPayment successful! You now have full access to this recipe.');
    }
    
    setProcessing(false);
    
    // Call the success callback if provided
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
    
    onClose();
    
    // Refresh the page to show unlocked content
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Complete Purchase</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900">{recipeName}</h3>
              <p className="text-sm text-gray-600 mt-1">Premium Recipe Access</p>
              <div className="text-2xl font-bold text-amber-600 mt-2">${price}</div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <h4 className="font-medium text-gray-900">Select Payment Method:</h4>
            
            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-500 transition-colors">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <CreditCard className="h-5 w-5 text-blue-600 mr-3" />
              <span className="font-medium">PayPal</span>
            </label>

            <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-500 transition-colors">
              <input
                type="radio"
                name="payment"
                value="chapa"
                checked={paymentMethod === 'chapa'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-3"
              />
              <Smartphone className="h-5 w-5 text-green-600 mr-3" />
              <span className="font-medium">Chapa (Ethiopian Payment)</span>
            </label>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={processing}
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={processing}
              className="px-6 py-3 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-lg hover:from-amber-700 hover:to-red-700 transition-all disabled:opacity-50"
            >
              {processing ? 'Processing...' : `Pay $${price}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;

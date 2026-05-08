"use client";

import { CheckCircle, X } from "lucide-react";
import { useEffect } from "react";

interface ThankYouAlertProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function ThankYouAlert({
  isOpen,
  onClose,
  title = "Thank You!",
  message = "Your submission has been received successfully.",
}: ThankYouAlertProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto close after 3 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fadeIn">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
}

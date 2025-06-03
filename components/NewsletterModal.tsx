"use client";
import React from 'react';
import NewsletterSignup from './NewsletterSignup';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function NewsletterModal({ isOpen, onClose, onSuccess }: NewsletterModalProps) {
  if (!isOpen) return null;

  const handleSuccess = () => {
    // Set the flag in localStorage to indicate content is unlocked
    if (typeof window !== 'undefined') {
      localStorage.setItem('hasUnlockedPremiumContent', 'true');
    }
    // Call the onSuccess prop to notify the parent component (e.g., to update state)
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative transform transition-all duration-300 ease-out scale-100 opacity-100">
        <button
          onClick={onClose} // Use the onClose prop directly
          className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 transition-colors text-2xl sm:text-3xl font-light"
          aria-label="Fechar"
        >
          &times;
        </button>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3 font-title">
            Desbloqueie Mais Táticas!
          </h2>
          <p className="mb-6 text-zinc-600 text-sm sm:text-base">
            Insira seu nome e e-mail para liberar todas as táticas de sabotagem.<br />
            <b>Se você já se inscreveu antes, é só colocar seu e-mail de novo para fazer login e liberar o conteúdo.</b><br />
            
          </p>
        </div>
        {/* Pass the handleSuccess function to NewsletterSignup */}
        <NewsletterSignup onSuccess={handleSuccess} />
      </div>
    </div>
  );
}

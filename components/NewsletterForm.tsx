'use client';

import { useState } from 'react';
import type { NewsletterFormProps } from '@/types';

export default function NewsletterForm({ newsletter, className }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    
    try {
      // Here you would typically send the email to your newsletter service
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage(newsletter.metadata?.success_message || 'Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg ${className || ''}`}>
        {message}
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : (newsletter.metadata?.button_text || 'Subscribe')}
        </button>
      </form>
      
      {status === 'error' && (
        <div className="mt-4 text-red-200 text-sm">
          {message}
        </div>
      )}
    </div>
  );
}
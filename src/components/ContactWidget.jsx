import { useState } from 'react';

export default function ContactWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="bg-white rounded-xl shadow-2xl p-5 mb-3 w-72 border border-neutral-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-neutral-700" style={{ fontFamily: 'Georgia, serif' }}>Contactez-nous</h3>
            <button onClick={() => setOpen(false)} className="text-neutral-400 hover:text-neutral-600 text-xl leading-none">
              &times;
            </button>
          </div>
          <div className="space-y-3 text-sm text-neutral-600">
            <a
              href="mailto:teplo.fr@gmail.com"
              className="flex items-center gap-2 hover:text-[#265642] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 7L2 7"/>
              </svg>
              teplo.fr@gmail.com
            </a>
            <a
              href="tel:+33650337528"
              className="flex items-center gap-2 hover:text-[#265642] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +33 6 50 33 75 28
            </a>
            <a
              href="https://www.facebook.com/Teplo.fr"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-[#265642] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#F2693A] hover:bg-[#e05520] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
        aria-label="Contact"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        )}
      </button>
    </div>
  );
}

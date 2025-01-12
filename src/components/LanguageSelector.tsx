import React from 'react';
import { Languages } from 'lucide-react';
import { useI18n } from '../lib/i18n';

const languages = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  ar: 'العربية',
  ja: '日本語'
};

export function LanguageSelector() {
  const { language, setLanguage } = useI18n();
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-4 left-4">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        aria-label="Change language"
        title={translations[language].tooltips.language}
      >
        <Languages size={24} />
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-full left-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[160px]"
        >
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code as keyof typeof languages);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                language === code ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
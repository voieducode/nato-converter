import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Volume2, BookOpen } from 'lucide-react';
import { Menu } from './components/Menu';
import { Reference } from './components/Reference';
import { ThemeToggle } from './components/ThemeToggle';
import { HelpButton } from './components/Help';
import { LanguageSelector } from './components/LanguageSelector';
import { convertToNato, speak } from './lib/natoPhonetic';
import { initTheme } from './lib/theme';
import { useI18n, translations } from './lib/i18n';

const MAX_LENGTH = 300;
const MAX_FAVORITES = 5;
const DEBOUNCE_DELAY = 2000;

function Converter() {
  const { language } = useI18n();
  const t = translations[language];
  const [text, setText] = useState('');
  const [history, setHistory] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('natoHistory') || '[]');
    } catch {
      return [];
    }
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('natoFavorites') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('natoHistory', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('natoFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const debouncedUpdateHistory = useCallback((newText: string) => {
    if (newText && !history.includes(newText)) {
      setHistory(prev => [newText, ...prev.slice(0, 19)]);
    }
  }, [history]);

  useEffect(() => {
    if (!text) return;
    
    const timeoutId = setTimeout(() => {
      debouncedUpdateHistory(text);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timeoutId);
  }, [text, debouncedUpdateHistory]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value.slice(0, MAX_LENGTH);
    setText(newText);
  };

  const handleSpeak = () => {
    if (text) {
      speak(convertToNato(text));
    }
  };

  const toggleFavorite = (text: string) => {
    setFavorites(prev => {
      if (prev.includes(text)) {
        return prev.filter(t => t !== text);
      }
      return [...prev.slice(0, MAX_FAVORITES - 1), text];
    });
  };

  const natoText = text ? convertToNato(text) : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-600 dark:to-purple-700 text-gray-900 dark:text-white p-6 transition-colors">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{t.title}</h1>
          <Link
            to="/reference"
            className="inline-flex items-center text-indigo-700 dark:text-white hover:text-indigo-900 dark:hover:text-indigo-200 transition-colors"
            title={t.reference}
          >
            <BookOpen className="mr-2" /> {t.reference}
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder={t.enterText}
              className="w-full h-32 px-4 py-3 rounded-lg bg-white/50 dark:bg-white/10 backdrop-blur-sm placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-white/50 resize-none transition-colors"
              maxLength={MAX_LENGTH}
              title={t.tooltips.textInput}
            />
            <div className="text-sm text-gray-600 dark:text-white/70 text-right mt-1">
              {text.length}/{MAX_LENGTH}
            </div>
          </div>

          {natoText && (
            <div className="relative">
              <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-6 font-mono text-lg break-words transition-colors">
                {natoText}
              </div>
              <button
                onClick={handleSpeak}
                className="absolute top-4 right-4 p-2 rounded-full bg-indigo-500 dark:bg-indigo-500 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-colors"
                aria-label="Speak text"
                title={t.tooltips.speak}
              >
                <Volume2 size={20} />
              </button>
            </div>
          )}
        </div>

        <Menu
          history={history}
          favorites={favorites}
          onSelectText={setText}
          onToggleFavorite={toggleFavorite}
          onClearHistory={() => setHistory([])}
        />
        <ThemeToggle />
        <HelpButton />
        <LanguageSelector />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/reference" element={<Reference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
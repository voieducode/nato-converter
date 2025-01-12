import React, { useEffect, useRef } from 'react';
import { Menu as MenuIcon, Star, History, X } from 'lucide-react';

interface MenuProps {
  history: string[];
  favorites: string[];
  onSelectText: (text: string) => void;
  onToggleFavorite: (text: string) => void;
  onClearHistory: () => void;
}

export function Menu({ history, favorites, onSelectText, onToggleFavorite, onClearHistory }: MenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 p-2 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        aria-label="Open history"
      >
        <MenuIcon size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            ref={dialogRef}
            className="bg-white/95 dark:bg-gray-900/95 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative transition-colors"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="p-6">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Star size={20} className="text-yellow-400" /> Favorites
                </h2>
                {favorites.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">No favorites yet</p>
                ) : (
                  <ul className="space-y-2">
                    {favorites.map((text, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            onSelectText(text);
                            setIsOpen(false);
                          }}
                          className="w-full text-left p-3 rounded bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors flex items-center justify-between"
                        >
                          <span>{text}</span>
                          <Star
                            size={16}
                            className="text-yellow-400 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleFavorite(text);
                            }}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <History size={20} /> History
                  </h2>
                  <button
                    onClick={onClearHistory}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
                  >
                    Clear
                  </button>
                </div>
                {history.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">No history yet</p>
                ) : (
                  <ul className="space-y-2">
                    {history.map((text, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            onSelectText(text);
                            setIsOpen(false);
                          }}
                          className="w-full text-left p-3 rounded bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-colors flex items-center justify-between group"
                        >
                          <span>{text}</span>
                          <Star
                            size={16}
                            className={`${
                              favorites.includes(text)
                                ? 'text-yellow-400'
                                : 'text-gray-400 opacity-0 group-hover:opacity-100'
                            } cursor-pointer transition-opacity`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleFavorite(text);
                            }}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
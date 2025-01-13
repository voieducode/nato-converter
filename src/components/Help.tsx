import React from "react";
import { HelpCircle, X } from "lucide-react";
import { useI18n, translations } from "../lib/i18n";

interface HelpDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function HelpDialog({ isOpen, onClose }: HelpDialogProps) {
  const { language } = useI18n();
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 dark:bg-gray-900/95 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close help"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {t.help}
          </h2>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <section>
              <h3 className="font-semibold text-lg mb-2">
                {t.helpContent.basicUsageTitle}
              </h3>
              <p>{t.helpContent.basicUsageText}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                {t.helpContent.speechSynthesisTitle}
              </h3>
              <p>{t.helpContent.speechSynthesisText}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                {t.helpContent.historyFavoritesTitle}
              </h3>
              <p>{t.helpContent.historyFavoritesText}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                {t.helpContent.themeTitle}
              </h3>
              <p>{t.helpContent.themeText}</p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-2">
                {t.helpContent.referenceTitle}
              </h3>
              <p>{t.helpContent.referenceText}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HelpButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-2 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        aria-label="Open help"
        title={translations[useI18n().language].tooltips.help}
      >
        <HelpCircle size={24} />
      </button>
      <HelpDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

import { create } from 'zustand';

type Language = 'en' | 'fr' | 'de' | 'es' | 'ar' | 'ja';

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useI18n = create<I18nStore>((set) => ({
  language: (localStorage.getItem('language') as Language) || 'en',
  setLanguage: (lang) => {
    localStorage.setItem('language', lang);
    set({ language: lang });
  },
}));

export const translations = {
  en: {
    title: 'NATO Phonetic Converter',
    enterText: 'Enter text to convert...',
    favorites: 'Favorites',
    history: 'History',
    clear: 'Clear',
    noFavorites: 'No favorites yet',
    noHistory: 'No history yet',
    reference: 'Reference',
    help: 'Help',
    back: 'Back',
    space: 'space',
    tooltips: {
      textInput: 'Type or paste text to convert it to NATO phonetic alphabet',
      speak: 'Click to hear the phonetic pronunciation',
      theme: 'Toggle between light, dark, and system theme',
      menu: 'Access your conversion history and favorites',
      favorite: 'Add to favorites',
      help: 'View help and instructions',
      language: 'Change language'
    }
  },
  fr: {
    title: 'Convertisseur Phonétique OTAN',
    enterText: 'Entrez le texte à convertir...',
    favorites: 'Favoris',
    history: 'Historique',
    clear: 'Effacer',
    noFavorites: 'Pas encore de favoris',
    noHistory: 'Pas encore d\'historique',
    reference: 'Référence',
    help: 'Aide',
    back: 'Retour',
    space: 'espace',
    tooltips: {
      textInput: 'Tapez ou collez du texte pour le convertir en alphabet phonétique OTAN',
      speak: 'Cliquez pour entendre la prononciation phonétique',
      theme: 'Basculer entre les thèmes clair, sombre et système',
      menu: 'Accéder à votre historique de conversion et vos favoris',
      favorite: 'Ajouter aux favoris',
      help: 'Voir l\'aide et les instructions',
      language: 'Changer de langue'
    }
  },
  de: {
    title: 'NATO-Buchstabiertafel Konverter',
    enterText: 'Text zum Konvertieren eingeben...',
    favorites: 'Favoriten',
    history: 'Verlauf',
    clear: 'Löschen',
    noFavorites: 'Noch keine Favoriten',
    noHistory: 'Noch kein Verlauf',
    reference: 'Referenz',
    help: 'Hilfe',
    back: 'Zurück',
    space: 'Leerzeichen',
    tooltips: {
      textInput: 'Text eingeben oder einfügen, um ihn in NATO-Buchstabiertafel zu konvertieren',
      speak: 'Klicken Sie, um die phonetische Aussprache zu hören',
      theme: 'Zwischen hell, dunkel und System-Theme wechseln',
      menu: 'Zugriff auf Ihren Konvertierungsverlauf und Favoriten',
      favorite: 'Zu Favoriten hinzufügen',
      help: 'Hilfe und Anweisungen anzeigen',
      language: 'Sprache ändern'
    }
  },
  es: {
    title: 'Conversor Fonético OTAN',
    enterText: 'Ingrese texto para convertir...',
    favorites: 'Favoritos',
    history: 'Historial',
    clear: 'Borrar',
    noFavorites: 'Aún no hay favoritos',
    noHistory: 'Aún no hay historial',
    reference: 'Referencia',
    help: 'Ayuda',
    back: 'Volver',
    space: 'espacio',
    tooltips: {
      textInput: 'Escriba o pegue texto para convertirlo al alfabeto fonético OTAN',
      speak: 'Haga clic para escuchar la pronunciación fonética',
      theme: 'Alternar entre tema claro, oscuro y del sistema',
      menu: 'Acceder a su historial de conversión y favoritos',
      favorite: 'Añadir a favoritos',
      help: 'Ver ayuda e instrucciones',
      language: 'Cambiar idioma'
    }
  },
  ar: {
    title: 'محول الأبجدية الصوتية للناتو',
    enterText: 'أدخل النص للتحويل...',
    favorites: 'المفضلة',
    history: 'السجل',
    clear: 'مسح',
    noFavorites: 'لا توجد مفضلة بعد',
    noHistory: 'لا يوجد سجل بعد',
    reference: 'المرجع',
    help: 'المساعدة',
    back: 'رجوع',
    space: 'مسافة',
    tooltips: {
      textInput: 'اكتب أو الصق النص لتحويله إلى الأبجدية الصوتية للناتو',
      speak: 'انقر للاستماع إلى النطق الصوتي',
      theme: 'التبديل بين السمة الفاتحة والداكنة وسمة النظام',
      menu: 'الوصول إلى سجل التحويل والمفضلة',
      favorite: 'إضافة إلى المفضلة',
      help: 'عرض المساعدة والتعليمات',
      language: 'تغيير اللغة'
    }
  },
  ja: {
    title: 'NATO音標変換ツール',
    enterText: '変換するテキストを入力...',
    favorites: 'お気に入り',
    history: '履歴',
    clear: 'クリア',
    noFavorites: 'お気に入りはまだありません',
    noHistory: '履歴はまだありません',
    reference: '参照',
    help: 'ヘルプ',
    back: '戻る',
    space: 'スペース',
    tooltips: {
      textInput: 'テキストを入力または貼り付けてNATO音標アルファベットに変換',
      speak: 'クリックして音声発音を聞く',
      theme: 'ライト、ダーク、システムテーマを切り替え',
      menu: '変換履歴とお気に入りにアクセス',
      favorite: 'お気に入りに追加',
      help: 'ヘルプと説明を表示',
      language: '言語を変更'
    }
  }
};
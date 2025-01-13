import { create } from "zustand";

type Language = "en" | "fr" | "de" | "es" | "ar" | "ja" | "sw";

interface I18nStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useI18n = create<I18nStore>((set) => ({
  language: (localStorage.getItem("language") as Language) || "en",
  setLanguage: (lang) => {
    localStorage.setItem("language", lang);
    set({ language: lang });
  },
}));

export const translations = {
  en: {
    title: "NATO Phonetic Converter",
    enterText: "Enter text to convert...",
    favorites: "Favorites",
    history: "History",
    clear: "Clear",
    noFavorites: "No favorites yet",
    noHistory: "No history yet",
    reference: "Reference",
    help: "Help",
    back: "Back",
    space: "space",
    helpContent: {
      basicUsageTitle: "1. Basic Usage",
      basicUsageText:
        "Type or paste any text into the input field. The converter will automatically translate each letter into its NATO phonetic alphabet equivalent.",
      speechSynthesisTitle: "2. Speech Synthesis",
      speechSynthesisText:
        "Click the speaker icon to hear the phonetic pronunciation of your converted text.",
      historyFavoritesTitle: "3. History & Favorites",
      historyFavoritesText:
        "Access your conversion history and favorite phrases through the menu button. You can star items to add them to your favorites.",
      themeTitle: "4. Theme",
      themeText:
        "Toggle between light, dark, and system theme using the theme button in the top-left corner.",
      referenceTitle: "5. Reference",
      referenceText:
        "View the complete NATO phonetic alphabet reference by clicking the reference link.",
    },
    tooltips: {
      textInput: "Type or paste text to convert it to NATO phonetic alphabet",
      speak: "Click to hear the phonetic pronunciation",
      theme: "Toggle between light, dark, and system theme",
      menu: "Access your conversion history and favorites",
      favorite: "Add to favorites",
      help: "View help and instructions",
      language: "Change language",
    },
  },
  fr: {
    title: "Convertisseur Phonétique OTAN",
    enterText: "Entrez le texte à convertir...",
    favorites: "Favoris",
    history: "Historique",
    clear: "Effacer",
    noFavorites: "Pas encore de favoris",
    noHistory: "Pas encore d'historique",
    reference: "Référence",
    help: "Aide",
    back: "Retour",
    space: "espace",
    helpContent: {
      basicUsageTitle: "1. Utilisation de base",
      basicUsageText:
        "Tapez ou collez du texte dans le champ de saisie. Le convertisseur traduira automatiquement chaque lettre en son équivalent dans l'alphabet phonétique OTAN.",
      speechSynthesisTitle: "2. Synthèse vocale",
      speechSynthesisText:
        "Cliquez sur l'icône du haut-parleur pour entendre la prononciation phonétique de votre texte converti.",
      historyFavoritesTitle: "3. Historique et Favoris",
      historyFavoritesText:
        "Accédez à votre historique de conversion et à vos phrases préférées via le bouton de menu. Vous pouvez ajouter des éléments à vos favoris en les étoilant.",
      themeTitle: "4. Thème",
      themeText:
        "Basculez entre les thèmes clair, sombre et système en utilisant le bouton de thème dans le coin supérieur gauche.",
      referenceTitle: "5. Référence",
      referenceText:
        "Consultez la référence complète de l'alphabet phonétique OTAN en cliquant sur le lien de référence.",
    },
    tooltips: {
      textInput:
        "Tapez ou collez du texte pour le convertir en alphabet phonétique OTAN",
      speak: "Cliquez pour entendre la prononciation phonétique",
      theme: "Basculer entre les thèmes clair, sombre et système",
      menu: "Accéder à votre historique de conversion et vos favoris",
      favorite: "Ajouter aux favoris",
      help: "Voir l'aide et les instructions",
      language: "Changer de langue",
    },
  },
  de: {
    title: "NATO-Buchstabiertafel Konverter",
    enterText: "Text zum Konvertieren eingeben...",
    favorites: "Favoriten",
    history: "Verlauf",
    clear: "Löschen",
    noFavorites: "Noch keine Favoriten",
    noHistory: "Noch kein Verlauf",
    reference: "Referenz",
    help: "Hilfe",
    back: "Zurück",
    space: "Leerzeichen",
    helpContent: {
      basicUsageTitle: "1. Grundlegende Verwendung",
      basicUsageText:
        "Geben Sie beliebigen Text in das Eingabefeld ein oder fügen Sie ihn ein. Der Konverter übersetzt automatisch jeden Buchstaben in sein NATO-Buchstabieralphabet-Äquivalent.",
      speechSynthesisTitle: "2. Sprachsynthese",
      speechSynthesisText:
        "Klicken Sie auf das Lautsprechersymbol, um die phonetische Aussprache Ihres konvertierten Textes zu hören.",
      historyFavoritesTitle: "3. Verlauf & Favoriten",
      historyFavoritesText:
        "Greifen Sie über die Menüschaltfläche auf Ihren Konvertierungsverlauf und Ihre Lieblingsphrasen zu. Sie können Elemente mit einem Stern versehen, um sie zu Ihren Favoriten hinzuzufügen.",
      themeTitle: "4. Thema",
      themeText: "Wechseln Sie zwischen hell, dunkel und System-Theme.",
      referenceTitle: "5. Referenz",
      referenceText:
        "Sehen Sie sich die vollständige NATO-Buchstabiertafel-Referenz an, indem Sie auf den Referenzlink klicken.",
    },
    tooltips: {
      textInput:
        "Text eingeben oder einfügen, um ihn in NATO-Buchstabiertafel zu konvertieren",
      speak: "Klicken Sie, um die phonetische Aussprache zu hören",
      theme: "Zwischen hell, dunkel und System-Theme wechseln",
      menu: "Zugriff auf Ihren Konvertierungsverlauf und Favoriten",
      favorite: "Zu Favoriten hinzufügen",
      help: "Hilfe und Anweisungen anzeigen",
      language: "Sprache ändern",
    },
  },
  es: {
    title: "Conversor Fonético OTAN",
    enterText: "Ingrese texto para convertir...",
    favorites: "Favoritos",
    history: "Historial",
    clear: "Borrar",
    noFavorites: "Aún no hay favoritos",
    noHistory: "Aún no hay historial",
    reference: "Referencia",
    help: "Ayuda",
    back: "Volver",
    space: "espacio",
    helpContent: {
      basicUsageTitle: "1. Uso básico",
      basicUsageText:
        "Escriba o pegue cualquier texto en el campo de entrada. El convertidor traducirá automáticamente cada letra a su equivalente en el alfabeto fonético OTAN.",
      speechSynthesisTitle: "2. Síntesis de voz",
      speechSynthesisText:
        "Haga clic en el icono del altavoz para escuchar la pronunciación fonética de su texto convertido.",
      historyFavoritesTitle: "3. Historial y Favoritos",
      historyFavoritesText:
        "Acceda a su historial de conversiones y frases favoritas a través del botón de menú. Puede marcar elementos para agregarlos a sus favoritos.",
      themeTitle: "4. Tema",
      themeText: "Cambie entre los temas claro, oscuro y del sistema.",
      referenceTitle: "5. Referencia",
      referenceText:
        "Vea la referencia completa del alfabeto fonético OTAN haciendo clic en el enlace de referencia.",
    },
    tooltips: {
      textInput:
        "Escriba o pegue texto para convertirlo al alfabeto fonético OTAN",
      speak: "Haga clic para escuchar la pronunciación fonética",
      theme: "Alternar entre tema claro, oscuro y del sistema",
      menu: "Acceder a su historial de conversión y favoritos",
      favorite: "Añadir a favoritos",
      help: "Ver ayuda e instrucciones",
      language: "Cambiar idioma",
    },
  },
  ar: {
    title: "محول الأبجدية الصوتية للناتو",
    enterText: "أدخل النص للتحويل...",
    favorites: "المفضلة",
    history: "السجل",
    clear: "مسح",
    noFavorites: "لا توجد مفضلة بعد",
    noHistory: "لا يوجد سجل بعد",
    reference: "المرجع",
    help: "المساعدة",
    back: "رجوع",
    space: "مسافة",
    helpContent: {
      basicUsageTitle: "1. الاستخدام الأساسي",
      basicUsageText:
        "اكتب أو الصق أي نص في حقل الإدخال. سيقوم المحول تلقائيًا بترجمة كل حرف إلى ما يعادله في أبجدية الناتو الصوتية.",
      speechSynthesisTitle: "2. توليف الصوت",
      speechSynthesisText:
        "انقر فوق أيقونة السماعة لسماع النطق الصوتي للنص الذي تم تحويله.",
      historyFavoritesTitle: "3. السجل والمفضلة",
      historyFavoritesText:
        "استعرض سجل التحويلات الخاص بك والعبارات المفضلة من خلال زر القائمة. يمكنك تمييز العناصر لإضافتها إلى المفضلة.",
      themeTitle: "4. السمة",
      themeText: "قم بالتبديل بين السمة الفاتحة والداكنة وسمة النظام.",
      referenceTitle: "5. المرجع",
      referenceText:
        "عرض المرجع الكامل لأبجدية الناتو الصوتية عن طريق النقر على رابط المرجع.",
    },
    tooltips: {
      textInput: "اكتب أو الصق النص لتحويله إلى الأبجدية الصوتية للناتو",
      speak: "انقر للاستماع إلى النطق الصوتي",
      theme: "التبديل بين السمة الفاتحة والداكنة وسمة النظام",
      menu: "الوصول إلى سجل التحويل والمفضلة",
      favorite: "إضافة إلى المفضلة",
      help: "عرض المساعدة والتعليمات",
      language: "تغيير اللغة",
    },
  },
  ja: {
    title: "NATO音標変換ツール",
    enterText: "変換するテキストを入力...",
    favorites: "お気に入り",
    history: "履歴",
    clear: "クリア",
    noFavorites: "お気に入りはまだありません",
    noHistory: "履歴はまだありません",
    reference: "参照",
    help: "ヘルプ",
    back: "戻る",
    space: "スペース",
    helpContent: {
      basicUsageTitle: "1. 基本的な使い方",
      basicUsageText:
        "入力フィールドにテキストを入力または貼り付けます。変換ツールは、各文字をNATO音声アルファベットに自動的に変換します。",
      speechSynthesisTitle: "2. 音声合成",
      speechSynthesisText:
        "変換されたテキストの音声発音を聞くには、スピーカーアイコンをクリックします。",
      historyFavoritesTitle: "3. 履歴とお気に入り",
      historyFavoritesText:
        "メニューボタンを使用して、変換履歴とお気に入りフレーズにアクセスします。お気に入りに追加するには、アイテムにスターを付けることができます。",
      themeTitle: "4. テーマ",
      themeText:
        "左上隅のテーマボタンを使用して、ライト、ダーク、システムテーマを切り替えます。",
      referenceTitle: "5. テーマ",
      referenceText:
        "左上隅のテーマボタンを使用して、ライト、ダーク、システムテーマを切り替えます。",
    },
    tooltips: {
      textInput: "テキストを入力または貼り付けてNATO音標アルファベットに変換",
      speak: "クリックして音声発音を聞く",
      theme: "ライト、ダーク、システムテーマを切り替え",
      menu: "変換履歴とお気に入りにアクセス",
      favorite: "お気に入りに追加",
      help: "ヘルプと説明を表示",
      language: "言語を変更",
    },
  },
  sw: {
    title: "Kigeuzi cha NATO cha Fonetiki",
    enterText: "Ingiza maandishi kubadilisha...",
    favorites: "Vipendwa",
    history: "Historia",
    clear: "Futa",
    noFavorites: "Hakuna vipendwa bado",
    noHistory: "Hakuna historia bado",
    reference: "Marejeo",
    help: "Msaada",
    back: "Rudi",
    space: "nafasi",
    helpContent: {
      basicUsageTitle: "1. Matumizi ya Msingi",
      basicUsageText:
        "Andika au bandika maandishi yoyote kwenye uwanja wa kuingiza. Kigeuzi kitatafsiri kila herufi moja kwa moja kuwa sawa na alfabeti ya fonetiki ya NATO.",
      speechSynthesisTitle: "2. Uundaji wa Sauti",
      speechSynthesisText:
        "Bonyeza ikoni ya kipaza sauti kusikia matamshi ya fonetiki ya maandishi yako yaliyobadilishwa.",
      historyFavoritesTitle: "3. Historia na Vipendwa",
      historyFavoritesText:
        "Fikia historia yako ya ubadilishaji na misemo uipendayo kupitia kitufe cha menyu. Unaweza kuweka alama vitu ili kuviongeza kwenye vipendwa vyako.",
      themeTitle: "4. Mandhari",
      themeText: "Badilisha kati ya mandhari ya mwanga, giza, na mfumo.",
      referenceTitle: "5. Marejeo",
      referenceText:
        "Tazama marejeo kamili ya alfabeti ya fonetiki ya NATO kwa kubonyeza kiungo cha marejeo.",
    },
    tooltips: {
      textInput:
        "Andika au bandika maandishi kubadilisha kuwa alfabeti ya fonetiki ya NATO",
      speak: "Bonyeza kusikia matamshi ya fonetiki",
      theme: "Badilisha kati ya mandhari ya mwanga, giza, na mfumo",
      menu: "Fikia historia yako ya ubadilishaji na vipendwa",
      favorite: "Ongeza kwenye vipendwa",
      help: "Tazama msaada na maelekezo",
      language: "Badilisha lugha",
    },
  },
};

// NATO phonetic alphabet mapping
export const natoPhoneticAlphabet: Record<string, string> = {
  'A': 'Alpha',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliet',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'X-ray',
  'Y': 'Yankee',
  'Z': 'Zulu',
};

export const convertToNato = (text: string): string => {
  return text
    .toUpperCase()
    .split('')
    .map(char => {
      if (char === ' ') return '(space)';
      return natoPhoneticAlphabet[char] || char;
    })
    .join(' ');
};

export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
};
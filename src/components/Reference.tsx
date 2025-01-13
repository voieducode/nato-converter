import { natoPhoneticAlphabet } from "../lib/natoPhonetic";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function Reference() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-600 dark:to-purple-700 p-6 transition-colors">
      <div className="max-w-2xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-700 dark:text-white hover:text-indigo-900 dark:hover:text-indigo-200 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" /> Back to converter
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          NATO Phonetic Alphabet Reference
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(natoPhoneticAlphabet).map(([letter, word]) => (
            <div
              key={letter}
              className="bg-white/50 dark:bg-white/10 backdrop-blur-sm rounded-lg p-4 text-gray-900 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 transition-colors"
            >
              <span className="text-2xl font-bold">{letter}</span>
              <span className="mx-2">-</span>
              <span className="text-lg">{word}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

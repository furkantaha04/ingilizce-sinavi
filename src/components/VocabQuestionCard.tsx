import { useState, useCallback } from 'react';
import type { VocabQuizQuestion } from '../types';

interface VocabQuestionCardProps {
  question: VocabQuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export default function VocabQuestionCard({ question, questionNumber, totalQuestions, onAnswer }: VocabQuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const isCorrect = selectedOption === question.correctAnswer;

  const handleSelect = useCallback((option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
  }, [showResult]);

  const handleNext = useCallback(() => {
    setSelectedOption(null);
    setShowResult(false);
    onAnswer(isCorrect);
  }, [isCorrect, onAnswer]);

  const renderSentence = () => {
    const parts = question.sentence.split(/_{3,}/);
    if (parts.length < 2) return <p className="text-base sm:text-lg font-medium text-gray-800">{question.sentence}</p>;

    return (
      <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-800">
        {parts[0]}
        <span className={`inline-block min-w-[100px] px-2 py-0.5 border-b-2 mx-1 text-center font-bold transition-all ${
          showResult
            ? isCorrect
              ? 'border-green-500 text-green-600 bg-green-50 rounded-t'
              : 'border-red-500 text-red-600 bg-red-50 rounded-t'
            : 'border-purple-500 text-purple-600'
        }`}>
          {showResult ? question.correctAnswer : '______'}
        </span>
        {parts[1]}
      </p>
    );
  };

  return (
    <div className="animate-slide-in bg-white rounded-2xl shadow-md p-4 sm:p-6 max-w-2xl mx-auto border border-gray-200">
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <span className="font-semibold">Soru {questionNumber} / {totalQuestions}</span>
        <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
          🧪 Kelime Quizi
        </span>
      </div>

      <div className="mb-5 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100">
        {renderSentence()}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
        {question.options.map((option, idx) => {
          let btnClass = 'w-full text-left px-3 sm:px-4 py-3 rounded-xl border-2 font-medium transition-all duration-200 text-sm sm:text-base ';

          if (showResult) {
            if (option === question.correctAnswer) {
              btnClass += 'border-green-500 bg-green-50 text-green-700 shadow-sm';
            } else if (option === selectedOption) {
              btnClass += 'border-red-500 bg-red-50 text-red-700';
            } else {
              btnClass += 'border-gray-200 text-gray-400 opacity-60';
            }
          } else {
            btnClass += 'border-gray-200 hover:border-purple-400 hover:bg-purple-50 text-gray-800 cursor-pointer active:scale-[0.98]';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(option)}
              disabled={showResult}
              className={btnClass}
            >
              <span className="inline-block w-6 h-6 rounded-full bg-gray-100 text-center leading-6 text-xs text-gray-600 font-bold mr-2 shrink-0">
                {String.fromCharCode(65 + idx)}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="animate-fade-in mt-4">
          <div className={`p-4 rounded-xl mb-4 ${
            isCorrect
              ? 'bg-green-50 border-2 border-green-300'
              : 'bg-red-50 border-2 border-red-300'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{isCorrect ? '🎉' : '❌'}</span>
              <span className={`font-bold text-lg ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Doğru!' : 'Yanlış!'}
              </span>
            </div>
            {!isCorrect && (
              <p className="text-sm text-gray-700 mb-2">
                Doğru cevap: <span className="font-bold text-green-600">{question.correctAnswer}</span>
              </p>
            )}
            <p className="text-sm text-gray-700 mb-3 font-medium">
              🇹🇷 Cümle Çevirisi: {question.sentenceTr}
            </p>
            <div className="border-t border-gray-200 pt-2.5 mt-2">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1.5">Şıklardaki Kelimelerin Anlamları:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                {question.options.map((opt, idx) => (
                  <div key={idx} className="text-gray-700 bg-white p-1.5 rounded border border-gray-100">
                    <span className="font-bold text-purple-600">{opt}:</span>{' '}
                    <span>{question.optionMeanings[opt] || '—'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all text-base shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            {questionNumber < totalQuestions ? 'Sonraki Soru →' : 'Sonuçları Gör 🏁'}
          </button>
        </div>
      )}
    </div>
  );
}

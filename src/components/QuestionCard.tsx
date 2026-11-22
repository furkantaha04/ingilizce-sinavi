import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import type { GrammarQuestion, FillInTheBlankQuestion, MultipleChoiceQuestion } from '../types';

interface QuestionCardProps {
  question: GrammarQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

function cleanText(str: string): string {
  return str
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .trim()
    .toLowerCase()
    .replace(/[.?!,;:]+$/, '')
    .replace(/\s+/g, ' ');
}

const contractionMap: Record<string, string> = {
  "haven't": "have not",
  "hasn't": "has not",
  "hadn't": "had not",
  "won't": "will not",
  "wouldn't": "would not",
  "don't": "do not",
  "doesn't": "does not",
  "didn't": "did not",
  "isn't": "is not",
  "aren't": "are not",
  "wasn't": "was not",
  "weren't": "were not",
  "can't": "cannot",
  "couldn't": "could not",
  "shouldn't": "should not",
  "mustn't": "must not",
  "'s": " is",
  "'re": " are",
  "'ve": " have",
  "'ll": " will",
  "'d": " would",
  "'m": " am",
};

function expandContractions(text: string): string {
  let expanded = cleanText(text);
  for (const [shortForm, longForm] of Object.entries(contractionMap)) {
    const escaped = shortForm.replace("'", "[''\\u2019]");
    expanded = expanded.replace(new RegExp(escaped, 'gi'), longForm);
  }
  return expanded.replace(/\s+/g, ' ').trim();
}

function contractForms(text: string): string {
  let contracted = cleanText(text);
  const reverseMap: [RegExp, string][] = [
    [/\bhave not\b/gi, "haven't"],
    [/\bhas not\b/gi, "hasn't"],
    [/\bwill not\b/gi, "won't"],
    [/\bdo not\b/gi, "don't"],
    [/\bdoes not\b/gi, "doesn't"],
    [/\bdid not\b/gi, "didn't"],
    [/\bis not\b/gi, "isn't"],
    [/\bare not\b/gi, "aren't"],
    [/\bwas not\b/gi, "wasn't"],
    [/\bwere not\b/gi, "weren't"],
    [/\bcannot\b/gi, "can't"],
    [/\bcan not\b/gi, "can't"],
    [/\bshould not\b/gi, "shouldn't"],
  ];
  for (const [regex, replacement] of reverseMap) {
    contracted = contracted.replace(regex, replacement);
  }
  return contracted.replace(/\s+/g, ' ').trim();
}

function checkFillInAnswer(userAnswer: string, correctAnswers: string[]): boolean {
  const userClean = cleanText(userAnswer);
  const userExpanded = expandContractions(userAnswer);
  const userContracted = contractForms(userAnswer);

  return correctAnswers.some(ca => {
    const caClean = cleanText(ca);
    const caExpanded = expandContractions(ca);
    const caContracted = contractForms(ca);

    return (
      userClean === caClean ||
      userExpanded === caExpanded ||
      userContracted === caContracted ||
      userExpanded === caClean ||
      userClean === caExpanded
    );
  });
}

export default function QuestionCard({ question, questionNumber, totalQuestions, onAnswer }: QuestionCardProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setUserAnswer('');
    setSelectedOption(null);
    setShowResult(false);
    setIsCorrect(false);
    if (question.type === 'fill-in-the-blank' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [question]);

  const handleSubmitFill = () => {
    if (!userAnswer.trim()) return;
    const q = question as FillInTheBlankQuestion;
    const correct = checkFillInAnswer(userAnswer, q.correctAnswers);
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleSelectOption = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    const q = question as MultipleChoiceQuestion;
    const correct = option === q.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !showResult) {
      handleSubmitFill();
    }
  };

  const handleNext = () => {
    onAnswer(isCorrect);
  };

  const renderSentence = () => {
    const parts = question.sentence.split(/_{3,}/);
    if (parts.length < 2) return <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-800">{question.sentence}</p>;

    const primaryAnswer = question.type === 'fill-in-the-blank'
      ? (question as FillInTheBlankQuestion).correctAnswers[0]
      : (question as MultipleChoiceQuestion).correctAnswer;

    return (
      <p className="text-base sm:text-lg leading-relaxed font-medium text-gray-800">
        {parts[0]}
        <span className={`inline-block min-w-[100px] px-2 py-0.5 border-b-2 mx-1 text-center font-bold transition-all ${
          showResult
            ? isCorrect
              ? 'border-green-500 text-green-600 bg-green-50 rounded-t'
              : 'border-red-500 text-red-600 bg-red-50 rounded-t'
            : 'border-blue-500 text-blue-600'
        }`}>
          {showResult ? primaryAnswer : '______'}
        </span>
        {parts[1]}
      </p>
    );
  };

  return (
    <div className="animate-slide-in bg-white rounded-2xl shadow-md p-4 sm:p-6 max-w-2xl mx-auto border border-gray-200">
      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
        <span className="font-semibold">Soru {questionNumber} / {totalQuestions}</span>
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
          {question.type === 'fill-in-the-blank' ? '✏️ Boşluk Doldurma' : '🔘 Çoktan Seçmeli'}
        </span>
      </div>

      <div className="mb-5 p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100">
        {renderSentence()}
      </div>

      {question.type === 'fill-in-the-blank' && !showResult && (
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            ref={inputRef}
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Boşluğa gelecek cevabı yazın..."
            className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 focus:border-blue-500 focus:outline-none transition-colors text-base"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <button
            onClick={handleSubmitFill}
            disabled={!userAnswer.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-xl font-semibold transition-colors disabled:cursor-not-allowed shadow-sm"
          >
            Kontrol Et
          </button>
        </div>
      )}

      {question.type === 'multiple-choice' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
          {(question as MultipleChoiceQuestion).options.map((option, idx) => {
            const q = question as MultipleChoiceQuestion;
            let btnClass = 'w-full text-left px-3 sm:px-4 py-3 rounded-xl border-2 font-medium transition-all duration-200 text-sm sm:text-base ';

            if (showResult) {
              if (option === q.correctAnswer) {
                btnClass += 'border-green-500 bg-green-50 text-green-700 shadow-sm';
              } else if (option === selectedOption && option !== q.correctAnswer) {
                btnClass += 'border-red-500 bg-red-50 text-red-700';
              } else {
                btnClass += 'border-gray-200 text-gray-400 opacity-60';
              }
            } else {
              btnClass += 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-800 cursor-pointer active:scale-[0.98]';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(option)}
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
      )}

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
            {!isCorrect && question.type === 'fill-in-the-blank' && (
              <p className="text-sm text-gray-700 mb-1">
                Senin cevabın: <span className="font-semibold text-red-600">{userAnswer}</span>
              </p>
            )}
            {!isCorrect && (
              <p className="text-sm text-gray-700 mb-2">
                Doğru cevap:{' '}
                <span className="font-bold text-green-600">
                  {question.type === 'fill-in-the-blank'
                    ? (question as FillInTheBlankQuestion).correctAnswers.join(' / ')
                    : (question as MultipleChoiceQuestion).correctAnswer}
                </span>
              </p>
            )}
            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-600">💡 Dilbilgisi Açıklaması:</span>{' '}
                {question.explanation}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all text-base shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            {questionNumber < totalQuestions ? 'Sonraki Soru →' : 'Sonuçları Gör 🏁'}
          </button>
        </div>
      )}
    </div>
  );
}

import { useState, useCallback } from 'react';
import { vocabularyWords, vocabQuizQuestions } from '../data/vocabulary';
import type { VocabQuizQuestion } from '../types';
import VocabQuestionCard from '../components/VocabQuestionCard';
import ProgressBar from '../components/ProgressBar';
import QuizResultScreen from '../components/QuizResultScreen';
import { saveQuizResult, getBestScore } from '../hooks/useStorage';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const sections = [
  { id: 1, label: 'Bölüm 1 (1–25)',    start: 0,   end: 25  },
  { id: 2, label: 'Bölüm 2 (26–50)',   start: 25,  end: 50  },
  { id: 3, label: 'Bölüm 3 (51–75)',   start: 50,  end: 75  },
  { id: 4, label: 'Bölüm 4 (76–100)',  start: 75,  end: 100 },
  { id: 5, label: 'Bölüm 5 (101–125)', start: 100, end: 125 },
  { id: 6, label: 'Bölüm 6 (126–144)', start: 125, end: 144 },
];

interface VocabQuizPageProps {
  onNavigate: (page: string) => void;
}

export default function VocabQuizMenuPage({ onNavigate }: VocabQuizPageProps) {
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<VocabQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [quizMode, setQuizMode] = useState<'menu' | 'quiz' | 'result'>('menu');

  const startQuiz = useCallback((sectionId: number | 'all') => {
    let questions: VocabQuizQuestion[];
    if (sectionId === 'all') {
      questions = shuffleArray(vocabQuizQuestions).slice(0, 15);
      setSelectedSection(0);
    } else {
      const sec = sections.find(s => s.id === sectionId)!;
      const wordIds = new Set(vocabularyWords.slice(sec.start, sec.end).map(w => w.id));
      const sectionQs = vocabQuizQuestions.filter(q => wordIds.has(q.wordId));
      questions = shuffleArray(sectionQs).slice(0, Math.min(15, sectionQs.length));
      setSelectedSection(sectionId);
    }
    setQuizQuestions(questions);
    setCurrentIndex(0);
    setScore(0);
    setWrongCount(0);
    setQuizMode('quiz');
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    const newScore = isCorrect ? score + 1 : score;
    const newWrong = isCorrect ? wrongCount : wrongCount + 1;

    if (currentIndex + 1 >= quizQuestions.length) {
      saveQuizResult(selectedSection ?? 0, newScore, quizQuestions.length, 'vocab');
      setScore(newScore);
      setWrongCount(newWrong);
      setQuizMode('result');
    } else {
      setScore(newScore);
      setWrongCount(newWrong);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, quizQuestions.length, score, wrongCount, selectedSection]);

  if (quizMode === 'result') {
    const label = selectedSection === 0
      ? 'Karışık Kelime Testi'
      : `Kelime Testi — ${sections.find(s => s.id === selectedSection)?.label}`;
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <QuizResultScreen
          score={score}
          total={quizQuestions.length}
          sectionTitle={label}
          onRetry={() => startQuiz(selectedSection === 0 ? 'all' : selectedSection!)}
          onHome={() => setQuizMode('menu')}
        />
      </div>
    );
  }

  if (quizMode === 'quiz' && quizQuestions.length > 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1">🧪 Kelime Quizi</h2>
          <p className="text-sm text-gray-500">
            {selectedSection === 0 ? 'Tüm Kelimelerden Karışık' : sections.find(s => s.id === selectedSection)?.label}
          </p>
        </div>
        <ProgressBar current={currentIndex + 1} total={quizQuestions.length} correct={score} wrong={wrongCount} label="İlerleme" />
        <VocabQuestionCard
          key={`vocab-${currentIndex}-${quizQuestions[currentIndex]?.wordId}`}
          question={quizQuestions[currentIndex]}
          questionNumber={currentIndex + 1}
          totalQuestions={quizQuestions.length}
          onAnswer={handleAnswer}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">🧪 Kelime Quizi</h2>
      <p className="text-gray-500 mb-6">Cümle içinde doğru kelimeyi seçin. 15 soruluk testler çözün.</p>

      <button
        onClick={() => startQuiz('all')}
        className="w-full mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg text-lg active:scale-[0.98]"
      >
        🎲 Tüm Kelimelerden Karışık 15 Soru
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {sections.map(sec => {
          const best = getBestScore(sec.id, 'vocab');
          return (
            <button
              key={sec.id}
              onClick={() => startQuiz(sec.id)}
              className="text-left p-4 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-purple-300 transition-all active:scale-[0.98]"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-bold text-purple-600">{sec.label}</span>
                {best !== null && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    best >= 12 ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                  }`}>En İyi: {best}/15</span>
                )}
              </div>
              <p className="text-xs text-gray-500">{sec.end - sec.start} kelime</p>
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onNavigate('home')}
        className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
      >
        ← Ana Sayfaya Dön
      </button>
    </div>
  );
}

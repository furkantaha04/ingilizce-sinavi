import { useState, useCallback } from 'react';
import { grammarSections } from '../data/grammar';
import type { GrammarQuestion } from '../types';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import QuizResultScreen from '../components/QuizResultScreen';
import { saveQuizResult } from '../hooks/useStorage';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function pickRandomQuestions(questions: GrammarQuestion[], count: number): GrammarQuestion[] {
  return shuffleArray(questions).slice(0, count);
}

interface GrammarQuizPageProps {
  sectionId: number;
  onNavigate: (page: string) => void;
}

export default function GrammarQuizPage({ sectionId, onNavigate }: GrammarQuizPageProps) {
  const section = grammarSections.find(s => s.id === sectionId);

  const [quizQuestions, setQuizQuestions] = useState<GrammarQuestion[]>(() =>
    section ? pickRandomQuestions(section.questions, 15) : []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    const newScore = isCorrect ? score + 1 : score;
    const newWrong = isCorrect ? wrongCount : wrongCount + 1;

    if (currentIndex + 1 >= quizQuestions.length) {
      saveQuizResult(sectionId, newScore, quizQuestions.length, 'grammar');
      setScore(newScore);
      setWrongCount(newWrong);
      setFinished(true);
    } else {
      setScore(newScore);
      setWrongCount(newWrong);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, quizQuestions.length, score, wrongCount, sectionId]);

  const handleRetry = useCallback(() => {
    if (section) {
      setQuizQuestions(pickRandomQuestions(section.questions, 15));
      setCurrentIndex(0);
      setScore(0);
      setWrongCount(0);
      setFinished(false);
    }
  }, [section]);

  if (!section) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Bölüm bulunamadı.</p>
        <button onClick={() => onNavigate('home')} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl">
          Ana Sayfaya Dön
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <QuizResultScreen
          score={score}
          total={quizQuestions.length}
          sectionTitle={`${section.title} — ${section.titleTr}`}
          onRetry={handleRetry}
          onHome={() => onNavigate('home')}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded">
            Bölüm {section.id}
          </span>
          <h2 className="text-base sm:text-lg font-bold text-gray-800">{section.title}</h2>
        </div>
        <p className="text-sm text-gray-500">{section.titleTr}</p>
      </div>

      <ProgressBar
        current={currentIndex + 1}
        total={quizQuestions.length}
        correct={score}
        wrong={wrongCount}
        label="Soru İlerlemesi"
      />

      <QuestionCard
        key={`${sectionId}-${currentIndex}-${quizQuestions[currentIndex]?.id}`}
        question={quizQuestions[currentIndex]}
        questionNumber={currentIndex + 1}
        totalQuestions={quizQuestions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

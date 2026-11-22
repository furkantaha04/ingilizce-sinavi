import { useState, useCallback } from 'react';
import { vocabularyWords } from '../data/vocabulary';
import type { VocabularyWord } from '../types';
import Flashcard from '../components/Flashcard';
import ProgressBar from '../components/ProgressBar';
import Congratulations from '../components/Congratulations';
import { saveFlashcardSection, getFlashcardCompletedSections } from '../hooks/useStorage';

const TOTAL_SECTIONS = 6;
const SECTION_SIZE = 25;

function getSectionWords(sectionId: number): VocabularyWord[] {
  const start = (sectionId - 1) * SECTION_SIZE;
  const end = sectionId === TOTAL_SECTIONS ? vocabularyWords.length : start + SECTION_SIZE;
  return vocabularyWords.slice(start, end);
}

function shuffleDeck(words: VocabularyWord[]): VocabularyWord[] {
  const shuffled = [...words];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface FlashcardPageProps {
  onNavigate: (page: string) => void;
}

export default function FlashcardPage({ onNavigate }: FlashcardPageProps) {
  const [currentSection, setCurrentSection] = useState<number | null>(null);
  const [deck, setDeck] = useState<VocabularyWord[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  const [sectionTotal, setSectionTotal] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  const completedSections = getFlashcardCompletedSections();

  const startSection = useCallback((sectionId: number) => {
    const words = getSectionWords(sectionId);
    setCurrentSection(sectionId);
    setDeck(shuffleDeck(words));
    setCurrentCardIndex(0);
    setLearnedIds([]);
    setSectionTotal(words.length);
    setShowCongrats(false);
  }, []);

  const handleCorrect = useCallback(() => {
    const currentWord = deck[currentCardIndex];
    const newLearnedIds = [...learnedIds, currentWord.id];
    setLearnedIds(newLearnedIds);
    const newDeck = deck.filter((_, i) => i !== currentCardIndex);
    if (newDeck.length === 0) {
      saveFlashcardSection(currentSection!, newLearnedIds);
      setShowCongrats(true);
    } else {
      setDeck(newDeck);
      setCurrentCardIndex(prev => (prev >= newDeck.length ? 0 : prev));
    }
  }, [deck, currentCardIndex, learnedIds, currentSection]);

  const handleWrong = useCallback(() => {
    const currentWord = deck[currentCardIndex];
    const newDeck = [...deck];
    newDeck.splice(currentCardIndex, 1);
    newDeck.push(currentWord);
    setDeck(newDeck);
    if (currentCardIndex >= newDeck.length) {
      setCurrentCardIndex(0);
    }
  }, [deck, currentCardIndex]);

  if (showCongrats && currentSection) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Congratulations
          sectionNumber={currentSection}
          totalSections={TOTAL_SECTIONS}
          onNextSection={() => { if (currentSection < TOTAL_SECTIONS) startSection(currentSection + 1); }}
          onHome={() => { setCurrentSection(null); setShowCongrats(false); }}
        />
      </div>
    );
  }

  if (currentSection && deck.length > 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-1">
            🃏 Ezber Kartları — Bölüm {currentSection}
          </h2>
          <p className="text-sm text-gray-500">
            Kartı çevirin, biliyorsanız "Doğru", bilmiyorsanız "Yanlış" tuşuna basın.
          </p>
        </div>
        <ProgressBar
          current={learnedIds.length}
          total={sectionTotal}
          correct={learnedIds.length}
          wrong={0}
          label="Öğrenme İlerlemesi"
        />
        <Flashcard
          key={`${currentSection}-${deck[currentCardIndex]?.id}`}
          word={deck[currentCardIndex]}
          onCorrect={handleCorrect}
          onWrong={handleWrong}
          currentIndex={currentCardIndex}
          totalRemaining={deck.length}
          totalInSection={sectionTotal}
          learnedCount={learnedIds.length}
        />
        <button
          onClick={() => setCurrentSection(null)}
          className="w-full mt-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
        >
          ← Bölüm Seçimine Dön
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">🃏 Ezber Kartları</h2>
      <p className="text-gray-500 mb-6">
        Her bölümde 25 kelimelik (son bölüm 19 kelime) kart destesi. Tüm kartları "Doğru" işaretleyene kadar devam edin!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Array.from({ length: TOTAL_SECTIONS }, (_, i) => i + 1).map(sectionId => {
          const words = getSectionWords(sectionId);
          const isCompleted = completedSections.includes(sectionId);
          return (
            <button
              key={sectionId}
              onClick={() => startSection(sectionId)}
              className={`text-left p-5 rounded-xl shadow-sm hover:shadow-md transition-all border active:scale-[0.98] ${
                isCompleted
                  ? 'bg-green-50 border-green-200 hover:border-green-400'
                  : 'bg-white border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-blue-600">Bölüm {sectionId}</span>
                {isCompleted && (
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700">
                    ✓ Tamamlandı
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mb-1 font-medium">{words.length} kelime</p>
              <p className="text-xs text-gray-400 line-clamp-1">
                {words.slice(0, 5).map(w => w.word).join(', ')}...
              </p>
            </button>
          );
        })}
      </div>
      <button
        onClick={() => onNavigate('home')}
        className="w-full mt-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
      >
        ← Ana Sayfaya Dön
      </button>
    </div>
  );
}

import type { AppProgress } from '../types';

const STORAGE_KEY = 'english-a2-quiz-progress';

const defaultProgress: AppProgress = {
  grammarResults: [],
  vocabQuizResults: [],
  flashcardProgress: [],
};

export function loadProgress(): AppProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...defaultProgress, ...JSON.parse(stored) };
    }
  } catch {
    // ignore parse errors
  }
  return { ...defaultProgress };
}

export function saveProgress(progress: AppProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore storage errors
  }
}

export function saveQuizResult(sectionId: number, score: number, total: number, type: 'grammar' | 'vocab'): void {
  const progress = loadProgress();
  const result = { sectionId, score, total, date: new Date().toISOString() };
  if (type === 'grammar') {
    progress.grammarResults.push(result);
  } else {
    progress.vocabQuizResults.push(result);
  }
  saveProgress(progress);
}

export function saveFlashcardSection(sectionId: number, learnedWordIds: number[]): void {
  const progress = loadProgress();
  const existing = progress.flashcardProgress.findIndex(fp => fp.sectionId === sectionId);
  const entry = { sectionId, learnedWordIds, date: new Date().toISOString() };
  if (existing >= 0) {
    progress.flashcardProgress[existing] = entry;
  } else {
    progress.flashcardProgress.push(entry);
  }
  saveProgress(progress);
}

export function getBestScore(sectionId: number, type: 'grammar' | 'vocab'): number | null {
  const progress = loadProgress();
  const results = type === 'grammar' ? progress.grammarResults : progress.vocabQuizResults;
  const sectionResults = results.filter(r => r.sectionId === sectionId);
  if (sectionResults.length === 0) return null;
  return Math.max(...sectionResults.map(r => r.score));
}

export function getFlashcardCompletedSections(): number[] {
  const progress = loadProgress();
  return progress.flashcardProgress
    .filter(fp => {
      const sectionSize = fp.sectionId <= 5 ? 25 : 19;
      return fp.learnedWordIds.length >= sectionSize;
    })
    .map(fp => fp.sectionId);
}

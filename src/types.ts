// Type definitions for the quiz application

export type QuestionType = 'fill-in-the-blank' | 'multiple-choice';

export interface FillInTheBlankQuestion {
  id: number;
  type: 'fill-in-the-blank';
  sentence: string; // Use ______ for the blank
  correctAnswers: string[]; // All acceptable answers (contractions + full forms)
  hint?: string; // Parenthetical hint shown in the question
  explanation: string; // Turkish grammar explanation
}

export interface MultipleChoiceQuestion {
  id: number;
  type: 'multiple-choice';
  sentence: string; // The question/sentence with ______ for blank
  options: string[];
  correctAnswer: string;
  explanation: string; // Turkish grammar explanation
}

export type GrammarQuestion = FillInTheBlankQuestion | MultipleChoiceQuestion;

export interface GrammarSection {
  id: number;
  title: string;
  titleTr: string;
  description: string;
  questions: GrammarQuestion[];
}

export interface VocabularyWord {
  id: number;
  word: string;
  type: string; // verb, noun, adj, adv, phrasal verb, prep, conj, phrase
  meaningTr: string;
  exampleSentence: string;
  exampleSentenceTr: string;
}

export interface VocabQuizQuestion {
  wordId: number;
  sentence: string; // Sentence with blank
  sentenceTr: string; // Turkish translation
  options: string[]; // 4 options
  correctAnswer: string;
  optionMeanings: Record<string, string>; // word -> Turkish meaning
}

export interface QuizResult {
  sectionId: number;
  score: number;
  total: number;
  date: string;
}

export interface FlashcardProgress {
  sectionId: number;
  learnedWordIds: number[];
  date: string;
}

export interface AppProgress {
  grammarResults: QuizResult[];
  vocabQuizResults: QuizResult[];
  flashcardProgress: FlashcardProgress[];
  darkMode?: boolean;
}

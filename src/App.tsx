import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GrammarQuizPage from './pages/GrammarQuizPage';
import VocabQuizPage from './pages/VocabQuizPage';
import FlashcardPage from './pages/FlashcardPage';

type PageState = {
  page: string;
  params?: Record<string, unknown>;
};

export default function App() {
  const [pageState, setPageState] = useState<PageState>({ page: 'home' });

  const handleNavigate = (page: string, params?: Record<string, unknown>) => {
    setPageState({ page, params });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (pageState.page) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'grammarQuiz':
        return (
          <GrammarQuizPage
            sectionId={(pageState.params?.sectionId as number) ?? 1}
            onNavigate={handleNavigate}
          />
        );
      case 'vocabQuizMenu':
        return <VocabQuizPage onNavigate={handleNavigate} />;
      case 'flashcardMenu':
        return <FlashcardPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header currentPage={pageState.page} onNavigate={handleNavigate} />
      <main className="pb-12">
        {renderPage()}
      </main>
      <footer className="text-center py-6 text-sm text-gray-400 border-t border-gray-200 bg-white">
        İngilizce A2 Quiz &amp; Kelime Ezberleme © 2026
      </footer>
    </div>
  );
}

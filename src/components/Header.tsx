export default function Header({ currentPage, onNavigate }: {
  currentPage: string;
  onNavigate: (page: string) => void;
}) {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          <span className="text-2xl">📚</span>
          <span className="hidden sm:inline">İngilizce A2 Quiz &amp; Kelime</span>
          <span className="sm:hidden">A2 Quiz</span>
        </button>

        {currentPage !== 'home' && (
          <button
            onClick={() => onNavigate('home')}
            className="px-3.5 py-1.5 text-sm font-medium rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            ← Ana Sayfa
          </button>
        )}
      </div>
    </header>
  );
}

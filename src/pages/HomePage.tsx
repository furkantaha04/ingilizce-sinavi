import { grammarSections } from '../data/grammar';
import { getBestScore, getFlashcardCompletedSections } from '../hooks/useStorage';

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, unknown>) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const completedFlashcardSections = getFlashcardCompletedSections();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700 rounded-full">
          İngilizce Öğrenme Platformu
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3 tracking-tight">
          İngilizce A2 Seviye Quiz &amp; Kelime Ezber
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          45'er soruluk havuzlardan rastgele 15 soru seçen 9 gramer testi ve 144 kelimelik interaktif ezber kartları.
        </p>
      </div>

      {/* Grammar Section */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📝</span>
            <h2 className="text-2xl font-bold text-gray-800">Gramer Quizleri</h2>
          </div>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            9 Bölüm • 405 Soru Havuzu
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {grammarSections.map((section) => {
            const best = getBestScore(section.id, 'grammar');
            return (
              <button
                key={section.id}
                onClick={() => onNavigate('grammarQuiz', { sectionId: section.id })}
                className="text-left bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-5 border border-gray-200 hover:border-blue-400 group flex flex-col justify-between active:scale-[0.98]"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      Bölüm {section.id}
                    </span>
                    {best !== null && (
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        best >= 12 ? 'bg-green-100 text-green-700'
                        : best >= 9 ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                      }`}>
                        En İyi: {best}/15
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-base leading-snug">
                    {section.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-500 mb-2">
                    {section.titleTr}
                  </p>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>🎯 45 sorudan rastgele 15</span>
                  <span className="font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">Başla →</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Vocabulary Section */}
      <section>
        <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📖</span>
            <h2 className="text-2xl font-bold text-gray-800">Kelime Çalışma Merkezi</h2>
          </div>
          <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            144 Hedef Kelime
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Vocab Quiz Card */}
          <button
            onClick={() => onNavigate('vocabQuizMenu')}
            className="text-left bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-purple-200 hover:border-purple-400 group flex flex-col justify-between active:scale-[0.98]"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-2 bg-purple-100 rounded-xl">🧪</span>
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Cümle Tamamlama</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                Bağlam İçi Kelime Quizi
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Örnek cümle içindeki boşluğa en uygun kelimeyi 4 seçenek arasından bulun. Cevap sonrası cümle ve şık çevirilerini inceleyin.
              </p>
            </div>
            <div className="pt-4 border-t border-purple-100 flex items-center justify-between text-sm font-semibold text-purple-600">
              <span>Karışık 15 Soru veya Paket Testi</span>
              <span className="group-hover:translate-x-1 transition-transform">Teste Başla →</span>
            </div>
          </button>

          {/* Flashcard Card */}
          <button
            onClick={() => onNavigate('flashcardMenu')}
            className="text-left bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-blue-200 hover:border-blue-400 group flex flex-col justify-between active:scale-[0.98]"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl p-2 bg-blue-100 rounded-xl">🃏</span>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">3D Flip Kartlar</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                25'erli Ezber Kartları
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                144 kelimeyi 6 bölümlük akıllı destelerle öğrenin. "Doğru (Biliyorum)" ile kartı tamamlayın, "Yanlış (Tekrar Et)" ile destenin sonuna ekleyip tekrar edin.
              </p>
            </div>
            <div>
              <div className="flex gap-1.5 flex-wrap mb-3">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <span
                    key={i}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                      completedFlashcardSections.includes(i)
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {completedFlashcardSections.includes(i) ? '✓ ' : ''}Bölüm {i}
                  </span>
                ))}
              </div>
              <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-sm font-semibold text-blue-600">
                <span>Desteleri İncele</span>
                <span className="group-hover:translate-x-1 transition-transform">Çalışmaya Başla →</span>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

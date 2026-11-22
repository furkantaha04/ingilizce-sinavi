interface CongratulationsProps {
  sectionNumber: number;
  totalSections: number;
  onNextSection: () => void;
  onHome: () => void;
}

export default function Congratulations({ sectionNumber, totalSections, onNextSection, onHome }: CongratulationsProps) {
  const isLastSection = sectionNumber >= totalSections;

  return (
    <div className="animate-bounce-in max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-7xl mb-4">🎊</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Tebrikler!
      </h2>
      <p className="text-gray-600 mb-2 font-medium">
        Bölüm {sectionNumber} tamamlandı!
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Bu bölümdeki tüm kelimeleri başarıyla öğrendiniz! 🌟
      </p>

      <div className="flex flex-col gap-3">
        {!isLastSection && (
          <button
            onClick={onNextSection}
            className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
          >
            Sonraki Bölüme Geç → Bölüm {sectionNumber + 1}
          </button>
        )}
        {isLastSection && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-2">
            <p className="text-green-700 font-bold">
              🏆 Tüm bölümleri tamamladınız! Harika bir başarı!
            </p>
          </div>
        )}
        <button
          onClick={onHome}
          className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
        >
          ← Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
}

interface QuizResultScreenProps {
  score: number;
  total: number;
  sectionTitle: string;
  onRetry: () => void;
  onHome: () => void;
}

export default function QuizResultScreen({ score, total, sectionTitle, onRetry, onHome }: QuizResultScreenProps) {
  const percentage = Math.round((score / total) * 100);
  const emoji = percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : percentage >= 40 ? '📖' : '💪';
  const message = percentage >= 80
    ? 'Harika! Mükemmel bir sonuç!'
    : percentage >= 60
    ? 'İyi iş! Biraz daha pratikle daha da iyi olabilirsin.'
    : percentage >= 40
    ? 'Fena değil, ama konuyu tekrar etmeni öneririz.'
    : 'Endişelenme! Tekrar çözerek hızla ilerleyebilirsin.';

  return (
    <div className="animate-bounce-in max-w-md mx-auto text-center bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
      <div className="text-6xl mb-4">{emoji}</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Sınav Tamamlandı!</h2>
      <p className="text-sm font-medium text-gray-500 mb-6">{sectionTitle}</p>

      <div className="relative w-32 h-32 mx-auto mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="text-gray-200"
          />
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={`${percentage}, 100`}
            strokeLinecap="round"
            className={percentage >= 60 ? 'text-green-500' : percentage >= 40 ? 'text-yellow-500' : 'text-red-500'}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-3xl font-extrabold ${
            percentage >= 60 ? 'text-green-600'
            : percentage >= 40 ? 'text-yellow-600'
            : 'text-red-600'
          }`}>
            %{percentage}
          </span>
        </div>
      </div>

      <p className="text-lg font-bold text-gray-800 mb-1">
        {score} / {total} Doğru
      </p>
      <p className="text-sm text-gray-500 mb-8">{message}</p>

      <div className="flex flex-col gap-3">
        <button
          onClick={onRetry}
          className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          🔄 Tekrar Çöz / Yeni Sınav (15 Soru)
        </button>
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

interface ProgressBarProps {
  current: number;
  total: number;
  correct: number;
  wrong: number;
  label?: string;
}

export default function ProgressBar({ current, total, correct, wrong, label }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

  return (
    <div className="w-full mb-6">
      {label && (
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-semibold text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-500">{current} / {total}</span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="progress-bar-fill bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex gap-4 mt-2 text-sm font-semibold">
        <span className="flex items-center gap-1.5 text-green-600">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
          Doğru: {correct}
        </span>
        <span className="flex items-center gap-1.5 text-red-600">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />
          Yanlış: {wrong}
        </span>
      </div>
    </div>
  );
}

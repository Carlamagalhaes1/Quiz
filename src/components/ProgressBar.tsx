interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full bg-gray-300 h-4 rounded-full overflow-hidden">
      <div
        style={{ width: `${percent}%` }}
        className="h-full bg-yellow-400 transition-all duration-300"
      ></div>
    </div>
  );
}

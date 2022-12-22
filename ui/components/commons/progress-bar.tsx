interface IProgressBarProps {
  completed: number;
  additional?: number;
  color: string;
  bgColor?: string;
}

const ProgressBar = ({ color, completed, bgColor, additional }: IProgressBarProps) => {
  return (
    <div
      className="w-full flex justify-start rounded overflow-hidden my-1"
      style={{ height: 30, background: bgColor ?? "white" }}
    >
      <div className="flex justify-end h-full" style={{ width: `${completed / 2}%`, background: color }}>
        <span className="text-xl font-bold text-white px-2">{completed / 2}</span>
      </div>
      {additional ? (
        <div className="flex justify-end h-full opacity-50" style={{ width: `${additional / 2}%`, background: color }}>
          <span className="text-xl font-bold text-white px-2">{additional / 2}</span>
        </div>
      ) : null}
    </div>
  );
};

export default ProgressBar;

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: number): TimeLeft {
  const now = new Date().getTime();
  const diff = targetDate - now;

  const days = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0);
  const minutes = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0);
  const seconds = Math.max(Math.floor((diff / 1000) % 60), 0);

  return { days, hours, minutes, seconds };
}

export default function Countdown({expired, className}: {expired?: Date, className?: string}) {
  const targetDate = expired ? expired.getTime() : new Date("2025-12-31T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`flex flex-col items-center justify-center text-white ${className}`}>
      <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4 tracking-wide">COUNTDOWN</h3>

      <div className="flex justify-center gap-2 lg:gap-4">
        <TimeBox label="Day(s)" value={timeLeft.days} />
        <TimeBox label="Hour(s)" value={timeLeft.hours} />
        <TimeBox label="Minute(s)" value={timeLeft.minutes} />
        <TimeBox label="Second(s)" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

interface TimeBoxProps {
  label: string;
  value: number;
}

function TimeBox({ label, value }: TimeBoxProps) {
  return (
    <div className="flex flex-col items-center justify-start">
      <p className="flex items-center justify-center text-sm lg:text-lg font-bold font-mono bg-[#1ab9ad] rounded-2xl w-12 h-12 lg:w-16 lg:h-16">
        {String(value).padStart(2, "0")}
      </p>
      <div className="mt-1 text-xs lg:text-sm text-center">{label}</div>
    </div>
  );
}

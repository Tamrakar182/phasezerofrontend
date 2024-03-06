"use client";
import { useState, useEffect } from "react";
import { generateTimeDisplay, TimeDisplayValues } from "@/lib/util/dateGenerator";

interface CounterProp {
  displayValue: string;
  label: string;
}

const Counter = ({ displayValue, label }: CounterProp) => (
  <div className="flex flex-col font-bold bebasNeue text-center text-white p-[2rem] py-0">
    <h2 className="text-center text-[clamp(1.5rem, 1vw, 99rem)] font-bold tracking-wider overflow-hidden overflow-ellipsis whitespace-nowrap w-full">
      {label}
    </h2>
    <span className="text-6xl">{displayValue}</span>
  </div>
);

interface TimerCountdownProp {
  target: string;
  transparent?: boolean;
}

const Timer = ({ target, transparent }: TimerCountdownProp) => {
  const targetDate = new Date(target).getTime();

  const [timeDisplay, setTimeDisplay] = useState<TimeDisplayValues>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeDisplay = generateTimeDisplay(targetDate);
      setTimeDisplay(newTimeDisplay);

      if (
        newTimeDisplay.days === "00" &&
        newTimeDisplay.hours === "00" &&
        newTimeDisplay.minutes === "00" &&
        newTimeDisplay.seconds === "00"
      ) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`flex w-full ${transparent ? "bg-transparent": "bg-black"} justify-center`}>
      <section className="m-auto p-4 gap-4 flex flex-col items-center md:px-9 md:py-7 text-center b">
        <h2 className="text-2xl-semi bebasNeue text-white">
          Promo Ending In
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-x-8">
          <Counter displayValue={timeDisplay.days} label={"Days"} />
          <Counter displayValue={timeDisplay.hours} label={"Hours"} />
          <Counter displayValue={timeDisplay.minutes} label={"Minutes"} />
          <Counter displayValue={timeDisplay.seconds} label={"Seconds"} />
        </div>
      </section>
    </div>
  );
};

export default Timer;

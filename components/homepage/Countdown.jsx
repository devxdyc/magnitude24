import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-09-16T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max m-5 mb-10  py-10">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-muted rounded-xl">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-muted rounded-xl">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-muted rounded-xl">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.minutes }}>
            {timeLeft.minutes}
          </span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content bg-muted rounded-xl">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": timeLeft.seconds }}>
            {timeLeft.seconds}
          </span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountdownTimer;

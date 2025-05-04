
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set today's date at midnight as the target
    const now = new Date();
    const targetDate = new Date();
    targetDate.setHours(23, 59, 59, 999);
    
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="grid grid-cols-4 gap-4 w-full max-w-md mt-4 animation-delay-500 animate-fade-in">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds }
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-white to-rose-light rounded-lg p-3 w-full text-center shadow-md">
            <span className="font-bold text-2xl text-rose">{item.value.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs uppercase text-gray-600 mt-2">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;

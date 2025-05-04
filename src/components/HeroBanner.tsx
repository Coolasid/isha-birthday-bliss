
import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake } from "lucide-react";
import CountdownTimer from './CountdownTimer';

const HeroBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4">
      <div className={`absolute inset-0 z-0 bg-rose-light bg-opacity-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/ff281cc7-dbad-4488-badf-4ce24d70b7f7.png')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="absolute w-full h-full flex items-center justify-center z-0">
        <div className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-rose-light via-rose to-rose-dark opacity-30 animate-pulse-soft blur-3xl"></div>
      </div>
      
      <Card className={`max-w-3xl w-full bg-white/90 backdrop-blur-lg border-none shadow-xl z-10 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-1000`}>
        <div className="flex flex-col items-center text-center p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-light via-rose to-gold"></div>
          
          <Cake className="w-12 h-12 text-rose animate-float mb-4" />
          
          <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl font-bold text-rose mb-2 animate-fade-in">
            Happy Birthday Isha!
          </h1>
          
          <p className="text-lg md:text-xl font-poppins text-gray-700 mb-6 animation-delay-300 animate-fade-in">
            Celebrating another beautiful year of your amazing life
          </p>
          
          <CountdownTimer />
          
          <Button className="mt-6 bg-rose hover:bg-rose-dark text-white font-medium px-8 py-6 text-lg rounded-full animation-delay-700 animate-fade-in">
            Celebrate With Us
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HeroBanner;

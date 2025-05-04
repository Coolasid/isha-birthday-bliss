
import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake, PartyPopper } from "lucide-react";
import CountdownTimer from './CountdownTimer';
import Confetti from 'react-confetti';
import { useToast } from "@/hooks/use-toast";

const HeroBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCelebrate = () => {
    setShowConfetti(true);
    
    toast({
      title: "It's celebration time! 🎉",
      description: "Happy Birthday Isha! Wishing you joy, laughter, and all the happiness in the world.",
      variant: "default",
      duration: 5000,
    });
    
    // Automatically stop confetti after some time
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-4">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          colors={['#E63946', '#FFD700', '#FFCCD5', '#FFF1E6', '#C1121F']}
        />
      )}
      
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
          
          <Button 
            onClick={handleCelebrate}
            className="mt-6 bg-gradient-to-r from-rose to-gold hover:from-rose-dark hover:to-gold text-white font-medium px-8 py-6 text-lg rounded-full animation-delay-700 animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            <PartyPopper className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Celebrate With Us
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HeroBanner;

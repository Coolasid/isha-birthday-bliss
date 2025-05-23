
import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cake, PartyPopper, Heart, Gift, Star, Sparkles } from "lucide-react";
import CountdownTimer from './CountdownTimer';
import Confetti from 'react-confetti';
import { useToast } from "@/hooks/use-toast";

const HeroBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsVisible(true);
    
    // Start the floating animation after a delay
    setTimeout(() => {
      setIsFloating(true);
    }, 2000);
  }, []);

  const handleCelebrate = () => {
    setShowConfetti(true);
    
    toast({
      title: "It's celebration time! 🎉",
      description: "Happy Birthday Isha! Wishing you joy, laughter, and all the happiness in the world.",
      variant: "default",
      duration: 5000,
    });
    
    // Show different toasts in sequence
    setTimeout(() => {
      toast({
        title: "Hooray! 🎈",
        description: "May this special day bring countless happiness and endless joy to your life!",
        variant: "default",
        duration: 4000,
      });
    }, 2000);
    
    // Automatically stop confetti after some time
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  const addHeart = () => {
    setHeartCount(prev => Math.min(prev + 1, 30));
    
    if (heartCount === 5) {
      toast({
        title: "Aww! So much love! ❤️",
        description: "Keep clicking for more birthday magic!",
        duration: 3000,
      });
    }
    
    if (heartCount === 15) {
      toast({
        title: "You're amazing! 🌟",
        description: "Isha is lucky to have a friend like you!",
        duration: 3000,
      });
    }
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
      
      {/* Floating hearts */}
      {Array.from({ length: heartCount }).map((_, index) => (
        <div 
          key={index}
          className="absolute z-20 animate-float opacity-70"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 80 + 10}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `scale(${0.5 + Math.random() * 1})`,
            color: index % 3 === 0 ? '#E63946' : index % 3 === 1 ? '#FFD700' : '#FFCCD5'
          }}
        >
          ❤️
        </div>
      ))}
      
      {/* Background gradient */}
      <div className={`absolute inset-0 z-0 bg-rose-light bg-opacity-20 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/ff281cc7-dbad-4488-badf-4ce24d70b7f7.png')] bg-cover bg-center opacity-20"></div>
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute w-full h-full flex items-center justify-center z-0">
        <div className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-rose-light via-rose to-rose-dark opacity-30 animate-pulse-soft blur-3xl"></div>
      </div>
      
      {/* Floating decorative elements */}
      <div className={`absolute top-20 left-[15%] transform ${isFloating ? 'animate-float' : ''} text-rose opacity-70 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Gift size={28} className="text-gold" />
      </div>
      <div className={`absolute bottom-32 left-[25%] transform ${isFloating ? 'animate-float' : ''} text-gold opacity-70 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1.5s' }}>
        <Star size={24} fill="currentColor" />
      </div>
      <div className={`absolute top-40 right-[20%] transform ${isFloating ? 'animate-float' : ''} text-rose-light opacity-70 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
        <Sparkles size={32} />
      </div>
      <div className={`absolute bottom-20 right-[30%] transform ${isFloating ? 'animate-float' : ''} text-gold opacity-70 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '2s' }}>
        <Gift size={20} className="text-rose" />
      </div>
      
      <Card className={`max-w-3xl w-full bg-white/90 backdrop-blur-lg border-none shadow-xl z-10 overflow-hidden transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-1000`}>
        <div className="flex flex-col items-center text-center p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-light via-rose to-gold"></div>
          
          {/* Interactive cake icon */}
          <div 
            onClick={addHeart}
            className="cursor-pointer transition-transform hover:scale-125 duration-300"
            title="Click me for magic!"
          >
            <Cake className="w-12 h-12 text-rose animate-float mb-4" />
          </div>
          
          <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl font-bold text-rose mb-2 animate-fade-in">
            Happy Birthday Isha!
          </h1>
          
          <p className="text-lg md:text-xl font-poppins text-gray-700 mb-6 animation-delay-300 animate-fade-in">
            Celebrating another beautiful year of your amazing life
          </p>
          
          <CountdownTimer />
          
          <Button 
            onClick={handleCelebrate}
            className="mt-6 bg-gradient-to-r from-rose to-gold hover:from-rose-dark hover:to-gold text-white font-medium px-8 py-6 text-lg rounded-full animation-delay-700 animate-fade-in transition-all duration-300 hover:scale-110 hover:shadow-lg group"
          >
            <PartyPopper className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Celebrate With Us
          </Button>

          <div className="mt-4 text-sm text-gray-500 opacity-70 italic">
            (Psst! Try clicking on the cake above!)
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeroBanner;

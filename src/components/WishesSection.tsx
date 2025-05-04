
import React from 'react';
import { Card } from "@/components/ui/card";
import { Gift } from "lucide-react";

const wishes = [
  {
    text: "May your birthday be as bright and beautiful as your smile, Isha! Your friendship is a gift I treasure every day.",
    author: "With love from your best friend"
  },
  {
    text: "To the most amazing friend anyone could ask for - you light up every room with your presence. May this year bring you all the happiness you deserve!",
    author: "Happy Birthday!"
  },
  {
    text: "Isha, your kindness and warmth make this world a better place. Thank you for being the incredible person you are. Wishing you endless joy!",
    author: "Celebrating you today and always"
  }
];

const WishesSection: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-cream to-rose-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Gift className="w-10 h-10 text-rose mb-4" />
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-rose mb-4">Birthday Wishes</h2>
          <p className="text-lg text-gray-600 text-center max-w-xl">
            Heartfelt messages for a special soul who brightens our days
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <Card key={index} className="p-8 bg-white border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col h-full">
                <div className="text-2xl text-rose mb-2">"</div>
                <p className="text-lg text-gray-700 italic mb-6 flex-grow">{wish.text}</p>
                <div className="text-gold font-medium">{wish.author}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-dancing text-3xl text-rose mb-4">Celebrating Your Special Day</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Dear Isha, on your birthday, I want to celebrate not just another year of your life, but the wonderful person you are. Your kindness, laughter, and friendship make life more beautiful. May this year bring you all the love, joy, and success you deserve. Cheers to you! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishesSection;

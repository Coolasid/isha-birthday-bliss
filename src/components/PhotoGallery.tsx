
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Images, ArrowRight, ArrowLeft } from "lucide-react";

const photos = [
  "/public/lovable-uploads/ff281cc7-dbad-4488-badf-4ce24d70b7f7.png",
  "/public/lovable-uploads/23428d74-7937-4dfd-ae01-ccbbcae1e6d6.png",
  "/public/lovable-uploads/a5d1c7ca-4c87-4718-9b92-bd24495d44e6.png",
  "/public/lovable-uploads/619a78ca-09c5-46ee-9a27-76456da7e772.png",
  "/public/lovable-uploads/dd82e802-1127-4258-8a06-cfd66da94eed.png",
  "/public/lovable-uploads/fd2a20ca-4127-476b-8d28-a9484aef50af.png"
];

const PhotoGallery: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <Images className="w-10 h-10 text-rose mb-4" />
          <h2 className="font-dancing text-4xl md:text-5xl font-bold text-rose mb-4">Beautiful Memories</h2>
          <p className="text-lg text-gray-600 text-center max-w-xl">
            Each picture captures a moment of your radiant smile and vibrant spirit
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl">
                  <div className="aspect-square w-full">
                    <img 
                      src={photo} 
                      alt={`Isha - Photo ${index + 1}`} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-none bg-transparent">
                <div className="relative w-full bg-black/90 backdrop-blur-xl rounded-lg overflow-hidden">
                  <img 
                    src={photos[currentPhoto]} 
                    alt={`Isha - Full view ${currentPhoto + 1}`}
                    className="w-full max-h-[80vh] object-contain"
                  />
                  
                  <button 
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-colors duration-300"
                  >
                    <ArrowLeft className="w-6 h-6 text-white" />
                  </button>
                  
                  <button 
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 backdrop-blur-sm transition-colors duration-300"
                  >
                    <ArrowRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;

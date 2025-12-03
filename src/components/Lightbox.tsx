import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

interface LightboxProps {
  images: { url: string; title: string; location: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export const Lightbox = ({ images, currentIndex, isOpen, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const goToPrevious = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!images.length) return null;

  const currentImage = images[index];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Previous Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20"
              onClick={goToPrevious}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
          )}

          {/* Image */}
          <div className="flex flex-col items-center justify-center w-full h-full p-16">
            <img
              src={currentImage.url}
              alt={`${currentImage.title} - ${currentImage.location}`}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <h3 className="text-white text-xl font-playfair font-bold mb-1">
                {currentImage.title}
              </h3>
              <p className="text-white/70">{currentImage.location}</p>
              <p className="text-white/50 text-sm mt-2">
                {index + 1} / {images.length}
              </p>
            </div>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20"
              onClick={goToNext}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

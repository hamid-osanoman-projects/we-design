import { useState } from "react";
import { Card } from "@/components/ui/card";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before transformation",
  afterAlt = "After transformation"
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    handleMove(touch.clientX, rect);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <Card className="overflow-hidden">
      <div
        className="relative w-full aspect-[16/9] select-none cursor-col-resize"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onClick={handleClick}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={afterAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 right-4 bg-gray-700 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            After
          </div>
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
            Before
          </div>
        </div>

        {/* Slider Line */}
<div
  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
  style={{ left: `${sliderPosition}%` }}
  onMouseDown={handleMouseDown}
  onTouchStart={handleMouseDown}
>
  {/* Slider Handle */}
  <div 
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center"
  >
    <div className="flex gap-1 pointer-events-none">
      <div className="w-0.5 h-6 bg-primary" />
      <div className="w-0.5 h-6 bg-primary" />
    </div>
  </div>
</div>
        
      </div>
    </Card>
  );
};

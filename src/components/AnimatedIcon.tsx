import Lottie from "lottie-react";
import { cn } from "@/lib/utils";

interface AnimatedIconProps {
  animationData: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const AnimatedIcon = ({ 
  animationData, 
  className,
  loop = true,
  autoplay = true
}: AnimatedIconProps) => {
  return (
    <div className={cn("w-full h-full", className)}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

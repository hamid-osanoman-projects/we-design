import React from "react";


const MarqueeSection = () => {
  const textItem = "WE CARE ✦ WE'RE CREATIVE ✦ WE DELIVER ✦";

  // FIX: Increased from 4 to 8. 
  // This ensures the text chain is longer than even large 4k monitors.
  const repeatCount = 8;

  // Create an array of the text item repeated N times
  const repeatedText = Array(repeatCount).fill(textItem);

  return (
    // The outer container has the background color and hides the scrollbar
    
    <div className="w-full  overflow-hidden bg-[#F28C28] py-1">
      <div className="marquee-track">
        
        {/* CONTENT SET 1 */}
        <div className="marquee-content">
          {repeatedText.map((item, index) => (
            <span key={`p1-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>

        {/* CONTENT SET 2 (Duplicate for the loop) */}
        <div className="marquee-content" aria-hidden="true">
          {repeatedText.map((item, index) => (
            <span key={`p2-${index}`} className="marquee-item">
              {item}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MarqueeSection;
# Lottie Animation Integration Guide

## 🎯 Project Setup Complete
The `lottie-react` library has been installed and a reusable `AnimatedIcon` component has been created.

## 📦 Where to Get Animated Icons

### Recommended Sources:
1. **LottieFiles** (https://lottiefiles.com)
   - Free and premium animated icons
   - Search for: "award", "factory", "clock", "sparkles"
   - Filter by: Clean/Minimal style, 1-2 second duration
   - Download as JSON

2. **IconScout Lottie** (https://iconscout.com/lottie-animations)
   - Premium animated icons
   - Professional quality

3. **Custom Creation**:
   - Use Adobe After Effects + Bodymovin plugin
   - Use Figma + LottieFiles plugin
   - Hire on Fiverr/Upwork for custom animations

## 🎨 Animation Style Guide (for your brand)

Based on your project's design system:
- **Colors**: Use your brand's HSL color palette
  - Primary: Gold/warm tones (hsl(var(--primary)))
  - Background: Clean whites/soft grays
  - Accent: Subtle highlights

- **Animation Style**:
  - Clean, minimal transitions
  - Smooth easing (ease-in-out)
  - Duration: 1-2 seconds
  - Seamless loop
  - No harsh movements

- **Effects to Use**:
  - ✅ Gentle scale (95% → 105%)
  - ✅ Fade in/out
  - ✅ Smooth rotation
  - ✅ Draw/stroke animations
  - ✅ Subtle bounces
  - ❌ Avoid: Rapid movements, harsh colors, complex effects

## 📥 How to Add Lottie Animations to Your Project

### Step 1: Create animations folder
```bash
mkdir -p src/assets/animations
```

### Step 2: Add JSON files
Download Lottie JSON files and place them in `src/assets/animations/`:
```
src/assets/animations/
├── award.json
├── factory.json
├── clock.json
├── sparkles.json
└── ... (other icons)
```

### Step 3: Update `src/data/lottieAnimations.ts`
```typescript
import awardAnimation from "@/assets/animations/award.json";
import factoryAnimation from "@/assets/animations/factory.json";
import clockAnimation from "@/assets/animations/clock.json";
import sparklesAnimation from "@/assets/animations/sparkles.json";

export const lottieAnimations = {
  award: awardAnimation,
  factory: factoryAnimation,
  clock: clockAnimation,
  sparkles: sparklesAnimation,
};
```

### Step 4: Use in components
Example for USPGrid:
```tsx
import { AnimatedIcon } from "@/components/AnimatedIcon";
import { lottieAnimations } from "@/data/lottieAnimations";

const usps = [
  { animation: lottieAnimations.award, text: "15+ Years" },
  { animation: lottieAnimations.factory, text: "In-House Factory" },
  { animation: lottieAnimations.clock, text: "On-Time Delivery" },
  { animation: lottieAnimations.sparkles, text: "Creative Team" }
];

// In JSX:
<AnimatedIcon 
  animationData={usp.animation}
  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
  loop={true}
  autoplay={true}
  speed={1}
/>
```

## 🎬 Recommended Animations for Your Icons

### 1. Award (15+ Years)
- **Animation**: Gold medal rotates gently with shine effect
- **Duration**: 1.5s loop
- **Colors**: Gold gradient (HSL matching --primary)
- **Effect**: Rotate 360° + sparkle shine on medal surface

### 2. Factory (In-House Factory)
- **Animation**: Factory building with smoke rising from chimney
- **Duration**: 2s loop
- **Colors**: Gray building, white smoke
- **Effect**: Smoke particles float upward, gentle sway

### 3. Clock (On-Time Delivery)
- **Animation**: Clock hands moving smoothly
- **Duration**: 1.5s loop
- **Colors**: Black/dark gray outline, gold hands
- **Effect**: Second hand sweeps, subtle tick movement

### 4. Sparkles (Creative Team)
- **Animation**: Multiple stars twinkling
- **Duration**: 1.2s loop
- **Colors**: Gold/yellow sparkles
- **Effect**: Stars scale up/down, fade in/out, random positions

## 🔧 Component Props

```tsx
<AnimatedIcon
  animationData={jsonData}  // Required: Lottie JSON object
  className="w-16 h-16"     // Optional: Custom sizing
  loop={true}               // Optional: Loop animation (default: true)
  autoplay={true}           // Optional: Auto-start (default: true)
  speed={1}                 // Optional: Animation speed (default: 1)
/>
```

## 🎨 Testing & Refinement

1. **Preview before integrating**: Use https://lottiefiles.com/preview to test animations
2. **Check file size**: Keep JSON under 50KB for performance
3. **Test on mobile**: Ensure animations don't lag on slower devices
4. **Adjust speed**: Use `speed` prop to fine-tune animation pace

## 📝 Current Icons to Animate

Based on your project, animate these icons:

**USP Section (Homepage)**:
- Award icon → Award animation
- Factory icon → Factory animation
- Clock icon → Clock animation
- Sparkles icon → Sparkles animation

**Service Cards**:
- Interior Architecture icon
- Space Planning icon
- Fit-Out icon
- Custom Furniture icon
- Kitchen icon
- Wardrobe icon
- Lighting icon
- Flooring icon
- Landscape icon

**About Page**:
- Heart icon (We Care)
- Sparkles icon (We're Creative)
- Check icon (We Deliver)

## 🚀 Next Steps

1. Visit LottieFiles.com and search for animations matching your icons
2. Download 4 animations for the USP section first (award, factory, clock, sparkles)
3. Place JSON files in `src/assets/animations/`
4. Update `src/data/lottieAnimations.ts` with imports
5. Update `src/components/USPGrid.tsx` to use `AnimatedIcon` instead of lucide icons
6. Test and refine animation speed/loop settings
7. Repeat for other icon sections

Let me know once you have the Lottie JSON files, and I'll help integrate them!

import React, { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide scrollbars on body while slash is active
    document.body.style.overflow = "hidden";

    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Completely finish and unmount after 2.8 seconds
    const completeTimer = setTimeout(() => {
      document.body.style.overflow = "unset";
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  return (
    <div
      id="splash-screen"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-300 ease-out select-none ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-6 max-w-md md:max-w-xl px-4">
        {/* Animated Centered Logo Panel */}
        <div className="relative animate-in fade-in zoom-in-95 duration-700 ease-out flex justify-center items-center">
          <img
            src="https://i.ibb.co/qMB5nShv/Picsart-26-06-02-08-26-44-436.png"
            alt="Dire Dawa Ras Hotel Logo"
            className="h-44 sm:h-56 md:h-64 lg:h-72 w-auto max-w-[85vw] object-contain drop-shadow-md select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Elegant Minimalist Animated Loader */}
        <div className="flex flex-col items-center space-y-2 mt-4">
          <div className="w-40 h-[2px] bg-stone-100 rounded-full overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 bg-[#9C2A2A] rounded-full animate-pulse-loader w-full h-full" style={{
              animation: "loadingBar 2.5s cubic-bezier(0.1, 0.85, 0.25, 1) forwards"
            }} />
          </div>
          <p className="font-serif text-[10px] uppercase tracking-[0.3em] text-black font-bold animate-pulse">
            Loading Heritage...
          </p>
        </div>
      </div>

      {/* Styled animation block for the loader bar */}
      <style>{`
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

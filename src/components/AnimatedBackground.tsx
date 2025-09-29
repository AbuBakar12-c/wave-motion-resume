import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [orbs, setOrbs] = useState<Array<{ id: number; size: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    const generateOrbs = () => {
      const newOrbs = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        size: Math.random() * 200 + 100,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
      }));
      setOrbs(newOrbs);
    };

    generateOrbs();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated waves */}
      <div className="waves-bg" />
      
      {/* Floating dots pattern */}
      <div className="dots-pattern" />
      
      {/* Gradient orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="gradient-orb"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
      
      {/* Additional decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-10 w-1 h-1 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};
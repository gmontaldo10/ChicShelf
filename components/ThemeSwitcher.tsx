
import React from 'react';
import { Theme } from '../types';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  borderClass: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ currentTheme, onThemeChange, borderClass }) => {
  const themes: { id: Theme; label: string }[] = [
    { id: 'editor', label: 'EDITOR' },
    { id: 'runway', label: 'RUNWAY' },
    { id: 'studio', label: 'STUDIO' },
    { id: 'dryFlower', label: 'DRY FLOWER' },
  ];

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 opacity-40 hover:opacity-100 transition-opacity duration-500`}>
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => onThemeChange(t.id)}
          className={`text-[8px] tracking-[0.3em] font-bold transition-all duration-300 ${
            currentTheme === t.id 
              ? 'underline underline-offset-4' 
              : 'hover:opacity-80'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;


import { ThemeColors, Theme } from './types';

export const THEME_CONFIG: Record<Theme, ThemeColors> = {
  editor: {
    bg: 'bg-[#ffffff]',
    text: 'text-[#000000]',
    accent: 'bg-[#ff3e00] text-white', // Vibrant Vermilion for "more life"
    border: 'border-[#000000]',
    cardBg: 'bg-[#ffffff]',
  },
  runway: {
    bg: 'bg-[#1a1a1a]', // Deep Black
    text: 'text-[#f1f1f1]', // Off White
    accent: 'bg-[#95a5a6] text-black', // Metallic Silver
    border: 'border-[#f1f1f1]',
    cardBg: 'bg-[#262626]',
  },
  studio: {
    bg: 'bg-[#fff0f5]', // Pastel Pink
    text: 'text-[#4a0404]', // Burgundy
    accent: 'bg-[#800020] text-white', // Deep Burgundy
    border: 'border-[#800020]',
    cardBg: 'bg-[#fffcfd]',
  },
  dryFlower: {
    bg: 'bg-[#f4e1d2]', // Pale Tan
    text: 'text-[#7d4f50]', // Old Rose
    accent: 'bg-[#ac8e82] text-white', // Taupe
    border: 'border-[#7d4f50]',
    cardBg: 'bg-[#faf3ed]',
  },
};

export const PLACEHOLDER_COVERS = [
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
];

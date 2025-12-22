
export type Theme = 'editor' | 'runway' | 'studio' | 'dryFlower';
export type Section = 'shelf' | 'list' | 'cluster' | 'library';

export interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  summary: string;
  coverUrl: string;
  createdAt: number;
}

export interface ThemeColors {
  bg: string;
  text: string;
  accent: string;
  border: string;
  cardBg: string;
}

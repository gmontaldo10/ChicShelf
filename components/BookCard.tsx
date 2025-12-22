
import React from 'react';
import { Book, ThemeColors } from '../types';

interface BookCardProps {
  book: Book;
  theme: ThemeColors;
  onDelete: (id: string) => void;
  onEdit: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, theme, onDelete, onEdit }) => {
  const handleGoodreads = () => {
    window.open(`https://www.goodreads.com/search?q=${encodeURIComponent(book.title + ' ' + book.author)}`, '_blank');
  };

  return (
    <div className={`group relative border-2 ${theme.border} ${theme.cardBg} transition-all duration-500 hover:shadow-2xl flex flex-col h-full`}>
      <div className="relative aspect-[4/5] overflow-hidden border-b-2 bg-neutral-200">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute top-0 right-0 p-1.5 ${theme.text} bg-white/40 backdrop-blur-md text-[8px] font-bold tracking-tighter`}>
          {book.year}
        </div>
      </div>
      
      <div className="p-3 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-high-fashion text-lg uppercase tracking-tight leading-none mb-1 group-hover:italic transition-all duration-300">
            {book.title}
          </h3>
          <p className="font-serif text-xs italic mb-2 opacity-70">by {book.author}</p>
          <p className="text-[10px] uppercase tracking-widest font-semibold leading-tight mb-4 line-clamp-2">
            "{book.summary}"
          </p>
        </div>

        <div className="flex flex-col gap-1.5 relative">
          <button 
            onClick={handleGoodreads}
            className={`w-full py-1.5 border ${theme.border} text-[9px] tracking-[0.15em] font-bold uppercase transition-all hover:invert`}
          >
            Goodreads
          </button>
          
          <div className="flex justify-between items-center mt-1 h-3">
            <button 
              onClick={() => onDelete(book.id)}
              className="text-[8px] uppercase tracking-widest text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Remove
            </button>
            <button 
              onClick={() => onEdit(book)}
              className="text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-40 hover:opacity-100 transition-opacity font-bold italic"
            >
              edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

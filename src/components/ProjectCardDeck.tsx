import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ProjectCategoryType } from '../data/projects';

export interface DeckItem {
  id?: string;
  name: string;
  tag: string;
  image: string;
  link?: string;
  github?: string;
}

interface ProjectCardDeckProps {
  items: DeckItem[];
  categoryType: ProjectCategoryType;
  onOpenCategory: (category: ProjectCategoryType) => void;
  onSelectProject?: (projectId: string) => void;
}

export const ProjectCardDeck: React.FC<ProjectCardDeckProps> = ({
  items,
  categoryType,
  onOpenCategory,
  onSelectProject,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const isAi = categoryType === 'ai';
  const total = items.length;

  // Ensure deck returns to stack whenever mouse leaves the stage area
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (stageRef.current && !stageRef.current.contains(e.target as Node)) {
        setIsHovered(false);
        setHoveredCardIdx(null);
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const nextCard = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevCard = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const selectCard = (index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (index === activeIndex) {
      // If clicking already active card, open category or project
      const item = items[index];
      if (item.id && onSelectProject) {
        onSelectProject(item.id);
      } else {
        onOpenCategory(categoryType);
      }
    } else {
      setActiveIndex(index);
    }
  };

  // The deck fans out ONLY when hovered inside the stage
  const showFanned = isHovered;

  return (
    <div className="mt-6 space-y-3 select-none">
      {/* 3D Card Deck Stage */}
      <div
        ref={stageRef}
        className="relative w-full h-[250px] sm:h-[270px] rounded-2xl bg-gradient-to-b from-slate-950/80 to-slate-900/40 border border-white/5 p-3 flex items-center justify-center overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredCardIdx(null);
        }}
        onClick={() => nextCard()}
      >
        {/* Subtle deck surface glow backdrop */}
        <div
          className={`absolute inset-x-12 bottom-0 h-28 blur-2xl opacity-20 pointer-events-none rounded-full transition-colors duration-500 ${
            isAi ? 'bg-purple-500' : 'bg-cyan-500'
          }`}
        />

        {/* Deck Cards Container with 3D perspective */}
        <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
          {items.map((item, idx) => {
            // Calculate relative offset from active card
            const diff = (idx - activeIndex + total) % total;
            const isTopCard = diff === 0;
            const isHoveredCard = hoveredCardIdx === idx;

            // STACKED MODE: layered depth with offsets & rotation
            let stackX = 0;
            let stackY = 0;
            let stackRotate = 0;
            let stackScale = 1;
            let zIndex = total - diff;
            let opacity = 1;

            if (diff === 0) {
              // Front card
              stackX = 0;
              stackY = 0;
              stackRotate = 0;
              stackScale = 1;
              zIndex = 40;
              opacity = 1;
            } else if (diff === 1) {
              // 2nd card
              stackX = total === 2 ? 14 : 10;
              stackY = -10;
              stackRotate = total === 2 ? 4 : 3;
              stackScale = 0.95;
              zIndex = 30;
              opacity = 0.88;
            } else if (diff === 2) {
              // 3rd card
              stackX = -12;
              stackY = -18;
              stackRotate = -3.5;
              stackScale = 0.90;
              zIndex = 20;
              opacity = 0.72;
            } else {
              // 4th+ card
              stackX = 14;
              stackY = -26;
              stackRotate = 5;
              stackScale = 0.85;
              zIndex = 10;
              opacity = 0.55;
            }

            // FANNED MODE: spread out horizontally across the deck stage
            let fanX = 0;
            let fanY = 0;
            let fanRotate = 0;
            let fanScale = 0.92;
            let fanZIndex = 20 + idx;

            if (total === 2) {
              // 2 cards layout
              fanX = idx === 0 ? -65 : 65;
              fanRotate = idx === 0 ? -5 : 5;
              fanScale = 0.94;
            } else if (total === 3) {
              // 3 cards layout
              const spread = [-100, 0, 100];
              const rots = [-6, 0, 6];
              fanX = spread[idx] || 0;
              fanRotate = rots[idx] || 0;
              fanScale = idx === activeIndex ? 0.96 : 0.91;
            } else {
              // 4 cards layout (standard for web projects)
              const spread = [-115, -40, 40, 115];
              const rots = [-7, -2.5, 2.5, 7];
              const yOffsets = [6, -2, -2, 6];
              fanX = spread[idx] !== undefined ? spread[idx] : 0;
              fanRotate = rots[idx] !== undefined ? rots[idx] : 0;
              fanY = yOffsets[idx] !== undefined ? yOffsets[idx] : 0;
              fanScale = idx === activeIndex ? 0.96 : 0.90;
            }

            // If an individual card is hovered while fanned, lift it dramatically
            if (showFanned && isHoveredCard) {
              fanY -= 20;
              fanScale = 1.04;
              fanZIndex = 60;
            } else if (!showFanned && isTopCard && isHovered) {
              stackY -= 6;
              stackScale = 1.02;
            }

            const targetX = showFanned ? fanX : stackX;
            const targetY = showFanned ? fanY : stackY;
            const targetRotate = showFanned ? fanRotate : stackRotate;
            const targetScale = showFanned ? fanScale : stackScale;
            const targetZIndex = showFanned ? fanZIndex : zIndex;
            const targetOpacity = showFanned ? 1 : opacity;

            return (
              <motion.div
                key={item.name}
                initial={false}
                animate={{
                  x: targetX,
                  y: targetY,
                  rotate: targetRotate,
                  scale: targetScale,
                  zIndex: targetZIndex,
                  opacity: targetOpacity,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 26,
                  mass: 0.8,
                }}
                onMouseEnter={() => {
                  setHoveredCardIdx(idx);
                }}
                onMouseLeave={() => {
                  setHoveredCardIdx((prev) => (prev === idx ? null : prev));
                }}
                onClick={(e) => selectCard(idx, e)}
                className={`absolute w-[240px] sm:w-[260px] aspect-[16/11] rounded-xl overflow-hidden shadow-2xl border transition-colors cursor-pointer group/card ${
                  isTopCard
                    ? isAi
                      ? 'border-purple-400/50 shadow-[0_12px_30px_rgba(168,85,247,0.25)]'
                      : 'border-cyan-400/50 shadow-[0_12px_30px_rgba(6,182,212,0.25)]'
                    : 'border-white/15 hover:border-white/40 shadow-black/80'
                } bg-slate-950`}
                style={{
                  transformOrigin: 'bottom center',
                }}
              >
                {/* Playing Card Top Bar / Suit Glyph */}
                <div className="absolute top-2 left-2 right-2 z-20 flex items-center justify-between pointer-events-none">
                  <span
                    className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full backdrop-blur-md border ${
                      isTopCard
                        ? isAi
                          ? 'bg-purple-950/80 border-purple-400/40 text-purple-200'
                          : 'bg-cyan-950/80 border-cyan-400/40 text-cyan-200'
                        : 'bg-slate-950/80 border-white/20 text-slate-300'
                    }`}
                  >
                    {isAi ? '◈ AI' : '♠ WEB'}
                  </span>

                  <span className="text-[9px] font-mono font-bold text-white/90 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Preview Image */}
                <div className="w-full h-full relative overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                  />

                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                {/* Card Bottom Meta Bar */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 bg-slate-950/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-2 z-20">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-white truncate group-hover/card:text-cyan-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 truncate">
                      {item.tag}
                    </p>
                  </div>

                  {/* Quick Action Button */}
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center border transition-all ${
                        isAi
                          ? 'border-purple-500/30 bg-purple-950/60 text-purple-300 hover:bg-purple-900/80 hover:text-white'
                          : 'border-cyan-500/30 bg-cyan-950/60 text-cyan-300 hover:bg-cyan-900/80 hover:text-white'
                      }`}
                      title={`Open ${item.name} live`}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenCategory(categoryType);
                      }}
                      className="shrink-0 w-6 h-6 rounded-md flex items-center justify-center border border-white/20 bg-slate-900 text-slate-300 hover:text-white hover:border-white/40 transition-all"
                      title="View details"
                    >
                      <Eye className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Deck Bottom Navigation Bar (Pills & Arrows) */}
      <div className="flex items-center justify-between pt-1">
        {/* Navigation Step Arrows */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={prevCard}
            className="w-7 h-7 rounded-lg bg-slate-950/70 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            title="Previous card"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={nextCard}
            className="w-7 h-7 rounded-lg bg-slate-950/70 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
            title="Next card"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card Indicators (Dots / Pills) */}
        <div className="flex items-center gap-1.5">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.name}
                type="button"
                onClick={(e) => selectCard(idx, e)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? isAi
                      ? 'w-6 h-1.5 bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                      : 'w-6 h-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/50'
                }`}
                title={`Switch to ${item.name}`}
              />
            );
          })}
        </div>

        {/* Active Card Label Hint */}
        <div className="text-[10px] font-mono text-slate-400 truncate max-w-[130px] sm:max-w-[170px] text-right">
          Active: <span className="text-white font-medium">{items[activeIndex]?.name}</span>
        </div>
      </div>
    </div>
  );
};

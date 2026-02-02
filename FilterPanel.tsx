import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FilterPanelProps {
  filters: {
    categories: string[];
    functionalities: string[];
    techStack: string[];
    minTrustScore: number;
    handoverDifficulty: string[];
  };
  setFilters: (filters: any) => void;
}

export function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    functionality: true,
    techStack: true,
    trustScore: true,
    difficulty: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const categories = ['Trading', 'Social Media', 'Business', 'DeFi', 'Community', 'E-commerce'];
  const functionalities = [
    'trading bot',
    'X poster',
    'discord bot',
    'tg bot',
    'web agents',
    'token deployer',
    'lead generator/cold outreach',
  ];
  const techStacks = ['OpenAI', 'Anthropic', 'Local/OpenSource', 'DeepSeek'];
  const difficulties = ['no-code', 'javascript', 'python', 'advanced'];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sticky top-20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Filters</h3>
        <button
          onClick={() => setFilters({
            categories: [],
            functionalities: [],
            techStack: [],
            minTrustScore: 0,
            handoverDifficulty: [],
          })}
          className="text-sm text-purple-400 hover:text-purple-300"
        >
          Clear all
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <button
          onClick={() => toggleSection('category')}
          className="flex items-center justify-between w-full mb-2 text-sm font-medium"
        >
          Category
          {expandedSections.category ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({ ...filters, categories: [...filters.categories, cat] });
                    } else {
                      setFilters({
                        ...filters,
                        categories: filters.categories.filter(c => c !== cat),
                      });
                    }
                  }}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-zinc-300">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Functionality Filter */}
      <div className="mb-4 border-t border-zinc-800 pt-4">
        <button
          onClick={() => toggleSection('functionality')}
          className="flex items-center justify-between w-full mb-2 text-sm font-medium"
        >
          Functionality
          {expandedSections.functionality ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.functionality && (
          <div className="space-y-2">
            {functionalities.map((func) => (
              <label key={func} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.functionalities.includes(func)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({ ...filters, functionalities: [...filters.functionalities, func] });
                    } else {
                      setFilters({
                        ...filters,
                        functionalities: filters.functionalities.filter(f => f !== func),
                      });
                    }
                  }}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-zinc-300">{func}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Tech Stack Filter */}
      <div className="mb-4 border-t border-zinc-800 pt-4">
        <button
          onClick={() => toggleSection('techStack')}
          className="flex items-center justify-between w-full mb-2 text-sm font-medium"
        >
          Tech Stack
          {expandedSections.techStack ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.techStack && (
          <div className="space-y-2">
            {techStacks.map((tech) => (
              <label key={tech} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.techStack.includes(tech)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({ ...filters, techStack: [...filters.techStack, tech] });
                    } else {
                      setFilters({
                        ...filters,
                        techStack: filters.techStack.filter(t => t !== tech),
                      });
                    }
                  }}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-zinc-300">{tech}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Trust Score Filter */}
      <div className="mb-4 border-t border-zinc-800 pt-4">
        <button
          onClick={() => toggleSection('trustScore')}
          className="flex items-center justify-between w-full mb-2 text-sm font-medium"
        >
          Min Trust Score
          {expandedSections.trustScore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.trustScore && (
          <div>
            <input
              type="range"
              min="0"
              max="100"
              value={filters.minTrustScore}
              onChange={(e) => setFilters({ ...filters, minTrustScore: Number(e.target.value) })}
              className="w-full accent-purple-600"
            />
            <div className="flex justify-between text-xs text-zinc-400 mt-1">
              <span>0</span>
              <span className="text-purple-400 font-medium">{filters.minTrustScore}</span>
              <span>100</span>
            </div>
          </div>
        )}
      </div>

      {/* Handover Difficulty */}
      <div className="border-t border-zinc-800 pt-4">
        <button
          onClick={() => toggleSection('difficulty')}
          className="flex items-center justify-between w-full mb-2 text-sm font-medium"
        >
          Handover Difficulty
          {expandedSections.difficulty ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {expandedSections.difficulty && (
          <div className="space-y-2">
            {difficulties.map((diff) => (
              <label key={diff} className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.handoverDifficulty.includes(diff)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters({ ...filters, handoverDifficulty: [...filters.handoverDifficulty, diff] });
                    } else {
                      setFilters({
                        ...filters,
                        handoverDifficulty: filters.handoverDifficulty.filter(d => d !== diff),
                      });
                    }
                  }}
                  className="w-4 h-4 rounded border-zinc-700 bg-zinc-800 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-zinc-300 capitalize">{diff}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

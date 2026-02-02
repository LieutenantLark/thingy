import { useState } from 'react';
import { Search } from 'lucide-react';
import { mockBots } from '../data/mockData';
import { BotCard } from './BotCard';
import { FilterPanel } from './FilterPanel';
import { Bot } from '../types';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedView, setSelectedView] = useState<'all' | 'recent' | 'deals' | 'popular'>('all');
  const [filters, setFilters] = useState({
    categories: [] as string[],
    functionalities: [] as string[],
    techStack: [] as string[],
    minTrustScore: 0,
    handoverDifficulty: [] as string[],
  });

  const filteredBots = mockBots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bot.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = filters.categories.length === 0 || 
      filters.categories.includes(bot.category);
    
    const matchesFunctionality = filters.functionalities.length === 0 ||
      filters.functionalities.some(f => bot.functionality.includes(f));
    
    const matchesTrustScore = bot.trustScore >= filters.minTrustScore;
    
    const matchesDifficulty = filters.handoverDifficulty.length === 0 ||
      filters.handoverDifficulty.includes(bot.handoverDifficulty);

    return matchesSearch && matchesCategory && matchesFunctionality && 
           matchesTrustScore && matchesDifficulty;
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (selectedView === 'recent') {
      return new Date(b.stats.createdDate).getTime() - new Date(a.stats.createdDate).getTime();
    } else if (selectedView === 'deals') {
      const aMultiplier = a.pricing.fullOwnership ? a.pricing.fullOwnership / a.stats.monthlyRevenue : 999;
      const bMultiplier = b.pricing.fullOwnership ? b.pricing.fullOwnership / b.stats.monthlyRevenue : 999;
      return aMultiplier - bMultiplier;
    } else if (selectedView === 'popular') {
      return b.stats.subscribers - a.stats.subscribers;
    }
    return 0;
  });

  const featuredBots = mockBots.filter(bot => bot.featured);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search bots..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-zinc-500"
            />
          </div>
        </div>

        {/* View Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Bots' },
            { id: 'recent', label: 'Recently Listed' },
            { id: 'deals', label: 'Best Deals' },
            { id: 'popular', label: 'Most Popular' },
          ].map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view.id as any)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                selectedView === view.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {view.label}
            </button>
          ))}
        </div>

        <div className="flex gap-6">
          {/* Filters */}
          <div className="w-64 flex-shrink-0 hidden lg:block">
            <FilterPanel filters={filters} setFilters={setFilters} />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* All Bots */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {selectedView === 'recent' && 'Recently Listed'}
                  {selectedView === 'deals' && 'Best Deals'}
                  {selectedView === 'popular' && 'Most Popular'}
                  {selectedView === 'all' && 'All Bots'}
                </h2>
                <span className="text-sm text-zinc-500">
                  {sortedBots.length} {sortedBots.length === 1 ? 'bot' : 'bots'}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {sortedBots.map((bot) => (
                  <BotCard key={bot.id} bot={bot} />
                ))}
              </div>
            </div>
          </div>

          {/* Sponsored Sidebar */}
          {featuredBots.length > 0 && (
            <div className="w-80 flex-shrink-0 hidden xl:block">
              <div className="sticky top-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <h2 className="text-lg font-semibold">Sponsored</h2>
                </div>
                <div className="space-y-4">
                  {featuredBots.map((bot) => (
                    <BotCard key={bot.id} bot={bot} featured compact />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
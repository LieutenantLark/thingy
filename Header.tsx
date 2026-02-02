import { Link } from 'react-router';
import { Search, Wallet, User, Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <div>
                <span className="text-xl font-semibold">BotMarket</span>
                <div className="text-xs text-zinc-500">The database of verified ai bots</div>
              </div>
            </Link>
            
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors ml-4">
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add AI Bot</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <Wallet className="w-4 h-4" />
              <span className="hidden sm:inline">Connect Wallet</span>
            </button>
            <button className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
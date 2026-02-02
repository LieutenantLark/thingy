import { useParams, Link } from 'react-router';
import { mockCreators } from '../data/mockData';
import { ArrowLeft, Star, Shield, TrendingUp, Award } from 'lucide-react';
import { BotCard } from './BotCard';

export function CreatorProfile() {
  const { id } = useParams();
  const creator = mockCreators.find(c => c.id === id);

  if (!creator) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Creator not found</h2>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Go back to marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to marketplace
      </Link>

      {/* Creator Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-6">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold flex-shrink-0">
            {creator.name[0]}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{creator.name}</h1>
            <div className="text-sm text-zinc-400 mb-4 font-mono">
              {creator.walletAddress}
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-zinc-400">Reliability Score:</span>
                <span className="font-semibold text-green-400">
                  {creator.reliabilityScore}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="text-sm text-zinc-400">Average Rating:</span>
                <span className="font-semibold">{creator.averageRating}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-zinc-400">Member since:</span>
                <span className="font-semibold">
                  {new Date(creator.joinDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-zinc-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">{creator.totalBots}</div>
            <div className="text-sm text-zinc-400 mt-1">Total Bots</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              ${creator.totalRevenue.toLocaleString()}
            </div>
            <div className="text-sm text-zinc-400 mt-1">Total Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">{creator.averageRating}</div>
            <div className="text-sm text-zinc-400 mt-1">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Creator's Bots */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Bots by {creator.name}</h2>
        <div className="grid grid-cols-1 gap-4">
          {creator.bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} />
          ))}
        </div>
      </div>
    </div>
  );
}

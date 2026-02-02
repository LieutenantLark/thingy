import { Link } from 'react-router';
import { Bot } from '../types';
import { TrendingUp, TrendingDown, Star, Users, Zap, Shield } from 'lucide-react';

interface BotCardProps {
  bot: Bot;
  featured?: boolean;
  compact?: boolean;
}

export function BotCard({ bot, featured, compact }: BotCardProps) {
  const revenueMultiplier = bot.pricing.fullOwnership
    ? (bot.pricing.fullOwnership / bot.stats.monthlyRevenue).toFixed(1)
    : null;

  if (compact) {
    return (
      <Link to={`/bot/${bot.id}`}>
        <div className="bg-zinc-900 border border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-4 hover:border-purple-500 transition-all cursor-pointer">
          <div className="inline-block px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium mb-2">
            ⭐ Sponsored
          </div>
          
          <h3 className="font-semibold mb-1">{bot.name}</h3>
          <p className="text-xs text-zinc-400 line-clamp-2 mb-3">{bot.description}</p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            <span className="px-2 py-0.5 bg-zinc-800 rounded text-xs text-zinc-300">
              {bot.category}
            </span>
            <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs flex items-center gap-1">
              <Shield className="w-3 h-3" />
              {bot.trustScore}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
            <div>
              <div className="text-zinc-500">MRR</div>
              <div className="font-semibold">${(bot.stats.monthlyRevenue / 1000).toFixed(1)}k</div>
            </div>
            <div>
              <div className="text-zinc-500">Growth</div>
              <div className={`font-semibold ${bot.stats.momGrowth > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {bot.stats.momGrowth > 0 ? '+' : ''}{bot.stats.momGrowth}%
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800">
            {bot.pricing.fullOwnership && (
              <div>
                <span className="text-xs text-zinc-500">Full Ownership:</span>
                <div className="text-lg font-bold text-purple-400">
                  ${(bot.pricing.fullOwnership / 1000).toFixed(0)}k
                </div>
              </div>
            )}
            {bot.pricing.sharePrice && (
              <div>
                <span className="text-xs text-zinc-500">Share Price:</span>
                <div className="text-lg font-bold text-purple-400">
                  ${bot.pricing.sharePrice}
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/bot/${bot.id}`}>
      <div
        className={`bg-zinc-900 border rounded-xl p-6 hover:border-purple-500 transition-all cursor-pointer ${
          featured
            ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20'
            : 'border-zinc-800'
        }`}
      >
        {featured && (
          <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-medium mb-3">
            ⭐ Sponsored
          </div>
        )}

        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{bot.name}</h3>
            <p className="text-sm text-zinc-400 line-clamp-2">{bot.description}</p>
          </div>
          <div className="ml-4 flex items-center gap-1 bg-zinc-800 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">{bot.rating}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-300">
            {bot.category}
          </span>
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
            {bot.techStack.llm}
          </span>
          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs flex items-center gap-1">
            <Shield className="w-3 h-3" />
            Trust: {bot.trustScore}
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <div className="text-xs text-zinc-500 mb-1">Monthly Revenue</div>
            <div className="font-semibold">${bot.stats.monthlyRevenue.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 mb-1">Subscribers</div>
            <div className="font-semibold flex items-center gap-1">
              <Users className="w-4 h-4 text-zinc-400" />
              {bot.stats.subscribers}
            </div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 mb-1">MoM Growth</div>
            <div className={`font-semibold flex items-center gap-1 ${
              bot.stats.momGrowth > 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {bot.stats.momGrowth > 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {bot.stats.momGrowth > 0 ? '+' : ''}{bot.stats.momGrowth}%
            </div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 mb-1">Uptime</div>
            <div className="font-semibold flex items-center gap-1">
              <Zap className="w-4 h-4 text-green-400" />
              {bot.stats.uptime}%
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div>
            {bot.pricing.fullOwnership && (
              <div>
                <span className="text-xs text-zinc-500">Full Ownership:</span>
                <span className="ml-2 text-lg font-bold text-purple-400">
                  ${bot.pricing.fullOwnership.toLocaleString()}
                </span>
                {revenueMultiplier && (
                  <span className="ml-2 text-xs text-zinc-500">
                    ({revenueMultiplier}x MRR)
                  </span>
                )}
                {bot.pricing.royaltyPercentage && (
                  <span className="ml-2 text-xs text-pink-400">
                    +{bot.pricing.royaltyPercentage}% royalty
                  </span>
                )}
              </div>
            )}
            {bot.pricing.sharePrice && (
              <div>
                <span className="text-xs text-zinc-500">Share Price:</span>
                <span className="ml-2 text-lg font-bold text-purple-400">
                  ${bot.pricing.sharePrice}
                </span>
                <span className="ml-2 text-xs text-zinc-500">
                  ({bot.pricing.availableShares}/{bot.pricing.totalShares} available)
                </span>
              </div>
            )}
            {bot.pricing.subscriptions.monthly && (
              <div className="mt-1">
                <span className="text-xs text-zinc-500">Subscribe from:</span>
                <span className="ml-2 text-sm font-medium text-zinc-300">
                  ${bot.pricing.subscriptions.monthly}/mo
                </span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs text-zinc-500 mb-1">Creator</div>
            <div className="text-sm font-medium text-purple-400">
              {bot.creator.name}
            </div>
            <div className="text-xs text-zinc-500">
              Score: {bot.creator.reliabilityScore}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
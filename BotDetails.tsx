import { useParams, Link } from 'react-router';
import { mockBots } from '../data/mockData';
import {
  ArrowLeft,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Shield,
  Zap,
  Code,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function BotDetails() {
  const { id } = useParams();
  const bot = mockBots.find(b => b.id === id);

  if (!bot) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Bot not found</h2>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
                Go back to marketplace
              </Link>
        </div>
      </div>
    );
  }

  // Mock usage data
  const usageData = [
    { month: 'Jul', revenue: 1200 },
    { month: 'Aug', revenue: 1500 },
    { month: 'Sep', revenue: 1850 },
    { month: 'Oct', revenue: 2200 },
    { month: 'Nov', revenue: 2700 },
    { month: 'Dec', revenue: bot.stats.monthlyRevenue },
  ];

  const mockReviews = [
    {
      id: '1',
      userId: 'user1',
      userName: 'TechInvestor',
      userTrustScore: 92,
      rating: 5,
      comment: 'Excellent bot! ROI exceeded expectations. The AI is sophisticated and the support is great.',
      date: '2025-12-28',
      verified: true,
    },
    {
      id: '2',
      userId: 'user2',
      userName: 'CryptoWhale',
      userTrustScore: 88,
      rating: 4,
      comment: 'Great performance overall. Setup took a bit longer than expected but worth it.',
      date: '2025-12-15',
      verified: true,
    },
    {
      id: '3',
      userId: 'user3',
      userName: 'BotCollector',
      userTrustScore: 95,
      rating: 5,
      comment: 'One of the best bots in my portfolio. Consistent returns and reliable uptime.',
      date: '2025-12-10',
      verified: false,
    },
  ];

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

      {/* Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{bot.name}</h1>
              <div className="flex items-center gap-1 bg-zinc-800 px-3 py-1 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{bot.rating}</span>
                <span className="text-zinc-400 text-sm ml-1">
                  ({mockReviews.length} reviews)
                </span>
              </div>
            </div>
            <p className="text-zinc-400 mb-4">{bot.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-zinc-800 rounded-lg text-sm">
                {bot.category}
              </span>
              {bot.functionality.map((func) => (
                <span
                  key={func}
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm"
                >
                  {func}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-zinc-800/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
              <DollarSign className="w-4 h-4" />
              Monthly Revenue
            </div>
            <div className="text-2xl font-bold">${bot.stats.monthlyRevenue.toLocaleString()}</div>
            <div className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +{bot.stats.momGrowth}% MoM
            </div>
          </div>
          <div className="bg-zinc-800/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
              <Users className="w-4 h-4" />
              Subscribers
            </div>
            <div className="text-2xl font-bold">{bot.stats.subscribers}</div>
            <div className="text-xs text-zinc-400 mt-1">Active users</div>
          </div>
          <div className="bg-zinc-800/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
              <Shield className="w-4 h-4" />
              Trust Score
            </div>
            <div className="text-2xl font-bold text-green-400">{bot.trustScore}</div>
            <div className="text-xs text-zinc-400 mt-1">Verified</div>
          </div>
          <div className="bg-zinc-800/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-zinc-400 text-sm mb-1">
              <Zap className="w-4 h-4" />
              Uptime
            </div>
            <div className="text-2xl font-bold text-green-400">{bot.stats.uptime}%</div>
            <div className="text-xs text-zinc-400 mt-1">Last 30 days</div>
          </div>
        </div>

        {/* Pricing Options */}
        <div className="grid md:grid-cols-2 gap-4">
          {bot.pricing.fullOwnership && (
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Full IP Ownership</h3>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                ${bot.pricing.fullOwnership.toLocaleString()}
              </div>
              <div className="text-sm text-zinc-400 mb-4">
                {(bot.pricing.fullOwnership / bot.stats.monthlyRevenue).toFixed(1)}x monthly revenue
              </div>
              {bot.pricing.royaltyPercentage && (
                <div className="text-sm text-pink-400 mb-4">
                  Creator retains {bot.pricing.royaltyPercentage}% royalty on future revenue
                </div>
              )}
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Buy Full Ownership
              </button>
            </div>
          )}
          {bot.pricing.sharePrice && (
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Share-based Ownership</h3>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                ${bot.pricing.sharePrice}
              </div>
              <div className="text-sm text-zinc-400 mb-4">
                {bot.pricing.availableShares} of {bot.pricing.totalShares} shares available
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Buy Shares
              </button>
            </div>
          )}
        </div>

        {/* Subscription Pricing */}
        {bot.pricing.subscriptions && Object.keys(bot.pricing.subscriptions).length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Subscription Plans</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {bot.pricing.subscriptions.monthly && (
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400 mb-1">Monthly</div>
                  <div className="text-xl font-bold">${bot.pricing.subscriptions.monthly}</div>
                </div>
              )}
              {bot.pricing.subscriptions.weekly && (
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400 mb-1">Weekly</div>
                  <div className="text-xl font-bold">${bot.pricing.subscriptions.weekly}</div>
                </div>
              )}
              {bot.pricing.subscriptions.daily && (
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400 mb-1">Daily</div>
                  <div className="text-xl font-bold">${bot.pricing.subscriptions.daily}</div>
                </div>
              )}
              {bot.pricing.subscriptions.perToken && (
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <div className="text-sm text-zinc-400 mb-1">Per Token</div>
                  <div className="text-xl font-bold">${bot.pricing.subscriptions.perToken}</div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Revenue Chart */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Revenue Trajectory</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="month" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#18181b',
                    border: '1px solid #27272a',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: '#a855f7' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Financial Details */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Financial Details</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">All-Time Revenue</div>
                <div className="text-2xl font-bold">${bot.stats.allTimeRevenue.toLocaleString()}</div>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Net Profit (Monthly)</div>
                <div className="text-2xl font-bold text-green-400">
                  ${bot.stats.netProfit.toLocaleString()}
                </div>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Profit Margin</div>
                <div className="text-2xl font-bold">{bot.stats.profitMargin}%</div>
              </div>
              <div className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="text-sm text-zinc-400 mb-1">Burn Rate</div>
                <div className="text-2xl font-bold text-orange-400">
                  ${bot.stats.burnRate.toLocaleString()}/mo
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Reviews & Ratings</h2>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors">
                Write Review
              </button>
            </div>
            <div className="space-y-4">
              {mockReviews.map((review) => (
                <div key={review.id} className="p-4 bg-zinc-800/50 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm font-semibold">
                        {review.userName[0]}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{review.userName}</span>
                          {review.verified && (
                            <Shield className="w-4 h-4 text-green-400" />
                          )}
                          <span className="text-xs text-zinc-500">
                            Trust: {review.userTrustScore}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-zinc-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-zinc-600'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-xs">
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-300 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Creator Info */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Creator</h3>
            <Link
              to={`/creator/${bot.creator.id}`}
              className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-semibold">
                {bot.creator.name[0]}
              </div>
              <div className="flex-1">
                <div className="font-medium">{bot.creator.name}</div>
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Score: {bot.creator.reliabilityScore}
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Tech Details */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Technical Details</h3>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-zinc-400 mb-1">LLM/API</div>
                <div className="font-medium">{bot.techStack.llm}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Type</div>
                <div className="font-medium capitalize">{bot.techStack.type}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Region</div>
                <div className="font-medium capitalize">{bot.techStack.region}</div>
              </div>
              <div>
                <div className="text-sm text-zinc-400 mb-1">Handover Difficulty</div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-zinc-400" />
                  <span className="font-medium capitalize">{bot.handoverDifficulty}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Additional Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400">Created:</span>
                <span className="font-medium">
                  {new Date(bot.stats.createdDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-zinc-400" />
                <span className="text-zinc-400">NFT ID:</span>
                <span className="font-medium text-purple-400">{bot.nftId}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="font-semibold mb-4">Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Send Offer
              </button>
              <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                Contact Creator
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
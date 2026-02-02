export interface Bot {
  id: string;
  name: string;
  description: string;
  category: string;
  functionality: string[];
  techStack: {
    api: string;
    llm: string;
    type: 'opensource' | 'closed';
    region: 'western' | 'eastern';
  };
  creator: {
    id: string;
    name: string;
    walletAddress: string;
    reliabilityScore: number;
  };
  pricing: {
    fullOwnership?: number;
    sharePrice?: number;
    availableShares?: number;
    totalShares?: number;
    subscriptions: {
      perMinute?: number;
      perToken?: number;
      hourly?: number;
      daily?: number;
      weekly?: number;
      monthly?: number;
      annual?: number;
    };
    royaltyPercentage?: number;
  };
  stats: {
    createdDate: string;
    allTimeRevenue: number;
    monthlyRevenue: number;
    netProfit: number;
    profitMargin: number;
    burnRate: number;
    subscribers: number;
    uptime: number;
    momGrowth: number;
  };
  rating: number;
  reviews: Review[];
  trustScore: number;
  handoverDifficulty: 'no-code' | 'javascript' | 'python' | 'advanced';
  featured: boolean;
  nftId: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userTrustScore: number;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface Creator {
  id: string;
  name: string;
  walletAddress: string;
  reliabilityScore: number;
  totalBots: number;
  totalRevenue: number;
  averageRating: number;
  joinDate: string;
  bots: Bot[];
}
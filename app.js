// ==================== DATA ====================
const mockBots = [
  {
    id: '1',
    name: 'AlphaTrader Pro',
    description: 'Advanced trading bot using GPT-4 for market analysis and automated trading strategies. Specializes in crypto arbitrage and trend prediction.',
    category: 'Trading',
    functionality: ['trading bot', 'web agents'],
    techStack: {
      api: 'OpenAI GPT-4',
      llm: 'GPT-4 Turbo',
      type: 'closed',
      region: 'western',
    },
    creator: {
      id: 'creator1',
      name: 'CryptoBuilder',
      walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      reliabilityScore: 96,
    },
    pricing: {
      fullOwnership: 45000,
      subscriptions: {
        monthly: 250,
        annual: 2400,
        daily: 10,
      },
    },
    stats: {
      createdDate: '2025-08-15',
      allTimeRevenue: 18500,
      monthlyRevenue: 3250,
      netProfit: 2800,
      profitMargin: 86,
      burnRate: 450,
      subscribers: 13,
      uptime: 99.8,
      momGrowth: 24,
    },
    rating: 4.8,
    reviews: [],
    trustScore: 94,
    handoverDifficulty: 'python',
    featured: true,
    nftId: 'NFT-ALPHA-001',
  },
  {
    id: '2',
    name: 'ContentGenie',
    description: 'Automated content creation and posting bot for X (Twitter). Creates engaging posts, threads, and responds to mentions using Claude AI.',
    category: 'Social Media',
    functionality: ['X poster', 'web agents'],
    techStack: {
      api: 'Anthropic Claude',
      llm: 'Claude 3.5 Sonnet',
      type: 'closed',
      region: 'western',
    },
    creator: {
      id: 'creator2',
      name: 'SocialAI Labs',
      walletAddress: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
      reliabilityScore: 92,
    },
    pricing: {
      fullOwnership: 18000,
      royaltyPercentage: 15,
      subscriptions: {
        monthly: 90,
        weekly: 25,
        perToken: 0.002,
      },
    },
    stats: {
      createdDate: '2025-10-22',
      allTimeRevenue: 4500,
      monthlyRevenue: 1500,
      netProfit: 1200,
      profitMargin: 80,
      burnRate: 300,
      subscribers: 17,
      uptime: 98.5,
      momGrowth: 42,
    },
    rating: 4.6,
    reviews: [],
    trustScore: 89,
    handoverDifficulty: 'javascript',
    featured: false,
    nftId: 'NFT-GENIE-002',
  },
  {
    id: '3',
    name: 'LeadHunter AI',
    description: 'B2B lead generation and cold outreach automation. Uses AI to find prospects, personalize messages, and track engagement.',
    category: 'Business',
    functionality: ['lead generator/cold outreach', 'web agents'],
    techStack: {
      api: 'OpenAI GPT-4',
      llm: 'GPT-4',
      type: 'closed',
      region: 'western',
    },
    creator: {
      id: 'creator3',
      name: 'GrowthHacker',
      walletAddress: '0x123d35Cc6634C0532925a3b844Bc9e7595f0aEa',
      reliabilityScore: 88,
    },
    pricing: {
      sharePrice: 85,
      availableShares: 350,
      totalShares: 1000,
      subscriptions: {
        monthly: 60,
        annual: 599,
      },
    },
    stats: {
      createdDate: '2025-09-01',
      allTimeRevenue: 7200,
      monthlyRevenue: 1800,
      netProfit: 1400,
      profitMargin: 78,
      burnRate: 400,
      subscribers: 30,
      uptime: 99.2,
      momGrowth: 18,
    },
    rating: 4.4,
    reviews: [],
    trustScore: 91,
    handoverDifficulty: 'python',
    featured: true,
    nftId: 'NFT-LEAD-003',
  },
  {
    id: '4',
    name: 'TokenLauncher Pro',
    description: 'Automated token deployment and liquidity management bot. Similar to Bankr/Clanker but with advanced features.',
    category: 'DeFi',
    functionality: ['token deployer', 'trading bot'],
    techStack: {
      api: 'Local LLM',
      llm: 'Llama 3.1',
      type: 'opensource',
      region: 'western',
    },
    creator: {
      id: 'creator1',
      name: 'CryptoBuilder',
      walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
      reliabilityScore: 96,
    },
    pricing: {
      fullOwnership: 32000,
      subscriptions: {
        perToken: 5,
        monthly: 200,
      },
    },
    stats: {
      createdDate: '2025-11-10',
      allTimeRevenue: 2800,
      monthlyRevenue: 1200,
      netProfit: 950,
      profitMargin: 79,
      burnRate: 250,
      subscribers: 6,
      uptime: 99.9,
      momGrowth: 65,
    },
    rating: 4.9,
    reviews: [],
    trustScore: 95,
    handoverDifficulty: 'javascript',
    featured: false,
    nftId: 'NFT-TOKEN-004',
  },
  {
    id: '5',
    name: 'DiscordMod AI',
    description: 'Advanced Discord moderation and community engagement bot. Handles moderation, Q&A, and community management.',
    category: 'Community',
    functionality: ['discord bot', 'web agents'],
    techStack: {
      api: 'OpenAI GPT-3.5',
      llm: 'GPT-3.5 Turbo',
      type: 'closed',
      region: 'western',
    },
    creator: {
      id: 'creator4',
      name: 'CommunityFirst',
      walletAddress: '0x456d35Cc6634C0532925a3b844Bc9e7595f0cFb',
      reliabilityScore: 85,
    },
    pricing: {
      fullOwnership: 9500,
      royaltyPercentage: 20,
      subscriptions: {
        monthly: 30,
        annual: 299,
      },
    },
    stats: {
      createdDate: '2025-07-20',
      allTimeRevenue: 9500,
      monthlyRevenue: 2200,
      netProfit: 1800,
      profitMargin: 82,
      burnRate: 400,
      subscribers: 73,
      uptime: 97.8,
      momGrowth: 12,
    },
    rating: 4.3,
    reviews: [],
    trustScore: 87,
    handoverDifficulty: 'no-code',
    featured: false,
    nftId: 'NFT-DISCORD-005',
  },
  {
    id: '6',
    name: 'TelegramCommerce',
    description: 'E-commerce bot for Telegram with payment processing, inventory management, and customer support.',
    category: 'E-commerce',
    functionality: ['tg bot', 'web agents'],
    techStack: {
      api: 'DeepSeek',
      llm: 'DeepSeek V3',
      type: 'closed',
      region: 'eastern',
    },
    creator: {
      id: 'creator2',
      name: 'SocialAI Labs',
      walletAddress: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
      reliabilityScore: 92,
    },
    pricing: {
      sharePrice: 43,
      availableShares: 500,
      totalShares: 1000,
      subscriptions: {
        monthly: 50,
        weekly: 15,
      },
    },
    stats: {
      createdDate: '2025-12-01',
      allTimeRevenue: 850,
      monthlyRevenue: 850,
      netProfit: 680,
      profitMargin: 80,
      burnRate: 170,
      subscribers: 17,
      uptime: 98.9,
      momGrowth: 95,
    },
    rating: 4.7,
    reviews: [],
    trustScore: 90,
    handoverDifficulty: 'python',
    featured: true,
    nftId: 'NFT-TGCOM-006',
  },
];

const mockCreators = [
  {
    id: 'creator1',
    name: 'CryptoBuilder',
    walletAddress: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
    reliabilityScore: 96,
    totalBots: 2,
    totalRevenue: 21300,
    averageRating: 4.85,
    joinDate: '2025-06-01',
    get bots() { return mockBots.filter(b => b.creator.id === 'creator1'); },
  },
  {
    id: 'creator2',
    name: 'SocialAI Labs',
    walletAddress: '0x8ba1f109551bD432803012645Ac136ddd64DBA72',
    reliabilityScore: 92,
    totalBots: 2,
    totalRevenue: 5350,
    averageRating: 4.65,
    joinDate: '2025-08-15',
    get bots() { return mockBots.filter(b => b.creator.id === 'creator2'); },
  },
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

// ==================== ICONS ====================
const icons = {
  search: '<svg class="icon icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  star: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  starFilled: '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  trendingUp: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
  trendingDown: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  zap: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
  shield: '<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
  chevronUp: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>',
  chevronDown: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>',
  arrowLeft: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
  dollarSign: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>',
  calendar: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
  code: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
  messageSquare: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
  externalLink: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',
  award: '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
};

// ==================== STATE ====================
let state = {
  searchQuery: '',
  selectedView: 'all',
  filters: {
    categories: [],
    functionalities: [],
    techStack: [],
    minTrustScore: 0,
    handoverDifficulty: [],
  },
  expandedSections: {
    category: true,
    functionality: true,
    techStack: true,
    trustScore: true,
    difficulty: true,
  },
};

// ==================== ROUTER ====================
function getRoute() {
  const hash = window.location.hash || '#/';
  return hash.slice(1);
}

function navigateTo(path) {
  window.location.hash = path;
}

function parseRoute(route) {
  if (route === '/' || route === '') {
    return { page: 'home' };
  }
  const botMatch = route.match(/^\/bot\/(.+)$/);
  if (botMatch) {
    return { page: 'bot', id: botMatch[1] };
  }
  const creatorMatch = route.match(/^\/creator\/(.+)$/);
  if (creatorMatch) {
    return { page: 'creator', id: creatorMatch[1] };
  }
  return { page: 'home' };
}

// ==================== UTILS ====================
function formatNumber(num) {
  return num.toLocaleString();
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString();
}

// ==================== COMPONENTS ====================
function renderBotCard(bot, { featured = false, compact = false } = {}) {
  const revenueMultiplier = bot.pricing.fullOwnership
    ? (bot.pricing.fullOwnership / bot.stats.monthlyRevenue).toFixed(1)
    : null;

  if (compact) {
    return `
      <a href="#/bot/${bot.id}" class="bot-card featured compact" data-link>
        <div class="sponsored-badge">⭐ Sponsored</div>
        <h3>${bot.name}</h3>
        <p>${bot.description}</p>
        <div class="compact-tags">
          <span class="tag tag-category">${bot.category}</span>
          <span class="tag tag-trust">${icons.shield} ${bot.trustScore}</span>
        </div>
        <div class="compact-stats">
          <div>
            <div class="stat-label">MRR</div>
            <div class="stat-value">$${(bot.stats.monthlyRevenue / 1000).toFixed(1)}k</div>
          </div>
          <div>
            <div class="stat-label">Growth</div>
            <div class="stat-value ${bot.stats.momGrowth > 0 ? 'positive' : 'negative'}">
              ${bot.stats.momGrowth > 0 ? '+' : ''}${bot.stats.momGrowth}%
            </div>
          </div>
        </div>
        <div class="compact-footer">
          ${bot.pricing.fullOwnership ? `
            <span class="pricing-label">Full Ownership:</span>
            <div class="pricing-value">$${(bot.pricing.fullOwnership / 1000).toFixed(0)}k</div>
          ` : ''}
          ${bot.pricing.sharePrice ? `
            <span class="pricing-label">Share Price:</span>
            <div class="pricing-value">$${bot.pricing.sharePrice}</div>
          ` : ''}
        </div>
      </a>
    `;
  }

  return `
    <a href="#/bot/${bot.id}" class="bot-card ${featured ? 'featured' : ''}" data-link>
      ${featured ? '<div class="sponsored-badge">⭐ Sponsored</div>' : ''}
      <div class="bot-card-header">
        <div style="flex: 1;">
          <h3>${bot.name}</h3>
          <p>${bot.description}</p>
        </div>
        <div class="rating-badge">
          ${icons.starFilled.replace('class="icon"', 'class="icon" style="color: #eab308; fill: #eab308;"')}
          <span>${bot.rating}</span>
        </div>
      </div>
      <div class="tags">
        <span class="tag tag-category">${bot.category}</span>
        <span class="tag tag-tech">${bot.techStack.llm}</span>
        <span class="tag tag-trust">${icons.shield} Trust: ${bot.trustScore}</span>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-label">Monthly Revenue</div>
          <div class="stat-value">$${formatNumber(bot.stats.monthlyRevenue)}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Subscribers</div>
          <div class="stat-value">${icons.users.replace('class="icon"', 'class="icon" style="color: #a1a1aa;"')} ${bot.stats.subscribers}</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">MoM Growth</div>
          <div class="stat-value ${bot.stats.momGrowth > 0 ? 'positive' : 'negative'}">
            ${bot.stats.momGrowth > 0 ? icons.trendingUp : icons.trendingDown}
            ${bot.stats.momGrowth > 0 ? '+' : ''}${bot.stats.momGrowth}%
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Uptime</div>
          <div class="stat-value">${icons.zap.replace('class="icon"', 'class="icon" style="color: #4ade80;"')} ${bot.stats.uptime}%</div>
        </div>
      </div>
      <div class="bot-card-footer">
        <div class="pricing-info">
          ${bot.pricing.fullOwnership ? `
            <div>
              <span class="pricing-label">Full Ownership:</span>
              <span class="pricing-value">$${formatNumber(bot.pricing.fullOwnership)}</span>
              ${revenueMultiplier ? `<span class="pricing-multiplier">(${revenueMultiplier}x MRR)</span>` : ''}
              ${bot.pricing.royaltyPercentage ? `<span class="pricing-royalty">+${bot.pricing.royaltyPercentage}% royalty</span>` : ''}
            </div>
          ` : ''}
          ${bot.pricing.sharePrice ? `
            <div>
              <span class="pricing-label">Share Price:</span>
              <span class="pricing-value">$${bot.pricing.sharePrice}</span>
              <span class="pricing-shares">(${bot.pricing.availableShares}/${bot.pricing.totalShares} available)</span>
            </div>
          ` : ''}
          ${bot.pricing.subscriptions.monthly ? `
            <div class="subscription-info">
              <span class="pricing-label">Subscribe from:</span>
              <span class="pricing-value">$${bot.pricing.subscriptions.monthly}/mo</span>
            </div>
          ` : ''}
        </div>
        <div class="creator-info">
          <div class="creator-label">Creator</div>
          <div class="creator-name">${bot.creator.name}</div>
          <div class="creator-score">Score: ${bot.creator.reliabilityScore}</div>
        </div>
      </div>
    </a>
  `;
}

function renderFilterPanel() {
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

  return `
    <div class="filter-panel">
      <div class="filter-header">
        <h3>Filters</h3>
        <button class="filter-clear" onclick="clearFilters()">Clear all</button>
      </div>

      <!-- Category Filter -->
      <div class="filter-section">
        <button class="filter-toggle" onclick="toggleSection('category')">
          Category
          ${state.expandedSections.category ? icons.chevronUp : icons.chevronDown}
        </button>
        ${state.expandedSections.category ? `
          <div class="filter-options">
            ${categories.map(cat => `
              <label class="filter-option">
                <input type="checkbox" ${state.filters.categories.includes(cat) ? 'checked' : ''} 
                  onchange="toggleFilter('categories', '${cat}')">
                <span>${cat}</span>
              </label>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Functionality Filter -->
      <div class="filter-section bordered">
        <button class="filter-toggle" onclick="toggleSection('functionality')">
          Functionality
          ${state.expandedSections.functionality ? icons.chevronUp : icons.chevronDown}
        </button>
        ${state.expandedSections.functionality ? `
          <div class="filter-options">
            ${functionalities.map(func => `
              <label class="filter-option">
                <input type="checkbox" ${state.filters.functionalities.includes(func) ? 'checked' : ''} 
                  onchange="toggleFilter('functionalities', '${func}')">
                <span>${func}</span>
              </label>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Tech Stack Filter -->
      <div class="filter-section bordered">
        <button class="filter-toggle" onclick="toggleSection('techStack')">
          Tech Stack
          ${state.expandedSections.techStack ? icons.chevronUp : icons.chevronDown}
        </button>
        ${state.expandedSections.techStack ? `
          <div class="filter-options">
            ${techStacks.map(tech => `
              <label class="filter-option">
                <input type="checkbox" ${state.filters.techStack.includes(tech) ? 'checked' : ''} 
                  onchange="toggleFilter('techStack', '${tech}')">
                <span>${tech}</span>
              </label>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Trust Score Filter -->
      <div class="filter-section bordered">
        <button class="filter-toggle" onclick="toggleSection('trustScore')">
          Min Trust Score
          ${state.expandedSections.trustScore ? icons.chevronUp : icons.chevronDown}
        </button>
        ${state.expandedSections.trustScore ? `
          <div>
            <input type="range" class="range-slider" min="0" max="100" 
              value="${state.filters.minTrustScore}" onchange="setTrustScore(this.value)">
            <div class="range-labels">
              <span>0</span>
              <span class="current">${state.filters.minTrustScore}</span>
              <span>100</span>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Handover Difficulty -->
      <div class="filter-section bordered">
        <button class="filter-toggle" onclick="toggleSection('difficulty')">
          Handover Difficulty
          ${state.expandedSections.difficulty ? icons.chevronUp : icons.chevronDown}
        </button>
        ${state.expandedSections.difficulty ? `
          <div class="filter-options">
            ${difficulties.map(diff => `
              <label class="filter-option">
                <input type="checkbox" ${state.filters.handoverDifficulty.includes(diff) ? 'checked' : ''} 
                  onchange="toggleFilter('handoverDifficulty', '${diff}')">
                <span style="text-transform: capitalize;">${diff}</span>
              </label>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderChart(bot) {
  const usageData = [
    { month: 'Jul', revenue: 1200 },
    { month: 'Aug', revenue: 1500 },
    { month: 'Sep', revenue: 1850 },
    { month: 'Oct', revenue: 2200 },
    { month: 'Nov', revenue: 2700 },
    { month: 'Dec', revenue: bot.stats.monthlyRevenue },
  ];

  const maxRevenue = Math.max(...usageData.map(d => d.revenue));
  const chartWidth = 100;
  const chartHeight = 250;
  const padding = { top: 20, right: 20, bottom: 40, left: 60 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  const xScale = (i) => padding.left + (i / (usageData.length - 1)) * innerWidth;
  const yScale = (val) => padding.top + innerHeight - (val / maxRevenue) * innerHeight;

  const pathData = usageData.map((d, i) => {
    const x = (xScale(i) / chartWidth) * 100;
    const y = (yScale(d.revenue) / chartHeight) * 100;
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return `
    <div class="chart-container">
      <svg class="chart-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <!-- Grid lines -->
        ${[0, 0.25, 0.5, 0.75, 1].map(pct => {
          const y = (padding.top + innerHeight * (1 - pct)) / chartHeight * 100;
          return `<line class="chart-grid" x1="${padding.left / chartWidth * 100}" y1="${y}" x2="${(chartWidth - padding.right) / chartWidth * 100}" y2="${y}"/>`;
        }).join('')}
        
        <!-- Line -->
        <path class="chart-line" d="${pathData}" vector-effect="non-scaling-stroke"/>
        
        <!-- Dots -->
        ${usageData.map((d, i) => {
          const x = (xScale(i) / chartWidth) * 100;
          const y = (yScale(d.revenue) / chartHeight) * 100;
          return `<circle class="chart-dot" cx="${x}" cy="${y}" r="1" vector-effect="non-scaling-stroke"/>`;
        }).join('')}
      </svg>
      <div style="display: flex; justify-content: space-around; padding: 0 60px; font-size: 0.75rem; color: #71717a;">
        ${usageData.map(d => `<span>${d.month}</span>`).join('')}
      </div>
    </div>
  `;
}

// ==================== PAGES ====================
function renderHomePage() {
  const filteredBots = mockBots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      bot.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    
    const matchesCategory = state.filters.categories.length === 0 || 
      state.filters.categories.includes(bot.category);
    
    const matchesFunctionality = state.filters.functionalities.length === 0 ||
      state.filters.functionalities.some(f => bot.functionality.includes(f));
    
    const matchesTrustScore = bot.trustScore >= state.filters.minTrustScore;
    
    const matchesDifficulty = state.filters.handoverDifficulty.length === 0 ||
      state.filters.handoverDifficulty.includes(bot.handoverDifficulty);

    return matchesSearch && matchesCategory && matchesFunctionality && 
           matchesTrustScore && matchesDifficulty;
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (state.selectedView === 'recent') {
      return new Date(b.stats.createdDate).getTime() - new Date(a.stats.createdDate).getTime();
    } else if (state.selectedView === 'deals') {
      const aMultiplier = a.pricing.fullOwnership ? a.pricing.fullOwnership / a.stats.monthlyRevenue : 999;
      const bMultiplier = b.pricing.fullOwnership ? b.pricing.fullOwnership / b.stats.monthlyRevenue : 999;
      return aMultiplier - bMultiplier;
    } else if (state.selectedView === 'popular') {
      return b.stats.subscribers - a.stats.subscribers;
    }
    return 0;
  });

  const featuredBots = mockBots.filter(bot => bot.featured);

  const views = [
    { id: 'all', label: 'All Bots' },
    { id: 'recent', label: 'Recently Listed' },
    { id: 'deals', label: 'Best Deals' },
    { id: 'popular', label: 'Most Popular' },
  ];

  const viewTitles = {
    recent: 'Recently Listed',
    deals: 'Best Deals',
    popular: 'Most Popular',
    all: 'All Bots',
  };

  return `
    <div class="main-container">
      <!-- Search Bar -->
      <div class="search-container">
        <span class="search-icon">${icons.search}</span>
        <input
          type="text"
          class="search-input"
          placeholder="Search bots..."
          value="${state.searchQuery}"
          oninput="handleSearch(this.value)"
        >
      </div>

      <!-- View Tabs -->
      <div class="view-tabs">
        ${views.map(view => `
          <button
            class="view-tab ${state.selectedView === view.id ? 'active' : ''}"
            onclick="setView('${view.id}')"
          >
            ${view.label}
          </button>
        `).join('')}
      </div>

      <div class="content-layout">
        <!-- Filters -->
        <div class="filter-sidebar">
          ${renderFilterPanel()}
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <div class="section-header">
            <h2>${viewTitles[state.selectedView]}</h2>
            <span>${sortedBots.length} ${sortedBots.length === 1 ? 'bot' : 'bots'}</span>
          </div>
          <div class="bots-grid">
            ${sortedBots.map(bot => renderBotCard(bot)).join('')}
          </div>
        </div>

        <!-- Sponsored Sidebar -->
        ${featuredBots.length > 0 ? `
          <div class="sponsored-sidebar">
            <div class="sticky">
              <div class="sponsored-header">
                <div class="sponsored-indicator"></div>
                <h2>Sponsored</h2>
              </div>
              <div class="sponsored-cards">
                ${featuredBots.map(bot => renderBotCard(bot, { featured: true, compact: true })).join('')}
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderBotDetailsPage(id) {
  const bot = mockBots.find(b => b.id === id);

  if (!bot) {
    return `
      <div class="main-container">
        <div class="not-found">
          <h2>Bot not found</h2>
          <a href="#/" data-link>Go back to marketplace</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="main-container">
      <a href="#/" class="back-link" data-link>
        ${icons.arrowLeft}
        Back to marketplace
      </a>

      <!-- Header -->
      <div class="details-header">
        <div class="details-title-row">
          <div class="details-title">
            <h1>
              ${bot.name}
              <div class="rating-badge">
                ${icons.starFilled.replace('class="icon"', 'class="icon" style="color: #eab308; fill: #eab308;"')}
                <span>${bot.rating}</span>
                <span class="reviews-count">(${mockReviews.length} reviews)</span>
              </div>
            </h1>
            <p class="details-description">${bot.description}</p>
            <div class="functionality-tags">
              <span class="functionality-tag category">${bot.category}</span>
              ${bot.functionality.map(func => `
                <span class="functionality-tag func">${func}</span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Key Stats -->
        <div class="key-stats">
          <div class="key-stat">
            <div class="key-stat-label">${icons.dollarSign} Monthly Revenue</div>
            <div class="key-stat-value">$${formatNumber(bot.stats.monthlyRevenue)}</div>
            <div class="key-stat-sub green">${icons.trendingUp} +${bot.stats.momGrowth}% MoM</div>
          </div>
          <div class="key-stat">
            <div class="key-stat-label">${icons.users} Subscribers</div>
            <div class="key-stat-value">${bot.stats.subscribers}</div>
            <div class="key-stat-sub">Active users</div>
          </div>
          <div class="key-stat">
            <div class="key-stat-label">${icons.shield.replace('class="icon icon-sm"', 'class="icon"')} Trust Score</div>
            <div class="key-stat-value green">${bot.trustScore}</div>
            <div class="key-stat-sub">Verified</div>
          </div>
          <div class="key-stat">
            <div class="key-stat-label">${icons.zap} Uptime</div>
            <div class="key-stat-value green">${bot.stats.uptime}%</div>
            <div class="key-stat-sub">Last 30 days</div>
          </div>
        </div>

        <!-- Pricing Options -->
        <div class="pricing-options">
          ${bot.pricing.fullOwnership ? `
            <div class="pricing-card ownership">
              <h3>Full IP Ownership</h3>
              <div class="price">$${formatNumber(bot.pricing.fullOwnership)}</div>
              <div class="price-info">${(bot.pricing.fullOwnership / bot.stats.monthlyRevenue).toFixed(1)}x monthly revenue</div>
              ${bot.pricing.royaltyPercentage ? `
                <div class="royalty-info">Creator retains ${bot.pricing.royaltyPercentage}% royalty on future revenue</div>
              ` : ''}
              <button>Buy Full Ownership</button>
            </div>
          ` : ''}
          ${bot.pricing.sharePrice ? `
            <div class="pricing-card shares">
              <h3>Share-based Ownership</h3>
              <div class="price">$${bot.pricing.sharePrice}</div>
              <div class="price-info">${bot.pricing.availableShares} of ${bot.pricing.totalShares} shares available</div>
              <button>Buy Shares</button>
            </div>
          ` : ''}
        </div>

        <!-- Subscription Plans -->
        ${bot.pricing.subscriptions && Object.keys(bot.pricing.subscriptions).length > 0 ? `
          <div class="subscription-plans">
            <h3>Subscription Plans</h3>
            <div class="subscription-grid">
              ${bot.pricing.subscriptions.monthly ? `
                <div class="subscription-item">
                  <div class="label">Monthly</div>
                  <div class="price">$${bot.pricing.subscriptions.monthly}</div>
                </div>
              ` : ''}
              ${bot.pricing.subscriptions.weekly ? `
                <div class="subscription-item">
                  <div class="label">Weekly</div>
                  <div class="price">$${bot.pricing.subscriptions.weekly}</div>
                </div>
              ` : ''}
              ${bot.pricing.subscriptions.daily ? `
                <div class="subscription-item">
                  <div class="label">Daily</div>
                  <div class="price">$${bot.pricing.subscriptions.daily}</div>
                </div>
              ` : ''}
              ${bot.pricing.subscriptions.perToken ? `
                <div class="subscription-item">
                  <div class="label">Per Token</div>
                  <div class="price">$${bot.pricing.subscriptions.perToken}</div>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Two Column Layout -->
      <div class="details-layout">
        <!-- Left Column -->
        <div class="details-main">
          <!-- Revenue Chart -->
          <div class="card-section">
            <h2>Revenue Trajectory</h2>
            ${renderChart(bot)}
          </div>

          <!-- Financial Details -->
          <div class="card-section">
            <h2>Financial Details</h2>
            <div class="financial-grid">
              <div class="financial-item">
                <div class="label">All-Time Revenue</div>
                <div class="value">$${formatNumber(bot.stats.allTimeRevenue)}</div>
              </div>
              <div class="financial-item">
                <div class="label">Net Profit (Monthly)</div>
                <div class="value green">$${formatNumber(bot.stats.netProfit)}</div>
              </div>
              <div class="financial-item">
                <div class="label">Profit Margin</div>
                <div class="value">${bot.stats.profitMargin}%</div>
              </div>
              <div class="financial-item">
                <div class="label">Burn Rate</div>
                <div class="value orange">$${formatNumber(bot.stats.burnRate)}/mo</div>
              </div>
            </div>
          </div>

          <!-- Reviews -->
          <div class="card-section">
            <div class="reviews-header">
              <h2>Reviews & Ratings</h2>
              <button class="btn-primary">Write Review</button>
            </div>
            <div class="reviews-list">
              ${mockReviews.map(review => `
                <div class="review-item">
                  <div class="review-header">
                    <div class="review-user">
                      <div class="review-avatar">${review.userName[0]}</div>
                      <div class="review-user-info">
                        <div class="name">
                          ${review.userName}
                          ${review.verified ? icons.shield.replace('class="icon icon-sm"', 'class="icon icon-sm shield-green"') : ''}
                          <span class="trust">Trust: ${review.userTrustScore}</span>
                        </div>
                        <div class="review-stars">
                          ${[...Array(5)].map((_, i) => 
                            i < review.rating 
                              ? icons.starFilled.replace('class="icon"', 'class="icon filled"')
                              : icons.star.replace('class="icon"', 'class="icon empty"')
                          ).join('')}
                          <span class="review-date">${formatDate(review.date)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="review-comment">${review.comment}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="details-sidebar">
          <!-- Creator Info -->
          <div class="card-section">
            <h3>Creator</h3>
            <a href="#/creator/${bot.creator.id}" class="creator-card" data-link>
              <div class="avatar">${bot.creator.name[0]}</div>
              <div class="info">
                <div class="name">${bot.creator.name}</div>
                <div class="score">${icons.shield} Score: ${bot.creator.reliabilityScore}</div>
              </div>
              ${icons.externalLink}
            </a>
          </div>

          <!-- Tech Details -->
          <div class="card-section">
            <h3>Technical Details</h3>
            <div class="tech-details">
              <div class="tech-item">
                <div class="label">LLM/API</div>
                <div class="value">${bot.techStack.llm}</div>
              </div>
              <div class="tech-item">
                <div class="label">Type</div>
                <div class="value">${bot.techStack.type}</div>
              </div>
              <div class="tech-item">
                <div class="label">Region</div>
                <div class="value">${bot.techStack.region}</div>
              </div>
              <div class="tech-item">
                <div class="label">Handover Difficulty</div>
                <div class="value-row">${icons.code} ${bot.handoverDifficulty}</div>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="card-section">
            <h3>Additional Info</h3>
            <div class="additional-info">
              <div class="info-item">
                ${icons.calendar}
                <span class="label">Created:</span>
                <span class="value">${formatDate(bot.stats.createdDate)}</span>
              </div>
              <div class="info-item">
                ${icons.shield.replace('class="icon icon-sm"', 'class="icon"')}
                <span class="label">NFT ID:</span>
                <span class="value purple">${bot.nftId}</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="card-section">
            <h3>Actions</h3>
            <div class="actions-list">
              <button class="action-btn">${icons.messageSquare} Send Offer</button>
              <button class="action-btn">Contact Creator</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCreatorProfilePage(id) {
  const creator = mockCreators.find(c => c.id === id);

  if (!creator) {
    return `
      <div class="main-container">
        <div class="not-found">
          <h2>Creator not found</h2>
          <a href="#/" data-link>Go back to marketplace</a>
        </div>
      </div>
    `;
  }

  return `
    <div class="main-container">
      <a href="#/" class="back-link" data-link>
        ${icons.arrowLeft}
        Back to marketplace
      </a>

      <!-- Creator Header -->
      <div class="creator-profile-header">
        <div class="creator-profile-top">
          <div class="creator-profile-avatar">${creator.name[0]}</div>
          <div class="creator-profile-info">
            <h1>${creator.name}</h1>
            <div class="wallet">${creator.walletAddress}</div>
            <div class="creator-profile-badges">
              <div class="creator-badge">
                ${icons.shield.replace('class="icon icon-sm"', 'class="icon icon-lg green"')}
                <span class="label">Reliability Score:</span>
                <span class="value green">${creator.reliabilityScore}</span>
              </div>
              <div class="creator-badge">
                ${icons.starFilled.replace('class="icon"', 'class="icon icon-lg yellow"')}
                <span class="label">Average Rating:</span>
                <span class="value">${creator.averageRating}</span>
              </div>
              <div class="creator-badge">
                ${icons.award.replace('class="icon"', 'class="icon icon-lg purple"')}
                <span class="label">Member since:</span>
                <span class="value">${formatDate(creator.joinDate)}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="creator-profile-stats">
          <div class="creator-stat">
            <div class="value purple">${creator.totalBots}</div>
            <div class="label">Total Bots</div>
          </div>
          <div class="creator-stat">
            <div class="value green">$${formatNumber(creator.totalRevenue)}</div>
            <div class="label">Total Revenue</div>
          </div>
          <div class="creator-stat">
            <div class="value yellow">${creator.averageRating}</div>
            <div class="label">Avg Rating</div>
          </div>
        </div>
      </div>

      <!-- Creator's Bots -->
      <div class="creator-bots-section">
        <h2>Bots by ${creator.name}</h2>
        <div class="bots-grid">
          ${creator.bots.map(bot => renderBotCard(bot)).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==================== RENDER ====================
function render() {
  const route = getRoute();
  const parsed = parseRoute(route);
  const mainContent = document.getElementById('main-content');

  switch (parsed.page) {
    case 'bot':
      mainContent.innerHTML = renderBotDetailsPage(parsed.id);
      break;
    case 'creator':
      mainContent.innerHTML = renderCreatorProfilePage(parsed.id);
      break;
    case 'home':
    default:
      mainContent.innerHTML = renderHomePage();
      break;
  }
}

// ==================== EVENT HANDLERS ====================
function handleSearch(value) {
  state.searchQuery = value;
  render();
}

function setView(view) {
  state.selectedView = view;
  render();
}

function toggleSection(section) {
  state.expandedSections[section] = !state.expandedSections[section];
  render();
}

function toggleFilter(filterType, value) {
  const index = state.filters[filterType].indexOf(value);
  if (index > -1) {
    state.filters[filterType].splice(index, 1);
  } else {
    state.filters[filterType].push(value);
  }
  render();
}

function setTrustScore(value) {
  state.filters.minTrustScore = parseInt(value);
  render();
}

function clearFilters() {
  state.filters = {
    categories: [],
    functionalities: [],
    techStack: [],
    minTrustScore: 0,
    handoverDifficulty: [],
  };
  render();
}

// ==================== INITIALIZATION ====================
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

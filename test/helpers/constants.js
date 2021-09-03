const FOURTY_EIGHT_HOURS_IN_SECONDS = 72 * 60 * 60;

const MARKET_NAMES = {
  // ZORA: 'ZORA',
  // FOUNDATION: 'FOUNDATION',
  // NOUNS: 'NOUNS',
  FRACTIONAL: 'FRACTIONAL'
};

// MARKETS is an array of all values in MARKET_NAMES
const MARKETS = Object.keys(MARKET_NAMES).map(key => MARKET_NAMES[key]);

const NFT_TYPE_ENUM = {
  // ZORA: 0,
  // FOUNDATION: 1,
  // NOUNS: 2,
  FRACTIONAL: 3
};

const PARTY_STATUS = {
  AUCTION_ACTIVE: 0,
  AUCTION_WON: 1,
  AUCTION_LOST: 2,
  NFT_TRANSFERRED: 3,
};

const ONE_ETH = '1000000000000000000';

module.exports = {
  MARKETS,
  MARKET_NAMES,
  NFT_TYPE_ENUM,
  ONE_ETH,
  PARTY_STATUS,
  FOURTY_EIGHT_HOURS_IN_SECONDS,
};

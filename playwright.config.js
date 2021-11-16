require('dotenv').config();
const config = {
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    // ignoreHTTPSErrors: true,
  },
};

module.exports = config;
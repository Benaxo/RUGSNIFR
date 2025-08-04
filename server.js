const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/check', (req, res) => {
  const { address } = req.query;
  // Placeholder logic for MVP
  res.json({
    address,
    ownerPercent: 70,
    liquidityLockPercent: 50,
    liquidityLockDuration: '30 days',
    devWalletActivity: 'active',
    contractRenounced: false,
    communityScore: 42,
    verdict: 'Mid but Safe-ish 🤷'
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

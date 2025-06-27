require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.get('/campaigns', async (req, res) => {
  const { data, error } = await supabase.from('campaigns').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/wallet/add', async (req, res) => {
  const { user_id, points } = req.body;
  const { data, error } = await supabase
    .rpc('add_points', { uid: user_id, amount: points });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/validate-photo', async (req, res) => {
  // Placeholder AI validation
  const { image } = req.body;
  if (!image) return res.status(400).json({ error: 'Missing image' });
  // Simulate detection score
  const score = Math.random();
  res.json({ detected: score > 0.5, score });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Backend listening on ${port}`));

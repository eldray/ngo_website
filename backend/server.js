const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

// events
const events = require('./events.json');

app.get('/events/:id', (req, res) => {
  const eventId = parseInt(req.params.id);
  const event = events.find(event => event.id === eventId);

  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  res.json(event);
});

// sermons
const sermons = require('./sermons.json');

app.get('/sermons/:id', (req, res) => {
  const sermonId = parseInt(req.params.id);
  const sermon = sermons.find(sermon => sermon.id === sermonId);

  if (!sermon) {
    return res.status(404).json({ error: 'Sermon not found' });
  }

  res.json(sermon);
});

// search 
app.get('/search', (req, res) => {
  const query = req.query.query.toLowerCase();

  const results = events.filter(event => event.title.toLowerCase().includes(query));

  res.json({ results });
});

// donation form
app.post('/donate', async (req, res) => {
  const { amount } = req.body;

  try {
    const response = await axios.post(
      'https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay',
      {
        amount: amount,
        currency: 'EUR',
        externalId: '123456789',
        payer: {
          partyIdType: 'MSISDN',
          partyId: '46733123450'
        },
        payerMessage: 'Donation for a charitable cause',
        payeeNote: 'Thank you for your donation!'
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY',
          'X-Target-Environment': 'sandbox'
        }
      }
    );

    res.json({ success: true, response: response.data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Handle contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Received contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  res.json({ success: true, message: 'Thank you for reaching out! We will get back to you soon.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',        // Front en dev
//   'https://matcha.app',           // Exemple : domaine en prod
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

module.exports = cors(corsOptions);

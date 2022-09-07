const { Client } = require(`pg`);

// la connection au client.
const client = new Client();
client.connect();

console.log(`✅ DB client connected`);

module.exports = client;
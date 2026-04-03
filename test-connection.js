const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Load .env manually
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envLines = envContent.split('\n');
const envVars = {};
envLines.forEach(line => {
  const [key, ...valueParts] = line.split('=');
  if (key && valueParts.length) {
    envVars[key.trim()] = valueParts.join('=').trim();
  }
});

const MONGODB_URL = envVars.MONGODB_URL;

async function testConnection() {
  try {
    console.log('MONGODB_URL:', MONGODB_URL ? 'Loaded' : 'Not loaded');
    console.log('Attempting to connect to MongoDB...');
    const conn = await mongoose.connect(MONGODB_URL, {
      bufferCommands: false
    });
    console.log('Connected successfully!');
    console.log('Database name:', conn.connection.db.databaseName);
    await mongoose.disconnect();
    console.log('Disconnected.');
  } catch (error) {
    console.error('Connection failed:', error.message);
  }
}

testConnection();

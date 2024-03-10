// pages/api/customer_data.js

import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = 'Data';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();

      const db = client.db(DB_NAME);
      const collection = db.collection('customer_data');

      // Fetch all data from MongoDB
      const data = await collection.find({}).toArray();

      await client.close();

      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching customer data', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();

      const db = client.db(DB_NAME);
      const collection = db.collection('customer_data');

      const { name, email, address, applied_on, treatment_chosen, status } = req.body;

      // Insert data into MongoDB
      await collection.insertOne({ name, email, address, applied_on, treatment_chosen, status });

      await client.close();

      res.status(200).json({ message: 'Data submitted successfully!' });
    } catch (error) {
      console.error('Error submitting data', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

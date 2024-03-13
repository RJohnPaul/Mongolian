# Mongolian - MongoDB Next Starter Kit

<div align="center">
  <br>
      <img src="https://github.com/RJohnPaul/Mongolian/blob/d58198e928ad96fd7817354b31377107e12346ab/2560x1600%20(4).png" alt="Project Banner">
  </br>
</div>
</br>
<div align="center">
  <br>
      <img src="https://github.com/RJohnPaul/Mongolian/blob/c36be99ee2869e8df2e0b8ba29ffc74f6475209b/Frame%2038.png" alt="Project Banner">
  </br>
</div>
</br>

Mongolian is a MongoDB Next.js Starter Kit designed to streamline the development of dynamic web applications with Next.js and MongoDB. It heavily has features such as a smartly designed Tailwind CSS form for easy data input and real-time feedback with React hot toast notifications upon successful data submission.

## Try it out
- **Warning:** - **The currently deployed webapp is only to view and users are not advised to enter submit too many times as the database is actually a personal live database on MongoDB.**
- View it - [Demo](https://mongolian.vercel.app/)

## Features

- **Next.js:** The React framework for building server-side rendered and statically generated web applications.
- **MongoDB:** A NoSQL database for storing and retrieving data, providing flexibility and scalability.
- **Tailwind CSS:** A utility-first CSS framework for building custom and responsive user interfaces quickly.
- **React Hot Toast:** A toast notification library for React, providing real-time feedback to users.

## Usage

To use Mongolian, follow these steps:

1. **Set Up MongoDB Database:**
   - You can either manually create a MongoDB database called "Data" and a collection called "customer_data", or follow the steps below to create it programmatically.

2. **Create MongoDB Database and Collection (optional):**
   - To create the "Data" database and "customer_data" collection programmatically:
     
     ```javascript
     // Connect to MongoDB
     const { MongoClient } = require('mongodb');
     const uri = 'your_mongodb_uri';
     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

     async function createCollection() {
       try {
         // Connect to MongoDB client
         await client.connect();
         console.log('Connected to MongoDB');

         // Create "Data" database if it doesn't exist
         const database = client.db('Data');

         // Create "customer_data" collection
         await database.createCollection('customer_data');
         console.log('Collection "customer_data" created successfully');
       } catch (error) {
         console.error('Error creating collection:', error);
       } finally {
         // Close MongoDB client
         await client.close();
         console.log('MongoDB client closed');
       }
     }

     createCollection();
     ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the root directory of your project.
   - Add your MongoDB connection URI as `MONGODB_URI` in the `.env` file:
     
     ```
     MONGODB_URI=your_mongodb_uri
     ```

4. **Modify API Endpoint (Optional):**
   - If you need to customize the database and collection names, modify the `pages/api/customer_data.js` file:
     
     ```javascript
     // pages/api/customer_data.js

     import { MongoClient } from 'mongodb';

     const MONGODB_URI = process.env.MONGODB_URI;
     const DB_NAME = 'Data'; // Modify database name if necessary
     const COLLECTION_NAME = 'customer_data'; // Modify collection name if necessary
     ```

5. **Install Dependencies:**
   - Run the following command to install all the dependencies:
     
     ```bash
     npm install
     ```
     
6. **Start the Next.js Server:**
   - Run the following command to start the Next.js server:
     
     ```bash
     npm run dev
     ```

7. **Access the Application:**
   - Open your web browser and go to http://localhost:3000 to access Mongolian.
   - Fill out the form fields and submit the data.

## Dependencies

- [Next.js](https://nextjs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hot Toast](https://react-hot-toast.com/)

## License

This project is licensed under the [MIT License](LICENSE).

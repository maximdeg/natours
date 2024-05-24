const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

const connectDatabase = async function () {
   //mongodb+srv://maximdeg:FkDamQ6K8RHuR78Y@cluster0.aqch87e.mongodb.net/
   const uri =
      'mongodb+srv://maximdeg:FkDamQ6K8RHuR78Y@cluster0.aqch87e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
   const client = new MongoClient(uri, {
      serverApi: {
         version: ServerApiVersion.v1,
         strict: true,
         deprecationErrors: true,
      },
   });
   try {
      await client.connect();
      await client.db('admin').command({ ping: 1 });
      console.log(
         'Pinged your deployment. You successfully connected to MongoDB!',
      );
   } catch (error) {
      console.error('Error connecting to database:\n', error);
   } finally {
      await client.close();
   }
};

connectDatabase();

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`App running on port ${port}...`);
});

import express from 'express';
import userRoutes from './routes/userRoutes';
import tweetRoutes from './routes/tweetRoutes';

const app = express();
app.use(express.json());

app.use('/user', userRoutes);
app.use('/tweet', tweetRoutes);

app.get('/',(req,res)=>{
    res.send('Hello brother');
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})
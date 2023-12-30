const mongoose=require('mongoose');
const DATABASE_ADDRESS=process.env.DATABASE_ADDRESS;
const connection=mongoose.connect(DATABASE_ADDRESS);
connection.then(()=>{
    console.log('Database Connected..');
}).catch((error)=>{
    console.log('Database Not connected!!..'+error);
})

module.exports=mongoose;

const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// app.get('/products/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


// app.post('/product', async(req, res) => {
//     try {
//         const product = await Product.create(req.body)
//         res.status(200).json(product);
        
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })

// // update a product
// app.put('/products/:id', async(req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         // we cannot find any product in database
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with ID ${id}`})
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);
        
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// // delete a product

// app.delete('/products/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message: `cannot find any product with ID ${id}`})
//         }
//         res.status(200).json(product);
        
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


// function sum (a,b)  {


//     return a+b;

// }



// app.get('/sum', async(req, res) => {

//     // const sum  = sum(1+2);
//  res.send({"sum":  sum(5,6)});
//  //console.log(sum);
   
// })




mongoose.set("strictQuery", false)
mongoose.
connect('mongodb://127.0.0.1:27017/kiru')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})
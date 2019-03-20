const express = require('express');
const morgan = require('morgan');
const server = express()
const bodyParser = require("body-parser");
const cors = require('cors')
const {Product} = require('./models/user')
// const crypto = require('crypto');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream')

// const multer = require('multer')
// const path = require('path');

server.use(cors());
server.use(morgan('dev'));


server.use(express.static('./frontend'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myStore', {useNewUrlParser: true})
mongoose.connection.once('open', () => {
  console.log('Successfully connected to database')
})

server.use('/users', require('./routes/users'));


//Galalry DB
// const mongoURI = 'mongodb://localhost:27017/myGallary';
// const connection = mongoose.createConnection(mongoURI, {useNewUrlParser: true});

// let gfs;

// connection.once('open', () => { 
//     gfs = Grid(connection.db, mongoose.mongo);
//     gfs.collection('uploads')
//     console.log('Successfully connected to myGallary') 
// });



// Create storage engine

// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err);
//           }
//           const filename = buf.toString('hex') + path.extname(file.originalname);
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads'
//           };
//           resolve(fileInfo);
//         });
//       });
//     }
//   });

//   const upload = multer({ storage });      

// const Product = mongoose.model('myProducts', { 
//      title: String, price: Number, company: String, info: String,
//      inCart: Boolean, count: Number, total: Number 
// });


// const customConfig = multer.diskStorage({
//     destination: function(req, file, next) {
//         next(null, './uploads')
//     },
    
//     filename: function (req, file, next) {
//         next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// });


// var upload = multer({storage: customConfig}).single('myImage')

// server.post('/upload', (req, res) => {
// upload (req, res, (err) => {
//     if(err) {
//         res.send(err)
//     }else{
//         console.log(req.file);
//         res.send("File Successfully uploaded")
//     }
// })
// }) 

// server.post ('/upload', upload.single('myImage'), (req, res) => {
//     res.json({ file: req.file });
//     // res.redirect('/');
//   }); 

  // @route GET /files
// @desc  Display all files in JSON
// server.get('/files', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//       // Check if files
//       if (!files || files.length === 0) {
//         return res.status(404).json({
//           err: 'No files exist'
//         });
//       }
  
//       // Files exist
//       return res.json(files);
//     });
//   });

// server.get('/files/:filename', (req, res) => {
//     gfs.files.findOne({filename: req.params.filename}, (err, file) => {
//       // Check if files
//         if(!file || file.length === 0) {
//             res.status(404).json()
//         }
//       // Files exist
//         return res.json(file)
//     })
// })

// @route GET /image/:filename
// @desc Display Image
// server.get('/image/:filename', (req, res) => {
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//       // Check if file
//       if (!file || file.length === 0) {
//         return res.status(404).json({
//           err: 'No file exists'
//         });
//       }
  
      // Check if image
  //     if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
  //       // Read output to browser
  //       const readstream = gfs.createReadStream(file.filename);
  //       readstream.pipe(res);
  //     } else {
  //       res.status(404).json({
  //         err: 'Not an image'
  //       });
  //     }
  //   });
  // });


// @route GET /
// @desc Loads form
// server.get('/getimages', (req, res) => {
//     gfs.files.find().toArray((err, files) => {
//       // Check if files
//       if (!files || files.length === 0) {
//         res.status(404).json()
//       } else {
//         files.map(file => {
//           if (
//             file.contentType === 'image/jpeg' ||
//             file.contentType === 'image/png'
//           ) {
//             file.isImage = true;
//           } else {
//             file.isImage = false;
//           }
//         });
//           console.log(res.send({success: true, data: files})) ;
//       }
//     });
//   });


// @route DELETE /files/:id
// @desc  Delete file
// server.delete('/files/:id', (req, res) => {
//     gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
//       if (err) {
//         return res.status(404).json({ err: err });
//       }
  
//       res.redirect('/');
//     });
//   });
  


server.get('/allProducts', (req, res) => {
    Product.find().exec((err, result) => {
        if (err) throw res.send({success: false, error: err})
        res.send({success: true, data: result})
    })
})

server.get('/getDbProducts', (req, res) => {

    Product.find({title: 'mens'}).exec((err, result) => {
        if (err) throw res.send(err) ;
        res.send({success: true, data: result});
    })
}) 

server.get('/details/:id', (req, res) => {
    Product.findById(req.params.id, (err, product) => {
     if(err) throw res.send(err)
     res.send({success: true, data: product})
    })
})

server.get('/getDbmens', (req, res) => {

    Product.find({title: 'mens'}).exec((err, result) => {
        if (err) throw res.send(err) ;
        res.send({success: true, data: result});
    })
}) 

server.get('/womens', (req, res) => {

    Product.find({title: 'womens'}).exec((err, result) => {
        if (err) throw res.send(err) ;
        res.send({success: true, data: result});
    })
}) 

server.get('/kids', (req, res) => {

    Product.find({title: 'kids'}).exec((err, result) => {
        if (err) throw res.send(err) ;
        res.send({success: true, data: result});
    })
}) 





server.post('/addProduct', (req, res) => {
    var product = new Product({ 
        title: req.body.title, 
        price: req.body.price, 
        company: req.body.company,
        info: req.body.info,
        count: req.body.count,
        total: req.body.total,
        inCart: req.body.incar 
    })
    product.save((err, product) => {
        if (err) {
            console.log({success: false, err: err})
            // return res.json({ success: false, err: err })
        }
        console.log(res.json({success: true, data: product}))
        // res.json({ success: true, data: user })

    });
})

server.listen(8000, () => console.log("server is running on port 8000"))

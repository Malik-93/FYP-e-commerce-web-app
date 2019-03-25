const express = require('express');
const server = express()
const bodyParser = require("body-parser");
const cors = require('cors')
const { Product } = require('./models/user')
// const crypto = require('crypto');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream')

// const multer = require('multer')
// const path = require('path');

server.use(cors());


server.use(express.static('./build'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.use('/users', require('./routes/users'));

const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Mudassir_Malik:mLab1234@ds139775.mlab.com:39775/clothing-store', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Successfully connected to database')
})

// Multer config

// var customConfig = multer.diskStorage({
//   destination: function (req, file, next) {
//     next(null, './uploads')
//   },
//   filename: function (req, file, next) {
//     next(null, Math.random() + '-' + file.originalname)
//   }
// })

// var upload = multer({ storage: customConfig })

// server.post('/profile', upload.array('profilePicture', 10), function (req, res, next) {
//   console.log(req.files)
//   res.send("File successfully uploaded.")
// })


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

// const upload = multer({ storage });      

// server.post ('/upload', upload.single('myImage'), (req, res) => {
//  if(req.file === null){
//   res.render('index', { title:'Please select a picture file to submit!'});
// }

//   res.json({ success: true, file: req.file } );
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

// @route GET /image/:filename
// @desc Display Image
// server.get('/image/:filename', (req, res) => {
//     gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
//       // Check if file
//        if (!file || file.length === 0) {
//          return res.status(404).json({
//            err: 'No file exists'
//          });
//      } 
//     //   Check if image
//       if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//         // Read output to browser
//         const readstream = gfs.createReadStream(file.filename);
//         readstream.pipe(res);
//       } else {
//         res.status(404).json({
//           err: 'Not an image'
//         });
//       }
//     });
//   });
// @route GET /
// @desc Loads form
// server.get('/getImages', (req, res) => {
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
//           file.isImage = true;
//           const readstream = gfs.createReadStream(file.filename );
//           readstream.pipe(res);
//         } else {
//           file.isImage = false;
//           res.status(404).json({
//             err: 'No image exist**'
//           })
//         }
//       });
//       // res.send({success: true, data: files})
//           // console.log(res.send({success: true, data: files})) ;

//       }
//     });
//   });


//DB Products Routes
server.post('/addProduct', (req, res) => {
  var product = new Product({
    title: req.body.title,
    price: req.body.price,
    company: req.body.company,
    info: req.body.info,
  })

  product.save((err, product) => {
    if (err) {
      console.log({ success: false, err: err })
    }
    console.log(res.json({ success: true, data: product }))
  });
})

server.get('/allProducts', (req, res) => {
  Product.find().exec((err, result) => {
    if (err) throw res.send({ success: false, error: err })
    res.send({ success: true, data: result })
  })
})

server.get('/details/:id', (req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) throw res.send(err)
    res.send({ success: true, data: product })
  })
})

server.get('/getDbmens', (req, res) => {

  Product.find({ title: 'mens' }).exec((err, result) => {
    if (err) throw res.send(err);
    res.send({ success: true, data: result });
  })
})

server.get('/womens', (req, res) => {

  Product.find({ title: 'womens' }).exec((err, result) => {
    if (err) throw res.send(err);
    res.send({ success: true, data: result });
  })
})

server.get('/kids', (req, res) => {

  Product.find({ title: 'kids' }).exec((err, result) => {
    if (err) throw res.send(err);
    res.send({ success: true, data: result });
  })
})

server.listen(process.env.PORT || 8000, () => console.log("server is running"))

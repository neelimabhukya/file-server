'use strict';
var path = require('path');
var cloudinary = require('cloudinary').v2;
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();




module.exports = router => {

    router.get('/', (req, res) => res.end('Welcome to phr!'));
      cloudinary.config({
        cloud_name: 'diyzkcsmp',
        api_key: '188595956976777',
        api_secret: 'F7ajPhx0uHdohqfbjq2ykBZcMiw'

   });

   router.post('/UploadDocs', multipartMiddleware, function(req, res, next) {
var url;
       console.log("req.files.image" + JSON.stringify(req.files));
        var imageFile = req.files.fileUpload.path;


       cloudinary.uploader.upload(imageFile, {
                tags: 'express_sample'
            })

           .then(function(image) {
                console.log('** file uploaded to Cloudinary service');
                console.dir(image);
               url = image.url;
        

               return res.send({
                   url: url ,
                   message: "files uploaded succesfully"
               })
                });
            
            })
              
          
            
   };

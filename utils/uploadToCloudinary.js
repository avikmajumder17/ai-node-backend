const cloudinary = require("../cloudinary");



const uploadToCloudinary = (buffer, folder = "blogs") => 
    new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream(
                {
                    folder,
                    resource_type: "image"
                },
                (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                }
            )
            .end(buffer);
    });

module.exports = uploadToCloudinary;
const multer = require("multer");



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./uploads/blogs");
//     },

//     filename: (req, file, cb) => {
//         const uniqueName = Date.now() + "-" + file.originalname;

//         cb(null, uniqueName);
//     }
// });

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith("/image")) {
            return cb(new Error("Only image files are allowed"));
        }
        cb(null, true);
    }
});

module.exports = upload;
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "../capstone/public/gallery",
  filename: function (req, file, cb) {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "gallery-" + Date.now() + filename);
  },
});

const maxSize = 5 * 1024 * 1024;

const galleryupload = multer({
  storage: storage,
  limit: { filesize: maxSize },
});

module.exports = galleryupload;

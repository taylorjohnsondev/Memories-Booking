const multer = require("multer");

const storage = multer.diskStorage({
  destination: "../capstone/public/gallery",
  filename: function (req, file, cb) {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "gallery-" + Date.now() + filename);
  },
});

const galleryupload = multer({
  storage: storage,
  limit: { filesize: 1000000 },
});

module.exports = galleryupload;

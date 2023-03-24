const multer = require("multer");

const storage = multer.diskStorage({
  destination: "../capstone/public",
  filename: function (req, file, cb) {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "avatar-" + Date.now() + filename); 
  },
});

const upload = multer({
  storage: storage,
  limit: { filesize: 1000000 },
});

module.exports = upload;

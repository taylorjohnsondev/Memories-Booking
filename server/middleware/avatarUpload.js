const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    const filename = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, "avatar-" + Date.now() + filename);
  },
});

const maxSize = 5 * 1024 * 1024

const upload = multer({
  storage: storage,
  limit: { filesize: maxSize },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ){
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png and jpg files allowed"))
    } 
  }
});

module.exports = upload;

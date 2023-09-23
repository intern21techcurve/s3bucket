const express = require("express");
const controller = require("../controller/conqtController")


const upload = require("../Module/upload"); // Make sure to adjust the path accordingly

 

const router = express.Router();

 

router.post("/upload", upload.single("file"), async (req, res) => {

  try {

    if (req.file) {

      res.status(200).json({ message: "File uploaded successfully", key: req.file.key, location: req.file.location });

    }

    else {

      res.status(400).json({

        message: "Please Provide Files "

      })

    }

  }

  catch (err) {

    console.log(err);

    res.status(500).json({ message: "Unable To Upload File" })

  }

});
router.post('/upload', controller.addData),
router.get('/showData', controller.showData),
router.put('/updateData', controller.updateData),

 

module.exports = router;
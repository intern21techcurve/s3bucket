require('dotenv').config();
const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multers3 = require('multer-s3');
const app = express();
const port = 2000;
const bucket = process.env.BUCKET
const s3 = new aws.S3();



const upload = multer({
    storage:multers3({
        bucket:bucket,
        s3:s3,
        acl:"public-read",
        key:(req,file,cp)=>{
            cp(null,file.originalname);

        }
    })
})


app.post("/upload", upload.single("file"),(req,res)=>{
    console.log(req.file);
    console.log("sucessfully uploaded"+ req.file.location+ 'location');
});

app.get("/list",async(req,resp)=>{
   let r = await s3.listObjectV2({bucket:bucket}).promise()
   let x =r.contents.map(item=>item.key);
   resp.send(x);

})

app.get("/download/:filename",(req,resp)=>{
    const filename = req.params.filename
    let x=s3.getObject({bucket:bucket}).promise()
    resp.send(x.body);
})

app.delete("/delete/:filenmae",async(req,resp)=>{
    const filename = req.params.filename
    s3.deleteObject({Bucket:bucket,key:filename}).promise();
    resp.send("file deleted sucessfully");
})

aws.config.update({
    secretAccessKey:process.env.ACCESS_SECRET,
    accessKeyId:process.env.ACCESS_KEY,
    region:process.env.REGION,

})





app.listen(port,
    console.log(`http://localhost${port}`));



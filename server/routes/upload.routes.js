import Users from '../models/user';

var fs = require('fs');

router.post('/profileupload', function (req, res) {
  try {
  
  
  console.log(typeof req.body.img);
  var imageBuffer = new Buffer(req.body.img, "base64");
  var dest = process.env.PWD+"/uploads/"+req.body.name;

  fs.writeFile(dest,imageBuffer,'base64',function(uploadFailed,uploaded){
    if(uploadFailed) {
      res.json({status:true,error:uploadFailed});
    } else {       

          doc.profile.profileImage = req.body.name;
             doc.save(function(updateFail,update){
              if(updateFail) {
                res.json({status:false,error:updateFail});
              } else {
                console.log('file uploaded');
                res.json({status:true,message:"file uploaded"});
              }
             })
      console.log("uploaded");
    }
  });
} else {
  res.json({status:true,error:"Failed"})
}
} catch(error) {
    res.json({status:false,error:error});
  }

});


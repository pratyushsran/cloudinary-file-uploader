const File= require("../models/File")

//fileupload ->handlerFunction

exports.localFileUpload=async(req,res)=>{
    try{
        //fetch file
        const file=req.files.file;
        console.log("File aagyi ->",file);


        //create file where file need to be stored on server
        let path=__dirname+"/files/"+Date.now() +`.${file.name.split('.')[1]}`;
        console.log("path ->",path);


        //add path to move function
        file.mv(path,(err)=>{
            console.log(err);
        })

        //create a successfull reponse
        res.json({
            success:true,
            message:'Local File Uploaded Successfully'
        })
    }
    catch(error){
        console.log(error);
        console.log("Not able to upload this file")
    }
}

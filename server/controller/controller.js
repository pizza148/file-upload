const File = require('../modles/File');
const { dir } = require('../../app');
exports.getFileupload = async (req, res) => {
    const locals = {
        title: "File-Upload"
    }
    try {
        const posts = await File.find();
        res.render('index', {
            locals,
            posts
        });
    } catch (error) {
        console.log(error);
    }
    
}

exports.postFile = async (req, res) => {
    let file;
    let uploadPath;
    try {
        if (!req.files || req.files.sampleFile === 0) {
            console.log("Not Match File");
        } else {
            file = req.files.sampleFile
            uploadPath = dir + '/upload/' + file.name;
            const newFile = new File({
                title: req.body.title,
                caption: req.body.caption,
                content: req.body.content,
                img: file.name
            })
            await File.create(newFile);
            file.mv(uploadPath,(err)=>{
                if(err) console.log(err)
                res.redirect('/');
            })
        }
    } catch (error) {
        console.log(error);
    }
}
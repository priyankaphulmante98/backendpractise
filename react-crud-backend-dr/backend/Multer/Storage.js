const multer = require('multer');

const storage = multer.diskStorage({
    // to provide the path of the file
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },

//to provide the filename
    filename:(req, file, callback) => {
        const filename = `image-${Date.now()}.${file.originalname}`
        callback(null, filename)
    }

})


//to differentiate between the type of files 

const fileFilter =  (req, file , callback) => {
    if(file.mimetype == "image/jpg"  || file.mimetype == "image/jpeg" || file.mimetype == "image/png" ){
        callback(null, true)
    }else{
        callback(null, false)
        return callback(new Error('only jpg jpeg png format  are allowed'))
    }

}

const uploads = multer({
    storage:storage, 
    fileFilter:fileFilter
})

module.exports = uploads;





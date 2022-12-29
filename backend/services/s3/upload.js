var AWS = require('aws-sdk');
exports.upload = (file) => {
    AWS.config.update({
        accessKeyId: process.env.AWSAccessKeyId, // Access key ID
        secretAccessKey: process.env.AWSSecretKey, // Secret access key
    })

    const s3 = new AWS.S3();

    // Binary data base64
    const fileContent = Buffer.from(file.data, 'binary');

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'workshapp-bucket',
        Key: Date.now() + ".jpg", // File name you want to save as in S3
        Body: fileContent
    };

    let resp;
    let respData;

    s3.upload(params, (err, data) => {
        if (err) {
            this.resp = false
        }
        else {
            this.resp = true
            this.respData = data
        }
    });

    if (resp){
        return {
            type : "Success",
            data : respData
        }
    }
    else {
        return{
            type : "Error",
            message  : "Error while uploading file."
        }
    }
    

}
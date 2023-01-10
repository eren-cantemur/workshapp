var AWS = require('aws-sdk');
exports.upload = async (file) => {
    AWS.config.update({
        accessKeyId: process.env.AWSAccessKeyId, // Access key ID
        secretAccessKey: process.env.AWSSecretKey, // Secret access key
        region: "eu-central-1"
    })

    const s3 = new AWS.S3();

    // Binary data base64
    const fileContent = Buffer.from(file.data, 'binary');

    // Setting up S3 upload parameters
    const params = {
        Bucket: 'workshapps3',
        Key:Date.now() + ".jpg", // File name you want to save as in S3
        Body: fileContent
    };

    

    const uploadedImage = await s3.upload(params).promise();

    if (uploadedImage){
        return {
            type : "Success",
            data : uploadedImage
        }
    }
    else {
        return{
            type : "Error",
            message  : "Error while uploading file."
        }
    }
    

}
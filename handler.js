const awsServerlessExpress = require("aws-serverless-express");
const AWS = require("aws-sdk");

const s3 = new AWS.S3();

exports.readS3File = async (event) => {
  const Key = event.Records[0].s3.object.key;

  // read object from S3

  const data = await s3
    .getObject({
      Bucket: event.Records[0].s3.bucket.name,
      Key,
    })
    .promise();
  const s3Object = JSON.parse(data.Body);

  console.log("s3Object", s3Object);
};

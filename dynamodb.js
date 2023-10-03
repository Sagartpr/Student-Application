const AWS = require("aws-sdk");
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB({
    endpoint: "http://localhost:8000"
});
dynamodb.listTables({}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
dynamodb.createTable({
    TableName: "demo_sdk",
    AttributeDefinitions: [
        {
            AttributeName: "student_id",
            AttributeType: "S" //string
        },
        {
            AttributeName: "phone",
            AttributeType: "N" //number
        },
        {
            AttributeName: "address",
            AttributeType: "S" //string
        },
        {
            AttributeName: "grade",
            AttributeType: "S"
        }
    ],
    KeySchema: [
        {
            AttributeName: "student_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "phone",
            KeyType: "RANGE"

        },  
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
}, (err, data)=>{
    if(err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});
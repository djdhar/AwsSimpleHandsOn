// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event, context, callback) => {

    // WRITE CODE
    var params = {
    // Name of the DDB Table
      TableName: 'Message',
      Item: {
        // Primary Key
        'id' : {N: "003"}, 
        // Sort Key
        'maws_message' : {S: 'Diptendu Dhar'}
      }
    };
    
    // Call DynamoDB to add the item to the table
    await ddb.putItem(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    }).promise();
    
    
    // READ CODE 
    var readParams = {
        // Name of the DDB Table
        TableName: 'Message',
        Key: {
          // Primary Key
          'id' : {N: "002"},
          // Sort Key
          'maws_message' : {S: "Anita Dhar"}
        },
        // What is to be extracted?
        ProjectionExpression: 'maws_message'
      };
      
      
      
      // Call DynamoDB to read the item from the table
      await ddb.getItem(readParams, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          console.log("Success", data.Item);
          // x is va variable in json format
          var x = data.Item
          console.log('Dibyajyoti is here', x['maws_message']['S'])
        }
      }).promise();      
};




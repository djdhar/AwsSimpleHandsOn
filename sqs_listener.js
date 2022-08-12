exports.handler = async function(event, context) {
    event.Records.forEach(record => {
      const { body } = record;
      // body is the message body
      console.log("Body of the message : ", body);
    });
    return {};
  }
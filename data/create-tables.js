const client = require('../lib/utils/client.js');

client.connect()
  .then(() => {
    return client.query(
      'CREATE TABLE'
    //   then actually create the table
    );
  });

//   add error ctach logic

const Shows = require('./shows');
const Media = require('./media');



Shows.sync()
  .then(function () {
    console.log('Shows table connected');
  })
  .catch(function () {
    console.log('fucked up connecting table');
  })
Media.sync()
  .then(() => {
    console.log('media connected success');
  })
  .catch(() => {
    console.log('error connecting media table');
  })
module.exports = { Shows, Media }  // can separate diff tables by commas to export multiple tables.
var mongo_url = 'mongodb://localhost/mymdb_db';

// require mongoose
var mongoose = require('mongoose');

// setting up how json structure would be like
var actorSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  // age: {
  //   type: Number,
  //   trim: true
  // },
  website: {
    type: String,
    trim: true,
    get: function(url) {
      if(! url) {
        return url;
      } else {
        if(
          url.indexOf('http://') !== 0 &&
          url.indexOf('https://') !== 0
        ) {
          url = 'http://' + url;
        }

        return url;
      }
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// register the getter
actorSchema.set('toJSON', { getters: true } );

// register the Schema
var Actor = mongoose.model('Actor', actorSchema);

// make this available to our other files
module.exports = Actor;

var Meerkat, request;

request = require('request');

module.exports = Meerkat = (function() {
  function Meerkat(apiKey) {
    this.apiKey = apiKey;
    this.version = '1.0';
    this.resourceURI = 'https://resources.meerkatapp.co';
    this.channelURI = 'https://channels.meerkatapp.co';
    this.__request = function(url, cb) {
      cb = cb != null ? cb : function() {};
      url = url != null ? url : '';
      return request.get("" + url + "?v=" + this.version, function(err, response, body) {
        body = JSON.parse(body);
        return cb(err, body);
      });
    };
  }

  Meerkat.prototype.getAllBroadcasts = function(cb) {
    cb = cb != null ? cb : function() {};
    return this.__request("" + this.resourceURI + "/broadcasts", function(err, data) {
      return cb(err, data);
    });
  };

  Meerkat.prototype.getAllScheduledBroadcasts = function(cb) {
    cb = cb != null ? cb : function() {};
    return this.__request("" + this.resourceURI + "/broadcasts", function(err, data) {
      return cb(err, data);
    });
  };

  Meerkat.prototype.getBroadcastActivities = function(broadcastID, cb) {
    cb = cb != null ? cb : function() {};
    if (!broadcastID || typeof broadcastID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.resourceURI + "/broadcasts/" + broadcastID + "/activities", function(err, data) {
        return cb(err, data);
      });
    }
  };

  Meerkat.prototype.getBroadcastRestreams = function(broadcastID, cb) {
    cb = cb != null ? cb : function() {};
    if (!broadcastID || typeof broadcastID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.channelURI + "/broadcasts/" + broadcastID + "/restreams", function(err, data) {
        return cb(err, data);
      });
    }
  };

  Meerkat.prototype.getBroadcastComments = function(broadcastID, cb) {
    cb = cb != null ? cb : function() {};
    if (!broadcastID || typeof broadcastID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.channelURI + "/broadcasts/" + broadcastID + "/comments", function(err, data) {
        return cb(err, data);
      });
    }
  };

  Meerkat.prototype.getBroadcastLikes = function(broadcastID, cb) {
    cb = cb != null ? cb : function() {};
    if (!broadcastID || typeof broadcastID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.channelURI + "/broadcasts/" + broadcastID + "/likes", function(err, data) {
        return cb(err, data);
      });
    }
  };

  Meerkat.prototype.getBroadcastWatchers = function(broadcastID, cb) {
    cb = cb != null ? cb : function() {};
    if (!broadcastID || typeof broadcastID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.resourceURI + "/broadcasts/" + broadcastID + "/watchers", function(err, data) {
        return cb(err, data);
      });
    }
  };

  Meerkat.prototype.getBroadcast = function(broadcastID, cb) {
    cb = cb != null ? cb : function() {};
    if (!broadcastID || typeof broadcastID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.resourceURI + "/broadcasts/" + broadcastID + "/summary", function(err, data) {
        return cb(err, data);
      });
    }
  };

  Meerkat.prototype.getUser = function(userID, cb) {
    cb = cb != null ? cb : function() {};
    if (!userID || typeof userID === 'function') {
      return console.log('Please provide a Broadcast ID');
    } else {
      return this.__request("" + this.resourceURI + "/users/" + userID + "/profile", function(err, data) {
        return cb(err, data);
      });
    }
  };

  return Meerkat;

})();

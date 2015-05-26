var Meerkat, m;

Meerkat = require('./index');

m = new Meerkat();

m.getAllBroadcasts(function(err, broadcasts) {
  return console.log(err, broadcasts);
});

m.getAllScheduledBroadcasts(function(err, schedules) {
  return console.log(err, schedules);
});

m.getBroadcastActivities('2ec508ef-b618-487c-930b-f0f8636b964f', function(err, activities) {
  return console.log(err, activities);
});

m.getBroadcastRestreams('2ec508ef-b618-487c-930b-f0f8636b964f', function(err, restreams) {
  return console.log(err, restreams);
});

m.getBroadcastComments('2ec508ef-b618-487c-930b-f0f8636b964f', function(err, comments) {
  return console.log(err, comments);
});

m.getBroadcastLikes('2ec508ef-b618-487c-930b-f0f8636b964f', function(err, likes) {
  return console.log(err, likes);
});

m.getBroadcastWatchers('2ec508ef-b618-487c-930b-f0f8636b964f', function(err, watchers) {
  return console.log(err, watchers);
});

m.getBroadcast('2ec508ef-b618-487c-930b-f0f8636b964f', function(err, broadcast) {
  return console.log(err, broadcast);
});

m.getUser('5564d3d26b00002700e2966d', function(err, user) {
  return console.log(err, user);
});

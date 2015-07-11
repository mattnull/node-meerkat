# Meerkat
## Node.js module for Meerkat http://meerkatapp.co
[![NPM](https://nodei.co/npm/node-meerkat.png?downloads=true&stars=true)](https://nodei.co/npm/node-meerkat/)
# Installation
`npm install node-meerkat`

# Usage

```coffeescript
Meerkat = require 'node-meerkat'

m = new Meerkat('APIKEY')

m.getAllBroadcasts (err, broadcasts) ->
	console.log err, broadcasts

m.getAllScheduledBroadcasts (err, schedules) ->
	console.log err, schedules

m.getBroadcastActivities '2ec508ef-b618-487c-930b-f0f8636b964f', (err, activities) ->
	console.log err, activities

m.getBroadcastRestreams '2ec508ef-b618-487c-930b-f0f8636b964f', (err, restreams) ->
	console.log err, restreams

m.getBroadcastComments '2ec508ef-b618-487c-930b-f0f8636b964f', (err, comments) ->
	console.log err, comments

m.getBroadcastLikes '2ec508ef-b618-487c-930b-f0f8636b964f' ,(err, likes) ->
	console.log err, likes

m.getBroadcastWatchers '2ec508ef-b618-487c-930b-f0f8636b964f', (err, watchers) ->
	console.log err, watchers

m.getBroadcast '2ec508ef-b618-487c-930b-f0f8636b964f', (err, broadcast) ->
	console.log err, broadcast

m.getUser '5564d3d26b00002700e2966d', (err, user) ->
	console.log err, user
```


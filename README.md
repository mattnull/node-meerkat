# Meerkat

# Usage

```coffeescript
m = new Meerkat('APIKEY') # Meerkat says that you need an API key. But you do not.
m.getAllBroadcasts (err, b) ->
	console.log err, b
m.getAllScheduledBroadcasts (err, b) ->
	console.log err, b

m.getBroadcastActivities '2ec508ef-b618-487c-930b-f0f8636b964f', (err, b) ->
	console.log err, b

m.getBroadcastRestreams '2ec508ef-b618-487c-930b-f0f8636b964f', (err, b) ->
	console.log err, b
m.getBroadcastComments '2ec508ef-b618-487c-930b-f0f8636b964f', (err, b) ->
	console.log err, b
m.getBroadcastLikes '2ec508ef-b618-487c-930b-f0f8636b964f' ,(err, b) ->
	console.log err, b
m.getBroadcastWatchers '2ec508ef-b618-487c-930b-f0f8636b964f', (err, b) ->
	console.log err, b
m.getBroadcast '2ec508ef-b618-487c-930b-f0f8636b964f', (err, b) ->
	console.log err, b
m.getUser '5564d3d26b00002700e2966d', (err, b) ->
	console.log err, b
```


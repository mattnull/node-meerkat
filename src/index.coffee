request = require 'request'

module.exports = class Meerkat

	constructor : (@apiKey) ->
		@version = '1.0'
		@resourceURI = 'https://resources.meerkatapp.co'
		@channelURI = 'https://channels.meerkatapp.co'

		@__request = (url, cb) ->
			cb = cb ? () ->
			url = url ? ''
			request.get "#{url}?v=#{@version}", (err, response, body) ->
				body = JSON.parse(body)
				cb(err, body)

	getAllBroadcasts : (cb) ->
		cb = cb ? () ->
		@__request "#{@resourceURI}/broadcasts", (err, data) ->
			cb(err, data)

	getAllScheduledBroadcasts : (cb) ->
		cb = cb ? () ->
		@__request "#{@resourceURI}/broadcasts", (err, data) ->
			cb(err, data)
	
	getBroadcastActivities : (broadcastID, cb) ->
		cb = cb ? () ->

		if not broadcastID or typeof broadcastID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@resourceURI}/broadcasts/#{broadcastID}/activities", (err, data) ->
				cb(err, data)
	
	getBroadcastRestreams : (broadcastID, cb) ->
		cb = cb ? () ->

		if not broadcastID or typeof broadcastID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@channelURI}/broadcasts/#{broadcastID}/restreams", (err, data) ->
				cb(err, data)
	
	getBroadcastComments : (broadcastID, cb) ->
		cb = cb ? () ->

		if not broadcastID or typeof broadcastID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@channelURI}/broadcasts/#{broadcastID}/comments", (err, data) ->
				cb(err, data)
	
	getBroadcastLikes : (broadcastID, cb) ->
		cb = cb ? () ->

		if not broadcastID or typeof broadcastID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@channelURI}/broadcasts/#{broadcastID}/likes", (err, data) ->
				cb(err, data)
	
	getBroadcastWatchers : (broadcastID, cb) ->
		cb = cb ? () ->

		if not broadcastID or typeof broadcastID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@resourceURI}/broadcasts/#{broadcastID}/watchers", (err, data) ->
				cb(err, data)
	
	getBroadcast : (broadcastID, cb) ->
		cb = cb ? () ->

		if not broadcastID or typeof broadcastID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@resourceURI}/broadcasts/#{broadcastID}/summary", (err, data) ->
				cb(err, data)

	getUser : (userID, cb) ->
		cb = cb ? () ->

		if not userID or typeof userID is 'function'
			console.log('Please provide a Broadcast ID')
		else
			@__request "#{@resourceURI}/users/#{userID}/profile", (err, data) ->
				cb(err, data)

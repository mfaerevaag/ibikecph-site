class IBikeCPH.Views.Sidebar extends Backbone.View
	template: JST['sidebar']
	
	events:
		'change .address input'			: 'fields_updated'
		'blur .address input'			: 'hide_suggestions'
		'keydown .address input'		: 'find_suggestions'
		'click .suggestions li'			: 'update_field_from_suggestion'
		'click .reset'					: 'reset'
		'click .permalink'				: 'permalink'
		'change .departure'				: 'change_departure'
		'change .arrival'				: 'change_arrival'
		'click .reverse_route'			: 'reverse_route'
		'change .mode [type=radio]'	    : 'change_mode'
		'click #cargobike_trigger'		: 'toggle_mode'

	map: null

	initialize: (options) ->
		@router = options.router
				
		@model.waypoints.on 'change:address', (model) =>
			#TODO should refactor address fields into backbone views, one for each endpoint (and perhaps for via points too)
			type = model.get 'type'
			value = model.get 'address'
			@$(".from").val(value) if type=='from'
			@$(".to").val(value) if type=='to'
		
		@model.waypoints.on 'reset', =>
			@set_field 'from', null
			@set_field 'to', null

		@departure = @getNow()
		@model.summary.on 'change', @update_departure_arrival, this

	render: (map) ->
		@map = map
		m = @model
		@$el.html @template()
		$('.help').click (event) => @help()
		$('.fold').click (event) => @fold()
		$('.search_bottom .report').click (event) ->
			@report_issue = new IBikeCPH.Views.ReportIssue model: this, el: '#report', router: @router
			@report_issue.render(m.waypoints, m.instructions.models)
		$('.search_bottom .favorites').click (event) ->
			favourites = new IBikeCPH.Views.Favourites model: '', el: '#favorites', router: @router
			favourites.render(m.waypoints)
			return false
		if window.location.hash.match 'mode:cargobike'
			setTimeout (->
				$('#cargobike_trigger').trigger 'click'
			), 200

		this

	getNow: ->
		now = new Date()
		now.setSeconds 0		#avoid minutes that are off by one
		now

	help: ->
		$('#help').toggle()
	
	fold: ->
		$('#ui').toggleClass('folded')
		
	select_all: (event) ->
		$(event.target).select()

	reset: ->
		@model.reset()
		@router.map.reset()
		@departure = undefined
		@arrival = undefined
		@update_departure_arrival()
		@departure = @getNow()
		
	permalink: ->
		mode = ""
		if $('#cargobike_trigger').hasClass('active')
			mode = '/mode:cargobike'

		url = "#!/#{@model.waypoints.to_url()+mode}"
		if url
			@router.navigate url, trigger: false
		$('#flash').remove()
		flash = $('<div />').html(I18n.t 'map.permalink').attr
			id: 'flash'
			class: 'notice'
		$('body').append(flash)
		remove_flash()
	
	pad_time: (min_or_hour) ->
		("00"+min_or_hour).slice -2
	
	format_time: (time, delta_seconds=0) ->
		if time
			adjusted = new Date()
			adjusted.setTime( time.getTime() + delta_seconds*1000 )
			@pad_time(adjusted.getHours()) + ':' + @pad_time(adjusted.getMinutes())
	
	parse_time: (str) ->
		if str % 1 is 0 and str.length is 2
			str = str+':00'
		else if str % 1 is 0 and str.length is 4
			str = str.substr(0,2)+':'+str.substr(2,2)
		time = new Date()
		time.setSeconds 0
		if /\d{1,2}[:\.]\d{1,2}/.test str  #looks like valid time? hh:mm and variations
			hours_mins = str.split /[:\.]/
			time.setHours hours_mins[0]
			time.setMinutes hours_mins[1]
		time
			
	update_departure_arrival: ->
		meters  = @router.search.summary.get 'total_distance'
		seconds  = @router.search.summary.get 'total_time'
		now = @getNow()
		valid = meters and seconds
		departure = arrival = ''
		if @departure
			departure = @format_time @departure
			arrival = @format_time @departure, seconds if valid
		else
			arrival = @format_time @arrival
			departure = @format_time @arrival, 59-seconds if valid
		$(".departure").val departure
		$(".arrival").val arrival

	change_departure: (event) ->
		time = @parse_time $(event.target).val()
		if time
			@departure = time
			@arrival = undefined
			@update_departure_arrival()
		
	change_arrival: (event) ->
		time = @parse_time $(event.target).val()
		if time
			@arrival = time
			@departure = undefined
			@update_departure_arrival()
		
	get_field: (field_name) ->
		return @$("input.#{field_name}").val() or ''

	set_field: (field_name, text) ->		
		text = '' unless text
		@$(".#{field_name}").val "#{text}"

	set_loading: (field_name, loading) ->
		@$(".#{field_name}").toggleClass 'loading', !!loading

	find_suggestions: (event) ->
		t = @
		el = $('.'+$(event.currentTarget).attr('class'))

		parent = el.parent()
		input = parent.find('input').attr('class')

		if event.keyCode is 40 or event.keyCode is 38
			if $('.suggestions').html()
				selected_element = $('.suggestions li.selected').index()
				switch event.keyCode
					when 40
						$('.suggestions li').eq(selected_element).removeClass 'selected'
						$('.suggestions li').eq(selected_element+1).addClass 'selected'
					when 38
						$('.suggestions li').eq(selected_element).removeClass 'selected'
						$('.suggestions li').eq(selected_element-1).addClass 'selected'
			
			return false

		if event.keyCode is 13 and $('.suggestions li.selected').length is 1
			$('.suggestions li.selected').trigger('click')
			return false

		setTimeout (->
			val = el.val().toLowerCase()

			if val.length >= 4
				items = []
				numberPattern = /\d+/g
				val_number = val.match(numberPattern);
				val_address = val.replace(' '+val_number, '')
				foursquare_url = IBikeCPH.config.suggestion_service.foursquare.url+val+IBikeCPH.config.suggestion_service.foursquare.token+'&callback=?'
				oiorest_url = IBikeCPH.config.suggestion_service.oiorest.url+val+'&callback=?'
				kms_url = IBikeCPH.config.suggestion_service.kms.url+val+'&callback=?'

				if $current_user
					favourites = new IBikeCPH.Models.Favourites
					favourites.fetch
						success: ->
							_.each favourites.attributes.data, (t, num) ->
								if t.name.toLowerCase().match(val.toLowerCase()) or t.address.toLowerCase().match(val.toLowerCase())
									items.push
										name: t.name
										address: t.address
										lat: t.latitude
										lng: t.longitude
										type: 'favourite'
										fav_class: t.source

				$.ajax
					type: 'get'
					url: kms_url
					cache: false
					dataType: 'json'
					success: (data) ->
						$.each data.data, ->
							if @x
								lat = @y
								lng = @x
							else
								lat = @yMin
								lng = @xMin
							items.push
								name: ''
								address: @presentationString
								lat: lat
								lng: lng
								type: 'address'
				# $.getJSON kms_url, (data) ->
					# $.each data.data, ->
					# 	if @x
					# 		lat = @y
					# 		lng = @x
					# 	else
					# 		lat = (@yMin+@yMax)/2
					# 		lng = (@xMin+@xMax)/2
					# 	items.push
					# 		name: ''
					# 		address: @presentationString
					# 		lat: lat
					# 		lng: lng
					# 		type: 'address'

				$.getJSON foursquare_url, (data) ->
					unless data.response.minivenues.length is 0
						$.each data.response.minivenues, ->
							unless @location.postalCode is ""
								items.push
									name: @name
									address: @location.address + ", " + @location.postalCode + " " + @location.city
									lat: @location.lat
									lng: @location.lng
									type: 'poi'

				interval = setInterval(->
					if items.length > 0
						$('.suggestions').remove()
						suggestions = $('<ul />').addClass('suggestions')
						parent.append(suggestions)
						
						_.each items, (t,num) ->
							unless num > 5
								if t.type is 'favourite'
									container = $('<li />').attr
										'data-name': t.name
										'data-lat': t.lat
										'data-lng': t.lng
										'data-type': input
										'data-address': t.address
										'data-class': 'favorite'
										'class': 'favourite '+t.fav_class
									name = $('<span />').addClass('n').html(t.name+' ')
									address = t.address.replace(new RegExp("(" + preg_quote(val) + ")", "gi"), "<b style=\"color: #444;\">$1</b>")
									address = $("<span />").addClass("a").html(address)
									container.append(name).append address
								else if t.type is "poi"
									container = $('<li />').attr
										'data-name': t.name
										'data-lat': t.lat
										'data-lng': t.lng
										'data-type': input
										'data-address': t.address
										'data-class': 'poi'
										'class': 'poi'
									name = $('<span />').addClass('n').html(t.name+' ')
									address = t.address.replace(new RegExp("(" + preg_quote(val) + ")", "gi"), "<b style=\"color: #444;\">$1</b>")
									address = $("<span />").addClass("a").html(address)
									container.append(name).append address
								else
									container = $('<li />').attr
										'data-name': ''
										'data-lat': t.lat
										'data-lng': t.lng
										'data-type': input
										'data-address': t.address
										'data-class': 'address'
										'class': 'address'
									address = t.address.replace(new RegExp("(" + preg_quote(val) + ")", "gi"), "<b style=\"color: #444;\">$1</b>")
									address = $('<span />').addClass('a').html(address.replace('(', '').replace(')', ''))
									container.append address

								suggestions.append container
								$('.suggestions li:first').addClass('selected')
						
						clearInterval interval
				, 500)
						
			else
				$('.suggestions').html('').hide()
				return false

		), 500
	
	reverse_route: ->
		@model.waypoints.models.reverse()
		@model.waypoints.reset_from_url @model.waypoints.to_url()
		@set_field 'from', $("#addresses .to").val()
		@set_field 'to', $("#addresses .from").val()

	update_field_from_suggestion: (event) ->
		el = $(event.currentTarget)
		type = el.data('type')
		source = el.data 'class'

		ll =
			lat: el.data('lat')
			lng: el.data('lng')
			name: el.data('name')
			
		if el.data('class') is 'address'
			value = @normalize_address IBikeCPH.util.normalize_whitespace el.data('address')

			if type is 'from'
				@set_field 'from', value
				waypoint = @model.waypoints.first()
				waypoint.set 'address', value
				waypoint.trigger 'input:address'
				$('.from').blur()
			else if type is 'to'
				@set_field 'to', value
				waypoint = @model.waypoints.last()
				waypoint.set 'address', value
				waypoint.trigger 'input:address'
				$('.to').blur()

			$('.address .'+type).attr
				'data-lat': ll.lat
				'data-lng': ll.lng
				'data-name': ll.name

			$('.suggestions').html('').hide()
		else
			if type is 'from'
				@model.waypoints.first().set 'location', ll
				@model.waypoints.first().trigger 'input:location'

			else if type is 'to'
				@model.waypoints.last().set 'location', ll
				@model.waypoints.last().trigger 'input:location'

			$('.address .'+type).attr
				'data-lat': ll.lat
				'data-lng': ll.lng
				'data-name': ll.name

			$('.suggestions').html('').hide()

	hide_suggestions: ->
		setTimeout (->
			$('.suggestions').html('').hide()
		), 200

	fields_updated: (event) ->
		return false
		input = $(event.currentTarget)
		if input.is '.from'
			waypoint = @model.waypoints.first()
		else if input.is '.to'
			waypoint = @model.waypoints.last()
		else
			return
		raw_value = input.val()
		value = IBikeCPH.util.normalize_whitespace raw_value
		
		#be a little smarter when parsing adresses, to make nominatim happier
		value = value.replace /\b[kK][bB][hH]\b/g, "København"		# kbh -> København
		value = value.replace /\b[nNøØsSvVkK]$/, ""					# remove north/south/east/west postfix
		value = value.replace /(\d+)\s+(\d+)/, "$1, $2"				# add comma between street nr and zip code
		
		input.val(value) if value != raw_value
		if value
			waypoint.set 'address', value
			waypoint.trigger 'input:address'
		else
			waypoint.reset()
			if @model.waypoints.length > 2
				@model.waypoints.remove waypoint
			else
				waypoint.trigger 'input:address'

	change_mode: (event) ->
		profile = $(event.target).attr('id')
		@model.set 'profile', profile, silent: true
		@model.trigger 'change:profile'

	toggle_mode: (event) ->
		el = $(event.currentTarget)
		el.toggleClass('active')
		if not el.hasClass('active')
			$('.mode #standard').trigger 'click'
		else
			$('.mode #cargobike').trigger 'click'

	normalize_address: (value) ->
		value = IBikeCPH.util.normalize_whitespace value
		value = value.replace /\b[kK][bB][hH]\b/g, "København"		# kbh -> København
		value = value.replace /\b[nNøØsSvVkK]$/, ""					# remove north/south/east/west postfix
		value = value.replace /(\d+)\s+(\d+)/, "$1, $2"				# add comma between street nr and zip code
		
		value = value.replace 'København SV', 'København'
		value = value.replace 'København S', 'København'
		value = value.replace 'København NV', 'København'
		value = value.replace 'København N', 'København'
		value = value.replace 'København Ø', 'København'
		value = value.replace 'København V', 'København'
		value = value.replace '(', ''
		value = value.replace ')', ''
		
		value

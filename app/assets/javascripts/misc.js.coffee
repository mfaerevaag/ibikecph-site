$().ready ->
	if $('#flash').length > 0
		$('#flash').css
			top: 40
		setTimeout( ->
			$('#flash').css
				top: -10
		,5000)
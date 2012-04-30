var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even"}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}"}}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"subtitle":"NOTE: This is just a prototype, and should not yet be used for navigation.","getting_started":"Click on the map or enter addresses in the fields below.","start":"Start","end":"End","show":"Show","reset":"Reset","search":"Search","reverse":"Reverse","josm":"JOSM","osm_bugs":"OSM Bugs","map_tools":"Map Tools","highlight_unnamed":"Highlight unnamed streets","start_tip":"Enter start","end_tip":"Enter destination","legal":"Routing by <a href=\"https://github.com/DennisOSRM/Project-OSRM/wiki\">OSRM</a>","search_results":"Search Results","found_x_results":"found %{i} results","timed_out":"Timed Out","no_results_found":"No results found","no_results_found_source":"No results found for start","no_results_found_target":"No results found for end","no_route":"No route found","route_description":"Route Description","get_link_to_route":"Generate Link","generate_link_to_route":"waiting for link","link_to_route_timeout":"not available","gpx_file":"GPX File","distance":"Distance","duration":"Duration","computing_route":"Computing route","NO_ROUTE_FOUND":"No route possible","N":"north","E":"east","S":"south","W":"west","NE":"northeast","SE":"southeast","SW":"southwest","NW":"northwest","ordinal_0":"0th","ordinal_1":"1st","ordinal_2":"2nd","ordinal_3":"3rd","ordinal_4":"4th","ordinal_5":"5th","ordinal_6":"6th","ordinal_7":"7th","ordinal_8":"8th","ordinal_9":"9th","head":"Head %{bearing}","direction_0":"Unknown instruction","direction_1":"Continue","direction_2":"Turn slight right","direction_3":"Turn right","direction_4":"Turn sharp right","direction_5":"U-Turn","direction_6":"Turn slight left","direction_7":"Turn left","direction_8":"Turn sharp left","roundabout":"Enter roundabout and take the %{nth} exit","direction_15":"You have reached your destination","head_on":"Head %{bearing} on %{name}","direction_0_on":"Unknown instruction %{name}","direction_1_on":"Continue on %{name}","direction_2_on":"Turn slight right on %{name}","direction_3_on":"Turn right on %{name}","direction_4_on":"Turn sharp right on %{name}","direction_5_on":"U-Turn on %{name}","direction_6_on":"Turn slight left on %{name}","direction_7_on":"Turn left on %{name}","direction_8_on":"Turn sharp left on %{name}","roundabout_on":"Enter roundabout and take %{nth} exit on %{name}"},"de":{"subtitle":"HINWEIS: Dies ist nur ein Prototyp, und sollte nicht zur Navigation verwendet werden.","getting_started":"Klicken Sie auf die Karte oder geben Sie die Adressen in die Felder unten aus.","headline":"OSRM-Rails Demo","start":"Start","end":"Ziel","show":"Show","reset":"Reset","search":"Zeigen","reverse":"Umdrehen","josm":"JOSM","osm_bugs":"OSM Bugs","map_tools":"Kartenwerkzeuge","highlight_unnamed":"Unbenannte Stra\u00dfen hervorheben","start_tip":"Startposition eingeben","end_tip":"Zielposition eingeben","legal":"Routing by <a href=\"https://github.com/DennisOSRM/Project-OSRM/wiki\">OSRM</a>","search_results":"Suchergebnisse","found_x_results":"%{i} Ergebnisse gefunden","timed_out":"Zeit\u00fcberschreitung","no_results_found":"Keine Ergebnisse gefunden","no_results_found_source":"Keine Ergebnisse gefunden f\u00fcr Start","no_results_found_target":"Keine Ergebnisse gefunden f\u00fcr Ziel","no_route":"Keine Route hierher m\u00f6glich","route_description":"Routenbeschreibung","get_link_to_route":"Generiere Link","generate_link_to_route":"Warte auf Antwort","link_to_route_timeout":"nicht m\u00f6glich","gpx_file":"GPX Datei","distance":"Distanz","duration":"Dauer","computing_route":"Ihre Route wird berechnet","N":"Norden","E":"Ost","S":"S\u00fcden","W":"Westen","NE":"Nordost","SE":"S\u00fcdost","SW":"S\u00fcdwest","NW":"Nordwest","ordinal_0":"0.","ordinal_1":"1.","ordinal_2":"2.","ordinal_3":"3.","ordinal_4":"4.","ordinal_5":"5.","ordinal_6":"6.","ordinal_7":"7.","ordinal_8":"8.","ordinal_9":"9.","head":"Fahren Sie Richtung %{bearing}","direction_0":"Unbekannte Anweisung","direction_1":"Geradeaus weiterfahren","direction_2":"Leicht rechts abbiegen","direction_3":"Rechts abbiegen","direction_4":"Scharf rechts abbiegen","direction_5":"Wenden","direction_6":"Leicht links abbiegen","direction_7":"Links abbiegen","direction_8":"Scharf links abbiegen","roundabout":"In den Kreisverkehr einfahren und bei %{nth} M\u00f6glichkeit","direction_15":"Sie haben Ihr Ziel erreicht","head_on":"Fahren Sie Richtung %{bearing} auf %{name}","direction_0_on":"Unknown instructiauf %{name}","direction_1_on":"Geradeaus weiterfahren auf %{name}","direction_2_on":"Leicht rechts abbiegen auf %{name}","direction_3_on":"Rechts abbiegen auf %{name}","direction_4_on":"Scharf rechts abbiegen auf %{name}","direction_5_on":"Wenden auf %{name}","direction_6_on":"Leicht links abbiegen auf %{name}","direction_7_on":"Links abbiegen auf %{name}","direction_8_on":"Scharf links abbiegen auf %{name}","roundabout_on":"In den Kreisverkehr einfahren und bei %{nth} M\u00f6glichkeit auf %{name}"},"dk":{"subtitle":"BEM\u00c6RK: Dette er kun en prototype, og b\u00f8r endnu ikke anvendes til at navigere efter.","getting_started":"Klik p\u00e5 kortet eller indtast adresser i felterne nedenfor.","start":"Fra","end":"Til","show":"Vis","reset":"Ryd","search":"S\u00f8g","reverse":"Byt","josm":"JOSM","osm_bugs":"OSM Bugs","map_tools":"Kortv\u00e6rkt\u00f8jer","highlight_unnamed":"Vis veje uden navne","start_tip":"Fra-adresse","end_tip":"Til-adresse","legal":"Ruteberegning udf\u00f8rt med <a href=\"https://github.com/DennisOSRM/Project-OSRM/wiki\" target=\"_blank\">OSRM</a>","search_results":"S\u00f8geresultater","found_x_results":"fandt %{i} resultater","timed_out":"Udl\u00f8b","no_results_found":"Ingen resultater fundet","no_results_found_source":"Til-adresse ikke fundet","no_results_found_target":"Fra-adresse ikke fundet","route_description":"Rutebeskrivelse","get_link_to_route":"Generer link","generate_link_to_route":"Venter p\u00e5 link","link_to_route_timeout":"Ikke tilg\u00e6ngelig","gpx_file":"Download GPX-fil","distance":"Afstand","duration":"Rejsetid","computing_route":"Beregner rute","no_route":"Ingen rute fundet","N":"nord","E":"\u00f8st","S":"syd","W":"vest","NE":"nord\u00f8st","SE":"syd\u00f8st","SW":"sydvest","NW":"nordvest","ordinal_0":"0.","ordinal_1":"1.","ordinal_2":"2.","ordinal_3":"3.","ordinal_4":"4.","ordinal_5":"5.","ordinal_6":"6.","ordinal_7":"7.","ordinal_8":"8.","ordinal_9":"9.","head":"K\u00f8r mod %{bearing}","direction_0":"Ukendt instruktion","direction_1":"Forts\u00e6t","direction_2":"Drej let til h\u00f8jre","direction_3":"Drej til h\u00f8jre","direction_4":"Drej skarpt til h\u00f8jre","direction_5":"Foretag en u-vending","direction_6":"Drej let til venstre","direction_7":"Drej til venstre","direction_8":"Drej skarpt til venstre","roundabout":"F\u00f8lg rundk\u00f8rslen og tag %{nth} frak\u00f8rsel","direction_15":"Ankomst","head_on":"K\u00f8r mod %{bearing} ad %{name}","direction_0_on":"Ukendt instruktion ad %{name}","direction_1_on":"Forts\u00e6t ad %{name}","direction_2_on":"Drej let til h\u00f8jre ad %{name}","direction_3_on":"Drej til h\u00f8jre ad %{name}","direction_4_on":"Drej skarpt til h\u00f8jre ad %{name}","direction_5_on":"Foretag en u-vending ad %{name}","direction_6_on":"Drej let til venstre ad %{name}","direction_7_on":"Drej til venstre ad %{name}","direction_8_on":"Drej skarpt til venstre ad %{name}","roundabout_on":"F\u00f8lg rundk\u00f8rslen og tag %{nth} frak\u00f8rsel ad %{name}"}};
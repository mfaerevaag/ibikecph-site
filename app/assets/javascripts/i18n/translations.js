var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}"},"forbidden":{"title":"Sorry","body":"It seems you don't have access to the item."},"record_not_found":{"title":"Item not found","body":"You may have mistyped the address or the item might have been deleted."},"route_not_found":{"title":"Page not found","body":"You may have mistyped the address or the page might have moved."},"internal_error":{"title":"Ups...!","body":"Something went wrong. We'll fix it as soon as possible."}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}"}},"attributes":{"email_authentication":{"uid":"Email","uid_confirmation":"Email confirmation"},"authentications":{"uid":"Email","uid_confirmation":"Email confirmation"}}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"will_paginate":{"previous_label":"&#8592; Previous","next_label":"Next &#8594;","page_gap":"&hellip;","page_entries_info":{"single_page":{"zero":"No %{model} found","one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}"},"single_page_html":{"zero":"No %{model} found","one":"Displaying <b>1</b> %{model}","other":"Displaying <b>all&nbsp;%{count}</b> %{model}"},"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in total"}},"edit":"Edit","new":"New","delete":"Delete","submit":"Submit","login":"Login","hi":"Hi %{user}","true":true,"false":false,"tags":"Tags","departure":"Departure","you":"You","or_login_with":"or login with","sure_q":"Are you sure?","be_the_first_to_comment":"Be the first to comment","comment":"comment","users":{"index":{"title":"Users"},"new":{"title":"Sign Up","body":"Create your free I Bike Cph account","submit":"Create Account","already_have_account_q":"Already have an account?"},"show":{"joined_at_html":"Joined %{ago}"}},"sessions":{"new":{"title":"Login","submit":"Login","forgot_it_q":"Forgot it?","no_account_q":"No account?"},"flash":{"logged_in":"Logged in as %{user}.","logged_in_oath":"Logged in as %{user} using %{provider}.","invalid_login":"Email or password was invalid.","oath_cancel":"Login cancelled.","oath_error":"Could not log in: %{error}.","email_not_verified":"Email %{email} not verified.","logged_out":"Logged out."}},"accounts":{"show":{"title":"Profile","title_login":"Login","title_settings":"Settings","name":"Name","image":"Image","about":"About","email":"Email","change_email":"Change Email","change_password":"Change Password","notify_by_email":"Email Notifications","unverified":"Unverified","password_hidden":"Hidden","no_image":"None"},"edit":{"title":"Edit Profile","submit":"Save"},"activating":{"title":"Almost there...","body":"To activate your account, please follow the instructions in the email we sent you.","link":"Resend Activation Email"},"edit_password":{"title":"Change Password","forgotten_q":"Forgotten?","new_password":"New Password","submit":"Change"},"welcome":{"title":"Welcome!","body":"Thank you for signing up. We hope you'll enjoy your stay at I Bike Cph.","view_account":"View your Account"},"settings":{"title":"Edit Settings","unverified":"To receive email notifications, you need to verify your email address.","email_notifications":"Send me email notifications","submit":"Save"},"flash":{"email_not_found":"Email not found.","password_changed":"Password changed.","invalid_password":"Current password didn't match.","updated":"Account updated.","settings_updated":"Settings updated.","activation_sent":"Activation email resent to %{email}."}},"blog":{"index":{"new":"New Blog Entry"},"show":{"latest_entries":"Latest Entries","blog_archive":"Blog Archive"},"new":{"title":"New Blog Entry"},"edit":{"title":"Edit Blog Entry"},"form":{"make_sticky":"Keep this entry at top (can be changed latter).","submit":"Save"},"archive":{"title":"Blog Archive"},"latest":{"title":"Latest Entries","archive":"Blog Archives","new":"New Entry"},"tag":{"title":"Entries tagged with: %{tag}"},"flash":{"created":"Blog entry created.","updated":"Blog entry updated.","deleted":"Blog entry deleted."}},"comments":{"new":{"add_comment":"Add comment","login_to_comment_html":"To comment, please %{link}.","login":"login","submit":"Submit"},"comments":{"title":"Comments"}},"emails":{"new":{"title":"Change Email","new_email":"New Email","new_email_confirmation":"New Email Confirmation","submit":"Change"},"unverified":{"title":"Unverified Email","body":"You should have received en email with instructions on how to verify your email. Otherwise, you can resent it be clicking below.","submit":"Resend Verification Email"},"verification_sent":{"title":"Verification Email Sent","body":"To use your email, please follow the instructions in the verification email we sent you","link":"Resend Verification Email"},"new_verification":{"title":"Verify Email","body":"Please enter your email below, and follow the instructions in the email we send to you.","submit":"Submit"},"flash":{"verification_sent":"Verification instructions sent to %{email}.","already_verified":"Email %{email} already verified.","verified":"Email %{email} verified.","not_found":"Email %{email} not found.","verification_expired":"Verification link has expired.","verified_with_password":"Email #{@email} verified and password set.","verification_wait":"Verification email can only be sent once each %{time}. Please wait a while and try again.","verification_not_found":"Invalid verification link."}},"password_resets":{"new_ask":{"title":"Reset Password","body":"Please enter your email, and we'll send you instructions for resetting your password.","submit":"Send Instructions"},"new_select":{"title":"Reset Password","body":"Instructions for resetting your password will be send to %{user}.","submit":"Send Instructions"},"new_fixed":{"title":"Reset Password","body":"Instructions for resetting your password will be send to %{user}.","submit":"Send Instructions"},"edit":{"title":"Change Password","for_user":"Change password for user %{user}.","submit":"Change Password"},"flash":{"instructions_sent":"Instructions for resetting your password has been emailed to %{email}.","email_not_found":"Email %{email} not found.","password_changed":"Password changed","invalid_link":"Invalid password reset link.","expired_link":"Password reset link has expired."}},"user_mailer":{"activation":{"subject":"Activating your I Bike Cph account","body":"Thank you for signing up at I Bike Cph! To verify your email, please visit:"},"verify_email":{"subject":"Verifying your I Bike Cph account","body":"To verify your email for use with I Bike Cph, please visit:"},"password_reset":{"subject":"Resetting your I Bike Cph password","body":"To reset your I Bike Cph password, please visit:"},"blog_entry":{"subject":"Blog: %{title}","body":"A new blog entry titled '%{title}' was posted on I Bike Cph. To read it, please visit:"},"comment":{"subject":"Comment: %{title}","body":"%{user} added a comment '%{title}' on I Bike Cph. To read it, please visit:"}},"issues":{"index":{"title":"Lab","body":"Ideas and bug reports.","no_items":"No items."},"show":{"back_to_list":"Back to list","labels":"Labels","Tags":"Tags"}},"character":{"remaining":"%{n} characters remaining"},"from":"From","to":"To","page_title":"I Bike Cph","generate_link":"Make a Link","route_description":"Route Description","distance":"distance","duration":"time","arrival":"arrival","link_for_route":"Link to Route","clear":"clear","1":"first","2":"seccond","3":"third","4":"fourth","5":"fifth","6":"sixth","7":"seventh","8":"eigth","9":"ninth","10":"tenth","N":"noth","NE":"noth east","E":"east","SE":"south east","S":"south","SW":"south west","W":"west","NW":"north west","head":"Head","continue":"Continue","turn_left":"Turn left","turn_slight_left":"Turn slightly to the left","turn_sharp_left":"Turn sharply to the left","turn_right":"Turn right","turn_slight_right":"Turn slighty to the right","turn_sharp_right":"Turn sharply to the right","enter_roundabout":"Enter the roundabout","take_the_nth_exit":"and take the {%nth} exit","reached_destination":"You arrived at the destination","follow":"following","and_continue":"and continue for","for":"for"},"dk":{"activerecord":{"attributes":{"email_authentication":{"uid":"Email","uid_confirmation":"Email konfirmering"},"authentications":{"uid":"Email","uid_confirmation":"Email konfirmering"},"blog_entry":{"title":"Titel","body":"Indhold","tags":"Tags","image":"Billede","sticky":"Fasthold"}},"errors":{"messages":{"blank":"kan ikke v\u00e6re tom"}}},"edit":"Rediger","new":"Ny","delete":"Slet","submit":"Gem","login":"Log ind","hi":"Hej %{user}","true":"Til","false":"Fra","tags":"Tags","departure":"Afgang","ago":"siden","you":"Dig","or_login_with":"eller log ind med","sure_q":"Er du sikker?","be_the_first_to_comment":"V\u00e6r den f\u00f8rste til at kommentere","comment":{"one":"1 kommentar","other":"%{count} kommentarer"},"character":{"one":"1 karakter","other":"%{count} karakterer","remaining":"%{n} %{pluralized} remaining","too_long":"%{n} %{pluralized} too_long"},"users":{"index":{"title":"Brugere"},"new":{"title":"Opret Konto","body":"Opret en gratis I Bike Cph konto","submit":"Gem","already_have_account_q":"Har du allerede en konto?"},"show":{"joined_at_html":"Oprettet %{ago}"}},"sessions":{"new":{"title":"Log ind","submit":"Log ind","forgot_it_q":"Glemt det?","no_account_q":"Ingen konto?"},"flash":{"logged_in":"Logget ind som %{user}.","logged_in_oath":"Logget ind som %{user} med %{provider}.","invalid_login":"Email eller kodeord var forkert.","oath_cancel":"Login afbrudt.","oath_error":"Kunne ikke logge ind: %{error}.","email_not_verified":"Email %{email} ikke verificeret.","logged_out":"Logget ud."}},"accounts":{"show":{"title":"Profil","title_login":"Log ind","title_settings":"Indstillinger","name":"Navn","image":"Billede","about":"Om","email":"Email","change_email":"\u00c6ndr Email","change_password":"\u00c6ndr kodeord","notify_by_email":"Email Beskeder","unverified":"Uverficiret","password_hidden":"Skjult","no_image":"Intet"},"edit":{"title":"Rediger Profil","submit":"Gem"},"activating":{"title":"N\u00e6sten i m\u00e5l...","body":"For at aktivere din konto, bedes du venligts f\u00f8lge instruktionerne i den email vi har sendt til dig.","link":"Gensend aktiveringsemail"},"edit_password":{"title":"\u00c6ndr Kodeord","forgotten_q":"Glemt?","new_password":"Nyt Kodeord","submit":"\u00c6ndr"},"welcome":{"title":"Velkommen!","body":"Tak for din indmeldelse. Vi h\u00e5ber du f\u00f8r forn\u00f8jelse af dit ophold p\u00e5 I Bike Cph.","view_account":"Se din konto"},"settings":{"title":"Rediger Indstillinger","unverified":"For at modtage emailbeskeder, er det n\u00f8dvendig at du verificerer din emailadresse.","email_notifications":"Send mig emailbeskeder","submit":"Gem"},"flash":{"email_not_found":"Email ikke fundet.","password_changed":"Kodeord \u00e6ndret.","invalid_password":"Nuv\u00e6rende kodeord ikke korrekt.","updated":"Konto opdateret.","settings_updated":"Indstillinger opdateret.","activation_sent":"Aktiveringsemail gensendt til %{email}."}},"blog":{"index":{"new":"Nyt Blogindl\u00e6g"},"show":{"blog_archive":"Blogarkiv"},"new":{"title":"Nyt Blogindl\u00e6g"},"edit":{"title":"Rediger Blogindl\u00e6g"},"form":{"make_sticky":"Hold dette indl\u00e6g \u00f8verst (kan \u00e6ndres senere).","submit":"Gem"},"archive":{"title":"Blogarkiv"},"latest":{"title":"Seneste Indl\u00e6g","archive":"Blogarkiv","new":"Nyt Indl\u00e6g"},"tag":{"title":"Indl\u00e6g tagget med: %{tag}"},"flash":{"created":"Blogindl\u00e6g oprettet.","updated":"Blogindl\u00e6g opdateret.","deleted":"Blogindl\u00e6g slettet."}},"comments":{"new":{"add_comment":"Tilf\u00f8j kommentar","login_to_comment_html":"For at kommentere bedes du %{link}.","login":"logge ind","submit":"Send"},"comments":{"title":"Kommentarer"}},"emails":{"new":{"title":"\u00c6ndr Email","new_email":"Ny Email","new_email_confirmation":"Ny Email Konfirmering","submit":"Gem"},"unverified":{"title":"Uverificeret Email","body":"Du skulle gerne have modtaget en email med instruktioner om hvordan du verificerer din email. Eller kan de f\u00e5 den gensendt ved at klikke nedenfor.","submit":"Gensend Verificeringsemail"},"verification_sent":{"title":"Verificeringsemail Sendt","body":"For benytte din email, bedes du f\u00f8lge instruktioner i den verificeringsemail vi har sendt til dig.","link":"Gensend Verificeringsemail"},"new_verification":{"title":"Verificer Email","body":"Indtast din email nedenfor, og f\u00f8lg instrutioner i den email vi sender til dig.","submit":"Send"},"flash":{"verification_sent":"Verificeringinstruktioner sendt til %{email}.","already_verified":"Emailen %{email} er allerede verificeret.","verified":"Emailen %{email} verificeret.","not_found":"Emailen %{email} ikke fundet.","verification_expired":"Verifikationlinket er udl\u00f8bet.","verified_with_password":"Emailen #{@email} verificeret, og kodeord gemt.","verification_wait":"Verifikationsemail kan kun sendes hver %{time}. Vent venligts lidt, og pr\u00f8v s\u00e5 igen.","verification_not_found":"Ugyldigt verifikationslink."}},"password_resets":{"new_ask":{"title":"Nulstil Kodeord","body":"Indtast din email nedenfor, s\u00e5 sender vi instrutioner om hvordan du nulstiller dit kodeord.","submit":"Send Instruktioner"},"new_select":{"title":"Nulstil Kodeord","body":"Instrutioner om hvordan du nulstiller dit kodeord vil blive sendt til %{user}.","submit":"Send Instruktioner"},"new_fixed":{"title":"Nulstil kodeord","body":"Instruktioner om hvordan du nulstiller dit kodeord vil blive sendt til %{user}.","submit":"Send Instruktioner"},"edit":{"title":"\u00c6ndr Kodeord","for_user":"\u00c6ndr kodeord for brugeren %{user}.","submit":"\u00c6ndr Kodeord"},"flash":{"instructions_sent":"Instruktioner om hvordan du nulstiller dit kodeord er sendt til %{email}.","email_not_found":"Emailen %{email} ikke fundet.","password_changed":"Kodeord \u00c6ndret","invalid_link":"Ugyldigt link til nulstilling af kodeord.","expired_link":"Link til nulstilling af kodeord er udl\u00f8bet."}},"user_mailer":{"activation":{"subject":"Aktiver din I Bike Cph konto","body":"Tak for indmeldingen p\u00e5 I Bike Cph! For at verificere din  email, bedes du g\u00e5 til:"},"verify_email":{"subject":"Verificering af din I Bike Cph konto","body":"For at verificere din email til brug p\u00e5 I Bike Cph, bedes du g\u00e5 til:"},"password_reset":{"subject":"Nulstilling af dit I Bike Cph kodeord","body":"For at nulstille dig I Bike Cph kodeord, bedes du g\u00e5 til:"},"blog_entry":{"subject":"Blogindl\u00e6g: %{title}","body":"Et nyt blogindl\u00e6g med titlen '%{title}' er oprettet p\u00e5 I Bike Cph. L\u00e6s det p\u00e5:"},"comment":{"subject":"Kommentar: %{title}","body":"%{user} tilf\u00f8jede en kommentar '%{title}' p\u00e5 I Bike Cph. L\u00e6s den p\u00e5:"}},"issues":{"index":{"title":"Lab","body":"Id\u00e9er og fejlmeldinger.","no_items":"Ingen indl\u00e6g."},"show":{"back_to_list":"Tilbage til listen","labels":"M\u00e6rkater","Tags":"Tags"},"sidebar":{"title":"Popul\u00e6re emner","most_votes":"Flest stemmer","most_comments":"Flest kommentarer"},"labels":{"all":"Alle","ideas":"Id\u00e9er","bugs":"Fejl"}},"errors":{"forbidden":{"title":"Desv\u00e6rre","body":"Det lader til at du ikke har adgang til siden."},"record_not_found":{"title":"Emne ikke fundet","body":"M\u00e5ske har du indtastet en forkert adresse, eller siden er flyttet."},"route_not_found":{"title":"Side ikke fundet","body":"M\u00e5ske har du indtastet en forkert adresse, eller siden er flyttet."},"internal_error":{"title":"Ups...!","body":"Noget gik galt. Vi retter det hurtigst muligt."},"character":{"remaining":"%{n} karakterer tilbage"}},"from":"Fra","to":"Til","page_title":"I Bike Cph","generate_link":"Lav et link","route_description":"Rutebeskrivelse","distance":"afstand","duration":"tid","arrival":"ankomst","1":"f\u00f8rste","2":"anden","3":"tredje","4":"fjerde","5":"femte","6":"sjette","7":"syvende","8":"ottende","9":"niende","10":"tiende","normal_bike":"Almindelig cykel","frieght_bike":"Ladcykel","electrical_bike":"Elcykel","reset":"Nulstil","link_for_route":"Link til rute","route_instructions":"Rutebeskrivelse","N":"mod nord","NE":"mod nord\u00f8st","E":"mod \u00f8st","SE":"mod syd\u00f8st","S":"mod syd","SW":"mod sydvest","W":"mod vest","NW":"mod nordvest","head":"Start med at k\u00f8re","continue":"K\u00f8r frem","turn_left":"Drej til venstre","turn_slight_left":"Drej let til venstre","turn_sharp_left":"Drej skarpt til venstre","turn_right":"Drej til h\u00f8jre","turn_slight_right":"Drej let til h\u00f8jre","turn_sharp_right":"Drej skarpt til h\u00f8jre","enter_roundabout":"K\u00f8r ind i rundk\u00f8rsel","take_the_nth_exit":"tag {%nth} afk\u00f8rsel","reached_destination":"Du er fremme ved destinationen","follow":"ad","and_continue":"og forts\u00e6t","for":"og forts\u00e6t","towards":"mod","datetime":{"distance_in_words":{"half_a_minute":"et halvt minut","less_than_x_seconds":{"one":"mindre end 1 sekund","other":"mindre end %{count} sekunder"},"x_seconds":{"one":"1 sekund","other":"%{count} sekunder"},"less_than_x_minutes":{"one":"mindre end et minut","other":"mindre end %{count} minutter"},"x_minutes":{"one":"1 minut","other":"%{count} minutter"},"about_x_hours":{"one":"cirka 1 time","other":"cirka %{count} timer"},"x_days":{"one":"1 dag","other":"%{count} dage"},"about_x_months":{"one":"cirka 1 m\u00e5ned","other":"cirka %{count} m\u00e5ned"},"x_months":{"one":"1 m\u00e5ned","other":"%{count} m\u00e5neder"},"about_x_years":{"one":"cirka 1 \u00e5r","other":"cirka %{count} \u00e5r"},"over_x_years":{"one":"over 1 \u00e5r","other":"over %{count} \u00e5r"},"almost_x_years":{"one":"n\u00e6sten 1 \u00e5r","other":"n\u00e6sten %{count} \u00e5r"}},"prompts":{"year":"\u00c5r","month":"M\u00e5ned","day":"Dag","hour":"Time","minute":"Minute","second":"Sekunder"}}}};
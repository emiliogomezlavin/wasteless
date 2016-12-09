console.log("Connected")

jQuery(document).ready(function() {

  // Countdown initializer

	var now = new Date('12/25/16 00:00 AM');
	var countTo = now.valueOf();

	$('.timer').countdown(countTo, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

	$('#subscribe').on('click', function(event) {
		event.preventDefault()
		var email = $('#subscribe-email').val()

		$.ajax({
			url: "https://docs.google.com/forms/d/e/1FAIpQLSc6l_0OE-1NQMenajNBnmhpQeDQFP6ZDACEiWQON2pufOm68w/formResponse",
			data: {
				"entry.2077103770": email
			},
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					console.log("Switch")
				},
				200: function () {
					console.log("Switch")
				}
			}
		})
	})

});

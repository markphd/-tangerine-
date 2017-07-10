// 1. Password field helper

var elem = $("#password");

elem.focus(function() {
	$("p.inner--label").addClass('hide');
});

elem.focusout(function() {
	if (elem.val() === "") {
		$("p.inner--label").removeClass('hide');
	}
})


// 2. Forgot password button pre-loader

var resetButton = $(".form--button");

resetButton.click(function() {
	console.log("Clicked");
})
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


// 3. Show/Hide Confirm password
$('#new-password').hidePassword({
	innerToggle: true,
	enforceWidth: false,
	toggle: {
		element: '<p>',
		className: 'inner--label',
		styles: { 'margin': '0 2% 0 0', 'padding': '1%', 'display': 'inline' }
	},
	wrapper: {
		enforceWidth: false,
		styles: { 'margin': '0', 'padding': '0' , 'display': 'inline'}
	}
});

$('#new-password').on('focus', function() {
	$('label[for="new-password"]').addClass('active');
});

$('#confirm-password').hidePassword({
	innerToggle: true,
	enforceWidth: false,
	toggle: {
		element: '<p>',
		className: 'inner--label',
		styles: { 'margin': '0 2% 0 0', 'padding': '1%', 'display': 'inline' }
	},
	wrapper: {
		enforceWidth: false,
		styles: { 'margin': '0', 'padding': '0' , 'display': 'inline'}
	}
});

$('#confirm-password').on('focus', function() {
	$('label[for="confirm-password"]').addClass('active');
})
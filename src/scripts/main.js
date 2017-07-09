var elem = $("#password");

elem.focus(function() {
	$("p.inner--label").addClass('hide');
});

elem.focusout(function() {
	if (elem.val() === "") {
		$("p.inner--label").removeClass('hide');
	}
})
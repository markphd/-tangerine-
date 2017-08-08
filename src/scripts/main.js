$( document ).ready(function() {

	// 3. Show/Hide Confirm password
	$('#new-password').hidePassword({
		innerToggle: true,
		enforceWidth: true,
		toggle: {
			element: '<p>',
			className: 'inner--label'
		},
		wrapper: {
			enforceWidth: true
		}
	});

	$('#new-password').on('focus', function() {
		$('label[for="new-password"]').addClass('active');
	});

	$('#new-password').on('focusout', function() {
		$('label[for="new-password"]').removeClass('active');
	});

	$('#confirm-password').hidePassword({
		innerToggle: true,
		enforceWidth: true,
		toggle: {
			element: '<p>',
			className: 'inner--label'
		},
		wrapper: {
			enforceWidth: true
		}
	});

	$('#confirm-password').on('focus', function() {
		$('label[for="confirm-password"]').addClass('active');
	})

	$('#confirm-password').on('focusout', function() {
		$('label[for="confirm-password"]').removeClass('active');
	})

	$('#purchase-password').hidePassword({
		innerToggle: true,
		enforceWidth: true,
		toggle: {
			element: '<p>',
			className: 'inner--label'
		},
		wrapper: {
			enforceWidth: true
		}
	});

	$('#purchase-password').on('focus', function() {
		$('label[for="purchase-password"]').addClass('active');
	})

	$('#purchase-password').on('focusout', function() {
		$('label[for="purchase-password"]').removeClass('active');
	})
});
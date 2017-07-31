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
});
const validateInfo = values => {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = 'You must enter a username';
	} else if (values.username.length < 4) {
		errors.username = 'Username must be at least 4 characters';
	}

	if (!values.email) {
		errors.email = 'You must enter an email';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid';
	}

	if (!values.password) {
		errors.password = 'A password is required';
	} else if (values.password.length < 8) {
		errors.password = 'Password must be at least 8 characters';
	}

	if (!values.password2) {
		errors.password2 = 'You must confirm your password';
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Passwords do not match';
	}

	return errors;
};

export default validateInfo;

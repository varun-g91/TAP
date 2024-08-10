export function validateLogin(identifier, password) {
    if (!identifier || !password) {
        throw new Error('Please provide both identifier and password');
    }

    // Additional validation can be added here, such as checking the format of the email, etc.
    if (typeof identifier !== 'string' || typeof password !== 'string') {
        throw new Error('Invalid input type');
    }
}

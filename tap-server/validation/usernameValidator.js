// Username validation rules
export const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{6,}$/;
    if (!usernameRegex.test(username)) {
        throw new Error('Invalid username');
    }
}


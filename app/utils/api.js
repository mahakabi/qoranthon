export const registerUser = async (userData) => {
    try {
        const response = await fetch(process.env.API_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        },
        );
        console.log(response);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Registration failed: ${response.statusText} \n ${JSON.stringify(errorData)}`);
        }
        return response.json();
    } catch (error) {
        console.error('An error occurred during user registration:', error);
        throw error;
    }

}

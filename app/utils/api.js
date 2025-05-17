import toast from "react-hot-toast";

export const registerUser = async (userData) => {
    try {
        const response = await fetch(process.env.API_URL + '/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorData = await response.json();

            return { success: false, message: errorData.message };
        }

        const data = await response.json();
        return { success: true, data };

    } catch (error) {
        toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى.");
        return { success: false, message: error.message };
    }
}

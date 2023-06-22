import axios from 'axios';

export const useChainfuse = () => {
    /**
     * 
     * Method for user register
     * @param walletAddress 
     * 
     */
    const signup = async (walletAddress: String) => {
        const res = await axios.post(
            '/users/signup',
            {
                walletAddress: walletAddress
            },
            {
                headers: {
                    'Content-Type': "application/json"
                }
            }
        );
    }

    /**
     * Methor for user login
     * @param walletAddress 
     */
    const login = async (walletAddress: String) => {
        const res = await axios.post(
            '/users/login',
            {
                walletAddress: walletAddress
            },
            {
                headers: {
                    'Content-Type': "application/json"
                }
            }
        );
    }

    return {
        signup,
        login,
    }
}

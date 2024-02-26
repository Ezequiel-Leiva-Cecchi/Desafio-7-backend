import { usersDAO } from '../dao/users/index.js';

export const register = async (userData) => {
    try {
        if (
            userData.email === 'adminCoder@coder.com' &&
            userData.password === 'adminCod3r123'
        ) {
            userData.isAdmin = true;
        } else {
            userData.isAdmin = false;
        }
        const newUser = await usersDAO.createUser(userData);
        return newUser;
    } catch (error) {
        throw new Error('Failed to register');
    }
};

export const login = async (userData) => {
    try {
        if (
            userData.email === 'adminCoder@coder.com' &&
            userData.password === 'adminCod3r123'
        ) {
            userData.isAdmin = true;
        } else {
            userData.isAdmin = false;
        }
        return userData;
    } catch (error) {
        throw new Error('Failed to login');
    }
};

export const logout = async (req) => {
    try {
        await req.session.destroy();
    } catch (error) {
        throw new Error('Failed to logout');
    }
};

export const loginWithGithub = async (userData) => {
    return userData;
};

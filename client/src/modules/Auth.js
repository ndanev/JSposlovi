import axios from 'axios';
// import router from '../routes';

const state = {
    token: localStorage.getItem("token") || '',
    users: {},
    status: ''
};

const getters = {
    isLoggedIn: function (state) {
        if (state.token != '') {
            return true;
        } else {
            return false;
        }
    },
    authState: state => state.status,
    user: state => state.user
};

const actions = {
    async login({ commit }, user) {
        commit('auth_request');
        let response = await axios.post('http://localhost:5000/api/users/login', user);
        if (response.data.success) {
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = token;
            commit('auth_success', token, user);
        }
        return response;
    }
};

const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token,
            state.user = user,
            state.status = 'success'
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
import Vuex from 'vuex'
import Vue from 'vue'
import CN from '../lang/_CN'
import JP from '../lang/_JP'
import EN from '../lang/_EN'
import session from '../store/session'
const LANGUAGE = { CN, JP, EN }
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        userinfo: {
            username: session.getSession("username"),
            token: session.getSession("token")
        },
        lang: LANGUAGE[session.getLocal('language')] || CN
    },
    mutations: {
        saveuser(state, payload) {
            state.userinfo = payload.payload;
        },
        setLanguage(state, payload) {
            state.lang = payload.payload.language;
            session.setLocal("language", payload.payload.value);
        },
        signOut(state) {
            session.clearSession(['username', 'token']);
            state.userinfo = { username: "", token: "" };
        }
    }
})
export default store;

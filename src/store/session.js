export default {
    setSession(key, value) {
        sessionStorage.setItem(key, value)
    },
    getSession(key) {
        return sessionStorage.getItem(key)
    },
    clearSession(key){
        if(key){
            sessionStorage.removeItem(key)
        }else{
            sessionStorage.clear()
        }
    },
    setLocal(key,value){
        localStorage.setItem(key, value)
    },
    getLocal(key) {
        return localStorage.getItem(key)
    },
    clearLocal(key){
        if(key){
            localStorage.removeItem(key)
        }else{
            localStorage.clear()
        }
    }
}
export default {
    //设定会话缓存
    setSession(key, value) {
        sessionStorage.setItem(key, value)
    },
    //获取会话缓存
    getSession(key) {
        return sessionStorage.getItem(key)
    },
    //清空会话缓存
    clearSession(key) {
        if (Object.prototype.toString.call(key) === "[object Array]") {
            key.forEach(item => {
                sessionStorage.removeItem(item)
            })
        } else if (key) {
            sessionStorage.removeItem(key)
        } else {
            sessionStorage.clear()
        }
    },
    //设定本地缓存
    setLocal(key, value) {
        localStorage.setItem(key, value)
    },
    //获取本地缓存
    getLocal(key) {
        return localStorage.getItem(key)
    },
    //清空本地缓存
    clearLocal(key) {
        if (key) {
            localStorage.removeItem(key)
        } else {
            localStorage.clear()
        }
    }
}
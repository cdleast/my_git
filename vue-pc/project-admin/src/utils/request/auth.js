const TokenKey = 'Admin-Token'

// 获取 token
export function getToken() {
    return localStorage.getItem(TokenKey)
}

// 保存 token
export function setToken(token) {
    return localStorage.setItem(TokenKey, token)
}

//移除用户信息
export function removeToken() {
    localStorage.removeItem(TokenKey)
}
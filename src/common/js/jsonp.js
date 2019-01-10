import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = ''
    for (let key in data) {
        let value = data[key] !== undefined ? data[key]: ''
        url += `&${key}=${encodeURIComponent(value)}`
    }
    // 因为url的拼接过程中会有 &a=xxx&b=xxx, 所以要把第一个'&'去掉;
    return url ? url.substring(1) : ''
}
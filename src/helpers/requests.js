export function getAllData  () {
    return fetch('https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=10')
        .then((res)=>res.json())
        .then(data=> data)
        .catch(er=> console.log(er))
}
export function getByFilter(limit, language, order, token) {
    const limitUrl=limit? `limit=${limit}`: '';
    const languageUrl=language ?`&languages=${language}`: '';
    const orderUrl=order ?`&order=${order}`: '';
    const tokenUrl=token?`&page_token=${token}`:'';
    return fetch(`https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?${limitUrl}${languageUrl}${orderUrl}${tokenUrl}`)
        .then((res)=>res.json())
        .then(data=> data)
        .catch(er=> console.log(er))
}
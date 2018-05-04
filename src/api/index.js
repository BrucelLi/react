export function getApi(param){
    if(!param) {
        return false;
    }
    try {
        return require(`./${process.env.NODE_ENV}/${param}/index.js`)
    } catch (e) {
        console.error(e)
    }
}
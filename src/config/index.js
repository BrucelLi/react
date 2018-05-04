let dateTime = new Date().getTime

const config = {
    pagesVersion : `v0.0.1.${dateTime}`,
    html : {
        'imgTitle':'图片',
        'imgAlt':'亲，图片不见了'
    },
    baseApi: `${window.location.protocol}//${window.location.host}`,
    routePrefix: '/',
    baseUri : ''
}

export default config
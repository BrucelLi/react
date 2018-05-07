import * as http from '../../../api/http.js'

export function itemTest(msg) {
    return http
         .post('test.send', {
             'msg': msg,
         }).then(r => r.data)
}
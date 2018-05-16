import * as http from '../../../api/http.js'
const Promise = require('es6-promise').Promise


export function indexItem (type = null, page = 1, pageNum = 5) {
    let data = {
        'code':0,
        'message': '获取成功',
        'data':{
            'info':[
                {
                    'id':1,
                    'title':"测试1号",
                    'bofang':2000,
                    'pinglun':'1.7万',
                    'time':'11:30',
                    'type':'手机游戏·大逃杀',
                    'img':'static/live/live01@2x.jpg'
                },
                {
                    'id':2,
                    'title':"测试2号",
                    'bofang':3000,
                    'pinglun':'1.1万',
                    'time':'12:30',
                    'type':'手机游戏·小淘沙',
                    'img':'static/live/live02@2x.jpg'
                },
                {
                    'id':3,
                    'title':"测试3号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live03@2x.jpg'
                },
                {
                    'id':4,
                    'title':"测试4号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live04@2x.jpg'
                },
                {
                    'id':5,
                    'title':"测试5号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live05@2x.jpg'
                },
                {
                    'id':6,
                    'title':"测试6号",
                    'bofang':'1.9万',
                    'pinglun':'1.7万',
                    'time':'1:30',
                    'type':'手机游戏·老逃杀',
                    'img':'static/live/live06@2x.jpg'
                }
            ],
            'page':1,
            'total':6
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.data)
        }, 1000)
    })
}

// 首页导航栏目提示数字
export function indexNavCount() {
    let data = {
        'code':0,
        'message': '获取成功',
        'data':{
            'animateCount':798,
            'hisPlayCount':84,
            'aimtronCount':90,
            'musicCount':9999,
            'danceCount':171,
            'gameCount':9999,
            'scienceCount':9999,
            'lifeCount':9999,
            'demonCount':59,
            'fashionCount':443,
            'advertisingCount':90,
            'entertainmentCount':9999,
            'filmCount':9999,
            'screensCount':145
        }
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.data)
        }, 1000)
    })
}

export function itemTest(msg) {
    return http
         .post('test.send', {
             'msg': msg,
         }).then(r => r.data)
}
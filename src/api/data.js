import request from './request'

/*
获取省现有确诊和累计确诊数据
 */
export function getdata() {
    return request({
        url: '/details/provinceData',
        method: 'get',
    })
}


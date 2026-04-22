import request from '../utils/weatherRequest.ts'

const key: string = '2d42ff177c6d435db8649706db65f861'
const longitude: string = '121.63'
const latitude: string = '38.92'

export const getCity = () => {
    return request({
        url: '/geo/v2/city/lookup',
        method: 'get',
        params: {
            key: key,
            location: `${longitude},${latitude}`
        }
    })
}

export const getThreeWeather = () => {
    return request({
        url: '/v7/weather/3d',
        method: 'get',
        params: {
            key: key,
            location: `${longitude},${latitude}`
        }
    })
}

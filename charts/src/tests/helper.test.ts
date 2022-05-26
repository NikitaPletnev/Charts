import {getCharts} from "../helpers/helper";

it('helper request test', () => {
    return getCharts().then((res) => {
        expect('object').toEqual(typeof res)
    })
})

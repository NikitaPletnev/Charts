import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const setChart = (id: string) => {
    const chartDom = document.getElementById(id)!;
    const Chart = echarts.init(chartDom);
    let option: EChartsOption;

    let base = +new Date(1968, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let date = [];

    let data = [Math.random() * 300];

    for (let i = 1; i < 20; i++) {
        var now = new Date((base += oneDay));
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    }

    option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        series: [
            {
                name: 'data',
                type: 'line',
                symbol: 'none',
                sampling: 'lttb',
                itemStyle: {
                    color: 'rgb(167, 86, 214)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(63, 59, 105)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(62, 91, 129)'
                        }
                    ])
                },
                data: data
            }
        ]
    };

    option && Chart.setOption(option);
}


export default setChart;

import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

const setChart = (id: string, dataX: string[], dataY: number[]) => {
    const chartDom = document.getElementById(id)!;
    if(chartDom) {
        echarts.dispose(chartDom)

    const Chart = echarts.init(chartDom);
    let option: EChartsOption;

    // Rebuild the yAxis values because they might be too big to fit
    const getValue = (value: number): string => {
        if (value === 0) {
            return value.toString()
        }else if (value >= 1000 && value < 1000000) {
            return value / 1000 + 'K'
        }else if (value >= 1000000 && value < 1000000000) {
            return value / 1000000 + 'M'
        }else if (value >= 1000000000 && value < 1000000000000) {
            return value / 1000000000 + 'B'
        }else{
            return ''
        }

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
            data: dataX,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#464a76'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#95a5d8'
            }
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%'],
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#464a76'
                }
            },
            axisLabel: {
                color: '#95a5d8',
                formatter: (value: number) => {
                    return getValue(value)
                }
            }
        },
        grid: {
            top: '15px',
            right: '35px',
            bottom: '45px',
            left: '45px'
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
                data: dataY
            }
        ]
    };

    option && Chart.setOption(option);
    }
}


export default setChart;

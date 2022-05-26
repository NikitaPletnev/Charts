import React, {ReactElement, useCallback, useEffect, useState} from 'react';
import {ChartItemInterface} from "../interfaces/ChartItemInterface";
import '../styles/ChartItem.css'
import setChart from "./setChart";

const ChartItem = ({opt}: { opt: ChartItemInterface }): ReactElement<any, any> => {
    // xAxis data
    const [dataX, setDataX] = useState<string[]>([]);
    //yAxis data
    const [dataY, setDataY] = useState<number[]>([]);

    // Array parser
    const setData = useCallback(() => {
        let forX: string[] = [];
        let forY: number[] = [];
        opt.selected_farm[0].tvlStakedHistory.forEach((opt) => {
            forX.push(new Date(opt.date).toDateString().split(' ').slice(1, 3).join(' '))
            forY.push(opt.value)
        })
        setDataX(forX);
        setDataY(forY);
    }, [opt.selected_farm])

    // To prepare data
    useEffect(() => {
        setData();
    }, [setData])

    // Get chart into element
    useEffect(() => {
        if (!!dataY?.length && !!dataX?.length) {
            setChart(opt.assetId, dataX, dataY)
        }
    }, [dataY, dataX, opt.assetId])

    return (
        <>
            <p>{opt.asset}</p>
            {/*Element for chart*/}
            <div id={opt.assetId}/>
        </>
    )
}

export default ChartItem

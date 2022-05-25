import React, {ReactElement, useEffect} from 'react';
import {ChartItemInterface} from "../interfaces/ChartItemInterface";
import '../styles/ChartItem.css'
import setChart from "./setChart";

const ChartItem = ({opt}: {opt: ChartItemInterface}): ReactElement<any, any> => {

    useEffect(() => {
        console.log(opt)
        setChart(opt.assetId)
        console.log(opt.assetId)
    }, [])
    return (
        <div className='chartItemContainer'>
            <p>{opt.asset}</p>
            <div id={opt.assetId}/>
        </div>
    )
}

export default ChartItem

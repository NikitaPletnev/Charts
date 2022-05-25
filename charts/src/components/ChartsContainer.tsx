import React, {ReactElement, useEffect, useState} from 'react';
import '../styles/ChartsContainer.css'
import {getCharts} from "../helpers/helper";
import Loader from "./Loader";
import ChartItem from "./ChartItem";


const ChartsContainer = (): ReactElement<any, any> => {
    const [charts, setCharts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCharts().then((response) => {
            response.json().then((result: {data: any[], max_pages: number}) => {
                setCharts(result.data);
                setLoading(false)

            })
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])


    const renderContent = () => {
        if(loading || true){
            return <Loader/>
        }
        if(!charts?.length){
            return <span>No charts</span>
        }
        return charts.map((opt) => {
            return <ChartItem opt={opt}/>
        })
    }

    return (
        <div className='container'>
            {renderContent()}
        </div>
    )
}

export default ChartsContainer;

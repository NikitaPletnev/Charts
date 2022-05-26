import React, {ReactElement, useEffect, useState} from 'react';
import '../styles/ChartsContainer.css'
import {getCharts} from "../helpers/helper";
import Loader from "./Loader";
import ChartItem from "./ChartItem";
import {ChartItemInterface} from "../interfaces/ChartItemInterface";


const ChartsContainer = (): ReactElement<any, any> => {
    // Charts data
    const [charts, setCharts] = useState<any[]>([]);
    // Marker for loader - element
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Get data from server
        getCharts().then((response) => {
            response.json().then((result: { data: any[], max_pages: number }) => {
                setCharts(result.data);
                setLoading(false)

            })
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }, [])


    const renderContent = () => {
        if (loading) {
            return <Loader/>
        }
        if (!charts?.length) {
            return <span>No charts</span>
        }
        return charts.map((opt: ChartItemInterface, index: number) => {
            return (
                <div key={index} className='chartItemContainer'>
                    <ChartItem opt={opt}/>
                </div>
            )
        })
    }

    return (
        <div className='container'>
            {renderContent()}
        </div>
    )
}

export default ChartsContainer;

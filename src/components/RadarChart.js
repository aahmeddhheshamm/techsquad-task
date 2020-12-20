import React from 'react'
import { Radar } from 'react-chartjs-2';

const LineChart = (props) => {
    return (
        <>
        <h3> Radar Char </h3>
            <Radar
                data={
                    {
                        labels: props.label,
                        datasets: props.data
                    }}
                options={{
                    scale: {
                        gridLines :{
                            display:false
                        },
                    }
                }
                }
            />
        </>
    )
}
export default LineChart
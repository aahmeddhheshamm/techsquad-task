
import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
    return (
        <>
            <h3> Bar Char </h3>
            <Bar
                data={
                    {
                        labels: props.label,
                        datasets: props.data,
                    }
                }
            />
        </>
    )
}
export default BarChart
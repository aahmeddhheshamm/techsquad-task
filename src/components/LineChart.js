import React  from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = (props) => {
    return (
        <>
        <h3> Line Char </h3>
            <Line
                data={
                    {
                        labels:props.label,
                        datasets:props.data
                    }}
            />
        </>
    )
}
export default LineChart
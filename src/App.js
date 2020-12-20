import React, { Component } from 'react'
import LineChart from './components/LineChart'
import './App.css'
import BarChart from './components/BarChart'
import RadarChart from './components/RadarChart'
class App extends Component {
  state = {
    value: null,
    lineData: [
      {
        label: 'attacking of Player x',
        data: [65, 55, 70, 67, 65],
        borderColor: 'blue',
        backgroundColor: "#897fff",
      },
      {
        label: 'attacking of player y',
        data: [80, 65, 89, 88, 90],
        borderColor: 'red',
        backgroundColor: "#fd8d8d",
      }
    ],
    lineLabel: ['January ', 'February ', 'March', 'April', 'December'],
    radarData: [
      {
        label: 'Player x',
        data: [1, 4, 8, 9, 80, 30],
        borderColor: 'blue'
      },
      {
        label: 'player y',
        data: [1, 12, 7, 10, 8, 20],
        borderColor: 'red'
      }
    ],
    dec: [
      [50, 10, 68, 12, 32, 70],
      [88, 96, 85, 89, 57, 90]
    ],
    jan: [
      [70, 10, 68, 2, 9, 7],
      [8, 6, 85, 99, 77, 90]
    ],
    feb: [
      [80, 20, 58, 5, 8, 7],
      [1, 5, 85, 22, 87, 80]
    ],
    mar: [
      [60, 35, 20, 1, 9, 8],
      [14, 9, 30, 11, 70, 60]
    ],
    radarLabel: [
      'VITESSE ',
      'PHYSIQUE ',
      'DEFENSE',
      'DRIBBLES',
      'PASSES',
      'TIRS'
    ]
  }
  handleChange = e => {
    this.setState({ value: e.target.value })
    this.setState({
      radarData: [
        {
          label: 'Player x',
          data: this.state[e.target.value][0],
          borderColor: 'blue'
        },
        {
          label: 'player y',
          data: this.state[e.target.value][1],
          borderColor: 'red'
        }
      ]
    })
  }
  render() {
    return (
      <div className='App'>
        <div className='box'>
          <select onChange={this.handleChange} value={this.state.value}>
            <option value='jan'>January</option>
            <option value='dec'>December</option>
            <option value='feb'>February</option>
            <option value='mar'>March</option>
          </select>
          <RadarChart
            data={this.state.radarData}
            label={this.state.radarLabel}
          />
        </div>
        <div className='box'>
          <LineChart
            data={this.state.lineData}
            label={this.state.lineLabel}
          />
        </div>
        <div className='box'>
          <BarChart data={this.state.lineData} label={this.state.lineLabel} />
        </div>
      </div>
    )
  }
}
export default App
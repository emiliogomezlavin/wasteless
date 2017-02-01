import axios from 'axios'
import React from 'react'
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
      {name: '1', uv: 4000, pv: 2400, amt: 2400},
      {name: '2', uv: 3000, pv: 1398, amt: 2210},
      {name: '3', uv: 2000, pv: 9800, amt: 2290},
      {name: '4', uv: 2780, pv: 3908, amt: 2000},
      {name: '5', uv: 1890, pv: 4800, amt: 2181},
      {name: '6', uv: 2390, pv: 3800, amt: 2500},
      {name: '7', uv: 3490, pv: 4300, amt: 2100},
];

class LineGraph extends React.Component {
  render () {
    return (
      <div className="col-sm-6">
        <h3>Donation Views</h3>
        <AreaChart width={400} height={250} data={data}>
          <Area type='monotone' dataKey='uv' stroke='#9ae2e8' fill='#9ae2e8' />
          <CartesianGrid stroke='#ccc' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    )
  }
}

export default LineGraph

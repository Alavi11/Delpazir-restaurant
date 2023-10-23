import React, { useEffect, useState } from 'react'
import "./Sells.css"
import axios from 'axios';
import { ResponsiveLine } from '@nivo/line'



const Sells = () => {

    const [sell,setSell] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3001/getordertable")
        .then((res)=>{
                setSell(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const data = [
            {
              "id": "sell",
              "color": "hsl(0, 0, 0)",
              "data": []
            }
    ]

    for (let i = 0; i < sell.length; i++) {
        const midle = {
            x : sell[i].Time,
            y : sell[i].total
        }
        data[0].data.push(midle)
    }
    console.log(sell);

    const printchart = () =>{
        window.print()
    }

  return <>
            <div className='sell' >
            <button  onClick={printchart} style={{marginTop:"50px"}}>چاپ</button>
            
                <ResponsiveLine id='print'
                        data={data}
                        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: true,
                            reverse: false
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'transportation',
                            legendOffset: 36,
                            legendPosition: 'middle'
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'count',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
            </div>
    </>
}

export default Sells
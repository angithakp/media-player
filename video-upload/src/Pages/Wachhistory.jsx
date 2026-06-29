import React, { useEffect, useState } from 'react'
import { gethistory } from '../services/allapi'

function Wachhistory() {

    const[history,sethistory]=useState([])

    const getwatchHistory=async()=>{
      const{data} =  await gethistory()
        sethistory(data)
    }
    console.log(history);
     
    useEffect(() => {

        getwatchHistory()
      
    }, [])
    
  return (
    <>
    <h1>watch history</h1>

    <table className='table shadow m-3 rounded border'>

        <thead>
            <tr>
                <th>Id</th>
                <th>CardName</th>
                <th>Url</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                history?.map((item,index)=>(

                    <tr>
                <td>{index+1}</td>
                <td>{item?.cardName}</td>
                <td>{item?.url}</td>
                <td>{item?.date}</td>
            </tr>

                ))
            }
            
        </tbody>

    </table>
    </>
  )
}

export default Wachhistory
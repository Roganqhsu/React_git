import React, { Component, useState, useEffect, useContext } from 'react';
import L1_1useState_List from './L1_1List';
import L1_1useState_edit from './L1_1useState_edit';
export const MyColor = React.createContext()

const L1_1useState_index = () => {
    
    const [data, setData] = useState(['2', '3', '4'])
    const [color,setColor ]=useState('blue')
    return (
        <div>
            {/* L1_1useState_index */}
            <MyColor.Provider value={color}>
                <L1_1useState_edit add={setData} />
                <L1_1useState_List listData={data} deleteData={setData} />
            </MyColor.Provider>
            <br />

            {/* {data[data.length-1].note} */}
        </div>
    )
}
export default L1_1useState_index;
import React, { Component, useState } from 'react';
import L1_1useState_Item from './L1_1useState_Item';

const L1_1useState_List = ({ listData, deleteData }) => {
    // 為什麼不能用L1_1useState_List當作名稱
    // console.log(listData);
    // console.log(v4);
    return (
        <div>
            {listData.map(
                (item) => {
                    const { note = '', date = '', time = '', id = '' } = item
                    return (
                        <L1_1useState_Item deleteData={deleteData} id={id} note={note} date={date} time={time} key={id} />
                    )
                }
            )
            }
            {/* {listData.map(
                (item)=>{
                    console.log();
                    // const {note,date,time}=item;
                    return (
                        <L1_1useState_Item note={item.note} date={item.date} time={item.time}/>
                    )
                }
            )
            } */}
        </div>
    )
}
export default L1_1useState_List
import React, { Component, useState } from 'react';
import {v4} from 'uuid';
const L1_1useState_Edit = ({ add }) => {
    // console.log('v4'+v4());

    const [note, setNote]= useState('事件');
    function setNewNote(e){
        setNote(e.target.value)
    };
    const [date, setDate]= useState('日期');
    function setNewDate(e){
        setDate(e.target.value)
    };
    const [time, setTime]= useState('時間');
    function setNewTime(e){
        setTime(e.target.value)
    };
    // addItem()
    function addItem(){
        
        
        add(function(prev){
            return [
                ...prev,
                {
                id:v4(),
                note,
                date,
                time
                }
                ,
            ]
        })
    }
    return (
        <div>
            L1_1useState_Edit
            <br />
            事件
            <input type="text" value={note} onChange={setNewNote} />
            日期
            <input type="date" value={date} onChange={setNewDate} />
            時間
            <input type="time" value={time} onChange={setNewTime} />
            <button onClick={addItem}>新增</button>
        </div>

    )
}
export default L1_1useState_Edit;
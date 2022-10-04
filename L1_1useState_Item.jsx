import React, { Component, useState, useContext } from 'react';
import { MyColor } from './L1_1useState_index';
const L1_1useState_Item = ({ note, date, time, id, deleteData }) => {
    const ItemColor = useContext(MyColor)
    function deleteItem() {
        deleteData(function (prev) {
            console.log('刪除後的' + prev);
            return prev
            return prev.filter(item=>item.id!==id) 
        })
    }
    // console.log(MyColor.color);
    return (
        // <MyColor.Consumer>
            <div>
                {ItemColor}
                <p>{`${note}${date}${time}`}</p>
                <button
                    onClick={deleteItem}
                >刪除</button>
                <br />
            </div>
        // </MyColor.Consumer>
    )
}
export default L1_1useState_Item;
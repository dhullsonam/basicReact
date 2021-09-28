import React, { useState, useEffect } from 'react';
import ListItem from './Listitem';
import './toDo.css';

function ToDoList() {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const seeTheChange = (t) => {
        setInputList(t.target.value)
    }


    const listOfInput = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })
        setInputList("")
    }

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((arrElm ,index)=>{
                return  index !== id;
            })
        })


    }



    return (
        <>
            <div className="main-div">
                <div className="container">
                    <h2>ToDo List</h2>

                  
                        <input className = "input-type" type="text" placeholder="add items"
                            value={inputList} onChange={seeTheChange} ></input>
                        <button className="btn" onClick={listOfInput}> +</button>

                
                    <br></br>
                    <ol>
                        {
                            items.map((itemValue, index) => {
                                return < ListItem text={itemValue}
                                    key={index}
                                    id={index}
                                    onSelect={deleteItems}
                                />
                            })
                        }

                    </ol>
                </div>
            </div>
        </>
    );
}

export default ToDoList;
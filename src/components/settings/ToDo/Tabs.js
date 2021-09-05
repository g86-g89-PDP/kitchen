import React, { useEffect, useState } from 'react'
import { TabsWrapper } from '../TabsWrapper';
import CreateTask from './createTask';
import Card from './Card'
import { AiOutlinePlus } from "react-icons/ai";

const Tabs = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
       let arr = localStorage.getItem("taskList")
      

       if(arr){
           let obj = JSON.parse(arr)
           setTaskList(obj)
       }
    }, [] );

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }


    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    return (
        <TabsWrapper>
            <div className="buFlex">
                <div className = "header">
                    <button className = "btn  mt-2" onClick = {()=> setModal(true)}><AiOutlinePlus/><br/> Add New Dish</button>
                </div>
                <div className = "task-container">
                     {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} /> )}
                </div>
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save= {saveTask}/>
        </TabsWrapper>
    )
}

export default Tabs;

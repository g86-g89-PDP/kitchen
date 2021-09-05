import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [discription, setDiscription] = useState('');

    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;

        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDiscription(value)
        }
    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Discription"] = discription
        save(taskObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label>Task name</label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                         <textarea rows="5" className="form-control" value={discription} onChange={handleChange} name="discription"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateTask;

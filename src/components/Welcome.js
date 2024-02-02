import { useState } from "react";
import { useLocation } from "react-router-dom";
import { BE_URL } from "../App";
import Home from "./Home";
import ComplaintsChat from "./Complaintschat/ComplaintsChat";
import Modal from "../helpers/Modal";
import './Welcome.scss'

function Welcome() {
    const { state } = useLocation()
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const [editableData, setEditableData] = useState()
    const [showModal, setShowModal] = useState(false)
    const [delErr, setDelErr] = useState('')

    const getAllUsers = () => {
        fetch(BE_URL + '/auth/users').then(res => res.json())
            .then(data => {
                setError('')
                setUsers(data)
            })
            .catch(err => setError(err.message))
    }

    const handleEditBtn = (userInfo) => {
        setEditableData(userInfo)
        setShowModal(true)
    }

    const handleDeleteBtn = (userItem) => {
        setDelErr('')
        fetch(BE_URL + '/auth/deleteUser', {
            method: 'DELETE',
            body: JSON.stringify({ id: userItem._id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.error) {
                    throw new Error(result.error)
                }
                setUsers(result);
            })
            .catch((error) => {
                setDelErr(error.message)
            })
    }
    return (
        <div>
            {users.length > 0 && users.filter((item) => item._id === state._id).length === 0
                ? <Home />
                : <div>
                    <h1>Hiiii, {state.name}</h1>
                    <h3>Mobile: {state.mobile}</h3>
                    <h3>Email: {state.email}</h3>
                </div>}
            {error && <div><h5 className="error_text">{error}</h5></div>}
            <button onClick={getAllUsers}>Get All users</button>
            {delErr && <p className="error_text">{delErr}</p>}
            <div className="card_container">
                {
                    users.map((user, index) => {
                        return <div className="card" key={index} style={{ border: '1px solid #888' }}>
                            <div className="card_content">
                                <p>Name: {user.name}</p>
                                <p>Mobile: {user.mobile}</p>
                                <p>Email: {user.email}</p>
                            </div>
                            <div className="card_icons">
                                <i onClick={() => handleDeleteBtn(user)} className="fa-solid fa-trash"></i>
                                <i onClick={() => handleEditBtn(user)} className="fa-solid fa-pen-to-square"></i>
                            </div>
                        </div>
                    })
                }
                {showModal && <Modal setShowModal={setShowModal} editableData={editableData} setUsers={setUsers} />}
            </div>
            <ComplaintsChat />
        </div>
    )
}

export default Welcome;

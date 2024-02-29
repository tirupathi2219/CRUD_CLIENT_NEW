import React, { useEffect, useState } from 'react';
import './ComplaintsChat.scss'
import { BE_URL } from '../../App';

function ComplaintsChat({ user }) {
    const [chat, setChat] = useState('');
    const [totalChat, setTotalChat] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTotalChat((chatdata) => [...chatdata, chat]);
        fetch(BE_URL + "/users/updateUsersChat", {
            method: 'POST',
            body: JSON.stringify({
                chat: chat,
                user: user,
            }),
            headers: { 'Content-Type': 'application/json' }

        }).then((res) => res.json())
            .then((result) => {
                console.log(result)
            })

        setChat('')
        handlescroll()
    }

    const handlescroll = () => {
        setTimeout(() => {
            document.getElementById('chat-box')?.scrollTo(0, document.getElementById('chat-box')?.scrollHeight)
        }, 300)

    }

    return (
        <>
            <div className='chat_container'>
                <div className='chat-area'>
                    {totalChat.length
                        ? <div id='chat-box' className='chat-box'>
                            {totalChat.map((item) => {
                                return <p className={`${item.user === user ? 'alignRight' : 'alignLeft'}`}><label>{item.chat}</label></p>
                            })}
                        </div>
                        : <></>
                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={chat} onChange={(e) => setChat(e.target.value)} />
                </form>
            </div>
        </>
    )
}

export default ComplaintsChat;

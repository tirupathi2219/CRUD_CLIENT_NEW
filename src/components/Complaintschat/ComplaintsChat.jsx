import React, { useState } from 'react';
import './ComplaintsChat.scss'

function ComplaintsChat() {
    const [chat, setChat] = useState('');
    const [totalChat, setTotalChat] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTotalChat((chatdata) => [...chatdata, chat])
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
                                return <p><label>{item}</label></p>
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

import React, { useEffect, useState } from 'react';
import './ComplaintsChat.scss'
import { BE_URL } from '../../App';
import { useParams } from 'react-router-dom';

function ComplaintsChat() {
    const params = useParams()
    console.log('8=====', params, params.state)
    const user = JSON.parse(params.state)
    const [chat, setChat] = useState('');
    const [totalChat, setTotalChat] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                setTotalChat(result.totalchat)
            })

        setChat('')
        handlescroll()
    }

    const handlescroll = () => {
        setTimeout(() => {
            document.getElementById('chat-box')?.scrollTo(0, document.getElementById('chat-box')?.scrollHeight)
        }, 300)

    }
    useEffect(() => {
        (async() => {
            fetch(BE_URL + "/users/getUsersChat", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
    
            }).then((res) => res.json())
                .then((result) => {
                    console.log(result, "GET METHOD")
                    setTotalChat(result)
                })
        })()

    }, [])
console.log('34====', totalChat)
    return (
        <>
            <div className='chat_container'>
                <div className='chat-area'>
                    {totalChat?.length
                        ? <div id='chat-box' className='chat-box'>
                            {totalChat.map((item) => {
                                console.log('43====', item)
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

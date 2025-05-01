import React, { useEffect, useRef, useState } from 'react';

interface Message {
    id: number;
    message: string;
}

const Client = ({ id }: { id: number }) => {
    const ws = useRef<WebSocket | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8080');
    
        ws.current.onmessage = async (event) => {
            const message = await event.data.text();
            const jsonMessage = JSON.parse(message);
            setMessages((prevNotifications) => [...prevNotifications, jsonMessage]);
        };
    
        return () => {
            if (ws.current) {
                ws.current.onmessage = null;
            }
            ws.current?.close();
        };
    }, []);

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = (e.currentTarget.elements.namedItem('message') as HTMLInputElement).value;
        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(message);
        }
    };


    return (
        <div className="client">
            <h2 className="heading-client">Client {id}</h2>
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        <strong>Client {message.id}:</strong> {message.message}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input 
                    type="text"
                    name='message'
                    id='message'
                    placeholder="Enter message"
                />
            </form>
        </div>
    );
}

export default Client;
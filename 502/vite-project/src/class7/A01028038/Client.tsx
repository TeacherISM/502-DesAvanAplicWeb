import React, { useEffect, useRef, useState } from 'react';

interface Message {
    id: number;
    message: string;
}

const Client = ({ id }: { id: number }) => {
    const ws = useRef<WebSocket | null>(null);
    const messagesRef = useRef<HTMLDivElement | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        ws.current = new WebSocket(`ws://localhost:8080?id=${id}`);

    
        ws.current.onmessage = async (event) => {
            const response = JSON.parse(event.data);
            let message =response.message
            if (typeof message === 'object') {
                const uint8Array = new Uint8Array(message.data);
                message = new TextDecoder().decode(uint8Array);
            }
            const messageId =  response.id;
            
            setMessages((prevNotifications) => [...prevNotifications, { id: messageId, message }]);
            if (messagesRef.current) {
                messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            }
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
        (e.currentTarget.elements.namedItem('message') as HTMLInputElement).value = '';
    };


    return (
        <div className="client">
            <h2 className="heading-client">Client {id}</h2>
            <div className="messages" ref={messagesRef}>
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
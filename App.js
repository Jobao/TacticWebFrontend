import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionState } from './components/ConnectionState';
import { ConnectionManager } from './components/ConnectionManager';
import { MyForm } from './components/MyForm';
import { Events } from './Components/Events';
import { ActualRoom } from './Components/RoomActual';

export default function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [chatText, setChatText] = useState([]);
  const[roomAct, setRoomAct] = useState('');

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      socket.emit('myRoom');
    } 

    function onDisconnect() {
      setIsConnected(false);
    }
    function onRoomChange(value){
      setRoomAct(value);
      socket.emit('myRoom');
    }

    function onSendChat(value) {
      setChatText(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('publicChat', onSendChat);
    socket.on('myRoom', onRoomChange);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('publicChat', onSendChat);
      socket.off('myRoom', onRoomChange);
    };
  }, []);

  return (
    <div className="App">
      <ConnectionState isConnected={ isConnected } />
      <ActualRoom actRoom={ roomAct }/>
      <Events events={ chatText } />
      <ConnectionManager />
      <MyForm />
      
    </div>
  );
}
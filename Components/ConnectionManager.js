import React from 'react';
import { socket, joinRoom } from '../socket';

export function ConnectionManager() {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
    
  }

  function joinRoo(){
    joinRoom('pepe');
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
      <button onClick={ joinRoo }>JoinNewRoom</button>
    </>
  );
}
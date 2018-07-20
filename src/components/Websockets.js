import React from 'react';
import '../App.css'
import { Sidebar } from '../containers/Sidebar'
import  { MessagesList } from "../containers/MessagesList"
import  { AddMessage }  from "../containers/AddMessage"



const Websockets = (props) => {
  return(
    <div id="container">
      <h2>Pitch Here!</h2>
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
  </div>
  )
}

export default Websockets;

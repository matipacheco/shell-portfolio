import React, { Fragment } from 'react';
import Typist from 'react-typist';

export default function Welcome(props) {
  return (
    <Typist
      className="welcome"
      startDelay={1000}
      avgTypingDelay={40}
      onTypingDone={() => {props.onBootComplete()}}
      cursor={{ show: false, hideWhenDone: true }}
    >
      <p className="booting-up">Booting up</p>
      <p>[ OK ] System Initialization Complete.</p>
      <p>Type 'help' to get navigation information.</p>
    </Typist>
  )
}
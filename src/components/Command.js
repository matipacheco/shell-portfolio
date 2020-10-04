import React, {
  useState, useRef, useEffect, useContext, Fragment
} from 'react';
import $ from 'jquery';
import { CommandContext } from './context/CommandContext';

function Cursor() {
  return (
    <span className="cursor"/>
  );
}

export function Command(props) {
  return (
    <div className="command">
      &gt; &nbsp;
      <p>
        {props.text}
      </p>
      {props.children}
    </div>
  )
}

export function CommandList() {
  const commandContext = useContext(CommandContext);

  return (
    <Fragment>
      {
        commandContext.commands.map((command) => {
          return <Command
            key={command.id}
            text={command.text}
          />
        })
      }
    </Fragment>
  )
}

export const withInput = Component => {
  return function() {
    let commandRef = useRef(null);
    const commandContext = useContext(CommandContext);
  
    useEffect(() => {
      commandRef.current.focus();
      commandRef.current.addEventListener("keydown", handleKeyDown)
    }, [])

    const printCommand = (command) => {
      $("#command-input").siblings('p').text(command)
    }

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        commandContext.addCommandToContext(event.target.value);
        $("#command-input").val('');
        printCommand("")

      } else {
        printCommand(event.target.value);
      }
    }
  
    return (
      <Component>
        <Cursor />
        <input
          type="text"
          ref={commandRef}
          id="command-input"
        />
      </Component>
    )
  }
}


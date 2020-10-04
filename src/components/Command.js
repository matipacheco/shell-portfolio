import React, {
  useState, useRef, useEffect, useContext, Fragment
} from 'react';
import { CommandContext } from './context/CommandContext';

function Cursor() {
  return (
    <span className="cursor"/>
  );
}

export function Command(props) {
  return (
    <div className="command">
      <p>
        &gt; &nbsp;
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
    const [command, setCommand] = useState("");
    const commandContext = useContext(CommandContext);
  
    useEffect(() => {
      commandRef.current.focus();
      commandRef.current.addEventListener("keydown", handleKeyDown)
    }, [])

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        commandContext.addCommandToContext(event.target.value);
        setCommand("");
      }
    }
  
    return (
      <Component>
        <Cursor />
        <input
          type="text"
          value={command}
          ref={commandRef}
          id="command-input"
          onChange={ (event) => setCommand(event.target.value) }
        />
      </Component>
    )
  }
}


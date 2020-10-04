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

export function CommandLine() {
  let commandRef = useRef(null);
  const [command, setCommand] = useState("");
  const commandContext = useContext(CommandContext);

  useEffect(() => {
    focusInput();
    commandRef.current.addEventListener("keydown", handleKeyDown)
  }, [])

  const focusInput = () => {
    commandRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      commandContext.addCommandToContext(event.target.value);
      setCommand("");
    }
  }

  return (
    <div className="command">
      <p>
        &gt; &nbsp;
        {command}
      </p>
      <Cursor />
      <input
        type="text"
        value={command}
        ref={commandRef}
        id="command-input"
        onChange={ (event) => setCommand(event.target.value) }
      />
    </div>
  )
}

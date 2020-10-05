import React, {
  useRef, useEffect, useContext, Fragment, useState
} from 'react';
import $ from 'jquery';
import { CommandContext } from './context/CommandContext';

const Cursor = () => <span className="cursor"/>;

export function Command(props) {
  const commandContext = useContext(CommandContext);

  return (
    <div className="command">
      &gt;&nbsp;
      {commandContext.pwd()}
      &nbsp;$&nbsp;
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
    const [input, updateInput] = useState("");
    const commandContext = useContext(CommandContext);
  
    useEffect(() => {
      commandRef.current.focus();
      commandRef.current.addEventListener("keydown", handleKeyDown)
    }, [])

    useEffect(() => {
      $("#command-input").siblings('p').text(input)
    }, [input])

    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        commandContext.addCommandToContext(input);
        updateInput("")
      }
    }
  
    return (
      <Component>
        <Cursor />
        <input
          type="text"
          value={input}
          ref={commandRef}
          id="command-input"
          onChange={event => updateInput(event.target.value)}
        />
      </Component>
    )
  }
}


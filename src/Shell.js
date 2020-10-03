import React, { useState, useRef, useEffect, Fragment } from 'react';

export default function CommandLine(props) {
  let commandRef = useRef(null);
  const [command, setCommand] = useState("");
  const [commandSubmitted] = useState(props.input !== undefined);

  useEffect(() => {
    if (commandSubmitted)
      return;

    commandRef.current.focus();
    commandRef.current.addEventListener("keydown", handleKeyDown)
  }, [])

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      props.addCommand({
        'index': props.index + 1,
        'input': command,
      })
    }
  }

  return (
    <div className="command">
      <p>
        &gt; &nbsp;
        {command}
      </p>

      {
        !commandSubmitted &&
        <Fragment>
          <Cursor />
          <input
            type="text"
            ref={commandRef}
            onChange={(event) => setCommand(event.target.value)}
          />
        </Fragment>
      }
    </div>
  )
}

function Cursor() {
  return (
    <span className="cursor"/>
  );
}

import React, { useState, useRef, useEffect, Fragment } from 'react';


export default function Command(props) {
  let commandRef = useRef(null);
  const [command, setCommand] = useState("");
  const [commandSubmitted] = useState(false);

  useEffect(() => {
    commandRef.current.focus();
  }, [])

  return (
    <div className="command">
      <p>
        &gt;
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

import React, { useState } from 'react';
import CommandLine from './Shell';

export default function Terminal() {
  const [commandList, updateCommandList] = useState([{ 'index': 1 }]);

  const addCommand = (command) => {
    const updatedList = commandList.concat(command);
    updateCommandList(updatedList);
  }

  return (
    <div id="terminal">
      {
        commandList.map((command) => {
          return <CommandLine
            index={command.index}
            input={command.input}
            addCommand={addCommand}
          />
        })
      }
    </div>
  );
}

import React, { useState, useContext } from 'react';
import { CommandContext, CommandProvider } from './CommandContext';

export default function ProviderWrapper(props) {
  const commandContext = useContext(CommandContext);
  const [commands, updateCommands] = useState(commandContext.commands);

  const addCommandToContext = (command) => {
    const updatedList = commands.concat({
      id: commands.length,
      text: command
    });
    updateCommands(updatedList);
  }

  const provider = {
    commands,
    addCommandToContext
  }

  return (
    <CommandProvider value={provider} >
      {props.children}
    </CommandProvider>
  )
}
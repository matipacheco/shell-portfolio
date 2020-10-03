import React, { useState, useContext } from 'react';
import { CommandContext, CommandProvider } from './CommandContext';

export default function ProviderWrapper(props) {
  const commandContext = useContext(CommandContext);
  const [commands, updateCommands] = useState(commandContext.commands);

  const addCommandToContext = (command) => {
    updateCommands((state) => {
      return state.concat({
        id: state.length,
        text: command
      });
    });
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
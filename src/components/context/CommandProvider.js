import React, { useState, useContext } from 'react';
import { CommandContext, CommandProvider } from './CommandContext';

export default function ProviderWrapper(props) {
  const commandContext = useContext(CommandContext);
  const [commands, updateCommands] = useState(commandContext.commands);
  const [directoryTree, updateDirectoryTree] = useState(commandContext.directoryTree);

  const addCommandToContext = (command) => {
    updateCommands((state) => {
      return state.concat({
        id: state.length,
        text: command
      });
    });
  }

  const pwd = () => {
    return directoryTree.join("/")
  }

  const provider = {
    commands,
    directoryTree,
    pwd,
    addCommandToContext
  }

  return (
    <CommandProvider value={provider} >
      {props.children}
    </CommandProvider>
  )
}
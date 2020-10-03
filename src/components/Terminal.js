import React, { useContext } from 'react';
import { CommandLine, CommandList } from './Command';
import { CommandContext } from './context/CommandContext';
import ProviderWrapper from './context/CommandProvider'

export default function Terminal() {
  const commandContext = useContext(CommandContext);

  return (
    <ProviderWrapper>
      <div id="terminal">
        <CommandList />
        <CommandLine />
      </div>
    </ProviderWrapper>
  );
}

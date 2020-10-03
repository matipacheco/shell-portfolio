import React from 'react';
import { CommandLine, CommandList } from './Command';
import ProviderWrapper from './context/CommandProvider';

export default function Terminal() {
  return (
    <ProviderWrapper>
      <div id="terminal">
        <CommandList />
        <CommandLine />
      </div>
    </ProviderWrapper>
  );
}

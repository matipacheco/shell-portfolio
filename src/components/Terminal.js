import $ from 'jquery';
import React, { useEffect } from 'react';

import { withInput, Command, CommandList } from './Command';
import ProviderWrapper from './context/CommandProvider';

export default function Terminal() {
  useEffect(() => {
    $('body').on('click', () => {
      $('#command-input').focus();
    })
  }, []);

  const CommandLine = withInput(Command);

  return (
    <ProviderWrapper>
      <div id="terminal">
        <CommandList />
        <CommandLine />
      </div>
    </ProviderWrapper>
  );
}

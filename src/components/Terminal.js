import $ from 'jquery';
import React, { Fragment, useEffect, useState } from 'react';

import { withInput, Command, CommandList } from './Command';
import ProviderWrapper from './context/CommandProvider';
import Welcome from './placeholders/Welcome';

export default function Terminal() {
  const [showCLI, updateShowCLI] = useState(false)
  const CommandLine = withInput(Command);

  useEffect(() => {
    $('body').on('click', () => {
      $('#command-input').focus();
    })
  }, []);

  const onBootComplete = () => {
    updateShowCLI(true);
  }

  return (
    <ProviderWrapper>
      <div id="terminal">
        <Welcome onBootComplete={onBootComplete} />

        {
          showCLI &&
          <Fragment>
            <CommandList />
            <CommandLine />
          </Fragment>
        }
      </div>
    </ProviderWrapper>
  );
}

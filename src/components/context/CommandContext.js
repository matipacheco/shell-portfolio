import { createContext } from 'react';

export const CommandContext = createContext({
  commands: []
});

export const CommandProvider = CommandContext.Provider;

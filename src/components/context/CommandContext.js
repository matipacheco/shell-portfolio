import { createContext } from 'react';

export const CommandContext = createContext({
  commands: [],
  directoryTree: ["home", "mati"]
});

export const CommandProvider = CommandContext.Provider;

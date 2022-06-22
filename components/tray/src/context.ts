import { createContext } from 'react';

export type TrayContextValue = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const TrayContext = createContext({
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: () => {},
});

export const TrayProvider = TrayContext.Provider;

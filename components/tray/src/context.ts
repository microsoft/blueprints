import { createContext } from 'react';

export type TrayContextValue = {
  isOpen: boolean;
  setIsOpen: (isOpen?: boolean) => void;
};

export const TrayContext = createContext<TrayContextValue>({
  isOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsOpen: (isOpen) => {},
});

export const TrayProvider = TrayContext.Provider;
export const TrayConsumer = TrayContext.Consumer;

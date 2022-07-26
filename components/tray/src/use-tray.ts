import { useState } from 'react';

export const useTray = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return { isOpen, setIsOpen };
};

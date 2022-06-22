import { useState } from 'react';

export const useTray = () => {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
};

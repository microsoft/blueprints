export type TabsContextValue = {
  currentIndex: number;
  prevIndex?: number;
  id: string;
  onChangeIndex: ({ nextIndex }: { nextIndex: number }) => void;
};

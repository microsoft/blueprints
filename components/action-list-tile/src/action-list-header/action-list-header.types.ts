type WithIcon = {
  /**
   * Custom optional icon.
   */
  iconSrc?: string;

  /**
   * Accessible icon description.
   */
  iconAlt: string;
};

type WithoutIcon = {
  /**
   * Custom optional icon.
   */
  iconSrc?: never;

  /**
   * Accessible icon description.
   */
  iconAlt?: never;
};

export type ActionListHeaderProps = {
  /**
   * Consumer provided class.
   */
  className?: string;

  /**
   * Text that describes the collection of actions in the tile.
   */
  title: string;
} & (WithIcon | WithoutIcon);

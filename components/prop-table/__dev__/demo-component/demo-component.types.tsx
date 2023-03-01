export type DemoComponentProps = {
  /**
   * The title of the DemoComponent.
   */
  title: string;

  /**
   * Description of the DemoComponent.
   */
  description?: string;

  /**
   * Call to action text.
   * @default 'Hello 👋'
   */
  callToAction?: string;

  /**
   * Custom class name for the component root.
   */
  className?: string;

  /**
   * Click handler.
   */
  onClick: () => void;

  /**
   * Text to display.
   * @deprecated Use `title` instead.
   */
  text?: string;
};

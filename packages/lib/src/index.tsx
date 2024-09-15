import { Component, HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import LazyLoad, { ILazyLoadInstance, ILazyLoadOptions } from 'vanilla-lazyload';

const CLASS_NAME = 'react-lazy-image';
export type ReactLazyLoadImageProps = {
  children: ReactNode;
  className?: string;
  options: Omit<ILazyLoadOptions, 'container'>;
  container?: HTMLElement | null;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactLazyLoadImage extends Component<ReactLazyLoadImageProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    debounce: 0,
    options: {
      cancel_on_exit: true,
    },
  };

  private lazyLoad: ILazyLoadInstance | null = null;

  componentDidUpdate() {
    const { container, options } = this.props;
    if (!container) return;
    this.lazyLoad = new LazyLoad({
      container,
      options,
    } as ILazyLoadOptions);
  }

  componentWillUnmount() {
    if (this.lazyLoad) {
      this.lazyLoad.destroy();
    }
  }

  render() {
    const { children, className, container, options, ...rest } = this.props;
    return (
      <div className={cx(CLASS_NAME, className)} {...rest}>
        {children}
      </div>
    );
  }
}

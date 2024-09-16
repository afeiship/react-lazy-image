import React, { HTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import LazyLoad, { ILazyLoadInstance, ILazyLoadOptions } from 'vanilla-lazyload';

const CLASS_NAME = 'react-lazy-image';
export type ReactLazyLoadImageProps = {
  children: ReactNode;
  className?: string;
  options: Omit<ILazyLoadOptions, 'container'>;
  container?: HTMLElement | null;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactLazyLoadImage extends React.Component<ReactLazyLoadImageProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    debounce: 0,
    options: {
      cancel_on_exit: false,
    },
  };

  private lazyLoad: ILazyLoadInstance | null = null;
  private rootElement: HTMLElement | null = null;

  get container() {
    return this.props.container || this.rootElement;
  }

  componentDidUpdate() {
    const { options } = this.props;
    this.lazyLoad = new LazyLoad({
      container: this.container,
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
      <div ref={root => this.rootElement = root} className={cx(CLASS_NAME, className)} {...rest}>
        {children}
      </div>
    );
  }
}

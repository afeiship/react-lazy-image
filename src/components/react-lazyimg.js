import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import noop from 'noop';

export default class extends Component {

  static propTypes = {
    lazy: PropTypes.bool,
    url: PropTypes.string,
    placeholder: PropTypes.string,
    effect: PropTypes.oneOf([
      'replace',
      'fade'
    ]),
    onLoad: PropTypes.func,
  };

  static defaultProps = {
    lazy: false,
    onLoad: noop,
    effect: 'replace'
  };

  constructor(props) {
    super(props);
    this.initialState(props);
    this._counter = 0;
  }

  initialState(inProps) {
    const { url } = inProps;
    this.state = {
      loaded: false,
      url
    };
  }

  componentWillReceiveProps(nextProps) {
    const { url, lazy } = nextProps;
    if (this.state.url !== url) {
      this.initialState(nextProps);
      this.setState(this.state);
    }

    if (this.props.lazy && !lazy) {
      this.doShown();
    }
  }

  shouldComponentUpdate(nextProps) {
    const { effect } = this.props;
    const { url, loaded } = this.state;
    return url !== nextProps.url || (effect === 'replace' || !loaded);
  }

  doShown() {
    const { root } = this.refs;
    const { onLoad, effect } = this.props;
    const { url } = this.state;
    if (effect === 'fade') {
      this.setState({ loaded: true }, () => {
        root.removeAttribute('data-src');
        onLoad.call(this);
      })
    } else {
      if (this._counter === 2) {
        this.setState({ loaded: true }, () => {
          onLoad.call(this);
        });
      } else {
        root.src = url;
      }
    }
  }

  _onLoad = inEvent => {
    const { loaded } = this.state;
    const { lazy } = this.props;
    if (!loaded && !lazy) {
      this._counter++;
      this.doShown();
    }
  };


  render() {
    const { url, placeholder, className, effect, lazy, ...props } = this.props;
    const { loaded } = this.state;
    const target = placeholder || (lazy ? null : url);
    return (
      <img
        ref='root'
        {...props}
        data-effect={effect}
        className={classNames('react-lazyimg', className)}
        data-src={url}
        data-loaded={loaded}
        src={target}
        onLoad={this._onLoad} />
    );
  }
}

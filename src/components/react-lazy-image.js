import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactFadeImage from 'react-fade-image';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    fit: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    fit: 'contain'
  };
  /*===properties end===*/

  render() {
    const { className, fit, ...props } = this.props;
    return (
      <figure data-fit={fit} className={classNames('react-lazy-image', className)}>
        <ReactFadeImage {...props} />
      </figure>
    );
  }
}

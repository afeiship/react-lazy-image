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
    placeholder: PropTypes.string,
    fit: PropTypes.string,
  };

  static defaultProps = {
    onChange: noop,
    placeholder: 'https://static.ws.126.net/163/wap/f2e/milk_index/bg_img_sm_minfy.png',
    fit: 'contain'
  };
  /*===properties end===*/

  render() {
    const { className, placeholder, fit, ...props } = this.props;

    return (
      <figure
        data-fit={fit}
        style={{ backgroundImage: `url(${placeholder})`}}
        className={classNames('react-lazy-image', className)}
      >
        <ReactFadeImage {...props} />
      </figure>
    );
  }
}

import './style.scss';

import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.PureComponent{

  static propTypes = {
    lazy:PropTypes.bool,
    url:PropTypes.string,
    placeholder:PropTypes.string,
    effect:PropTypes.oneOf([
      'replace',
      'fade'
    ]),
    onLoad:PropTypes.func,
  };

  static defaultProps = {
    lazy: false,
    onLoad:noop,
    effect:'replace'
  };

  constructor(props) {
    super(props);
    this.initialState();
  }

  initialState(){
    const {url} = this.props;
    this.state = {
      loaded:false,
      url
    };
  }

  componentWillReceiveProps(nextProps){
    if(this.props.url !== nextProps.url){
      this.initialState();
      this.setState(nextProps)
    }

    if(this.props.lazy && !nextProps.lazy){
      this.doShown();
    }
  }

  doShown(){
    const dom = this.refs.root;
    const {onLoad,effect} = this.props;
    const {url} = this.state;
    this.setState({ loaded:true },()=>{
      effect ==='replace' ? ( dom.src=url ): (dom.removeAttribute('data-src'));
      onLoad.call(this);
    });
  }

  _onLoad = inEvent => {
    const {loaded} = this.state;
    const {lazy} = this.props;
    if(!loaded && !lazy){
      this.doShown();
    }
  };


  render(){
    const {url,placeholder,className,effect,lazy,...props} = this.props;
    const target = placeholder || url;
    return (
      <img
        ref='root'
        data-effect={effect}
        className={classNames('react-lazyimg',className)}
        data-src={url}
        src={target}
        onLoad={this._onLoad} />
    );
  }
}

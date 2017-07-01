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
    const {url,lazy} = nextProps;
    if(this.state.url !== url){
      this.initialState(nextProps);
      this.setState(this.state);
    }

    if(this.props.lazy && !lazy){
      this.doShown();
    }
  }

  shouldComponentUpdate(nextProps){
    const { effect } = this.props;
    const { url,loaded } = this.state;
    return url!== nextProps.url || (effect === 'replace' || !loaded);
  }

  doShown(){
    const { root } = this.refs;
    const { onLoad,effect } = this.props;
    const { url } = this.state;
    this.setState({ loaded:true },()=>{
      effect ==='replace' ? ( root.src=url ): (root.removeAttribute('data-src'));
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
    const {loaded} = this.state;
    const target = placeholder || (lazy ? null : url);
    return (
      <img
        ref='root'
        data-effect={effect}
        className={classNames('react-lazyimg',className)}
        data-src={url}
        data-loaded={loaded}
        src={target}
        onLoad={this._onLoad} />
    );
  }
}

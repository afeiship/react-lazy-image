import './style.scss';
import classNames from 'classnames';
import noop from 'noop';

export default class extends React.Component{

  static propTypes = {
    title:React.PropTypes.string,
    url:React.PropTypes.string,
    placeholder:React.PropTypes.string,
    effect:React.PropTypes.oneOf(['replace', 'fade']),
    onLoad:React.PropTypes.func,
  };

  static defaultProps = {
    onLoad:noop,
    effect:'replace'
  };

  constructor(props) {
    super(props);
    this.state = {
      loaded:false
    };
  }


  getChildren(){
    const {effect} = this.props;
    switch(effect){
      case 'replace':
        return this.getReplaceChildren();
      case 'fade':
        return this.getFadeChildren();
    }
    return null;
  }

  getReplaceChildren(){
    const {url,placeholder,title,className,effect} = this.props;
    let target = placeholder || url;

    return (
      <img
      data-effect={effect}
      className={classNames('react-lazyimg',className)}
      src={target} title={title}
      onLoad={this._onReplace.bind(this)} />
    );
  }

  getFadeChildren(){
    const {url,effect,className} = this.props;
    return (
      <img
      data-effect={effect}
      className={classNames('react-lazyimg',className)}
      data-src={url}
      src={url}
      onLoad={this._onFade.bind(this)} />
    );
  }


  _onReplace(inEvent){
    const {url,placeholder,onLoad} = this.props;
    const dom = inEvent.target;
    const {loaded} = this.state;
    if(!loaded && placeholder){
      this.setState({loaded:true},()=>{
        dom.src=url;
        onLoad.call(this,inEvent);
      });
    }
  }

  _onFade(inEvent){
    const {url,onLoad} = this.props;
    const dom = inEvent.target;
    const {loaded} = this.state;

    if(!loaded){
      this.setState({loaded:true},()=>{
        dom.removeAttribute('data-src');
        onLoad.call(this,inEvent);
      });
    }
  }


  render(){
    return this.getChildren();
  }
}

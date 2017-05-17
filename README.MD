# react-lazyimg
> Lazy load image with placeholder for react js.



## props:
```javascript
  static propTypes = {
    title:PropTypes.string,
    url:PropTypes.string,
    placeholder:PropTypes.string,
    effect:PropTypes.oneOf(['replace', 'fade']),
    onLoad:PropTypes.func,
    onClick:PropTypes.func,
    style:PropTypes.object
  };

  static defaultProps = {
    onLoad:noop,
    onClick:noop,
    effect:'replace',
    style:{}
  };
```

## usage:
```html
<div className="hello-react-lazyimg">
  <ReactLazyimg
  placeholder="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg"
  url="https://www.google.co.jp/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" title="Fei's logo" size="30px" />
</div>
```


## resouces:
+ http://jsfiddle.net/UtnHS/
+ https://facebook.github.io/react/docs/typechecking-with-proptypes.html
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install


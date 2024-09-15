import ReactLazyLoadImage from '@jswork/react-lazy-image/src/main';
import '@jswork/react-lazy-image/src/style.scss';
import { useEffect, useState } from 'react';

function App() {
  const [dom, setDom] = useState<HTMLDivElement>();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list').then(res => res.json()).then(data => {
      setDataSource(data);
    });
  }, []);

  console.log('dataSource: ', dataSource);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <div className="text-center y-2 layout-abs-scrollable h-100">
        <ReactLazyLoadImage container={dom}>
          <div className="is-scrollable-y" ref={(el) => setDom(el as HTMLDivElement)}>
            {dataSource.map((item: any, index) => {
              return <div key={index}>
                <img
                  className="lazy w-full"
                  width={item.width}
                  height={item.height}
                  src="https://web-assets.alo7.com/assets/images/apply7-ph.jpg"
                  data-src={item.download_url}
                  alt={item.alt}
                />
              </div>;
            })}
          </div>
        </ReactLazyLoadImage>
      </div>
      <hr className="my-5" />
      <div className="text-center y-2 layout-abs-scrollable h-100">
        <ReactLazyLoadImage className="is-scrollable-y">
          {dataSource.map((item: any, index) => {
            return <div key={index}>
              <img
                className="lazy w-full"
                width={item.width}
                height={item.height}
                src="https://web-assets.alo7.com/assets/images/apply7-ph.jpg"
                data-src={item.download_url}
                alt={item.alt}
              />
            </div>;
          })}
        </ReactLazyLoadImage>
      </div>


    </div>
  );
}

export default App;

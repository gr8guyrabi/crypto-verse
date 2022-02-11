import { Spin } from 'antd';

const Loader = () => (
  <div className="loader">
    <Spin size="large" tip="Loading..."/>
  </div>
);

export default Loader;
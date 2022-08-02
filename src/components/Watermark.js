import { FaTiktok } from 'react-icons/fa';

const Watermark = () => {
  return (
    <div className="absolute top-5 left-5 ">
      <div className="logo flex  items-center">
        <FaTiktok className="text-white text-2xl" />
        <h1 className="app__logo ml-2 mt-2">TikTok</h1>
      </div>
      <p className="text-white text-sm ml-5">@axamine</p>
    </div>
  );
};
export default Watermark;

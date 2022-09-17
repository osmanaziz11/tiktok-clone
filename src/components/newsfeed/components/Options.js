import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
import { BsFillShareFill } from 'react-icons/bs';
import { BsDiscFill } from 'react-icons/bs';

const Options = () => {
  return (
    <div className="absolute right-5 bottom-5">
      <ul>
        <li className="my-8 flex flex-col justify-center items-center">
          <AiOutlineHeart className="text-2xl text-white" />
          <p className="text-center text-sm text-yellow-100">1k</p>
        </li>
        <li className=" my-8 flex flex-col justify-center items-center">
          <MdOutlineMessage className="text-2xl text-white" />
          <p className="text-center text-sm text-yellow-100">1k</p>
        </li>
        <li className=" my-8 flex flex-col justify-center items-center">
          <BsFillShareFill className="text-2xl text-white" />
          <p className="text-center text-sm text-yellow-100">1k</p>
        </li>
        <li className=" my-8 flex flex-col justify-center items-center">
          <BsDiscFill className="text-3xl text-white" />
        </li>
      </ul>
    </div>
  );
};
export default Options;

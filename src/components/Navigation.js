import { AiFillHome } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlinePersonSearch } from 'react-icons/md';

const Navigation = () => {
  return (
    <div className="h-12 w-full shadow bg-white sticky bottom-0 flex items-center justify-evenly text-2xl cursor-pointer from-neutral-900">
      <AiFillHome />
      <MdOutlinePersonSearch className="mx-2" />
      <BsFillPlusCircleFill className="mx-2" />
      <FaUserAlt className="mx-2" />
    </div>
  );
};
export default Navigation;

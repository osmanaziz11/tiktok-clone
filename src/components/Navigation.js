import { AiFillHome } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <div className="h-12 w-full shadow bg-white sticky bottom-0 flex items-center justify-evenly text-2xl cursor-pointer from-neutral-900">
      <NavLink to="/" className="text-decoration-none">
        <AiFillHome />
      </NavLink>
      <NavLink to="/" className="text-decoration-none">
        <MdOutlinePersonSearch className="mx-2" />
      </NavLink>
      <NavLink to="/" className="text-decoration-none">
        <BsFillPlusCircleFill className="mx-2" />
      </NavLink>
      <NavLink to="/profile" className="text-decoration-none">
        <FaUserAlt className="mx-2" />
      </NavLink>
    </div>
  );
};
export default Navigation;

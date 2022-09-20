import imgSource from '../../assets/images/Default.png';
import testing from '../../assets/images/about_photo_1.jpg';

const Profile = () => {
  return (
    <div class="w-full h-full bg-white ">
      {/* User profile details container  */}
      <div className="details__container  w-full">
        {/* Profile image  */}
        <div className="img__container flex items-center justify-center w-full">
          <div className="img__box">
            <label for="profile__img" className="w-full h-full">
              <img src={imgSource} alt="" />
            </label>
            <p className="text-center mt-2">@Alezasdsd</p>
            <input
              type="file"
              name="adminImage"
              id="profile__img"
              className="hidden"
            />
          </div>
        </div>
        {/* Profile image ends */}

        {/* Profile information  */}
        <div className="info__container w-full my-5 flex flex-col justify-center items-center">
          <ul className="list-none flex m-0 p-0 w-full justify-center items-center my-3">
            <li className="mx-3">
              <h6 className="text-center">38</h6>
              <p className="text-center">Followers</p>
            </li>
            <li className="mx-3">
              <h6 className="text-center">38</h6>
              <p className="text-center">Following</p>
            </li>
            <li className="mx-3">
              <h6 className="text-center">38</h6>
              <p className="text-center">Likes</p>
            </li>
          </ul>
          <button className="p-2 px-10 shadow rounded mt-1">
            Edit Profile
          </button>
        </div>
        {/* Profile information ends */}
      </div>
      {/* User Profile details container ends  */}

      <div className="media__container  overflow-scroll snap-y snap-mandatory ">
        <div className="columns-3 gap-0">
          <div className="media">
            <img src={testing} alt="" />
          </div>
          <div className="media">
            <img src={testing} alt="" />
          </div>
          <div className="media">
            <img src={testing} alt="" />
          </div>
        </div>
        <div className="columns-3 gap-0">
          <div className="media">
            <img src={testing} alt="" />
          </div>
          <div className="media">
            <img src={testing} alt="" />
          </div>
          <div className="media">
            <img src={testing} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

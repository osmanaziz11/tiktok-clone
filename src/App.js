import './App.css';
import Navigation from './components/Navigation';
import Newsfeed from './components/newsfeed/Newsfeed';
import Profile from './components/profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Video from './components/newsfeed/components/video';

const App = () => {
  return (
    //    Main Container
    <div className="main__container h-screen w-screen bg-black grid place-items-center ">
      {/* Content Container  */}
      <div className="app__container rounded-b-lg  w-96 ">
        {/* Application Content  */}
        <div className="content__container w-full  rounded-t shadow overflow-scroll snap-y snap-mandatory">
          <Routes>
            <Route exact path="/" element={<Newsfeed />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
        {/* Navigation Controls  */}
        <div className="w-full nav__container bg-slate-100 border-t-2  rounded-b-lg">
          <Navigation />
        </div>
      </div>
    </div>
  );
};
export default App;

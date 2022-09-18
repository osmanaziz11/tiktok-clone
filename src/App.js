import './App.css';
import Navigation from './components/Navigation';
import Newsfeed from './components/newsfeed/Newsfeed';

const App = () => {
  return (
    //    Main Container
    <div className="main__container h-screen w-screen bg-black grid place-items-center ">
      {/* Content Container  */}
      <div className="app__container relative  w-96 ">
        {/* Application Content  */}
        <div className="content__container w-full h-5/6 rounded-t shadow overflow-scroll snap-y snap-mandatory">
          <Newsfeed></Newsfeed>
        </div>
        {/* Navigation Controls  */}
        <div className="w-full nav__container bg-slate-100 rounded-b">
          <Navigation></Navigation>
        </div>
      </div>
    </div>
  );
};
export default App;

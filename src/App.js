import './App.css';
import Navigation from './components/Navigation';
import Newsfeed from './components/newsfeed/Newsfeed';

const App = () => {
  return (
    //    Main Container
    <div className="main__container h-screen w-screen bg-black grid place-items-center ">
      {/* Content Container  */}
      <div className="app relative h-4/5 w-96 rounded shadow overflow-scroll snap-y snap-mandatory">
        <Newsfeed />
        <Newsfeed />
        <Navigation />
      </div>
    </div>
  );
};
export default App;

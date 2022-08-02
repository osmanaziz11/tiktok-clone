import './App.css';
import Video from './components/video';

const App = () => {
  return (
    //    Main Container
    <div className="app h-screen w-screen bg-black grid place-items-center">
      {/* video container  */}
      <div className="video__container h-4/5 w-96 rounded shadow overflow-scroll snap-y snap-mandatory">
        <Video />
        <Video />
      </div>
    </div>
  );
};
export default App;

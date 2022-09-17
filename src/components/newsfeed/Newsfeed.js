import { useRef, useState } from 'react';
import { Footer } from './components/Footer';
import Options from './components/Options';
import Watermark from './components/Watermark';

const Video = () => {
  const [Playing, setPlaying] = useState(false);
  const videoRef = useRef();

  const handleVideoPlayer = () => {
    if (Playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="bg-slate-800 w-full h-full relative">
      <Watermark />
      <video
        src="https://res.cloudinary.com/ozecloud/video/upload/v1659429801/studioink-media-assects/images/home/video_ui9o0g.webm"
        className=" w-full h-full object-fill  cursor-pointer"
        loop
        muted
        onClick={handleVideoPlayer}
        ref={videoRef}
      ></video>
      {/* options  */}
      <Options />
      {/* Footer  */}
      <Footer />
    </div>
  );
};
export default Video;

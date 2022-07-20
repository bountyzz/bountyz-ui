import { useRef } from "react";
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/dist/plyr.css";

let videoId = "";
const provider = "youtube";
const videoOptions = undefined;

export interface IVideoPlayer {
  id: string;
  url: string;
}

const PlyrComponent: React.FC<IVideoPlayer> = ({ id, url, ...props }) => {
  const ref = useRef<APITypes>(null);
  videoId = url;
  const enterVideo = () => {
    (ref.current?.plyr as Plyr)?.fullscreen.enter();
  };

  const plyrVideo =
    videoId && provider ? (
      <Plyr
        ref={ref}
        source={{
          type: "video",
          sources: [
            {
              src: videoId,
              provider: provider
            }
          ]
        }}
        options={videoOptions}
      />
    ) : null;

  return (
    <div>
      {plyrVideo}
    </div>
  );
};

export default PlyrComponent;

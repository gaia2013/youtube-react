import React from 'react';
import YouTube from 'react-youtube';
import Style from './VideoPlay.module.scss';

const VideoPlay = ({id}) => {
  return (
    <div className={Style.wrap}>
      <YouTube videoId={id} className={Style.video} />
     </div>
  );
}

export default VideoPlay

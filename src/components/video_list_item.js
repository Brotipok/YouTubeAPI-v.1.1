import React from 'react';
import { Link } from 'react-router-dom';

const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
  <li className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
       <Link to={`/movie/${video.id.videoId}`}>
        <img className="media-object" src={imageUrl} alt="{video.snippet.title}" />
        </Link>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </div>
  </li>
  );
}

export default VideoListItem;
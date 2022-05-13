import React from 'react';
import styles from './video_item.module.css';
import * as converter from './converter';

const VideoItem = ({video, video: {snippet}, onVideoClick, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
          {/* <p className={styles.count}>
          {`조회수 ${converter.viewConverter(
            video.statistics.viewCount
          )} ● ${converter.agoConverter(snippet.publishedAt)}`}
        </p> */}
        </div>
      </div>
    </li>
  );
};

export default VideoItem;

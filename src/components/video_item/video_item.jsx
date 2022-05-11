import React from 'react';
import styles from './video_item.module.css';
import * as converter from './converter';

const VideoItem = ({video, video: {snippet}}) => (
  <li className={styles.container}>
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
          {`조회수 ${converter.viewConverter(video.statistics.viewCount)}`}
        </p>
        <p className={styles.publishedDate}>
          {converter.agoConverter(snippet.publishedAt)}
        </p> */}
      </div>
    </div>
  </li>
);

export default VideoItem;

import React, {useState, useEffect, useCallback} from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/searchHeader';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/videoDetail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback((query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  }, []);

  // 컴포넌트가 mount or update 될 때 마다 useEffect가 호출됨
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]); // 빈 배열을 초기값으로 넣어주면 마운트가 되었을때만 이 부분이 호출

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </div>
  );
}

export default App;

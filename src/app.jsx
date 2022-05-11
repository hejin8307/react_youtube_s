import React, {useState, useEffect} from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);

  // 컴포넌트가 mount or update 될 때 마다 useEffect가 호출됨
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=24&&regionCode=KR&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []); // 빈 배열을 초기값으로 넣어주면 마운트가 되었을때만 이 부분이 호출
  return <VideoList videos={videos} />;
}

export default App;

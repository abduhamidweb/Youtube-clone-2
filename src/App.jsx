
import { useState, useEffect } from 'react'
import './App.css'
import Router2 from "./Router/index"
import context from './context/context'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './UI/Navbar/Navbar'
import axios from 'axios'
import MyModal from './components/Modal/MyModal'

function App() {
  const APIYOUTUBE = 'AIzaSyDSddf4L5rV_i3DZLHBUinq0LxW-wf59_o'
  // fetch videos

  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState('');
  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet",
              chart: "mostPopular", // Ko'rsatilayotgan video turi
              maxResults: 50, // Ko'rsatilayotgan videolar soni
              key: APIYOUTUBE, // Youtube API kalitini kiriting
            },
          }
        );

        setVideos(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    async function fetchVideoData() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/videos",
          {
            params: {
              part: "snippet,statistics",
              id: "VIDEO_ID",
              key: APIYOUTUBE,
            },
          }
        );

        setVideoData(response.data.items[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideoData();
  }, []);
  const [videoSearch, setVideoSerach] = useState([]);
  const [videoQ, setVideoQ] = useState('');

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              part: "snippet",
              maxResults: 10, // ko'rsatilayotgan videolar soni
              q: videoQ, // qidiruv so'zini o'zgartiring
              type: "video",
              key: APIYOUTUBE, // Youtube API kalitini kiriting
            },
          }
        );
        videoQ.length > 0 ? setVideos(response.data.items) : null
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, [videoQ]);

  // Modal
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <context.Provider value={{ videos, videoData, videoSearch, setVideoQ, setVideoId, openModal }}>
      <MyModal isOpen={isOpen} onClose={closeModal}>
        <div className="ifrem">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={closeModal} className='btn btn-danger w-100 p-2 mt-3'>Yopish</button>
      </MyModal>
      <div className='app'>
        <Sidebar />
        <div className="routesAndNavbar">
          <Navbar />
          <Router2 />
        </div>
      </div>
    </context.Provider>
  )
}

export default App
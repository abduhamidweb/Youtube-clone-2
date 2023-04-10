import React, { useContext } from 'react';
import Card from '../../components/Card/Card';
import context from '../../context/context';
const Home = () => {
    const { videos, videoData } = useContext(context)
    // !(async () => {
    //     console.log(await videos);
    // })()
    return (
        <div className='container mt-3'>
            <div className="row">
                {
                    videos.map((v) => {
                        return <Card data={v} videoData2={videoData} />
                    })
                }
            </div>
        </div>
    );
};

export default Home;
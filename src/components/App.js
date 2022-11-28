import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
//console.developers.google.com
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';


const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("Jack Harlow What's Poppin");

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    

    //Again, this is short code. We can
    //simply insert this directly in callback
    // const onVideoSelect = (video) => {
    //     setSelectedVideo(video);
    // };

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
                    </div>

                </div>
            </div>
        </div>
    );

};

export default App;
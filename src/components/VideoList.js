import React from 'react';
import VideoItem from './VideoItem';


// const VideoList = props => {
//     return <div>{props.videos.length}</div>;
// }

// De-structure, using ES15 syntax, the videos
// property out of the props object.
//onVideoSubmit is the callback function you
// passed to VideoList throug the App class. 
// The function is inside of there.
//Now from this poiint, you pass it along to the 
//<VideoItem> down below.
const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;
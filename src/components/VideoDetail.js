import React from 'react';

//Using 'video' instead of 'props'
//because we only care about one particular 
//property -- which is 'video' -- so we 
//de-structured out. No more 'props.video'
//all over the place.
const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    //You can try to string concatonate the video id to the youtube
    //src embed link or you can use ES2015 template string.
    // const videoSrc = 'https://www.youtube.com/embed/' + 
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
               <h4 className="ui header">{video.snippet.title}</h4> 
               <p>{video.snippet.description}</p>
            </div>
        </div>
    );

};

export default VideoDetail;
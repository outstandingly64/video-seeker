//Custom hook essentially about searching for and making
//use of a list of videos. You also need to import all of
//the primitive hooks required to create the custom.
import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    //The equivalent of componentDidMount
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);

    };

    return [videos, search];
};

export default useVideos;
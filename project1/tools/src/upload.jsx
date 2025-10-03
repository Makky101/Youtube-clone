import './upload.css'
import Videos from './videos.jsx'
import { Helmet } from "react-helmet" 
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {sources} from './videos.js'
function Upload(){
    const [newVideo, setNewVideo] = useState(sources);
    const [url, setNewUrl] = useState("");
    const [title, setNewTitle] = useState("");
    const [youtuber, setNewYoutuber] = useState("");

        const addVideo = () => {
            if (!url || !title || !youtuber) return;
            
            const update = {
                url,
                channelPicture: '/default.png', // default image
                videoInfo: {
                    title,
                    youtuber,
                    stats: '0 views' // default stats
                }
            };

            setNewVideo([...newVideo, update]);
            setNewUrl("");
            setNewTitle("");
            setNewYoutuber("");
        };
            
        


    
    return(        
        <>  
            <Helmet>
                <title>Create</title>
                <meta charset="UTF-8"/>
                <meta name="author" content="Teniola Adeyemi"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="Streamoria"/>
                <meta property="og:description" content="upload videos for free"/>
                <meta property="og:type" content="video.other"/>
                <meta name="description" content="you can put any youtube video there"/>
                <link rel="icon" href="https://www.youtube.com/s/desktop/dc7c9013/img/favicon_32x32.png" sizes="32x32"/>
            </Helmet>
            <div className="header">
                <Link to={"/"}>
                    <div className="return-home">Home</div>
                </Link>
                <p>Upload video!</p>
            </div>
            <div className="input-layer3">
                <div className="input-layer2">
                    <div className="input-layer1">
                        <input value={url} onChange={(e) => setNewUrl(e.target.value)} placeholder="URL"/>
                        <input value={title} onChange={(e) => setNewTitle(e.target.value)} placeholder="title"/>
                        <input value={youtuber} onChange={(e) => setNewYoutuber(e.target.value)} placeholder="Youtuber"/>
                        <input placeholder="stats"/>
                        <div className="submit-layout">
                            <button onClick={addVideo}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <Videos update={newVideo} />
        </>
    )
}
export default Upload
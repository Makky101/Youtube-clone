function Videos({update = []}){
    return(
        <div className="video-grid">
            {update.map((video, index) => (
                <div key={index} className="video-preview">
                    <div className="thumbnail-row">
                        <iframe allowFullScreen src={video.url}></iframe>
                    </div>
                    <div className="video-info-grid">
                        <div className="channel-picture">
                            <img className="profile-picture" src={video.channelPicture}/>
                        </div>
                        <div className="video-info">
                            <p className="video-title">{video.videoInfo.title}</p>
                            <p className="video-author">{video.videoInfo.youtuber}</p>
                            <p className="video-stats">{video.videoInfo.stats}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Videos
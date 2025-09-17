import {videos} from './videos.js'

let videoHTML = '';

videos.forEach((video) => {
    videoHTML += `
    <div class="video-preview">
        <div class="thumbnail-row">
            <iframe allowfullscreen src="${video.url}"></iframe>
        </div>
        <div class="video-info-grid">
            <div class="channel-picture">
                <img class="profile-picture" src="${video.channelPicture}">
            </div>
            <div class="video-info">
                <p class="video-title">${video.videoInfo.title}</p>
                <p class="video-author">${video.videoInfo.youtuber}</p>
                <p class="video-stats">${video.videoInfo.stats}</p>
            </div>
        </div>
    </div>
`
});

document.querySelector('.video-grid').innerHTML = videoHTML;

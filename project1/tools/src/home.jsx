import { Link } from "react-router-dom"
import Videos from "./videos.jsx"
function Home(){
    return(
        <>
            <div className="header">
                <div className="left-section">
                    <img className="hamburger-menu" src="/hamburger-menu.svg" />
                    <img className="youtube-logo" src="/youtube-logo.svg" />
                </div>
                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />
                    <button className="search-button">
                        <img className="search-icon" src="/search.svg" />
                        <div className="tooltip">Search</div>
                    </button>
                    <button className="voice-search-button">
                        <img className="voice-search-icon" src="/voice-search-icon.svg" />
                        <div className="tooltip">Search with your voice</div>
                    </button>
                </div>
                <div className="right-section">
                    <Link to={"/upload"}>
                        <button className="Create-button">
                            <div className="Create">
                                <img className="Cross" src="/cross.png" />
                                <div className="text">
                                    Create
                                </div>
                            </div>
                        </button>
                    </Link>
                    <div className="notifications-icon-container">
                        <img className="notifications-icon" src="/notifications.svg" />
                        <div className="notifications-count">3</div>
                        <div className="tooltip">notifications</div>
                    </div>
                    <img className="current-user-picture" src="/makky.jpeg" />
                </div>
            </div>

            <div className="sidebar">
                <div className="sidebar-link">
                    <img src="/home.png" />
                    <div>Home</div>
                </div>
                <div className="sidebar-link">
                    <img src="/shorts.png" />
                    <div>Shorts</div>
                </div>
                <div className="sidebar-link">
                    <img src="/folders.png" />
                    <div>Subscriptions</div>
                </div>
                <div className="sidebar-link">
                    <img src="/user.png" />
                    <div>You</div>
                </div>
            </div>
            <Videos />
        </>
    )
}

export default Home
function YouTubeVideo({ videoUrl }) {
    return (
        <div className="video-container">
            <iframe className="rounded-md"
                title="YouTube video player"
                width="100%"
                style={{ aspectRatio:'2/1'}}
                src={videoUrl}
                allowFullScreen
            ></iframe>
        </div>
    );
}
export default YouTubeVideo
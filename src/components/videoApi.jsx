import React, { useEffect } from 'react';

const YouTubeVideo = ({ videoId }) => {
    useEffect(() => {
        // Check if the script is already loaded
        if (!window.YT) {
            // Load the YouTube IFrame API script
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        // Create the YouTube player when the API is ready
        const onYouTubeIframeAPIReady = () => {
            new window.YT.Player('player', {
                height: '390',
                width: '640',
                videoId: videoId,
                playerVars: {
                    'autoplay': 1,
                    'controls': 1
                },
                events: {
                    'onReady': event => event.target.playVideo(),
                    'onStateChange': event => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            console.log('The video is playing.');
                        }
                    }
                }
            });
        };

        // Assign the function if it's not already assigned
        if (typeof window.onYouTubeIframeAPIReady !== 'function') {
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        } else {
            // If the script is already loaded and the API is ready, create the player
            if (window.YT && window.YT.Player) {
                onYouTubeIframeAPIReady();
            }
        }
    }, [videoId]);

    return( 
        <>
        <div className='h-full w-full' id="player"></div>
        
        </>
    );
};

export default YouTubeVideo;

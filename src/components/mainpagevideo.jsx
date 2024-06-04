import YouTubeVideo from "./videoApi";




    
function MainPageVideo ({videoUrl, index}) {
    const elementId = `youtube-player-${index}`;
    return(
        <div style={{ minWidth:'400px', maxWidth:'800px' }} className="flex flex-col rounded-md hover:shadow-md hover:shadow-zinc-800 m-2">
            <div style={{ aspectRatio:'2/1'}} className="image rounded-md">
                <YouTubeVideo videoUrl={videoUrl} />            </div>
            <section  className="text-white h-20 flex">
                <div style={{ aspectRatio:'1/1' }} className="imgAPI w-1/6">
                    IMG
                </div>
                <aside className="text-sm w-5/6 overflow-hidden">
                    <article style={{ width:'370px' }} className="text-zinc-100 h-1/2 overflow-hidden">
                        Hello Shivam!, Your video id is {videoUrl} and This is your Channel Name
                    </article> 
                    <article style={{ width:'370px' }} className="text-zinc-400 h-1/2 overflow-hidden">
                        This is the brief description like upload date, views.
                    </article>
                </aside> 
            </section>
        </div>
    )
}
export default MainPageVideo;
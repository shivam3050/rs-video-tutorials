import YouTubeVideo from "./videoApi";

function MainPageVideo ({videoId}) {
    return(
        
        <div className="flex flex-col w-2/2 border border-green-500 m-2">
            <div style={{ aspectRatio:'2/1'}} className="image border">
                <YouTubeVideo videoId={`${videoId}`} />
            </div>
            <section className="text-white h-20 flex">
                <div style={{ aspectRatio:'1/1' }} className="imgAPI w-1/6">
                    IMG
                </div>
                <aside className="text-sm w-5/6">
                    <article className="text-zinc-100 h-1/2 overflow-hidden">
                        Hello Shivam!, Your video id is {videoId} and This is your Channel Name
                    </article> 
                    <article className="text-zinc-400 h-1/2 overflow-hidden">
                        This is the brief description like upload date, views.
                    </article>
                </aside> 
            </section>
        </div>
    )
}
export default MainPageVideo;
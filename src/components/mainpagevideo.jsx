import YouTubeVideo from "./videoApi";




    
function MainPageVideo ({videoUrl, index}) {
    const elementId = `youtube-player-${index}`;
    return(
        <div className="flex flex-col size0:flex-[2_2_100%] size1:flex-[2_0_60%] size2:flex-[2_0_20%] size3:flex-[2_0_10%] size4:flex-[2_0_10%] size5:flex-[2_0_10%] rounded-md hover:bg-zinc-900 hover:shadow-md hover:shadow-zinc-950" >
            <div style={{ aspectRatio:'2/1'}} className="image rounded-md">
                <YouTubeVideo videoUrl={videoUrl} />            
            </div>
            <section  className="text-white h-20 flex py-1">
                <div style={{ aspectRatio:'1/1' }} className="imgAPI w-1/6">
                    IMG
                </div>
                <aside className="text-sm w-5/6 flex flex-col overflow-hidden">
                    <article className="text-zinc-100 h-1/2 w-full overflow-hidden leading-tight">
                        Hello Shivam!, Your video id is {videoUrl} and This is your Channel Name
                    </article> 
                    <article className="text-xs text-zinc-400 h-1/2 overflow-hidden leading-normal">
                        This is the brief description like upload date, views. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam laboriosam nostrum fugit obcaecati, inventore voluptas accusantium est, placeat corrupti officia nobis, omnis enim quisquam eaque! Eos ipsa hic soluta?
                    </article>
                </aside> 
            </section>
        </div>
    )
}
export default MainPageVideo;
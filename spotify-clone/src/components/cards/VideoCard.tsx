import VideoPreview from '../video/VideoPreview';
import { musicDB } from '../../data/music';

type VideoCardProps = {
    title: string;
};

function VideoCard (props: VideoCardProps) {
    const { title } = props
    return(
        <section className='bg-white/8 flex px-2 py-4 rounded-[10px] flex-col m-3 min-h-56'>
            <h1 className='flex font-semibold px-4'>{title}</h1>
            <div>
                {musicDB.forYou.videoCardSection.map((item, index) => {
                    return(
                        <div key={index}>
                            <VideoPreview
                                src={item.src}
                                title={item.title}
                                description={item.description}  
                            />
                        </div>
                    )
                })}
            </div>
        </section>
        
    );
};

export default VideoCard;
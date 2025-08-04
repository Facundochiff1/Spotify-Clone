import VideoPreview from '../video/VideoPreview';

type VideoCardProps = {
    title: string;
};

type videoCard = {
    src: string;
    title: string;
    description: string;
};

type Response = {
    videos: {
        videoCard: videoCard[]
    }
};


const response: Response = {
    videos: {
        videoCard: [
            {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR370egQTPaG85BNfUXSz6OZfKBCHK0AHTvAg&s',
                title: 'The void',
                description: 'Muse'
            },

        ]
    }
};

function VideoCard (props: VideoCardProps) {
    const { videos } = response
    const { title } = props
    return(
        <section className='bg-white/8 flex px-2 py-4 rounded-[10px] flex-col m-3 min-h-56'>
            <h1 className='flex font-semibold px-4'>{title}</h1>
            <div>
                {videos.videoCard.map((item) => {
                    return(
                        <VideoPreview 
                            src={item.src}
                            title={item.title}
                            description={item.description}  
                        />
                    )
                })}
            </div>
        </section>
        
    );
};

export default VideoCard;
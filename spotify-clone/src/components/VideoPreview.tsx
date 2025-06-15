type VideoPreviewProps = {
    src: string;
    title: string;
    description: string;
};

function VideoPreview (props: VideoPreviewProps) {
    const { src, title, description } = props;
    return (
        <section className='group flex flex-col'>
            <div className="group-hover:bg-white/5 w-[225px] h-[180px] rounded-[8px] p-3 transition duration-100 cursor-pointer">
                <div>
                    <img className='h-28 rounded-[5px]' src={src} alt="Video preview" />
                </div>
                <h2 className='flex text-[17px] mt-1'>{title}</h2>
                <div>
                    <p className='flex text-gray-400 text-[15px] hover:underline'>{description}</p>
                </div>  
            </div>

        </section>
    );
};

export default VideoPreview;
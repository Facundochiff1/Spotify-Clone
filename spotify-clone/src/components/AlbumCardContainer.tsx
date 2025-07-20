import { type ReactNode } from "react"

type ALbumCardContainerProps = {
    title?: string;
    children: ReactNode;
}

function ALbumCardContainer (props: ALbumCardContainerProps) {
    const { title, children } = props
    return(
        <>
        <section className='flex flex-col w-[800px] mt-12'>
            <h1 className="flex items-start ml-[15px] font-bold text-2xl">{title}</h1>
            <div className="grid grid-cols-4 cursor-pointer justify-center mt-2">
                {children}
            </div>
        </section>
        </>
    )
}

export default ALbumCardContainer
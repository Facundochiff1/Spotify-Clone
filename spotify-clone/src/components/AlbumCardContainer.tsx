import { type ReactNode } from "react"

type ALbumCardContainerProps = {
    title: string;
    children: ReactNode;
}

function ALbumCardContainer (props: ALbumCardContainerProps) {
    const { title, children } = props
    return(
        <>
        <section className='flex flex-col w-[800px]'>
            <h1 className="flex items-start ml-[15px] font-bold text-2xl">{title}</h1>
            <div className="grid grid-cols-4">
                {children}
            </div>
        </section>
        </>
    )
}

export default ALbumCardContainer
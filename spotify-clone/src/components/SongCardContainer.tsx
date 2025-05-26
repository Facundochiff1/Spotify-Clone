import { type ReactNode } from 'react'

type SongCardContainerProps = {
    title: string;
    children: ReactNode;
}
function SongCardContainer(props: SongCardContainerProps) {
    const { title, children } = props;
  return (
    <>
      <section className='max-w-[1000px] flex flex-col gap-3 '>
          <h1 className="flex px-2 py-3 text-[25px] justify-start font-bold">{title}</h1>

          <div className="grid grid-cols-4 flex-wrap px-2">
              {children}
          </div>
      </section>

    </>

    
  )
}

export default SongCardContainer;
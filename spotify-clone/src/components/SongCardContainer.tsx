import { type ReactNode } from 'react'

type SongCardContainerProps = {
    title?: string;
    children: ReactNode;
}
function SongCardContainer(props: SongCardContainerProps) {
    const { title, children } = props;
  return (
    <>
      <section className='flex flex-col'>
          <h1>{title}</h1>

          <div className="grid grid-cols-4 flex-wrap px-2">
              {children}
          </div>
      </section>

    </>

    
  )
}

export default SongCardContainer;
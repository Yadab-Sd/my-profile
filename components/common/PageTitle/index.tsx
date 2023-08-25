import React from 'react'
import s from './PageTitle.module.css'
import cn from 'classnames'
import { colors, colors2 } from '@utils/index'
import { useRouter } from 'next/router'

function PageTitle({
  title,
  description,
  items,
}: {
  title: string
  description: string
  items: string[]
}) {
  const router = useRouter()

  return (
    <div className="relative">
      <h2 className={s.title}>
        {/* <h2 className={cn("fake-big")}>{title}</h2> */}
        {title?.slice(0, 4)}
      </h2>
      <h2 className={s.title} style={{ top: -20, left: -50 }}>
        {/* <h2 className={cn("fake-big")}>{title}</h2> */}
        {title?.slice(4)}
      </h2>
      <div
        className={cn(
          'flex justify-between pt-12 flex-col lg:flex-row items-stretch lg:items-center',
          { ['!flex-col !items-start']: router.pathname == '/portfolio' },
        )}
      >
        <h2
          className={cn('text-4xl font-extrabold mb-4 lg:mb-0', {
            ['lg:mb-4']: router.pathname == '/portfolio',
          })}
        >
          {title}
        </h2>
        <div
          className={cn('lg:w-1/2', {
            ['lg:!w-5/6']: router.pathname == '/portfolio',
          })}
        >
          <p className="text-sm text-accent-4 mb-8 lg:mb-4">{description}</p>
          <div className="w-full flex flex-wrap">
            {items?.map((item, i) => (
              <small
                className="mb-2 mr-2 px-2 py-1 text-xs font-bold rounded block"
                style={{
                  color: colors2.concat(colors)[
                    i % (colors2.length + colors.length - 1)
                  ],
                  border: '1px solid',
                  borderColor: colors2.concat(colors)[
                    i % (colors2.length + colors.length - 1)
                  ],
                }}
              >
                {item}
              </small>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageTitle

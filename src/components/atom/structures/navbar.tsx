'use client'
/* eslint-disable @next/next/no-img-element */
import logo from '@/assets/images/logo-regular.webp'
import Link from 'next/link'
import { useState } from 'react'
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'

const Logo = () => {
  return (
    <Link href='https://hacklibre.com/'>
      <img src={logo.src} alt='Hacklibre' className='h-10 w-auto' />
    </Link>
  )
}

const NavBarItem = ({
  content,
  pathname,
  url,
  children
}: {
  content: string
  responsive?: boolean
  pathname?: string
  url?: string
  children?: React.ReactNode
}) => {
  const actualUrl = url?.replace(/\//g, '')
  const [arrow, setArrow] = useState<boolean>(false)
  const handleShowArrow = () => {
    if (url === '#') {
      setArrow(true)
    }
  }
  const handleHiddenArrow = () => {
    if (url === '#') {
      setArrow(false)
    }
  }
  const isActive = pathname?.includes(actualUrl ? actualUrl : '')
    ? 'underline text-technologyCian6 underline-offset-[12px]'
    : ''
  return (
    <>
      <div
        className={`${isActive} h-24 px-5 flex flex-row justify-center items-center`}
        onMouseEnter={handleShowArrow}
        onMouseLeave={handleHiddenArrow}
      >
        {url === '#' ? (
          <div
            className={`hover:text-technologyCian6  flex flex-row justify-center items-center`}
          >
            <p
              className={`pr-3 cursor-pointer flex flex-col justify-center items-center font-semibold w-full`}
            >
              {content}
            </p>
            <p>
              {url === '#' ? (
                arrow ? (
                  <IoChevronUpOutline size={22} />
                ) : (
                  <IoChevronDownOutline size={22} />
                )
              ) : null}
            </p>
          </div>
        ) : (
          <div
            className={`hover:text-technologyCian6  flex flex-row justify-center items-center`}
          >
            <Link href={url ? url : '#'}>
              <p
                className={`pr-3 cursor-pointer flex flex-col justify-center items-center font-semibold w-full`}
              >
                {content}
              </p>
            </Link>
          </div>
        )}
        {children ? (
          arrow ? (
            <div
              className={`w-full shadow-xl left-0 absolute top-24  bg-white10`}
            >
              {children}
            </div>
          ) : null
        ) : null}
      </div>
    </>
  )
}

const SubNavBarItem = ({
  content,
  description,
  url
}: {
  content: string
  description: string
  url: string
}) => {
  return (
    <div className='px-6 flex flex-col justify-center items-end'>
      <Link href={url}>
        <p className='pb-1 text-black10 font-bold'>{content}</p>
        <p className='pt-1 text-black5'>{description}</p>
      </Link>
    </div>
  )
}

const SubNavBarItemLayer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full flex flex-row justify-center items-center pt-6'>
      <div className='w-full md:w-10/12 bg-technologyCian1 px-10 py-8'>
        {children}
      </div>
    </div>
  )
}

export { Logo, NavBarItem, SubNavBarItem, SubNavBarItemLayer }

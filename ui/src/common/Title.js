import React from 'react'
import { useMediaQuery } from '@material-ui/core'

const Title = ({ subTitle }) => {
  const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'))

  if (isDesktop) {
    return <span>CreideF's Jukebox {subTitle ? ` - ${subTitle}` : ''}</span>
  }
  return <span>{subTitle ? subTitle : "CreideF's Jukebox"}</span>
}

export default Title

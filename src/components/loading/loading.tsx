import React from 'react'
import Skeleton from '@mui/material/Skeleton';

type Props = {
  className?: string
}

export const Loading = ({className}: Props) => (
  <div className={className}>
    <Skeleton />
    <Skeleton animation={false} />
    <Skeleton animation="wave" />
  </div>
)

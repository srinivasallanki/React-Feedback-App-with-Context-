import React from 'react'

function EditIcon({ width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0'
      y='0'
      enableBackground='new 0 0 217.855 217.855'
      version='1.1'
      viewBox='0 0 217.855 217.855'
      xmlSpace='preserve'
      width={width}
      height={height}
    >
      <path d='M215.658 53.55L164.305 2.196a7.5 7.5 0 00-10.606 0L3.809 152.086a7.505 7.505 0 00-2.193 5.075L.005 210.127a7.502 7.502 0 007.725 7.724l52.964-1.613a7.502 7.502 0 005.075-2.192l149.89-149.889a7.501 7.501 0 00-.001-10.607zM57.264 201.336l-42.024 1.28 1.279-42.026 91.124-91.125 40.75 40.743-91.129 91.128zM159 99.602L118.249 58.86l40.752-40.753 40.746 40.747L159 99.602z'></path>
    </svg>
  )
}

EditIcon.defaultProps = {
  width: '14px',
  height: '14px',
}

export default EditIcon

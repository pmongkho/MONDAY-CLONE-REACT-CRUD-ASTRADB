import React from 'react'
import blankAvatar from '../images/blankavatar.webp'

const AvatarDisplay = ({ticket }) => {
  return (
    <div className="avatar-container">
      <div className="image-container">
        <img src={ticket.avatar? ticket.avatar: blankAvatar} alt={'photo of ' + ticket.owner} />
      </div>
    </div>
  )
}

export default AvatarDisplay
import * as React from 'react'

interface ShowNameProps {
  name: string
}

const ShowName: React.FC<ShowNameProps> = ({name}) => {
    return (
      <div>
          내 이름은 <b>{name}</b>
      </div>
    )
}

export default ShowName
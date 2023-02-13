import React, {FC} from 'react'

interface HeaderProps {
    logo:string
}

function name (title: string) {
    console.log(title)
}

name("dedegit init")

const Header: FC<HeaderProps> = ({ logo }) => {
  return <div>Headr</div>
}

export default Header
import React from 'react'

const Home = (props) => {
  return (
    <div>
        Welcome @{props.user.username}!
    </div>
  )
}

export default Home
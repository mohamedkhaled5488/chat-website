import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import '../style.scss'

export const Home = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Sidebar/>
            <Chat/>

        </div>
    </div>
  )
}
export default Home
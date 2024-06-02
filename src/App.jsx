import logo from './assets/logo.png';
import search from './assets/search.svg';
import mic from './assets/mic.svg';
import golive from './assets/golive.svg';
import bell from './assets/bell.svg';
import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="navbar bg-zinc-950 relative h-full w-full p-2 flex justify-between gap-1">
      <span className="b-2 bg-zinc-950 w-1/3">
        <div className="logo w-1/3 bg-white rounded-xl">
        <img className='h-full p-2' src={logo} alt="logo" />
        </div>
      </span>
      <span className="txt-srch-mic b-2 bg-zinc-950 w-1/3 flex gap-2">
        <span className="txt-search inline-block w-max flex">
          <input className="bg-zinc-950 inline-block border border-zinc-600 rounded-l-3xl h-full w-full" type="text" name="" id="" />
          <div className="inline-block bg-zinc-800 material-iconborder-r border-t border-b border-zinc-600 rounded-r-full h-full flex items-center">
            <img className="" src={search} alt="search" />
          </div>
        </span>
        <div className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center'>
            <img className="" src={mic} alt="mic" />
          </div>
      </span>
      <span className="profiles b-2 bg-zinc-950 w-1/3 flex justify-end gap-4 pr-4">
        <div className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center'>
          <img className="" src={golive} alt="golive" />
        </div>
        <div className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center'>
          <img className="" src={bell} alt="bell" />
        </div>
        <div className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center'>
          <img className="" src={mic} alt="" />
        </div>
      </span>
    </div>
    <div className="body">
      <section className="left"></section>
      <section className="main"></section>
    </div>
    </>
  )
}

export default App

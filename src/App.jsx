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
    <div style={{ aspectRatio:'20/1' }} className="navbar bg-zinc-950 relative flex justify-between gap-1 w-full py-1">
      <span className="inline-block b-2 bg-zinc-950 w-1/3 flex items-center">
        <div className="logo w-1/2 bg-transparent rounded-full h-full flex items-center border-r border-zinc-800">
          <img style={{ aspectRatio:'3/1' }} className='px-3 py-2' src={logo} alt="logo" />
        </div>
      </span>
      <span className="txt-srch-mic b-2 bg-zinc-950 w-1/3 flex justify-center gap-2 h-full w-max">
        <span className="txt-search inline-block w-max flex h-full">
          <input className="bg-zinc-950 inline-block border-l border-t border-b border-zinc-600 rounded-l-3xl h-full" type="text" name="" id="" />
          <div style={{ aspectRatio:'1/1' }} className="inline-block bg-zinc-800 material-iconborder-r border-t border-b border-zinc-600 rounded-r-full h-full flex items-center justify-center">
            <img className="" src={search} alt="search" />
          </div>
        </span>
        <div style={{ aspectRatio:'1/1' }} className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center justify-center'>
            <img className="" src={mic} alt="mic" />
          </div>
      </span>
      <span className="profiles b-2 bg-zinc-950 w-1/3 flex justify-end gap-2 pr-4">
        <div style={{ aspectRatio:'1/1' }} className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center justify-center'>
          <img className="" src={golive} alt="golive" />
        </div>
        <div style={{ aspectRatio:'1/1' }} className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full flex items-center justify-center'>
          <img className="" src={bell} alt="bell" />
        </div>
        <div style={{ aspectRatio:'1/1' }} className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full h-full min-h-10px flex items-center justify-center'>
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

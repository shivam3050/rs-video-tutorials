import logo from './assets/logo.png';
import search from './assets/search.svg';
import mic from './assets/mic.svg';
import golive from './assets/golive.svg';
import bell from './assets/bell.svg';
import home from './assets/home.svg';
import yourMedia from './assets/yourMedia.svg';
import shorts from './assets/shorts.svg';
import subscription from './assets/subscription.svg';
import HomeButton from './components/homeButtons';
import MainPageVideo from './components/mainpagevideo';

import { useState } from 'react'

import './App.css'


function App() {
  const [count, setCount] = useState(0)
    // const mainNavWidthHandle = () => {
    //   var txtBoxSpanWidth = w-40
    //   var logoBoxSpanWidth = w-40
    //   var prflBoxWidth = w-40
    //   var parentWidth = full
    // }
    //   className={`navbar bg-zinc-950 flex justify-between gap-1 w-full ${userid} ${currentdate}`}

  return (
    <>
      <div style={{ minWidth: '740px' }} className="app p-2 px-8 bg-zinc-950 w-full">
        <nav style={{ minWidth:'100%', minHeight:'50px' }} className="navbar text-white bg-zinc-950 flex justify-between gap-1 w-full overflow-hidden py-2">
          <span style={{ minWidth:'170px', width:'170px' }} className="inline-block border">
            <div className="logo bg-transparent rounded-full flex items-center border-r border-zinc-600">
              <img  className='px-3 py-2' src={logo} alt="logo" />
            </div>
          </span>
          <span className="inline-block border flex place-items-center">
            <span className="txt-search inline-block flex">
              <input style={{ minWidth: '400px', width:'400px' }} className="bg-zinc-950 inline-block border-l border-t border-b border-zinc-600 rounded-l-3xl" type="text" name="" id="" />
              <div style={{ minWidth:'50px', width:'50px', minHeight:'50px' }} className="inline-block bg-zinc-800 material-iconborder-r border-t border-b border-zinc-600 rounded-r-full flex items-center justify-center">
                <img className="" src={search} alt="search" />
              </div>
            </span>
            <div style={{ minWidth:'50px', width:'50px', minHeight:'50px' }} className="inline-block bg-zinc-800 material-icon border border-zinc-600 rounded-full flex items-center justify-center">
                <img className="" src={mic} alt="mic" />
            </div>
          </span>
          <span style={{ minWidth:'170px', width:'170px' }} className="inline-block border flex justify-end gap-2 place-items-center">
            <div style={{ minWidth:'50px', width:'50px', minHeight:'50px' }} className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full flex items-center justify-center'>
              <img className="" src={golive} alt="golive" />
            </div>
            <div style={{ minWidth:'50px', width:'50px', minHeight:'50px' }} className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full flex items-center justify-center'>
              <img className="" src={bell} alt="bell" />
            </div>
            <div style={{ minWidth:'50px', width:'50px', minHeight:'50px' }}className='inline-block bg-zinc-800 material-icon border-r border-t  border-b border-zinc-600 rounded-full min-h-10px flex items-center justify-center'>
              <img className="" src={mic} alt="" />
            </div>
          </span>
        </nav>
        <div className="body bg-zinc-950 w-full flex gap-2 py-2">
          <section style={{ width:'3%' }} className="border left bg-zinc-950 flex flex-col gap-9 py-4">
          <div className='text-tiny text-white text-center w-full mx-auto flex flex-col justify-center'>
            <img className='bg-zinc-950 mx-auto w-8' src={home} alt="" />
              Home
            </div>
            <div className='text-tiny text-white text-center w-full mx-auto flex flex-col justify-center'>
            <img className='bg-zinc-950 mx-auto w-8' src={shorts} alt="" />
              Shorts
            </div>
            <div className='text-tiny text-white text-center w-full mx-auto flex flex-col justify-center'>
            <img className='bg-zinc-950 mx-auto w-8' src={subscription} alt="" />
              Subscription
            </div>
            <div className='text-tiny text-white text-center w-full mx-auto flex flex-col justify-center'>
            <img className='bg-zinc-950 mx-auto w-8' src={yourMedia} alt="" />
              You
            </div>
          </section>
          <aside style={{ width:'97%' }} className="main bg-zinc-950 ml-2">
            <div style={{
                  // For Firefox
              scrollbarWidth: 'none',
                  // For Internet Explorer and Edge
              msOverflowStyle: 'none',
                  // Hide scrollbar for Chrome, Safari, and Opera
              WebkitScrollbar: {
                display: 'none',
                    },
                  }}
              className="scroll bg-zinc-950 w-full flex gap-2 overflow-x-scroll">
              <HomeButton value={"All"} value2={""}/>
              <HomeButton value={"Latest Videos"} value2={""}/>
              <HomeButton value={"Mixes"} value2={""}/>
              <HomeButton value={"Live Classes"} value2={""}/>
              <HomeButton value={"Shorts"} value2={""}/>
              <HomeButton value={"Recently"} value2={"Played"}/>
              <HomeButton value={"Your Watched"} value2={""}/>
              <HomeButton value={"New To You"} value2={""}/>
              <HomeButton value={"History"} value2={""}/>
              <HomeButton value={"Monitor Your Watchtime"} value2={""}/>
            </div>
            <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                        }} className="mainvideos">
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                      <MainPageVideo />
                    </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default App

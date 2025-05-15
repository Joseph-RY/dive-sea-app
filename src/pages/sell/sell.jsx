import React from 'react'
import lineImg from './imgs/Line.png'
import { Button } from '@shared/ui/button'

const Sell = () => {
  return (
    <div className='px-[10%]'>
      <h1 className='text-[45px] hidden md:block text-center font-[600]'>Create Your NFT</h1>
      <div className='flex mt-[50px] flex-col gap-[50px] md:gap-0 md:flex-row-reverse justify-between w-[100%]'>
        <div className='flex flex-col items-center gap-[50px] w-[100%] md:w-[40%]'>
          <div className='shadow-lg w-[100%] flex flex-col items-center justify-center gap-[20px] h-[60vh] rounded-[20px]'>
            <img className='w-[15%]' src={lineImg} alt="" />
            <p className='text-[#777E90] font-[400] font-[12px] w-[55%] text-center'>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
          </div>
          <div className='flex flex-col w-[70%]'>
            <Button>Upload</Button>
          </div>
        </div>
        <div className='flex flex-col gap-5 w-[100%] md:w-[55%]'>
          <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">Name</label>
          <div className='bg-[#EFEFEF] py-[10px] px-[20px] rounded-[10px] flex flex-row justify-between mb-[20px]'>
            <input className='outline-none w-[90%]' type="text" placeholder='ArtWork Name' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#9596A6]"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
          </div>
          <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">Description</label>
          <div className='bg-[#EFEFEF] py-[10px] px-[20px] rounded-[10px] flex flex-row justify-between mb-[20px]'>
            <textarea className='resize-none outline-none w-[90%] h-[13vh]' type="text" placeholder='Enter Your Description' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#9596A6]"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
          </div>
          <div className='flex gap-[30px]'>
            <div className='w-[40%] md:w-[20%] flex flex-col gap-[20px]'>
              <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">Royalty</label>
              <select className='bg-[#EFEFEF] text-[#9596A6] py-[10px] px-[20px] rounded-[10px]'>
                <option value="#">Royalty</option>
                <option value="#">Royalty</option>
              </select>
            </div>
            <div className='w-[40%] md:w-[20%] flex flex-col gap-[20px]'>
              <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">Royalty</label>
              <input type="text" className='bg-[#EFEFEF] text-[#9596A6] py-[10px] px-[20px] rounded-[10px]' placeholder='Ex - 100 x 100'  />
            </div>
          </div>
          <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">Tags</label>
          <div className='bg-[#EFEFEF] py-[10px] px-[20px] rounded-[10px] flex flex-row justify-between mb-[20px]'>
            <input className='outline-none w-[90%]' type="text" placeholder='Beautiful Castle, Monkeys ETC' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#9596A6]"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
          </div>
          <div className='flex gap-[30px]'>
            <div className='flex flex-col w-[70%] gap-[10px]'>
              <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">Price</label>
              <div className='bg-[#EFEFEF] py-[10px] px-[20px] rounded-[10px] flex flex-row justify-between mb-[20px]'>
                <select className='bg-[#EFEFEF] text-[#9596A6] py-[5px] px-[5px]'>
                  <option value="#">ETH</option>
                  <option value="#">ETH</option>
                </select>
                <i className='bg-[#9596A6] p-[0.2px] mx-[10px]'></i>
                <input className='outline-none w-[90%]' type="text" placeholder='0.00007 ETC' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-[#9596A6]"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
              </div>
            </div>
            <div className='flex flex-col w-[25%] gap-[10px]'>
              <label className='font-[500] text-[14px] md:text-[20px]' htmlFor="">In Stock</label>
              <div className='bg-[#EFEFEF] py-[10px] px-[20px] rounded-[10px] flex flex-row justify-between mb-[20px]'>
                <select className='bg-[#EFEFEF] text-[#9596A6] py-[5px] px-[5px]'>
                  <option value="#">001</option>
                  <option value="#">002</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-row justify-between items-center'>
              <div>
                <h1 className='font-[500] text-[14px] md:text-[20px]'>Put On Sale</h1>
                <p className='text-[#9596A6] font-[400] text-[9px] md:text-[14px]'>People Will Bids On Your NFT Project</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-300 peer-checked:bg-[#010101] rounded-full transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 peer-checked:bg-white bg-[#000] rounded-full transition peer-checked:translate-x-5"></div>
            </label>
            </div>
            <div className='flex flex-row justify-between items-center'>
              <div>
                <h1 className='font-[500] text-[14px] md:text-[20px]'>Direct Sale</h1>
                <p className='text-[#9596A6] font-[400] text-[9px] md:text-[14px]'>No Bids - Only Direct Salling</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" class="sr-only peer"/>
                <div className="w-11 h-6 bg-gray-300 peer-checked:bg-[#010101] rounded-full transition-all"></div>
                <div className="absolute left-1 top-1 w-4 h-4 peer-checked:bg-white bg-[#000] rounded-full transition peer-checked:translate-x-5"></div>
            </label>
            </div>
          </div>
          <div className='flex flex-col w-[100%]'>
            <Button>Upload</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sell

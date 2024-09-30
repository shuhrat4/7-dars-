import React from 'react'
import { CommentIcon, Dots, LikeIcon, ReplyIcon, ShareIcon } from '../assets/images/Icons'

function PostItem({ item }) {
    return (
        <li key={item.id} className='p-5 border-b-[2px] border-[#D8D8D8] relative'>
            <div className='flex space-x-[15px]'>
                <img className='rounded-full h-[60px]' src={item.avatarIcon} alt="Avatar icon" width={60} height={60} />
                <div>
                    <strong className='font-bold mr-[5px] text-[20px] leading-[26px]'>{item.name}</strong>
                    <span className='text-[18px] leading-[23px] text-black opacity-60'>{item.nic}</span>
                    <p className='mt-[5px] text-[18px] leading-[23px]'>{item.postDeck}</p>
                </div>
            </div>
            <button className='absolute top-5 right-5'>
                <Dots />    
            </button>
            {item.postImg ? <img className='rounded-[20px]' src='' alt="Post Img" width={679} height={453} /> : ''}
            <div className='mt-[22px] flex items-center space-x-[100px] pl-[80px]'>
                <button className='flex items-center space-x-[10px]'>
                    <CommentIcon />
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.commentCount || ''}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <ReplyIcon />
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.replyCount || ''}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <LikeIcon />
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.likeCount || ''}</span>
                </button>
                <button className='flex items-center space-x-[10px]'>
                    <ShareIcon />
                    <span className='font-semibold text-[16px] leading-[21px]'>{item.shareCount || ''}</span>
                </button>
            </div>
        </li>
    )
}

export default PostItem
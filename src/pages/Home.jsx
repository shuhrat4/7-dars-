import React, { useState } from 'react';
import { ModeIcon, SaveImgIcon, StatsIcon, SimailIcon } from '../assets/images/Icons';
import Button from '../components/Button';
import Designsta from '../assets/images/Designsta.png';
import cloutexhibition from '../assets/images/cloutexhibition.png';
import CreativePhoto from '../assets/images/CreativePhoto.png';
import PostItem from '../components/PostItem';

function Home() {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [postImg, setPostImg] = useState(null); 
  const [posts, setPosts] = useState([
    {
      id: 1,
      avatarIcon: Designsta,
      name: "Designsta",
      nic: "@inner · 25m",
      postDeck: "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: '10',
      replyCount: '1',
      likeCount: '8',
      shareCount: '4',
      postImg: null,
    },
    {
      id: 2,
      avatarIcon: cloutexhibition,
      name: "cloutexhibition",
      nic: "@RajLahoti · 22m",
      postDeck: "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount: '0',
      replyCount: '5',
      likeCount: '9',
      shareCount: '2',
      postImg: null,
    },
    {
      id: 3,
      avatarIcon: CreativePhoto,
      name: "CreativePhoto",
      nic: "@cloutexhibition · 1h",
      postDeck: "Обетда.....Кечиринглар",
      commentCount: '10',
      replyCount: '1',
      likeCount: '8',
      shareCount: '3',
      postImg: null,
    },
  ]);

  const handleSubmitPosts = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem('token'));
    const userName = token?.login || "Anonymous"; 
    const userNic = `@${userName} · 5m`;

    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      avatarIcon: 'https://picsum.photos/800/800',
      name: userName,
      nic: userNic,
      postDeck: inputValue,
      commentCount: '0', 
      replyCount: '0',    
      likeCount: '0',     
      shareCount: '0',    
      postImg: postImg 
    };

    setIsLoading(true);
    setTimeout(() => {
      setPosts([newPost, ...posts]);
      setIsLoading(false);
      setInputValue(''); 
      setPostImg(null); 
    }, 1000);
  };

  return (
    <div className='border-r-[2px] border-[#D8D8D8] h-[100vh] overflow-y-auto'>
      <div className='flex items-center justify-between p-5 border-b-[2px] border-[#D8D8D8]'>
        <h2 className='font-bold text-[24px] leading-[31px]'>Home</h2>
        <button>
          <ModeIcon />
        </button>
      </div>
      <form onSubmit={handleSubmitPosts} className='p-5 border-b-[2px] relative border-[#D8D8D8]'>
        <div className='flex items-start space-x-[15px]'>
          <img className='rounded-full' src="https://picsum.photos/800/800" alt="profile" width={60} height={60} />
          <input 
            onChange={(e) => setInputValue(e.target.value)} 
            className='w-[80%] text-[22px] leading-[29px] placeholder:text-[#D8D8D8] p-1 outline-none font-semibold' 
            type="text" 
            placeholder="What’s happening" 
            value={inputValue} 
          />
        </div>
        {postImg && <img src={postImg} alt='Chosen img' width={679} height={354} className="mt-2" />}   
        
        <div className='flex items-center space-x-5 pl-[77px] mt-8'>
          <label>
            <input 
              onChange={(e) => setPostImg(URL.createObjectURL(e.target.files[0]))} 
              className='hidden' 
              type="file" 
            />
            <SaveImgIcon />
          </label>
          <label>
            <input className='hidden' type="file" />
            <SimailIcon />
          </label>
          <label>
            <input className='hidden' type="file" />
            <StatsIcon />
          </label>
        </div>
        <Button
          type='submit'
          extraStyle={`w-[150px] absolute right-[18px] bottom-[5px] ${inputValue ? "" : "cursor-not-allowed opacity-50 hover:opacity-50"}`}
          disabled={!inputValue || isLoading}
        >
          {isLoading ? "Posting..." : "Tweet"}
        </Button>
      </form>
      <ul>
        {posts.map(item => <PostItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}

export default Home;

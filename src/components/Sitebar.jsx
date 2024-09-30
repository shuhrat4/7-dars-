import React from 'react';

const Sidebar = () => {
  return (


    <div className="search-bar w-[350px] h-[75px] mt-5 mb- pl-[31px]">
      <input
        type="text"
        placeholder="Search Twitter"
        className="w-full p-2 rounded-full bg-gray-200 border border-transparent focus:outline-none focus:ring focus:ring-gray-300"
      />


      <div className="sidebar  p-4 w-80 bg-gray-100 mt-4 rounded-[10px] h-[402px] ">
        <div className="trends-section mb-6   ">
          <h3 className="text-xl font-bold mb-3">Trends for you</h3>
          <div className="trend-item mb-4">
            <p className="text-sm text-gray-500">Trending in Germany</p>
            <p className="text-lg font-semibold">Revolution</p>
            <p className="text-sm text-gray-500">50.4K Tweets</p>
            <button className="text-gray-500 hover:text-gray-700">...</button>
          </div>
          <div className="` mb-4">
            <p className="text-sm text-gray-500">Trending in Germany</p>
            <p className="text-lg font-semibold">Revolution</p>
            <p className="text-sm text-gray-500">50.4K Tweets</p>
              <div className='flex w'>
              <button className="text-gray-500 hover:text-gray-700">...</button>
              </div>
          </div>
          <div className="trend-item mb-4">
            <p className="text-sm text-gray-500">Trending in Germany</p>
            <p className="text-lg font-semibold">Revolution</p>
            <p className="text-sm text-gray-500">50.4K Tweets</p>
            <button className="text-gray-500 hover:text-gray-700">...</button>
          </div>
          <button className="text-blue-500 hover:underline">Show more</button>
        </div>
      </div>

     <div className='sidebar  p-4 w-80 bg-gray-100 mt-4 rounded-[10px] h-[230px]'>
     <div className="you-might-like">
        <h3 className="text-xl font-bold mb-3">You might like</h3>
        <div className="user-suggestion mb-4 flex items-center">
          <img
            src="https://picsum.photos/800/800"
            alt="Mushtariy"
            className="rounded-full w-10 h-10 mr-3"
          />
          <div>
            <p className="font-semibold">Mushtariy</p>
            <p className="text-sm text-gray-500">@Mushtar565266</p>
          </div>
          <button className="ml-auto bg-black text-white rounded-full px-4 py-1">Follow</button>
        </div>
        <div className="user-suggestion mb-4 flex items-center">
          <img
            src="https://picsum.photos/800/800"
            alt="Shuhratbek"
            className="rounded-full w-10 h-10 mr-3"
          />
          <div>
            <p className="font-semibold">Shuhratbek</p>
            <p className="text-sm text-gray-500">@mrshukhrat</p>
          </div>
          <button className="ml-auto bg-black text-white rounded-full px-4 py-1">Follow</button>
        </div>
        <button className="text-blue-500 hover:underline">Show more</button>
      </div>
     </div>

      <div className="footer text-sm text-gray-500 mt-6 flex">
        <div className="mb-2">
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <span> · </span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
        <div className="mb-2">
          <a href="/cookie" className="hover:underline">Cookie Policy</a>
          <span> · </span>
          <a href="/imprint" className="hover:underline">Imprint</a>
        </div>
        <p>© 2021 Twitter, Inc.</p>
      </div>
    </div>
  );
}

export default Sidebar; 
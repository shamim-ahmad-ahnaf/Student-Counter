import React, { useState } from 'react';
import { TbArrowBigRightFilled } from "react-icons/tb";


export default function Learn() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [user, setUser] = useState({ name: "Rahim", isBanned: false });
  const [img, setImg] = useState(false);
  const [count, setCount] = useState(false);
  const data = [
    {
      name: "Samsung",
      price: 900,
      description: "This is a Samsung",
      instock: true,
      img: "https://images.pexels.com/photos/29905590/pexels-photo-29905590/free-photo-of-elegant-woman-in-vintage-pearl-necklace-portrait.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Honer",
      price: 400,
      instock: false,
      description: "This is a Honer",
      img: "https://images.pexels.com/photos/3765117/pexels-photo-3765117.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Realme",
      price: 600,
      instock: true,
      description: "This is a Realme",
      img: "https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen gap-5">
        {data.map((elem, index) => (
          <div key={index} className="px-2 py-2 overflow-hidden border-2 border-red-500 rounded w-52 bg-slate-500">
            <img className="object-cover w-full h-32 rounded" src={elem.img} alt={elem.name} />
            <h1>{elem.name}</h1> 
            <p>{elem.price}</p>
            <p>{elem.description}</p>
            <button
              onClick={handleClick}
              className={elem.instock ? "bg-green-500 py-1 px-1 rounded" : "bg-red-500 py-1 px-1 rounded"}
            >
              {elem.instock ? "Expensive" : "Cheap"}
            </button>
          </div>
        ))}
        <h1>{count.toString()}</h1>
        <button onClick={() => setCount(!count)} className="px-2 py-2 text-white bg-red-500 rounded">
          Click me
        </button>
      </div>

      <h1>Name: {user.name}</h1>
      <h2>Banned: {user.isBanned.toString()}</h2>
      <button
        onClick={() => setUser({ ...user, isBanned: !user.isBanned })}
        className={`px-3 py-2 mt-2 ${user.isBanned ? "bg-green-600 text-white" : "bg-red-600"} rounded-full`}>
        Change
      </button>

      <div>
        {val.map(item => <h1>{item}</h1>)}
      </div>
      <button onClick={() => setVal(() => val.filter((item, index) => index !== val.length - 1))}
        className='px-4 py-2 text-white bg-purple-700 hover:bg-emerald-400'>Remove
      </button>





      <div className='flex items-center justify-center w-full h-screen gap-5 mt-5 bg-slate-500'>
        <div className='relative flex h-32 overflow-hidden w-60'>
          <img
            className={`shrink-0 object-cover w-full h-full transition-transform duration-500 ${img ? "translate-x-[-100%]" : "translate-x-[0%]"}`}
            src="https://img.freepik.com/premium-photo/young-caucasian-woman-shocked-pointing-with-index-fingers-copy-space_1187-120524.jpg?w=900" alt="" />

          <img
            className={`shrink-0 object-cover w-full h-full absolute top-0 left-0 transition-transform duration-500 ${img ? "translate-x-[0%]" : "translate-x-[100%]"}`}
            src="https://img.freepik.com/free-photo/silly-cute-young-brunette-posing_176420-30598.jpg?t=st=1735403757~exp=1735407357~hmac=0ad139dd62ec8e909e1253e631c038f61a8be328010027b1dbb8a7de270c4ac5&w=900" alt="" />

          <span
            onClick={() => setImg(!img)}
            className='w-8 h-8 absolute flex items-center justify-center -translate-x-[50%] left-1/2 rounded-full bg-slate-400 mt-24 cursor-pointer'>
            <TbArrowBigRightFilled />
          </span>
        </div>
      </div>

    </div>

  );
}

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import EachCon from './EachCon';

const Confer = () =>{
    const [conference,setconference]=useState([]);
    const fetchData= async () =>{
        const response= await fetch("https://api.react-finland.fi/graphql", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Accept' : 'application/json'
            },
            body: JSON.stringify({query: `
            {
                conferences {
                      id
                      name
                      slogan
                }
              }`
            })
        })
        const data=await response.json();
        setconference(data.data.conferences);
    }
    useEffect(()=>{
        fetchData();
    },[])
    // console.log(conference);
    return(
      <div>
          {/* <!-- component --> */}
          <div className='flex justify-center conf'>
            <h1>Conferences</h1>
            </div>
                <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
                <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

                    <div className="relative text-gray-700 antialiased text-sm font-semibold">

                    {/* <!-- Vertical bar running through middle --> */}
                    <div className="hidden sm:block w-1 bg-blue-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                    {
                        conference?.map((userData,index) => {
                            return (
                                <EachCon index={index} userData={userData}/>
                            );
                        })
                    }
                    </div>
                </div>
                </div>
      </div>
    );
}
export default Confer;
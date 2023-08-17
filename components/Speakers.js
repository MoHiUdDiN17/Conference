import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const Speakers = ({ newId }) => {
  const [speakers, setSpeakers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://api.react-finland.fi/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        query: `
            {
                conference(id : "${newId}"){
                  id
                  name
                  allSpeakers{
                    name
                    aboutShort
                    image{
                      url
                    }
                  }
                }
              }
            `
      })
    })
    const data = await response.json();
    setSpeakers(data?.data?.conference?.allSpeakers);
  }
  useEffect(() => {
    fetchData();
    console.log('details', speakers);
  }, [newId, speakers])

  return (
    <div className='orgColoring py-5 px-8 rounded-lg'>
      {
        speakers && speakers?.map(userData => {
          return (
            <div className='bg-white mt-5 rounded-lg' key={userData?.name}>
              <div className='flex gap-5 py-5 px-5'>
                <Image
                  className='rounded-lg'
                  src={userData?.image?.url}
                  alt="organizer"
                  width={140}
                  height={140}
                />
                <div className='w-full'>
                  <div>
                  <div className='mt-4 flex justify-between items-start'>
                    <div className='pb-2'><h1 className='font-bold'>{userData?.name}</h1></div>
                    <div className='flex gap-x-5 justify-center'>
                      <Image
                        src="/twit.png"
                        alt="twitter"
                        width={20}
                        height={20}
                      />
                      <Image
                        src="/linked.png"
                        alt="insta"
                        width={20}
                        height={20}
                      />
                      <Image
                        src="/none.png"
                        alt="facebook"
                        width={20}
                        height={20}
                      />
                      <Image
                        src="/git.png"
                        alt="social"
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <p className='text-xs'>{userData?.aboutShort}</p>
                  </div>
                </div>
              </div>

            </div>
          );
        })
      }
    </div>
  );
}
export default Speakers;
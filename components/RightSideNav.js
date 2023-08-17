import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const RightSideNav = ({ newId }) => {
    const [orger, setOrger] = useState([]);

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
                  organizers {
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
        setOrger(data?.data?.conference?.organizers);
    }
    useEffect(() => {
        fetchData();
        console.log('details', orger);
    }, [newId, orger])

    return (
        <div className='orgColoring py-5 px-8 rounded-lg'>
            {
                orger?.map(userData => {
                    return (
                        <div className='bg-white mt-5 rounded-lg' key={userData?.name}>
                            <div className='flex gap-5 px-3 py-2'>
                                <div className='w-[20%]'>
                                    <Image
                                        className='rounded-lg'
                                        src={userData?.image?.url}
                                        alt="organizer"
                                        width={140}
                                        height={140}
                                    />
                                </div>
                                <div className='w-[80%]'>
                                    <div className='flex flex-col space-y-4 mt-4'>
                                        <h1 className='font-bold'>{userData?.name}</h1>
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
export default RightSideNav;


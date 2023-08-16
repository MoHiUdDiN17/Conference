import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const Schedule = ({newId}) =>{
    const [schedules, setSchedules] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');
    const [dateData,setDateData]=useState([]);
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
                  schedules{
                    day
                    intervals{
                      sessions{
                        begin
                        end
                        type
                      }
                    }
                  }
                }
              }
            `
            })
        })
        const data = await response.json();
        setSchedules(data?.data?.conference?.schedules);
        // setDateData(data?.data?.conference?.schedules[0]?.day);

    }
    useEffect(() => {
        fetchData();
        const newDate=schedules?.map(element=>{
            return element?.day;
        })
        setDateData(newDate);
        // console.log('details', schedules);
        // // console.log(dateData);
        // console.log(newDate);
    }, [newId, schedules])

    const formatDate = (dateString) => {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      };
      
      const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
      return formattedDate;
    };
     // Your given date here
    const dateArray = dateData?.map(element=>{
      return formatDate(element);
    })
    return(
      <div className='orgColoring py-5 px-8 rounded-lg'>
            {
                 dateArray?.map((userData,index) => {
                    return (
                        <div className='bg-white mt-5 rounded-lg px-5'>
                            <div className='flex justify-between gap-5 py-3'>
                                <div >
                                    <h1 className='text-xl font-bold'>{userData?.split(',')[1]},{userData?.split(',')[2]}</h1>
                                </div>
                                <div>
                                    <h1>{userData?.split(',')[0]}</h1>
                                </div>
                            </div>
                            <div>
                              {
                                schedules[index]?.intervals?.map(intervalData =>{
                                  return(
                                    <div>
                                      {
                                        intervalData?.sessions?.map(element=>{
                                          return(
                                            <div className='pb-4'>
                                                  <h1 className='text-sm mt-1'>Duration : {element?.begin}-{element?.end}</h1>
                                                  <h1 className='text-sm mt-1'><span className='font-bold mr-1'>.</span>{element.type.toLowerCase()}</h1> 
                                             </div>
                                          );
                                        })
                                      }
                                    </div>

                                  );
                                })
                              }
                            </div>
                            
                          </div>
                    );
                })
            }
        </div>
    );
}
export default Schedule;
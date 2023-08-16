import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const LeftSideNav = ({_id}) =>{
    const [active, setActive] = useState([
        {category_name: "Organizer",color:'white',bcolor:'#FFC93E'},
        {category_name: "Speakers",color:'black',bcolor:'white'},
        {category_name: "Schedule",color:'black',bcolor:'white'},
        {category_name: "Sponsors",color:'black',bcolor:'white'},
    ]);
    const handleClick = (name) => {
        const updatestat=active.map(button =>{
            if(button.category_name === name)
                return {...button,color:'white',bcolor:'#FFC93E'};
            return {...button,color:'black',bcolor:'white'};
        });
        setActive(updatestat);
     };
    const categories=[
        {
            "category_id": "01",
            "category_name": "Organizer"
        },
        {
            "category_id": "02",
            "category_name": "Speakers"
        },
        {
            "category_id": "03",
            "category_name": "Schedule"
        },
        {
            "category_id": "04",
            "category_name": "Sponsors"
        }
    ]
    // const value = categories?.map(element=>{
    //     return element.category_name;
    // })
    // setActive(value);
    // console.log(_id);
     // color: active.color
    return(
      <div className='mr-40'>
          {
            active?.map(category => {
                return (
                    <Link href={`/users/${_id}&${category?.category_name}`}>
                        <div className='my-3 font-bold border rounded-lg' onClick={()=>handleClick(category?.category_name)}
                        style={{ backgroundColor: category.bcolor,
                            color: category.color
                        }}
                        >
                            <p className=' py-2 px-24 '>{category?.category_name}</p>
                        </div>
                    </Link>
                );
            })
          }
      </div>
    );
}
export default LeftSideNav;
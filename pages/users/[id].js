import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LeftSideNav from '../../components/LeftSideNav';
import RightSideNav from '../../components/RightSideNav';
import Speakers from '../../components/Speakers';
import Schedule from '../../components/Schedule';
import Sponsors from '../../components/Sponsors';
// {user}
const UserId = () =>{
    const [detailConf,setDetailConf]=useState([]);
    const [currentId,setCurrentId]=useState(null);
    const router = useRouter();
    const currentUrl = router.asPath;
    const idSec= currentUrl.split('/')[2];
    const newId = idSec.split('&')[0];
    const secTion=idSec.split('&')[1];
    const fetchData= async () =>{
        const response= await fetch("https://api.react-finland.fi/graphql", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Accept' : 'application/json'
            },
            body: JSON.stringify({query: `
            {
                conference(id : "${newId}"){
                  id
                  name
                  slogan
                }
              }`
            })
        })
        const data=await response.json();
        setDetailConf(data?.data?.conference);
    }
    useEffect(()=>{
        fetchData();
    },[newId])
    // console.log(detailConf);
    return(
      <div>
        <Header></Header>
        <div className='max-w-screen-xl mx-auto'>
            <div>
                <h1 className='singleConf'>{detailConf?.name}</h1>
                <p className='coloring'>{detailConf?.slogan}</p>
            </div>
            <div className="grid grid-cols-6 gap-2 mt-12">
                <div className="col-span-2">
                    <LeftSideNav _id = {detailConf?.id} key={detailConf?.id}></LeftSideNav>
                </div>
                <div className="col-span-4 mb-6">
                {
                    secTion === 'Organizer'?
                        <RightSideNav  newId = {detailConf?.id} key={detailConf?.id}></RightSideNav>
                        :
                    secTion === 'Speakers' ?
                        <Speakers  newId = {detailConf?.id} key={detailConf?.id}></Speakers>
                        :
                    secTion === 'Schedule' ?
                        <Schedule  newId = {detailConf?.id} key={detailConf?.id}></Schedule>
                        :
                        <Sponsors  newId = {detailConf?.id} key={detailConf?.id}></Sponsors>

                }
                </div>
            </div>
        </div>
        
        <Footer></Footer>
      </div>
    );
}
export default UserId;

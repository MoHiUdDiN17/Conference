import React from 'react';
import Image from 'next/image'

const Footer = () =>{
    return(
      <div className='foot'>
          <div className='flex justify-center items-center pt-24'>
          <Image
            src="/React.png"
            alt="React"
            width={150}
            height={50}
          />
          </div>
          <div className='flex gap-5 justify-center pt-5'>
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
                <Image
                  src="/insta.png"
                  alt="insta"
                  width={20}
                  height={20}
                />
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                />
                <Image
                  src="/social.png"
                  alt="social"
                  width={20}
                  height={20}
                />
          </div>
              <div className='flex justify-center pt-5 text-white'>
                <p>© 2023 Lemonhive. All rights reserved.</p>
              </div>
      </div>
    );
}
export default Footer;
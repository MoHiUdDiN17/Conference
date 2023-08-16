import React from 'react';
import Image from 'next/image'
const Sponsor = () =>{
    return(
     <div className='sponsor'>
          <div className='flex justify-center pt-16'>
            <h1 className='spon'>Our Sponsor</h1>
          </div>
          <div className='flex justify-center pt-5'>
            <p>🥇 Gold Sponsor</p>
          </div>
          <div  className='flex justify-center pt-5 gap-10'>
                <Image
                  src="/lay.png"
                  alt="layers"
                  width={180}
                  height={65}
                />
                <Image
                  src="/sis-g.png"
                  alt="sisyphus"
                  width={217}
                  height={65}
                />
          </div>
          <div className='flex justify-center pt-5'>
            <p>🥈Silver Sponsors</p>
          </div>
          <div  className='flex justify-center pt-5 gap-10'>
                <Image
                  src="/cir-d.png"
                  alt="circooles"
                  width={217}
                  height={48}
                />
                <Image
                  src="/cata-b.png"
                  alt="catalog"
                  width={180}
                  height={48}
                />
                <Image
                  src="/gof.png"
                  alt="gofore"
                  width={220}
                  height={48}
                />
          </div>
          <div className='flex justify-center pt-5'>
            <p>🥉Bronze Sponsors</p>
          </div>
          <div  className='flex justify-center pt-5 gap-10'>
                <Image
                  src="/sis-p.png"
                  alt="sisphus"
                  width={217}
                  height={60}
                />
                <Image
                  src="/quo.png"
                  alt="quotient"
                  width={230}
                  height={60}
                />
                <Image
                  src="/lay.png"
                  alt="layers"
                  width={180}
                  height={60}
                />
                <Image
                  src="/cir.png"
                  alt="circooles"
                  width={230}
                  height={60}
                />
          </div>
       </div>
    );
}
export default Sponsor;
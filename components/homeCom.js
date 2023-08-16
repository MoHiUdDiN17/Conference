import React, { useEffect, useState } from 'react';
import Image from 'next/image'

const HomeCom = () => {
    return (
        <div className='flex justify-center'>
            <div className="w-[80%] grid grid-cols-3">
                <div className="col-span-2 flex flex-col">
                    <h2 className="text-[#1f086e] text-right font-bold text-9xl">
                        React <br /> Conference
                    </h2>
                    <div className="grid grid-cols-3 mt-8 space-x-8">
                        <div className='col-span-1'>
                            <Image className='rounded-lg' src="/record.png" width={330} height={420} />
                        </div>
                        <div className='col-span-2'>
                            <p className='text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                                similique delectus distinctio aliquid iusto recusandae sit eos
                                fugiat deserunt fuga, error expedita aut assumenda quo veniam
                                iste reprehenderit facere nulla.
                            </p>
                            <button className="mt-8 w-fit rounded-[30px] bg-[#fad161] px-14 py-2 rounded">
                                Buy Tickets
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 flex items-end'>
                    <div className="p-4 mb-14">
                        <Image src="/laptop.png" width={550} height={560} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HomeCom;
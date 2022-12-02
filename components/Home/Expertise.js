import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
const Expertise = () => {
    const expertise = [
       {
         img:"/assets/target.png",
        title:'Targeted SEO',
        subtitle:'As an Internet marketing strategy, SEO considers how search engines work, the programmed algorithms that dictate search engine.',
        ct1:'Content optimization',
        ct2:'Content optimization',
        ct3:'Content optimization',

    },
    {
        img:"/assets/target.png",
       title:'Targeted SEO',
       subtitle:'As an Internet marketing strategy, SEO considers how search engines work, the programmed algorithms that dictate search engine.',
       ct1:'Content optimization',
       ct2:'Content optimization',
       ct3:'Content optimization',

   },
   {
    img:"/assets/target.png",
   title:'Targeted SEO',
   subtitle:'As an Internet marketing strategy, SEO considers how search engines work, the programmed algorithms that dictate search engine.',
   ct1:'Content optimization',
   ct2:'Content optimization',
   ct3:'Content optimization',

},

    ]
  return (
    <div className='container mx-auto bg-gradient-to-t from-[#f8f9fd] to-[#f8f9fc] md:min-h-screen'>
      <div className=' flex flex-col justify-center items-center gap-7  '>
     
     <p className="text-4xl text-center text-[#2d3748] font-bold mt-10">Our Digital Marketing Expertise</p>
     <p className="text-2xl text-center text-[#79879d] leading-10">
     We help our clients achieve tangible, high-impact results. <br />
Tempor incididunt ut labore et dolore magna aliqua.
     </p>
   </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-16">

        {expertise.map((exp,i)=>{
            return(
                <div key={i} className='bg-white px-6 py-4'>
                    <img className='rounded-xl' src={exp.img} alt="target" />
                    <p className='text-2xl font-bold text-[#4b5362]'>{exp.title}</p>
                    <p className='text-lg  text-[#718096] mb-3'>{exp.subtitle}</p>
                    <div className="flex items-center gap-2">
                        <BsArrowRightCircle className='text-xl font-semibold text-[#718096]'/>
                        <p className='text-[#718096] font-medium text-xl'>{exp.ct1}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsArrowRightCircle className='text-xl font-semibold text-[#718096]'/>
                        <p className='text-[#718096] font-medium text-xl'>{exp.ct2}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <BsArrowRightCircle className='text-xl font-semibold text-[#718096]'/>
                        <p className='text-[#718096] font-medium text-xl'>{exp.ct3}</p>
                    </div>
                </div>
            )
        })}

        </div>
    </div>
  
  )
}

export default Expertise
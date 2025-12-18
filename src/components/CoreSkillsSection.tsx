"use client"
import {motion} from 'framer-motion'
interface Bar {
    id:number;
    percentage:number;
    name:string;
}
const skillSBar:Bar[] = [
    // {
    //     id:1,
    //     percentage:95,
    //     name:'HTML',
    // },
    // {
    //     id:2,
    //     percentage:85,
    //     name:'CSS',
    // },
    {
        id:3,
        percentage:75,
        name:'JavaScript',
    },
    // {
    //     id:4,
    //     percentage:55,
    //     name:'Bootstrap',
    // },
    {
        id:5,
        percentage:80,
        name:'React',
    },
    {
        id:6,
        percentage:70,
        name:'TypeScript',
    },
    {
        id:7,
        percentage:88,
        name:'Tailwind',
    },
    // {
    //     id:8,
    //     percentage:56,
    //     name:'MongoDB',
    // },
    {
        id:9,
        percentage:70,
        name:'Next',
    },
    {
        id:10,
        percentage:85,
        name:'Wordpress',
    },
    // {
    //     id:11,
    //     percentage:40,
    //     name:'Express',
    // },
]

const CoreSkillsSection = () => {
  return (
    <div className="relative min-h-screen bg-black -mt-3.5">
        <div
        style={{
            backgroundImage :
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.05) 1px,transparent 1px)',
            backgroundSize:'50px 50px'
        }}
        className="absolute inset-0" />
        <div className="relative max-w-7xl mx-auto text-center py-6">
            <h2
            style={{fontFamily:'var(--font-space)'}}
            className="font-semibold text-3xl py-3">Core Proficiencies</h2>
            <div className="flex justify-center items-center flex-col gap-2 w-full py-4">
                {
                    skillSBar.map((bar)=>{
                        return <div key={bar.id} className="w-2/3 space-y-0.5 my-1">
                            <div className="flex justify-between">
                                <div className="font-semibold text-white text-lg">{bar.name}</div>
                                <div className="text-[#F7C62F] font-semibold text-lg">{bar.percentage}%</div>
                            </div>
                            <div className="relative rounded-3xl w-full h-3 bg-neutral-800/50 overflow-hidden z-0">
                                <motion.div 
                                initial={{width:0}}
                                whileInView={{width:`${bar.percentage}%`}}
                                transition={{duration:0.5,delay:0.1*bar.id}}
                                viewport={{once:true}}
                                className="absolute bg-[#f3c12a] inset-0 z-10 rounded-full" />
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CoreSkillsSection
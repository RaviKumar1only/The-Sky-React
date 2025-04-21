import React from 'react';
import logo from '../assets/favicon.png';
import bgImage from '../assets/bg-image.jpg';
import { FaChevronRight } from "react-icons/fa";
import { CiBank } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import teamImage from '../assets/team-image.jpg';
import teaImage from '../assets/book-image.jpg';
import contactImage from '../assets/contact-image.jpg';
import { IoMdMail } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (
    <div className='w-screen h-screen relative overflow-x-hidden'>

        <div className='w-full h-[72px] flex justify-center bg-[#262626] sticky top-0 z-10 shadow-md shadow-slate-200/20'>
            <nav className='w-11/12 flex justify-between items-center'>
                <div className='flex items-center gap-3'>
                    <img src={logo} alt='logo' height={50} width={50}/>
                    <div className='text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-300 bg-clip-text text-transparent'>RaviKumar1only</div>
                </div>
                <ul className='flex gap-12'>
                    <a href='#home' className='text-lg text-gray-100 hover:text-gray-300 transition-all duration-150 cursor-pointer'>Home</a>
                    <a href='#about' className='text-lg text-gray-100 hover:text-gray-300 transition-all duration-150 cursor-pointer'>About</a>
                    <a href='#cases' className='text-lg text-gray-100 hover:text-gray-300 transition-all duration-150 cursor-pointer'>Cases</a>
                    <a href='#blog' className='text-lg text-gray-100 hover:text-gray-300 transition-all duration-150 cursor-pointer'>Blog</a>
                    <a href='#contact' className='text-lg text-gray-100 hover:text-gray-300 transition-all duration-150 cursor-pointer'>Contact</a>
                </ul>
            </nav>
        </div>

        <div id='home' className='w-full h-full relative flex justify-center items-center'>
            <img className='absolute h-full w-full' src={bgImage} alt='bg-image'/>
            <div className='absolute flex flex-col gap-6 justify-center items-center'>
                <h1 className='text-6xl text-gray-200'>The Sky Is The Limit</h1>
                <p className='text-2xl text-gray-200'>We provide world class financial assistance</p>
                <a href='#about'>
                    <button className='font-semibold px-5 py-3 gap-2 text-white bg-green-500 flex items-center rounded-md'>
                        <FaChevronRight/>
                        Read More
                    </button>
                </a>
            </div>
        </div>

        <div id='about' className='w-full h-[350px] bg-white flex justify-evenly items-center'>
            <div className='flex flex-col gap-4 w-1/4 justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-green-600 flex items-center justify-center'>
                    <CiBank className='text-4xl text-white'/>
                </div>
                <p className='text-xl font-semibold'>Investment Banking</p>
                <p className='text-center'>Banking is the backbone of a nation’s economy, enabling secure financial transactions and savings.</p>
            </div>

            <div className='flex flex-col gap-4 w-1/4 justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-green-600 flex items-center justify-center'>
                    <FaBookReader className='text-3xl text-white'/>
                </div>
                <p className='text-xl font-semibold'>Portfolio Manager</p>
                <p className='text-center'>It helps you stand out to potential employers or clients by highlighting your expertise and experience.</p>
            </div>

            <div className='flex flex-col gap-4 w-1/4 justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-green-600 flex items-center justify-center'>
                    <FaPencilAlt className='text-2xl text-white'/>
                </div>
                <p className='text-xl font-semibold'>Tax & Custodial</p>
                <p className='text-center'>Tax is a mandatory financial charge imposed by the government to fund public services and infrastructure.</p>
            </div>
        </div>

        <div className='w-full h-[450px] flex'>
            <img className='h-full w-1/2 object-cover' src={teamImage} alt='team-image'/>
            <div className='bg-green-500 h-full w-1/2'>
                <div className='relative top-[80px] left-[30px] mr-10'>
                    <p className='font-bold text-white mb-1'>What you are looking for</p>
                    <h2 className='text-4xl text-white mb-5 font-thin'>We provide bespoke solutions</h2>
                    <p className='text-white mb-8'>Success is not achieved overnight; it is the result of consistent effort, dedication, and learning from failure. Every step forward, no matter how small, contributes to the larger goal. Challenges will arise, but they are opportunities to grow stronger and wiser. Believing in yourself and staying focused makes a big difference.</p>
                    <button className='rounded-sm px-7 py-3 text-white bg-transparent border border-white cursor-pointer hover:scale-90 transition-all duration-150'>Read More</button>
                </div>
            </div>
        </div>

        <div id='cases' className='w-full h-[350px] flex flex-col gap-6 justify-center items-center'>
            <p className='font-semibold'>This is what we do</p>
            <h2 className='text-5xl font-thin'>Business Cases</h2>
            <p className='font-thin mt-2'>Planning, execution, feedback, and iteration shape sustainable business models!</p>
        </div>

        <div id='blog' className='w-full h-[450px] flex'>
            <div className='bg-blue-500 w-1/2'>
                <div className='relative top-[80px] left-[40px] mr-16'>
                    <p className='font-bold text-white mb-1'>May 21 2020</p>
                    <h2 className='text-4xl text-white font-thin mb-5'>Blog Post 1</h2>
                    <p className='text-white mb-8'>A successful business starts with a clear vision and strong purpose. It grows through strategic planning, innovation, and consistent execution. Building trust with customers and adapting to market changes are essential. Every challenge offers a lesson, and long-term success depends on resilience, teamwork, and a commitment to continuous improvement.</p>
                    <button className='rounded-sm px-7 py-3 text-white bg-transparent border border-white cursor-pointer hover:scale-90 transition-all duration-150'>Read Our Blog</button>
                </div>
            </div>
            <img className='h-full w-1/2 object-cover' src={teaImage} alt='teaImage'/>
        </div>

        <div className='w-full h-[400px] flex flex-col items-center justify-center'>
            <p className='font-semibold mb-3'>Who we are</p>
            <h2 className='text-4xl font-thin mb-6'>Our Professional Team</h2>
            <p className='font-thin'>A strong team turns vision into we know already baby reality through collaboration and trust.</p>
            <div className='w-full flex justify-center gap-10 mt-[60px]'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>Orhan Ozkercin</p>
                    <p className='font-thin'>President</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>John Doe</p>
                    <p className='font-thin'>Vice President</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='font-semibold'>Steve Smith</p>
                    <p className='font-thin'>Marketting Head</p>
                </div>
            </div>
        </div>

        <div id='contact' className='w-full h-[450px] flex'>
            <img className='h-full w-1/2 object-cover' src={contactImage} alt='contact-image'/>
            <div className='h-full w-1/2 bg-slate-100'>
                <form className='flex flex-col gap-7 ml-[30px] mt-[50px]'>
                    <label className='mb-4 text-4xl font-thin tracking-wider'>Request Callback</label>

                    <input type='text' placeholder='Enter Name' required
                        className='w-11/12 bg-white py-2 rounded-sm px-2 text-sm border-none focus:outline-none'
                    />

                    <input type='email' placeholder='Enter Email' required
                        className='w-11/12 bg-white py-2 rounded-sm px-2 text-sm border-none focus:outline-none'
                    />

                    <input type='text' placeholder='Enter Phone' required
                        className='w-11/12 bg-white py-2 rounded-sm px-2 text-sm border-none focus:outline-none'
                    />

                    <button className='bg-green-600 text-white py-2 w-11/12 rounded-sm mt-5 text-sm font-semibold'>Send</button>
                </form>
            </div>
        </div>

        <div className='w-full h-[300px] flex flex-col justify-center items-center bg-gray-800 gap-16'>
            <div className='w-full flex justify-evenly'>
                <div className='flex flex-col gap-3'>
                    <a href='#home' className='flex gap-2 items-center'>
                        <img src={logo} alt='logo' height={50} width={50}/>
                        <div className='text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-400 to-pink-300 bg-clip-text text-transparent'>RaviKumar1only</div>
                    </a>
                    <p className='text-gray-200 text-sm'>The Ultimate Guide To Ace SDE Interviews</p>
                </div>
                <ul className='flex flex-col gap-3 text-gray-400 text-xs font-semibold'>
                    <li className='text-gray-200 text-base'>Quick Links</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Home</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Courses</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>DevChallange</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Labs</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Contact</li>
                </ul>
                <ul className='flex flex-col gap-3 text-gray-400 text-xs font-semibold'>
                    <li className='text-gray-200 text-base'>Legal</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Privacy Policy</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Terms of use</li>
                    <li className='cursor-pointer hover:text-gray-300 transition-all duration-100'>Refund & Cancellation Policy</li>
                </ul>
                <ul className='flex flex-col gap-3 text-gray-400 text-sm font-semibold'>
                    <li className='text-gray-200 text-base'>GET IN TOUCH</li>
                    <li className='flex items-center gap-2 cursor-pointer hover:text-gray-300 transition-all duration-100'>
                        <IoMdMail className='mt-1 text-lg'/>
                        <a href='mailto: ravikumar1only@gmail.com'>Support@RaviKumar1only.com</a>
                    </li>
                    <li className='flex gap-4 items-center mt-1'>
                        <a href='https://www.youtube.com/@ravikumar1only' target="_blank">
                            <AiOutlineYoutube className='text-[28px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.github.com/ravikumar1only' target="_blank">
                            <FaGithub className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.linkedin.com/in/ravikumar1only' target="_blank">
                            <FaLinkedin className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.twitter.com/ravikumar1only' target="_blank">
                            <FaTwitterSquare className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.instagram.com/ravikumar1only' target="_blank">
                            <BsInstagram className='text-[21px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                        <a href='https://www.facebook.com/ravikumar1only' target="_blank">
                            <FaFacebook className='text-[22px] cursor-pointer hover:opacity-50 transition-all duration-150'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex justify-center items-center text-gray-100 text-sm'>
                Copyright <FaRegCopyright className='text-sm mr-1 ml-1'/> 2025 Sorting ravikumar1only Technologies Pvt Ltd. All Rights Reserved.
            </div>
        </div>
    </div>
  )
}

export default Home;
import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutFoysal extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about Foysal" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Foysal' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Foysal' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Foysal' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="Foysal's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutFoysal;

export const displayAboutFoysal = () => {
    return <AboutFoysal />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Foysal Ahammed Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>my name is <span className="font-bold">Foysal Ahammed</span> ,</div>
                <div className="font-normal ml-1">I'm a <span className="text-pink-600 font-bold">Frontend Engineer!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">I'm a <span className=" font-medium">Graduate Student</span> currently pursuing Computer Science. I've completed my 6 month SWE intern at <u className=' cursor-pointer '> <a href="https://en.wikipedia.org/wiki/HackerRank" target={"_blank"}>HackerRank</a> </u>, and now I'm looking for full-time frontend engineer roles! ( Hit me up <a className='text-underline' href='mailto:hanif.mia2233@gmail.com'><u>hanif.mia2233@gmail.com</u></a> :) )</li>
                <li className=" mt-3 list-building"> I enjoy building awesome softwares that solve practical problems.</li>
                <li className=" mt-3 list-time"> When I am not coding my next project, I like to spend my time reading books, playing minecraft or watching <a href="https://www.youtube.com" target="_blank" rel="noreferrer"> tom scott's videos.</a></li>
                <li className=" mt-3 list-star"> And I also have interest in Deep Learning & Computer Vision!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                       Bangladesh University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2026</div>
                    <div className=" text-sm md:text-base">Computer Science and Engineering</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; Study Ongoing</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup> 
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2020 - 2022</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 5 </div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked with a wide variety of programming languages & frameworks.
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div> My areas of expertise are <strong className="text-ubt-gedit-orange">front-end development, React.js, Next.js & javascript!</strong></div>
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my most frequently used</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A" alt="Foysal javascript" />
                        <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="Foysal c++" />
                     
                       
                        <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="Foysal HTML" /></a>
                        <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat&logo=sass&logoColor=ffffff" alt="Foysal SASS" className="m-1" />
                        <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="Foysal git" className="m-1" />
                        <img src="https://img.shields.io/badge/-Firebase-FFCA28?style=flat&logo=firebase&logoColor=ffffff" alt="Foysal firebase" className="m-1" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className=" m-1" src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff" alt="Foysal next" />
                        <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="Foysal react" />
                    
                        <img className="m-1" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Foysal tailwind css" />
                        <img src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff" alt="Foysal node.js" className="m-1" />
               
                        <img className="m-1" src="https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white" alt="foysal redux" />
                    </div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="foysal linux" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Portfolio",
            date: "Apr 2023",
            link: "https://github.com/FoysalAhammed/DevPortfolio",
            description: [
                "Personal portfolio website, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "Edu-Nuts",
            date: "Sep 2023",
            link: "https://edu-notes-self.vercel.app",
            description: [
                "Learning and growing your skills is vital for personal and professional advancement.",
            ],
            domains: ["Next.js","javascript", "tailwindcss"]
        },
        {
            name: "Ai Image Prompt",
            date: "Jan 2024",
            link: "https://github.com/FoysalAhammed/Ai-Prompt-Selling-Client-Side",
            description: [
                "A boilerplate code to build a chrome extension with react and webpack",
            ],
            domains: ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "Invoice Generator",
            date: "Dec 2019",
            link: "https://github.com/FoysalAhammed/invoice-generator",
            description: [
                "Invoice Generator",
            ],
            domains:  ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "EShopBd Landing Page",
            date: "Nov 2023",
            link: "https://github.com/FoysalAhammed/BdEshop-Landing-page",
            description: [
                "A E commerce Landing Page Design using Modern Web Design Tolls",
            ],
            domains: ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "Medi Appointment",
            date: "Jun 2024",
            link: "https://github.com/FoysalAhammed/Medical-Doctor-Appointment-MERN",
            description: [
                "A Medical Appointment Platform with appointment features",
            ],
            domains: ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "Solarix Landing Page",
            date: "Mar 2024",
            link: "https://github.com/FoysalAhammed/Solar-Panel",
            description: [
                "Modern real life Solarix landing page makes a solar pannel in real website which feel attractive reality to the user",
            ],
            domains: ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "Cashbook Landing Page",
            date: "Jan 2021",
            link: "https://github.com/FoysalAhammed/Cashbook-Landing-Page",
            description: [
                "Cashbook Business Managment landing page",
            ],
            domains: ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "Educal Education",
            date: "Dec 2020",
            link: "https://educare-landing-page.vercel.app",
            description: [
                "An Education Platform Deisgned Using Modern Web Technology ",
            ],
            domains:  ["React.js","javascript", "tailwindcss"]
        },
        {
            name: "Modifi.IO",
            date: "Nov 2020",
            link: "https://modifio-foysal.vercel.app",
            description: [
                "File Converter web app",
            ],
            domains: ["Next.js","javascript","WebAssembly", "tailwindcss"]
        },
   
     
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
         

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=FoysalAhammed&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Resume_foysal.pdf" title="Foysal Ahammed resume" frameBorder="0"></iframe>
    )
}
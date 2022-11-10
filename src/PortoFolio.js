import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCircleCheck, faRibbon } from "@fortawesome/free-solid-svg-icons";

class PortoFolio extends React.Component {
    constructor() {
        super();
        this.state = {
            circleCheck: {
                color:"#16a34a"
            },
            brands: {
                color: "#FFFFFF"
            },
            certificate: { 
                color: "#fbbf24" 
            },
            positionHash: '#about'
        }
        this.getHashActive = this.getHashActive.bind(this);
    }

    getHashActive(event) {
        const { hash } = event.target;
        this.setState({
            positionHash: `${hash}`
        })
    }
    
    render() {
        return (
            <div className="w-full h-screen flex">
                <div className="w-1/5 h-full bg-orange-700 fixed top-0 left-0 overflow-scroll h-screen flex">
                    <div className="w-full m-auto">
                        <div className="bg-white rounded-full h-48 w-48 m-auto">
                            <img src="/profilepict.png" alt='profile-pictures' className="h-48 w-48" />
                        </div>
                        <div className="text-center mt-10">
                            <a href="#about" onClick={this.getHashActive} className={`uppercase my-4 hover:text-white font-bold cursor-pointer block ${this.state.positionHash === '#about' ? 'text-white' : 'text-gray-400'}`}>about</a>
                            <a href="#experience" onClick={this.getHashActive} className={`uppercase my-4 hover:text-white font-bold cursor-pointer block ${this.state.positionHash === '#experience' ? 'text-white' : 'text-gray-400'}`}>experience</a>
                            <a href="#education" onClick={this.getHashActive} className={`uppercase my-4 hover:text-white font-bold cursor-pointer block ${this.state.positionHash === '#education' ? 'text-white' : 'text-gray-400'}`}>education</a>
                            <a href="#skills" onClick={this.getHashActive} className={`uppercase my-4 hover:text-white font-bold cursor-pointer block ${this.state.positionHash === '#skills' ? 'text-white' : 'text-gray-400'}`}>skills</a>
                            <a href="#interests" onClick={this.getHashActive} className={`uppercase my-4 hover:text-white font-bold cursor-pointer block ${this.state.positionHash === '#interests' ? 'text-white' : 'text-gray-400'}`}>interests</a>
                            <a href="#awards" onClick={this.getHashActive} className={`uppercase my-4 hover:text-white font-bold cursor-pointer block ${this.state.positionHash === '#awards' ? 'text-white' : 'text-gray-400'}`}>awards</a>
                        </div>
                    </div>
                </div>
                <div className="w-4/5 ml-auto">
                    <div id="about" className="flex h-screen border-b border-b-gray-300 p-10">
                        <div className="my-auto w-full">
                            <div className="text-6xl uppercase font-extrabold font-mono">
                                <span>lorem</span>
                                <span className="text-orange-700">ipsum</span>
                            </div>
                            <div className="flex text-md">
                                <p>+620123456789</p>&nbsp;
                                <p className="uppercase text-orange-700 font-semibold">Loremipsum@gmail.com</p>
                            </div>
                            <div className="my-10 text-sm">
                                <p>
                                    I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia, Publicap, and many other projects. My tech stack includes Phyton and Javascript. Phyton for serverside and scripting javascript for the frontend. I use Django framework for the server side development adn React for the frontend development. I have also worked with GraphQL. I am a Github Campus Expert at my Intitute where I am responsible for building on campus community. I am the lead organiser of Hack In The North Hackathon and the cofounder of Pragma Conference held at IIIT Allahabd.
                                </p>
                            </div>
                            <div className="flex">
                                <div className="bg-black rounded-full w-12 h-12 mr-4 flex">
                                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 z-10 m-auto block" style={this.state.brands} />
                                </div>

                                <div className="bg-black rounded-full w-12 h-12 mr-4 flex">
                                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5 z-10 m-auto block" style={this.state.brands} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="experience" className="mt-20 flex h-screen border-b border-b-gray-300 p-10">
                        <div className="my-auto w-full">
                            <div className="text-3xl uppercase font-extrabold font-mono">
                                <span>Experience</span>
                            </div>
                            <div className="mt-10 text-sm">
                                <div className="flex">
                                    <div className="text-xl uppercase font-extrabold">
                                        github campus expert
                                    </div>
                                    <div className="ml-auto text-red-500 text-sm">August 2022 - present</div>
                                </div>
                                <div className="text-lg uppercase">
                                    github
                                </div>
                                <p className="mt-5">Responsible for building the on campus community with the support of Guthub</p>
                            </div>
                            <div className="mt-10 text-sm">
                                <div className="flex">
                                    <div className="text-xl uppercase font-extrabold">
                                        opensource developer intern
                                    </div>
                                    <div className="ml-auto text-red-500 text-sm">August 2021 - August 2022</div>
                                </div>
                                <div className="text-lg uppercase">
                                    fossasia
                                </div>
                                <p className="mt-5">Contributing to Fossasia's open event server and frontend as an intern. Resolved numerous bugs and added new features to eventyay platform</p>
                            </div>
                        </div>
                    </div>
                    <div id="education" className="mt-20 flex h-screen border-b border-b-gray-300 p-10">
                        <div className="my-auto w-full">
                            <div className="flex">
                                <div className="text-3xl uppercase font-extrabold font-mono">
                                    <span>Education</span>
                                </div>
                                <div className="ml-auto text-red-500 text-sm">Sep 2011 - Sept 2016</div>
                            </div>
                            <div className="mt-10 text-sm">
                                <div className="text-xl uppercase font-extrabold">
                                    loremipsum institute of information technology
                                </div>
                                <div className="text-lg uppercase">
                                    bachelor of technology
                                </div>
                                <p className="mt-5">12.04</p>
                            </div>
                        </div>
                    </div>
                    <div id="skills" className="mt-20 flex h-screen border-b border-b-gray-300 p-10">
                        <div className="my-auto w-full">
                            <div className="text-3xl uppercase font-extrabold font-mono">
                                <span>Skills</span>
                            </div>
                            <div className="mt-10 text-sm">
                                <div className="text-lg uppercase">
                                    programming language & tools
                                </div>
                                <div className="columns-2">
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">HTML5</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">CSS3</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">Javascript</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">React</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">Nodejs</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">Phyton</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">Django</span>
                                    </p>
                                    <p className="my-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="w-4 h-4 z-10" style={this.state.circleCheck} />
                                        <span className="ml-2">EMber</span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 text-sm">
                                <div className="text-xl uppercase font-extrabold">
                                    opensource developer intern
                                </div>
                                <div className="text-lg uppercase">
                                    fossasia
                                </div>
                                <p className="mt-5">Contributing to Fossasia's open event server and frontend as an intern. Resolved numerous bugs and added new features to eventyay platform</p>
                            </div>
                        </div>
                    </div>
                    <div id="interests" className="mt-20 flex h-screen border-b border-b-gray-300 p-10">
                        <div className="my-auto w-full">
                            <div className="text-3xl uppercase font-extrabold font-mono">
                                <span>Interests</span>
                            </div>
                            <div className="mt-10">
                                <p className="text-sm">A part from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado. I enjoy mountain biking, free climbing, and kayaking.</p>
                                <p className="mt-5 text-sm">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spen a large amount of free time exploring the latest technology advancements in the front-end web development world.</p>
                            </div>
                        </div>
                    </div>
                    <div id="awards" className="mt-20 flex h-screen border-b border-b-gray-300 p-10">
                        <div className="my-auto w-full">
                            <div className="text-3xl uppercase font-extrabold font-mono">
                                <span>Awards & Certifications</span>
                            </div>
                            <div className="mt-10 text-sm">
                                <ul>
                                    <li className="py-1">
                                        <FontAwesomeIcon icon={faRibbon} className="w-4 h-4 z-10" style={this.state.certificate} />
                                        <span className="ml-2">Hack 36 3rd prize winnner</span>
                                    </li>
                                    <li className="py-1">
                                        <FontAwesomeIcon icon={faRibbon} className="w-4 h-4 z-10" style={this.state.certificate} />
                                        <span className="ml-2">Mentor OpenCode'19</span>
                                        </li>
                                    <li className="py-1">
                                        <FontAwesomeIcon icon={faRibbon} className="w-4 h-4 z-10" style={this.state.certificate} />
                                        <span className="ml-2">Started North Indonesia First Student Design and Developer Conference</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortoFolio;
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () =>{
    return(
        <>
        <section id="projects"
                 className="min-h-screen flex items-center justify-center py-20" >
                    <RevealOnScroll>
                    <div className="max-w-5xl mx-auto px-4">
                       <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
                       >Feature Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 className="text-xl font-bold mb-2">AI Short Video Generator</h3>
                                <p className=" text-gray-400 mb-4 "> - The AI Short Video Generator is a scalable, Google Cloud–deployed platform that automates short video creation with AI-driven scripts, voiceovers, caption styles, and secure Firebase authentication, offering a seamless user experience with ShadCN UI and PayPal integration.</p>
                                <div className=" flex flex-wrap gap-4 mb-4 py-1 px-3">
                                    {["NextJs/React", "TailwindCSS", "ShadCN", "ConvexDB"].map((tech, key)=>(
                                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,1302246,0.2)] transition">
                        {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://github.com/SujalP17/AI-Short-Video-Generator" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                                </div>
                            </div>
                             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 className="text-xl font-bold mb-2">Universal Workflow Management System</h3>
                                <p className=" text-gray-400 mb-4 "> - The Universal Workflow Management System for Hostels is a complete online solution that streamlines student admissions, resource and finance management, and features a magic camera-based attendance system for efficient and secure operations.</p>
                                <div className="flex flex-wrap gap-4 mb-4 py-1 px-3">
                                    {["ReactJs", "NodeJs", "TailwindCSS", "mondoDB", "Java"].map((tech, key)=>(
                                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,1302246,0.2)] transition">
                        {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://github.com/SujalP17/Universal-Workflow-Management" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 className="text-xl font-bold mb-2">Mega Blog App</h3>
                                <p className=" text-gray-400 mb-4 "> - Built a dynamic Mega Blog App with React.js, styled using Tailwind CSS, and powered by AppWrite for seamless authentication, database, and storage. Integrated TinyMCE for rich text editing and React Router for smooth, route-based navigation and user management.</p>
                                <div className="flex flex-wrap gap-4 mb-4 py-1 px-3">
                                    {["ReactJs", "TailwindCSS", "shadCN", "Redux","AppWrite"].map((tech, key)=>(
                                             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm  hover:bg-blue-500/20 hover: shadow-[0_2px_8px_rgba(59,1302246,0.2)] transition">
                        {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href="https://github.com/SujalP17/Mega-Blog-App" 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </RevealOnScroll>
                 </section>
        </>
    );
}
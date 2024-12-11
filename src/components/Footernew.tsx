'use client'
import Link from 'next/link'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export default function Footernew() {
  return (
    <footer className="bg-black/[0.96] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Contact</h3>
          <Link href="tel:+918750350158" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
            <Phone size={18} />
            <span>+91 8750350158</span>
          </Link>
          <Link href="mailto:pachauriharsh2005@gmail.com" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
            <Mail size={18} />
            <span>pachauriharsh2005@gmail.com</span>
          </Link>
          <Link href="mailto:harshpachauri205@gmail.com" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
            <Mail size={18} />
            <span>harshpachauri205@gmail.com</span>
          </Link>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Social</h3>
          <Link href="https://github.com/Harsh-Pachauri" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
            <Github size={18} />
            <span>GitHub</span>
          </Link>
          <Link href="https://linkedin.com/in/harsh-pachauri-383715290" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-sky-400 transition-colors">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </Link>
        </div>
        
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <Link href="#home" className="hover:text-sky-400 transition-colors">Home</Link>
          <Link href="#skills" className="hover:text-sky-400 transition-colors">Skills</Link>
          <Link href="#experiences" className="hover:text-sky-400 transition-colors">Experiences</Link>
          <Link href="#projects" className="hover:text-sky-400 transition-colors">Projects</Link>
        </div>
        
        <div className="flex flex-col space-y-4">
  <h3 className="text-xl font-semibold">Buy Me a Coffee</h3>
  <p className="text-sm">Support my work and help me keep creating amazing content.</p>
  <a 
    href="https://buymeacoffee.com/harshpachauri" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md transition-colors text-center"
  >
    Buy Me a Coffee
  </a>
</div>

      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Harsh Pachauri. All rights reserved.</p>
      </div>
    </footer>
  )
}


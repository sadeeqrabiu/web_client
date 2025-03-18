import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="w-full px-4 sm:px-8 py-0 bg-white">
      {/* Hero Section with About Roll Protocol */}
      <div className="relative w-full h-auto mb-0">
        <Image
          src="/images/about-bg.png" // Update with your final path
          alt="About hero background"
          width={1200}
          height={600}
          className="w-full h-auto"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-start justify-start">
          {/* Adjust these paddings to perfectly fit the black shape in your PNG */}
          <div className="pt-16 pl-10 text-white">
            <h1 className="text-5xl bg-black font-bold mb-2 leading-tight">About</h1>
            <h2 className="text-5xl bg-black font-bold leading-tight">Roll Protocol</h2>
          </div>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="max-w-4x mt-0 mb-0 py-4">
        <p className="text-black text-lg">
          See how we're challenging the status quo of the internet to create a truly <br/> 
          decentralized future for the next generation.
        </p>
      </div>
      
      {/* Creating new viewpoints section */}
      <div className="relative w-full">
      {/* 1. Background Image (Glitch PNG) */}
      <div className="relative w-full h-auto">
        <Image
          src="/images/about-team.png" // Update with your final path
          alt="Team glitch background"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

      {/* 2. Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-end px-8 py-12 md:px-16 md:py-16">
        <div className="max-w-xl text-white">
          <div className="text-red-500 mb-2">Forging New Perspectives</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Creating new viewpoints.
          </h2>
          <p className="mb-4">
            Web3 is reshaping the internet—shifting power back to users while
            providing security, privacy, and autonomy. At Roll Protocol, we are
            building the infrastructure for the next generation of internet.
          </p>
          <p>
            Our future. By leveraging blockchain and AI, we create new digital
            spaces, financial marketplaces, and data ownership. Our
            forward-thinking team brings expertise to everything. As we push the
            boundaries of what's possible, we build networks and connections
            between platforms. With deep technical knowledge and vision, we're
            reimagining what it means to have a decentralized future. We are
            creating the next generation of Web3 solutions designed to thrive in
            an evolving digital landscape.
          </p>
        </div>
      </div>
    </div>
      
      {/* Founder Quote Section */}
      <div className="px-8 py-16">
        <div className="flex flex-col md:flex-row">
          {/* Left quote */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="text-red-500 mb-2">Founder Story</div>
            <h2 className="text-3xl font-bold text-black mb-6">
              "We're not just changing the game we're building a better playing field."
            </h2>
          </div>
          
          {/* Right text */}
          <div className="w-full md:w-1/2">
            <p className="text-sm text-black">
              At Roll Protocol, we are building a company that aims to 
              address these problems (and many others) by laying the
              foundation for a decentralized web stack outside for mass
              adoption. We are obsessively focused on making everything 
              our north star.
            </p>
          </div>
        </div>
      </div>
      
      {/* Team Section */}
      <div className="px-8 py-16 text-black">
        <h2 className="text-3xl font-bold mb-8">Team</h2>
        <p className="mb-10">
          With our experienced team, while our advisors are industry leaders who provide strategic guidance and support.
        </p>
        
        {/* Team members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Team member 1 */}
          <div className="mb-8">
            <Image
              src="/images/team-ibrahim.png"
              alt="Ibrahim BK"
              width={300}
              height={300}
              className="w-full h-auto mb-4 rounded-md"
            />
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Ibrahim BK</h3>
              <a href="#" className="text-black">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
            <p className="text-sm">Founder and Co-Creator</p>
          </div>
          
          {/* Team member 2 */}
          <div className="mb-8">
            <Image
              src="/images/team-farid.png"
              alt="Farid Jibril Farouq"
              width={300}
              height={300}
              className="w-full h-auto mb-4 rounded-md"
            />
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Farid Jibril Farouq</h3>
              <a href="#" className="text-black">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
            <p className="text-sm">Co-Founder and COO</p>
          </div>
          
          {/* Team member 3 */}
          <div className="mb-8">
            <Image
              src="/images/team-sadiq.png"
              alt="Sadiq Rabiu"
              width={300}
              height={300}
              className="w-full h-auto mb-4 rounded-md"
            />
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Sadiq Rabiu</h3>
              <a href="#" className="text-black">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
            <p className="text-sm">Co-Founder and CTO</p>
          </div>
          
          {/* Team member 4 */}
          <div className="mb-8">
            <Image
              src="/images/team-musa.png"
              alt="Sadiq Rabiu"
              width={200}
              height={200}
              className="w-full h-auto mb-4 rounded-md"
            />
            <div className="flex justify-between items-center">
              <h3 className="font-bold">Musa Dabra</h3>
              <a href="#" className="text-black">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
            <p className="text-sm">VP of Engineering</p>
          </div>
        </div>
      </div>
      
      {/* Build Without Boundaries Section */}
      <div className="w-full relative mb-16">
        <div className="bg-black text-white p-10 rounded-lg">
          <div className="text-red-500 mb-2">Fuel Your Curiosity</div>
          <h2 className="text-5xl font-bold mb-8">Build Without Boundaries</h2>
          
          <p className="max-w-xl mb-8">
            We bring together the brightest minds to develop the infrastructure 
            and tools needed to power a new internet paradigm—one that is 
            secure, scalable, and truly decentralized for the next generation.
          </p>
          
          <Link 
            href="/careers"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          >
            View Careers
          </Link>
        </div>
        
        {/* Right side image - positioned absolutely */}
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image
            src="/images/build-blocks.png"
            alt="Building blocks"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-blue-100 py-12 px-8">
        <div className="flex flex-wrap justify-between mb-16">
          {/* Logo */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image
              src="/images/logo.svg"
              alt="Roll Protocol Logo"
              width={100}
              height={100}
              className="mb-6"
            />
            <p>Follow us on social media<br />to stay up to date</p>
            
            <div className="flex space-x-4 mt-4">
              <a href="#"><Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} /></a>
              <a href="#"><Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} /></a>
              <a href="#"><Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} /></a>
              <a href="#"><Image src="/images/telegram.svg" alt="Telegram" width={24} height={24} /></a>
              <a href="#"><Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} /></a>
            </div>
          </div>
          
          {/* Footer Links - First column */}
          <div className="w-1/2 md:w-1/6 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">About</h3>
            <ul>
              <li className="mb-2"><a href="#">Partners</a></li>
              <li className="mb-2"><a href="#">News</a></li>
              <li className="mb-2"><a href="#">Blog</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
            </ul>
          </div>
          
          {/* Footer Links - Second column */}
          <div className="w-1/2 md:w-1/6 mb-8 md:mb-0">
            <h3 className="font-bold mb-4">Products</h3>
            <ul>
              <li className="mb-2"><a href="#">Platform & Protocol</a></li>
              <li className="mb-2"><a href="#">Research & Development</a></li>
              <li className="mb-2"><a href="#">Bug Bounty</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="w-full md:w-1/3">
            <form className="flex max-w-md">
              <input 
                type="email" 
                placeholder="Signup for free updates"
                className="flex-grow border rounded-l-full px-4 py-2 focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between text-sm border-t border-gray-300 pt-6">
          <div className="mb-4 md:mb-0">
            <a href="#" className="mr-6">Privacy Policy</a>
            <a href="#">Terms of Conditions</a>
          </div>
          <div>
            © 2023 Roll Protocol. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 
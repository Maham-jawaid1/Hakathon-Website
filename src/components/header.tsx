import Link from "next/link"
export default function Header (){
    return(
        <div className="bg-white w-1500 h-70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="logo">
                    <img src="Group 11.png" alt="" />
                  </div>
                </div>
                <div className="hidden md:block">
                    <div className="ml-4 flex items-center space-x-9">
                    <Link href="/" className="text-black">Home</Link>
                    <Link href="/blog" className="text-black">Projects</Link>
                    <Link href="/about" className="text-black">Certificates</Link>
                    <Link href="/contact" className="text-black">Contact Us</Link>
        
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}
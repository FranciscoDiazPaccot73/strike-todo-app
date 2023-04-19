import Image from "next/image";

const Footer = () => (
  <footer className="pt-5 absolute bottom-0 flex items-center justify-center w-full border-t border-gray-40">
    <div className='flex items-center flex-1 justify-center pt-4 pb-10 relative text-white'>
      <div className="text-sm flex flex-col items-center justify-center" >
        <a className="flex items-center" href="https://strike.sh/en" target="_blank" rel="noopener noreferrer">
          <span className="mr-2">Frontend Technical challenge for</span>
          <Image
            src="/strike-logo.webp"
            alt="Strike webpage"
            width={84}
            height={32}
          />
        </a>
      </div>
      <div className='absolute bottom-3 text-[10px] right-8 flex'>
        Created by <a className="font-bold ml-1" href='https://franciscodiazpaccot.dev' target="_blank" rel="noreferrer noopener">
        Francisco Diaz Paccot</a>
      </div>
    </div>
  </footer>
)

export default Footer;

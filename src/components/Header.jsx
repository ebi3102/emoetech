'use client';

import Image from "next/image";
// import Main_Menu from "./headers/main-menu";

const Header = () => {
    return ( 
        <header className="emo-header flex text-white bg-[#2b549e] items-center justify-between p-4">
            <div>
            <Image
                src="/images/logo.png"
                width={100}
                height={100}
                alt="Iphonery online shop"
                />
            </div>
            <div>
                
            </div>
        </header>
     );
}
 
export default Header;
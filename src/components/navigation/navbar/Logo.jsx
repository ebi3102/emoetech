import Image from "next/image";

const Logo = () => {
    return (
    <div>
        <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="emotech logo"
        />
    </div>
    );
  };
  
  export default Logo;
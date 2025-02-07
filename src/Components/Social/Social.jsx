import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Social = () => {
  return (
     <div className='mt-8 flex items-center  gap-8 text-2xl'>
      <a
        href="https://www.linkedin.com/in/jubayer-ahmed-86224521a/"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Linkedin'
      >
        <FaLinkedin></FaLinkedin>
      </a>
      <a
        href="https://x.com/JubayerAhm73103"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'
      >
     <FaTwitter></FaTwitter>
      </a>
      <a
        href="https://github.com/jubayer718"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Github'
      >
      <FaGithub></FaGithub>
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100085772691496"
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Facebook'
      >
      <FaFacebook></FaFacebook>
      </a>
    
    </div>
  );
};

export default Social;
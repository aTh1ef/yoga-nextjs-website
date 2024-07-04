import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";
import Link from 'next/link';

const ProjectsBtn = () => {
    return (
        <Link href="https://instructions-page.vercel.app/" target="_blank" rel="noopener noreferrer">
            <div className='mx-auto xl:mx-0'>
                <div className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat cursor-pointer'>
                    <Image
                        src='/8.png'
                        width={141}
                        height={148}
                        alt='Project Button'
                        className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
                    />
                    <span className='absolute'>
                        <HiArrowRight className='text-4xl transition-all duration-300' />
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default ProjectsBtn;
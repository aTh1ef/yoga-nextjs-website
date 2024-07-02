// Import necessary dependencies
import Image from "next/image"; // Import Image from next/image
import Link from "next/link"; // Import Link from next/link

// Import necessary icons
import { HiArrowRight } from "react-icons/hi2"; // Import HiArrowRight icon

const ProjectsBtn = () => {
    return (
        <div className='mx-auto xl:mx-0'>
            {/* Update the Link component's href to link to the desired URL */}
            <Link href='http://localhost:8501/' target="_blank" rel="noopener noreferrer" className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
                <Image
                    src='/8.png'
                    width={141}
                    height={148}
                    alt='Project Button'
                    className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
                />
                <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
            </Link>
        </div>
    );
};

export default ProjectsBtn;

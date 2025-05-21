import Link from 'next/link';
export default function Sectioncard({slug,title,description}){
    return(
        <Link href={`/${slug}`} className='block'>
            <div className='border border-grey-200 rounded-2xl p-6hover:shadow-lg transition-shadow h-full flex flex-col  p-6'>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h2>
                <p className='text-gray-600 flex-grow'>{description}</p>
                <span className='mt-4 text-sm text-gray-500 flex justify-center'>
                    <button className="relative border p-2 rounded-2xl w-40 overflow-hidden group hover:cursor-pointer">
                        {/* Background element */}
                        <span className="absolute left-0 top-0 w-0 h-full bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                        {/* Button text */}
                        <span className="relative transition-colors duration-300 group-hover:text-white">
                            Read
                        </span>
                    </button>
                </span>
            </div>
        
        </Link>
    )
}
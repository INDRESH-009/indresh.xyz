import Link from 'next/link';
export default function Sectioncard({slug,title,description}){
    return(
        <Link href={`/${slug}`} className='block'>
            <div className='border border-grey-200 rounded-2xl p-6hover:shadow-lg transition-shadow h-full flex flex-col'>
                <h2 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h2>
                <p className='text-gray-600 flex-grow'>{description}</p>
                <span className='mt-4 text-sm text-gray-500'>→</span>
            </div>
        
        </Link>
    )
}
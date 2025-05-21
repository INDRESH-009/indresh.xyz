import Link from 'next/link';
export default function BlogPreview({section,slug,date,title,excerpt}){
    const day = new Date(date).getDate().toString().padStart(2,'0');
    const month = new Date(date).toLocaleString('default',{month:'short'});
    return(
        <Link href={`/${section}/${slug}`} className="flex items-start space-x-4 py-6">
            <div className="text-4xl font-serif text-gray-900 w-16 text-center">
                <div>{day}</div>
                <div className="text-sm text-gray-500 uppercase">{month}</div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
                <p className="text-gray-600 mb-1">{excerpt}</p>
            </div>
        </Link>
    )

}
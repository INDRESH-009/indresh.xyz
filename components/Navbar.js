import Link from 'next/link';

const sections = [
    {slug:"story",label:"Story"},
    {slug:"vision",label:"Vision"},
    {slug:"systems",label:"Systems"},
    {slug:"experiments",label:"Experiments"},
    {slug:"echoes",label:"Echoes"},
    {slug:"research",label:"Reseach"},
    {slug:"monologue",label:"Monologue"}
]

export default function Navbar(){
    return(
        <nav className='bg-white shadow-md'>
            <div className='max-w-4xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-4'>
                {sections.map(({slug,label}) =>(
                    <Link
                        key={slug}
                        href={`/${slug}`}
                        className='whitespace-nowrap text-grey-700 hover:text-blue-600'>
                            {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
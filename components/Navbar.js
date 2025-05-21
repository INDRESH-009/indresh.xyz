import Link from 'next/link';

const sections = [
    {slug:"story",label:"My Story"},
    {slug:"Vision",label:"Vision Board"},
    {slug:"Systems",label:"Systems"},
    {slug:"experiments",label:"Field Notes from the Edge"},
    {slug:"echoes",label:"Echoes and guidelights"},
    {slug:"research",label:"Reseach Shelf"},
    {slug:"monologue",label:"The Inner Monologue"}
]

export default function Navbar(){
    return(
        <nav>
            <div>
                {sections.map(({slug,label}) =>(
                    <Link
                        key={slug}
                        href={`/${slug}`}
                        className="text-lg">
                            {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
import Link from 'next/link';

export default function strip() {
    return (
        <>
            <div className="border-b-4 border-zinc-800 py-3 text-center">
                <h1 className="text-xl"><Link href="/projects"><a className="hover:text-yellow-300 transition-all duration-200 underline">Here</a></Link> are all my projects!</h1>
            </div>
        </>
    )
}
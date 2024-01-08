import header from './header.jpg'


export default function Qoute(){
    return(
        <figure className=" md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none mx-auto" src= {header} alt=""width='384' height= '512' />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className='text-lg  text-slate-400 font-medium'>
                    One of the best ways to make yourself happy in the present is to recall happy times from the past.
                    Photos are a great memory-prompt, and because we tend to take photos of happy occasions,
                    they weight our memories to the good.
                    </p>
                </blockquote>
                <figcaption className='font-medium' >
                    <div className='text-sky-500 dark:text-sky-400'>
                        Gretchen Rubin
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}
import NavLink from "./NavLink"


function Navbar (){

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-600/60 backdrop-blur border-b
        border-neutral-900/50 dark:border-neutral-700/50">
            <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold">
                    <p>
                        CIAO MONDO!
                    </p>
                </div>
                <div className="">
                        <ul className="gap-6 hidden md:flex items-center text-sm font-medium">
                            <li><NavLink></NavLink></li>
                            <li><NavLink></NavLink></li>
                            <li><NavLink></NavLink></li>
                            <li><NavLink></NavLink></li>
                        </ul>
                </div>
                <button className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-neutral-500/40 text-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200/">

                </button>
            </div>
        </nav>
    )

}

export default Navbar
import { Icon } from '@iconify/react';

function NavBar() {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-2 rounded-lg">
            <h3 className="font-bold text-2xl" style={{ fontFamily: '"Times New Roman", Times, serif' }}>Vikrant</h3>

            {/* <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>

                <select id="Tab" className="w-full rounded-md border-gray-200">
                <option>Settings</option>
                <option>Messages</option>
                <option>Archive</option>
                <option select>Notifications</option>
                </select>
            </div> */}

            <div className="hidden sm:block">
                <nav className="flex gap-6 text-normal" aria-label="Tabs">
                <a
                    href="/"
                    className="shrink-0 rounded-lg p-2 font-medium text-gray-500 hover:bg-gray-50 hover:underline hover:decoration-solid hover:text-black"
                >
                    Home
                </a>

                <a
                    href="/about"
                    className="shrink-0 rounded-lg p-2 font-medium text-gray-500 hover:bg-gray-50 hover:underline hover:decoration-solid hover:text-black"
                >
                    About
                </a>

                <a
                    href="/projects"
                    className="shrink-0 rounded-lg p-2 font-medium text-gray-500 hover:bg-gray-50 hover:underline hover:decoration-solid hover:text-black"
                >
                    Projects
                </a>

                <a
                    href="/resume"
                    className="shrink-0 p-2 font-medium text-black underline decoration-solid"
                    aria-current="page"
                >
                    Resume
                </a>
                </nav>
            </div>

            <div className="grid grid-cols-3 gap-5 items-center">
                <Icon icon="fa:twitter-square" width="24" height="24" />
                <Icon icon="fa:github-square" width="24" height="24" />
                <Icon icon="fa:linkedin-square" width="24" height="24" />
            </div>
        </div>
    )
}

export default NavBar
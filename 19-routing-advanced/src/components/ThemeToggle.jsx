import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'


const ThemeToggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }
        else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme]
    )
    return (
        <button
            onClick={() => {
              setTheme((theme === 'dark') ? 'light' : 'dark')
            }
            }
            className='cursor-pointer active:scale-90'
        >{(theme === 'dark') ? (<Sun />) : (<Moon />)}
        </button>
    )
}

export default ThemeToggle

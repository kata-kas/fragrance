import {Caudex} from 'next/font/google'
import {Cormorant_Garamond} from 'next/font/google'
import './globals.css'

const caudex = Caudex({
    weight: ["400"],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-caudex',
})
const cormorant_garamond = Cormorant_Garamond({
    weight: ["400"],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cormorant_garamond',
})

export default function Layout({children}:{children: any}) {
    return (
        <html lang="en">
        <body className={caudex.variable + ' ' + cormorant_garamond.variable}>
        {children}
        </body>
        </html>
    )
}

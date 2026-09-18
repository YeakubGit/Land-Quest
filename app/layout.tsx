import './globals.css';import Header from '@/components/header';import Footer from '@/components/footer';import type {Metadata} from 'next'
export const metadata:Metadata={title:{default:'Land Quest Home | New York Real Estate',template:'%s | Land Quest Home'},description:'Homes, apartments, condos, townhouses, multi-family and investment properties across New York.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/></>}

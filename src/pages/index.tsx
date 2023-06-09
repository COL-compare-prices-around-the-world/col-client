import { Inter } from '@next/font/google'
import PageLayout from '@/layouts/PageLayout'
import Header from '@/shared/components/Header'
import SearchContainer from '@/widgets/SearchContainer'
// import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

// const myFont = localFont({ src: './my-font.woff2' })

export default function Home() {
    return (
        <PageLayout>
            <Header homePageView />
            <SearchContainer />
        </PageLayout>
    )
}

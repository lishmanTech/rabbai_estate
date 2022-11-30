import Head from 'next/head';
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar';
import Footer from './footer';
import Banner from './Banner';
const Layout = ( {children} ) =>(
    <>
       <Head>
        <title>RabbaiHousing</title>
       </Head>
       <Box maxWidth="1280px" m="auto">
        <header>
            <Navbar />
            <Banner />
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
       </Box>
    </>
);

export default Layout;


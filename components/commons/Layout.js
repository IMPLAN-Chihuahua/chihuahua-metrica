import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <main>
                {children}
                </main>
            <Footer />
        </>
    );
}

export default Layout;
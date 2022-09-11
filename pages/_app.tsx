import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../context/ProtectedRoute';
import { ChakraProvider } from '@chakra-ui/react';

const noAuthRequired = ['/', '/login', '/signup', '/landing', '/categories', '/categories/publications'];

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <AuthContextProvider>
            <ChakraProvider>
                {noAuthRequired.includes(router.pathname) ? (
                    <Component {...pageProps} />
                ) : (
                    <ProtectedRoute>
                        <Component {...pageProps} />
                    </ProtectedRoute>
                )}
            </ChakraProvider>
        </AuthContextProvider>
    );
}

export default MyApp;

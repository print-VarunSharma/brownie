import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthContextProvider } from '../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '../context/ProtectedRoute';
import { ChakraProvider } from '@chakra-ui/react';

const noAuthRequired = ['/', '/login', '/signup', '/sanity-check', '/landing'];

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

            {/* <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider> */}
        </AuthContextProvider>
    );
}

export default MyApp;

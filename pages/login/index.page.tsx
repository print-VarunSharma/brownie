import type { NextPage } from 'next';
import Navbar from '../../components/Navbar/Navbar';
import AuthForm from '../../components/Auth/AuthForm';

const LoginPage: NextPage = () => {
    return (
        <>
            <Navbar />
            <h1>Login</h1>
            <AuthForm />
        </>
    );
};

export default LoginPage;

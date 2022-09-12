import type { NextPage } from 'next';
import Navbar from '../../components/Navbar/Navbar';
import LoginForm from '../../components/Auth/LoginForm';

const LoginPage: NextPage = () => {
    return (
        <>
            <Navbar />
            <LoginForm />
        </>
    );
};

export default LoginPage;

import type { NextPage } from 'next';
import Navbar from '../../components/Navbar/Navbar';
import SignupForm from '../../components/Auth/SignUpForm';

const SignUpPage: NextPage = () => {
    return (
        <>
            <Navbar />
            <SignupForm />
        </>
    );
};

export default SignUpPage;

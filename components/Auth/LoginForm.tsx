import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react';
// import * as React from 'react';
import React, { useState } from 'react';
import { Logo } from './Logo';
import { OAuthButtonGroup } from './OAuthButtonGroup';
// import { PasswordField } from './PasswordField';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter();
    const { user, login } = useAuth();
    console.log(user);

    const handleSignup = async (e: any) => {
        e.preventDefault();

        try {
            await login(emailInput, passwordInput);
            console.log(emailInput, passwordInput);
            router.push('/dashboard');
        } catch (err) {
            console.log(err);
        }
    };
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleEmailInputChange = (e: any) => setEmailInput(e.target.value);
    const handlePasswordInputChange = (e: any) => setPasswordInput(e.target.value);

    return (
        <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo />
                    <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                        <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>Log in to your account to start reading premium content</Heading>
                        <HStack spacing="1" justify="center">
                            <Text color="muted">Don't have an account?</Text>
                            <Button variant="link" colorScheme="blue">
                                Sign up
                            </Button>
                        </HStack>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: '0', sm: '8' }}
                    px={{ base: '4', sm: '10' }}
                    bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                    boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
                    borderRadius={{ base: 'none', sm: 'xl' }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <form onSubmit={handleSignup}>
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" value={emailInput} onChange={handleEmailInputChange} />
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input id="password" type="password" value={passwordInput} onChange={handlePasswordInputChange} />
                                </FormControl>
                            </form>
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox defaultChecked>Remember me</Checkbox>
                            <Button variant="link" colorScheme="blue" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button variant="primary" type="submit" onClick={handleSignup}>
                                Login
                            </Button>
                            <HStack>
                                <Divider />
                                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack>
                            <OAuthButtonGroup />
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};
export default LoginForm;

import { Box, Center, useColorModeValue, Text, Stack, Image, Flex, useToast, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export const publicationCardWidth = 300;
const blockedContentMessage = 'You must be logged in to view this content';

export default function PublicationCard({ publicationName, imageSrc, description, routeIdentifier, isDisabled }) {
    const router = useRouter();
    const toast = useToast();

    const handleClick = () => {
        if (!isDisabled) {
            router.push(`/categories/publications/${routeIdentifier}`);
        } else {
            toast({
                title: blockedContentMessage,
                status: 'info',
                duration: 3000,
                isClosable: true
            });
        }
    };

    return (
        <Center py={12}>
            <Tooltip label={blockedContentMessage} isDisabled={!isDisabled}>
                <Flex
                    as={motion.div}
                    whileHover={!isDisabled ? { scale: 1.1 } : { scale: 1 }}
                    whileTap={!isDisabled ? { scale: 0.9 } : { scale: 1 }}
                    transition="0.1s linear"
                    opacity={isDisabled ? 0.5 : 1}
                    role={'group'}
                    p={6}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                    maxW={publicationCardWidth + 'px'}
                    h={'20em'}
                    direction={'column'}
                    alignItems={'center'}
                    cursor={'pointer'}
                    onClick={handleClick}
                >
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'100vm'}
                        maxW={'200px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${imageSrc})`,
                            filter: 'blur(15px)',
                            zIndex: -1
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)'
                            }
                        }}
                    >
                        <Image
                            rounded={'lg'}
                            height={'65vm'}
                            objectFit={'cover'}
                            src={imageSrc}
                            alt={'publicationName logo'}
                            boxShadow="md"
                            backgroundColor={'white'}
                        />
                    </Box>
                    <Text pt={10} color={useColorModeValue('gray.500', 'gray.300')} fontSize={'m'} textTransform={'uppercase'}>
                        {publicationName}
                    </Text>
                    <Stack pt={2} align={'center'} noOfLines={2} textAlign={'center'}>
                        <Text as="h3">{description}</Text>
                    </Stack>
                </Flex>
            </Tooltip>
        </Center>
    );
}

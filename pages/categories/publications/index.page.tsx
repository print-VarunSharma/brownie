import { useColorModeValue, Box } from '@chakra-ui/react';
import NavBar from '../../../components/Navbar/Navbar';
import BrowseCreators from './publications-components/BrowsePublications';

const PublicationsPage = () => {
    // const { isLogged } = useAuth();

    return (
        <Box bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
            <NavBar />
            <BrowseCreators isLogged={false} />
        </Box>
    );
};

export default PublicationsPage;

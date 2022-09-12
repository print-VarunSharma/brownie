import { SimpleGrid, Box } from '@chakra-ui/react';
import { PUBLICATION_INFO_LIST, SUPPORTED_PUBLICATIONS } from '../../../../utils/constants/publicationConstants';
import PublicationCard, { publicationCardWidth } from '../../../../components/Cards/PublicationCard/PublicationCard';

// import BasicTitleHeader from '../../../../components/Headers/BasicTitleHeader';

const minGridWidth = publicationCardWidth + 20;

interface BrowsePublicationsProps {
    isLogged: boolean;
}

const BrowsePublications = ({ isLogged }: BrowsePublicationsProps) => {
    return (
        <>
            {/* <Box m={'1em'}>
                <BasicTitleHeader title="Browse Publications" />
            </Box> */}
            <Box pb={'130px'}>
                <SimpleGrid minChildWidth={minGridWidth + 'px'}>
                    {SUPPORTED_PUBLICATIONS.map((routeIdentifer: string) => (
                        <PublicationCard
                            publicationName={PUBLICATION_INFO_LIST[routeIdentifer].publicationName}
                            imageSrc={PUBLICATION_INFO_LIST[routeIdentifer].imageSrc}
                            description={PUBLICATION_INFO_LIST[routeIdentifer].description}
                            routeIdentifier={routeIdentifer}
                            key={routeIdentifer}
                            isDisabled={!isLogged && !!PUBLICATION_INFO_LIST[routeIdentifer].authRequired}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </>
    );
};

export default BrowsePublications;

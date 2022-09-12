export const PARTNER_PUBLICATIONS: string[] = [];

export const SUPPORTED_PUBLICATIONS: string[] = [
    'axios',
    'mckinsey-and-company',
    'new-york-post',
    'new-york-times',
    'new-yorker',
    'techcrunch',
    'the-atlantic',
    'the-economist'
];

export const PUBLICATION_INFO_LIST = {
    'new-york-times': {
        publicationName: 'The New York Times',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/nyt_logo.png',
        description: "All the News That's Fit to Print",
        subscriptionLink: 'https://www.nytimes.com/',
        useCategories: true,
        authRequired: false
    },
    'the-economist': {
        publicationName: 'The Economist',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/the_economist_logo.png',
        description: 'Authoritative global news and analysis',
        subscriptionLink: 'https://www.economist.com/',
        useCategories: true,
        authRequired: false
    },
    'wall-street-journal': {
        publicationName: 'The Wall Street Journal',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/WSJ_logo.jpeg',
        description: 'The daily diary of the American dream',
        subscriptionLink: 'https://www.wsj.com/',
        useCategories: true,
        authRequired: true
    },
    'the-atlantic': {
        publicationName: 'The Atlantic',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/the_atlantic_logo.png',
        description: 'News, politics, culture, technology, health, and more',
        subscriptionLink: 'https://www.theatlantic.com/',
        useCategories: true,
        authRequired: true
    },
    'new-york-post': {
        publicationName: 'New York Post',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/new_york_post_logo.webp',
        description: 'Breaking news about New York, sports, business, entertainment, opinion, real estate, culture, fashion, and more',
        subscriptionLink: 'https://nypost.com/',
        useCategories: true,
        authRequired: true
    },
    'financial-times': {
        publicationName: 'Financial Times',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/financial_times_logo.png',
        description: "The world's leading global business publication",
        subscriptionLink: 'https://www.ft.com/',
        useCategories: true,
        authRequired: true
    },
    axios: {
        publicationName: 'Axios',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/axios_logo.png',
        description: 'Smart, efficient news worthy of your time, attention, and trust',
        subscriptionLink: 'https://www.axios.com/',
        useCategories: true,
        authRequired: true
    },
    techcrunch: {
        publicationName: 'TechCrunch',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/TechCrunch_logo.png',
        description: 'Reporting on the business of technology, startups, venture capital funding, and Silicon Valley',
        subscriptionLink: 'https://techcrunch.com/',
        useCategories: true,
        authRequired: false
    },
    'mckinsey-and-company': {
        publicationName: 'McKinsey & Company',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/mckinsey_and_company_logo.webp',
        description: 'Our latest thinking on the issues that matter most in business and management',
        subscriptionLink: 'https://www.mckinsey.com/featured-insights',
        useCategories: true,
        authRequired: true
    },
    'new-yorker': {
        publicationName: 'The New Yorker',
        imageSrc: 'https://storage.googleapis.com/ad-auris-mvp-bucket/publication_logo_images/the_new_yorker_logo.png',
        description: 'Reporting, Profiles, breaking news, and cultural coverage',
        subscriptionLink: 'https://www.newyorker.com/',
        useCategories: true,
        authRequired: false
    }
};

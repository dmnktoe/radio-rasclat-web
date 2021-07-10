let klaroConfig = {
    version: 1,
    elementID: 'klaro',
    styling: {
        theme: ['light', 'bottom', 'wide'],
    },
    noAutoLoad: false,
    htmlTexts: true,
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'rasclatCookieSettings',
    cookieDomain: 'radio-rasclat.com',
    mustConsent: false,
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,
    noticeAsModal: false,
    disablePoweredBy: true,
    translations: {
        en: {
            privacyPolicyUrl: '/privacy',
            consentModal: {
                title: '🍪 Cookie Settings',
                description:
                    'We use cookies to analyze traffic on radio-rasclat.com, personalize on-site content and enhance your experience on this website. By clicking ‘accept’, you’re telling us you’re okay with us placing cookies on your browser and, where applicable, processing your related personal data for these purposes. You’re able to manage and withdraw your consent via our cookie settings below.',
            },
            consentNotice: {
                learnMore: 'Cookie Settings',
                description: 'We use cookies to analyze traffic on radio-rasclat.com, personalize on-site content and enhance your experience on this website. By clicking ‘accept’, you’re telling us you’re okay with us placing cookies on your browser and, where applicable, processing your related personal data for these purposes. You’re able to manage and withdraw your consent via our cookie settings.'
            },
            decline: 'Decline',
            ok: 'Accept',
            googleAnalytics: {
                description: 'Web and user analytics hosted by Google.',
            },
            hotjar: {
                description: 'Hotjar is a product experience insights tool that gives us behavior analytics.',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
                marketing: 'Marketing',
            },
        },
    },
    services: [
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
            cookies: [
                ['_ga', '/', 'radio-rasclat.com'],
                ['_gid', '/', 'radio-rasclat.com'],
                [/^_dc_gtm.*$/i, '/', 'radio-rasclat.com'],
                ['_ga', '/', 'localhost'],
                ['_gat', '/', 'localhost'],
                ['_gid', '/', 'localhost'],
            ],
        },
        {
            name: 'hotjar',
            title: 'Hotjar',
            purposes: ['analytics'],
            cookies: [
                ['_hj.*', '/', 'radio-rasclat.com'],
                ['_hj.*', '/', 'localhost'],
            ],
        },
    ],
};

module.exports = klaroConfig;

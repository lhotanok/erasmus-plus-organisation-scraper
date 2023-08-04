import { Actor } from 'apify';
import { CheerioCrawler, log } from 'crawlee';
import { router } from './routes.js';
import { buildRequestsFromAdvancedSearchPayload, buildRequestsFromSearchTerms } from './tools.js';
import { AdvancedSearchPayload, InputSchema } from './types.js';

await Actor.init();

const {
    searchTerms = [],
    proxyConfiguration: proxyConfigurationOptions = {
        useApifyProxy: true,
    },
    legalName = '',
    businessName = '',
    countryCode = '',
    city = '',
    websiteName = '',
    pic = '',
    organisationId = '',
    registrationNumber = '',
    vatNumber = '',
    institutionCode = '',
    debugMode = false,
} = await Actor.getInput<InputSchema>() ?? {};

if (debugMode) {
    log.setLevel(log.LEVELS.DEBUG);
}

const advancedSearchPayload : AdvancedSearchPayload = {
    legalName,
    businessName,
    countryCode,
    city,
    websiteName,
    pic,
    organisationId,
    registrationNumber,
    vatNumber,
    institutionCode,
};

const proxyConfiguration = await Actor.createProxyConfiguration(proxyConfigurationOptions);

const crawler = new CheerioCrawler({
    proxyConfiguration,
    additionalMimeTypes: ['application/json'],
    requestHandler: router,
    maxRequestRetries: 10,
});

await crawler.run([
    ...buildRequestsFromSearchTerms(searchTerms),
    ...buildRequestsFromAdvancedSearchPayload(advancedSearchPayload),
]);

await Actor.exit();

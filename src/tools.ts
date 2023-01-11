import { Actor } from 'apify';
import { log, Request } from 'crawlee';
import { COUNTRY_CODES_TO_IDS } from './countryCodes.js';
import { AdvancedSearchPayload } from './types.js';

export const buildRequestsFromSearchTerms = (searchTerms: string[]) : Request[] => {
    const requests = searchTerms.map((term) => new Request({
        url: 'https://webgate.ec.europa.eu/eac-eescp-backend/public-api/organisation-registration/simpleSearch?lang=en',
        payload: term,
        method: 'POST',
        useExtendedUniqueKey: true,
    }));

    return requests;
};

export const buildRequestsFromAdvancedSearchPayload = (searchPayload: AdvancedSearchPayload) : Request[] => {
    const nonEmptyValues = Object.values(searchPayload).filter((value) => value.length > 0);

    if (nonEmptyValues.length === 0) {
        log.info('No advanced search filters set, skipping advanced search');
        return [];
    }

    const countryCode = COUNTRY_CODES_TO_IDS[searchPayload.countryCode] || '';
    const payload: AdvancedSearchPayload = {
        ...searchPayload,
        countryCode,
    };

    const stringifiedPayload = JSON.stringify(payload);

    log.debug('Advanced search payload', { payload });
    log.debug(`Stringified advanced search payload:
        ${stringifiedPayload}`);

    const advancedSearchRequest = new Request({
        url: 'https://webgate.ec.europa.eu/eac-eescp-backend/public-api/organisation-registration/advancedSearch?lang=en',
        payload: stringifiedPayload,
        method: 'POST',
        useExtendedUniqueKey: true,
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': stringifiedPayload.length.toString(),
        },
    });

    Actor.setValue('ADV_SEARCH_REQ', advancedSearchRequest);

    return [advancedSearchRequest];
};

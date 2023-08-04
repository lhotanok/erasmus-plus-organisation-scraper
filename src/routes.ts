import { Actor } from 'apify';
import { createCheerioRouter } from 'crawlee';
import { COUNTRY_IDS_TO_CODES } from './countryCodes.js';
import { Organization } from './types.js';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ json, log, request }) => {
    const organizations: Organization[] = json;

    const payload = request.payload || '';
    const parsedPayload = payload[0] === '{' ? JSON.parse(payload) : payload;

    log.info(
        `Searched ${organizations.length} organisation${organizations.length > 1 ? 's' : ''}`,
        { search: parsedPayload },
    );

    const parsedOrganizations = organizations.map((organization) => {
        const parsedOrganization = {
            name: organization.businessName || organization.legalName,
            ...organization,
            country: COUNTRY_IDS_TO_CODES[organization.country] || organization.country,
        };

        return parsedOrganization;
    });

    await Actor.pushData(parsedOrganizations);
});

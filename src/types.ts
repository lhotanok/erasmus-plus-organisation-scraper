import { ProxyConfigurationOptions } from 'crawlee';

export type InputSchema = {
    searchTerms: string[];
    legalName?: string;
    businessName?: string;
    countryCode?: string;
    websiteName?: string;
    pic?: string;
    organisationId?: string;
    registrationNumber?: string;
    vatNumber?: string;
    institutionCode?: string;
    proxyConfiguration: ProxyConfigurationOptions;
    debugMode: boolean;
};

export type AdvancedSearchPayload = {
    legalName: string;
    businessName: string;
    countryCode: string;
    websiteName: string;
    pic: string;
    organisationId: string;
    registrationNumber: string;
    vatNumber: string;
    institutionCode: string;
};

export type Organization = {
    legalName: string;
    businessName: string;
    country: string;
    city: string;
    website: string;
    goTolink: string;
    goTolinkShow: string;
    websiteShow: string;
    registration: string;
    organisationId: string;
    pic: string | null;
    institutionCode: string | null;
    validityType: string | null;
    vat: string | null;
};

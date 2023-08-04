# Erasmus+ and European Solidarity Corps Organisations Search - Data Extraction Tool

**Erasmus+ Organisation Scraper** is a data extraction tool designed to help you discover valuable information from the Erasmus+ and European Solidarity Corps programmes. It allows you to efficiently search for organizations based on various criteria, such as legal name, business name, hyperlink, PIC, or OID, directly from the official website: [Erasmus+ and European Solidarity Corps Organisations Search](https://webgate.ec.europa.eu/erasmus-esc/index/organisations/search-for-an-organisation).

## Simple and Advanced Search Options

This data extraction tool provides two search options:

**1. Simple Search**: Quickly enter a search query using legal name, business name, hyperlink, PIC, or OID, and receive instant results.

**2. Advanced Search**: Customize your search by combining multiple criteria, including legal name, business name, country, city, website, PIC, organization ID, registration number, VAT number, or Erasmus Charter for Higher Education Code, to refine your search and get more specific results.

## Example Output

Below are two sample organizations along with the extracted data in JSON format.

```json
[
  {
    "name": " The Edge Foundation",
    "legalName": " The Edge Foundation",
    "businessName": " The Edge Foundation",
    "country": "UK",
    "city": "London",
    "website": "https://www.edge.co.uk/",
    "goTolink": "https://webgate.ec.europa.eu/organisation-registration/register/screen/home/organisation/organisationData/10260330",
    "goTolinkShow": "https://webgate.ec.europa.eu/organisation-registration/register/screen/home/organisation/organisationData/10260330",
    "websiteShow": "https://www.edge.co.uk/",
    "registration": "1686164",
    "organisationId": "E10260330",
    "pic": null,
    "institutionCode": null,
    "validityType": "42284353",
    "vat": null
  },
  {
    "name": "Raabeschule",
    "legalName": "Gymnasium Raabeschule",
    "businessName": "Raabeschule",
    "country": "DE",
    "city": "Braunschweig",
    "website": "http://www.raabeschule.de",
    "goTolink": "https://webgate.ec.europa.eu/organisation-registration/register/screen/home/organisation/organisationData/10206959",
    "goTolinkShow": "https://webgate.ec.europa.eu/organisation-registration/register/screen/home/organisation/organisationData/10206959",
    "websiteShow": "www.raabeschule.de",
    "registration": "67891",
    "organisationId": "E10206959",
    "pic": "941588119",
    "institutionCode": null,
    "validityType": "42284356",
    "vat": null
  }
]
```

## Integrations and Automation

The tool seamlessly integrates with popular cloud services and web apps through the <a href="https://apify.com/integrations" target="_blank">integrations on the Apify platform</a>. You can connect it with Make, Zapier, Slack, Airbyte, GitHub, Google Sheets, Google Drive, and many more. Moreover, you can leverage <a href="https://docs.apify.com/integrations/webhooks" target="_blank">webhooks</a> to automate actions when specific events occur, such as receiving search results.

## Using the Apify API

For more advanced users, the Apify API provides programmatic access to the platform. You can manage, schedule, and run tasks with ease. Access datasets, monitor performance, fetch results, create and update versions, and much more.

For detailed information and code examples, check out the comprehensive [Apify API reference](https://docs.apify.com/api/v2) documentation or explore the <a href="https://apify.com/lhotanok/erasmus-plus-organisation-scraper/api" target="_blank">API tab</a> for practical code samples.

## Explore More Apify Solutions

The Apify platform offers a wide selection of dedicated solutions for various data extraction needs. Discover more options to enhance your data extraction capabilities. Visit the [Apify Store](https://apify.com/store) to explore the full range of possibilities.

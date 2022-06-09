<!---
title: Data in Digital Foundry
last_reviewed_on: 2022-06-08
review_in: 6 months
--->

# Data in Digital Foundry

<!-- Add Introduction here -->

## What does The Data Strategy for Defence mean for Defence Digital Foundry?

The [Data Strategy for Defence](www.gov.uk/government/publications/data-strategy-for-defence) sets out the context and problem that currently faces the MoD in the data area. It describes the response in terms of setting up the Office of the CDO, and goes on to break out six key principles that will drive MoD Data Rules;

### Defence data Rules

- **Sovereign** Defence data will be owned and managed by Defence for access and use by the whole of Defence
- **Standardised** Data will be in standardised (open?) formats
- **Exploitable** Data will be available for exploitation at the most appropriate point
- **Secure and Digital by Design** Creation, curation, handling, storage and transmission of data will be secure and digital from the outset
- **Curated** Data will be assured, discoverable, and interoperable by active curation
- **Enduring** Data will be treated as an asset above and beyond the generating entity

### Where does Foundry operate in the Defence Data Framework?

The Data Strategy defines a framework approach to describing the ways and means available to achieve the desired transformation. The Digital Foundry has been established to work within the Enabler and Facilitator spaces to consume the data rules, and help deliver the technology solutions that will meet the strategic vision.

1. Enablers

2. Facilitators

### What are the key outcomes?

- Discover-ability

- Accessibility

- Exploitability

Foundry solutions will focus on increasing the ability to discover and understand what data is already held. It will put in place srvices which allow data to be published by data publishers as managed products, whilst increasing the control and governance of those uses. Foundry will deliver platforms and processes to enable data to be surfaced and made accessible, and then exploited in modern and innovative ways. This includes providing services into DAIC to

### How does Foundry work with DD CDO function?

The Defence Digital CDO function has identified 3 core pillars, and appointed leads in each of these areas:
1. Governance and Management
2. Data Architecture
3. Data Exploitation

Foundry is intended to be the delivery engine which implements solutions to support and enable those pillars.

#### Governance and Management

##### Authorisation

Foundry Teams will need to work with Data owners to ensure they have the right permissions in place to use and exploit Data. The CDO team will support teams in establishing Ownership and Stewardship process,

##### Data Owner Identification

#### Catalogues

Data Cataloguing is a key mechanism to enable discoverability for users as well as provide management and governance tooling to data owners, and data stewards. Data Catalogues make use of metadata to describe content both to users, and to systems - so both user facing enterprise data catalogues and technical data-catalogues must be recognised, and in fact are often the same thing.

Catalogues are used across the MoD at varying levels of maturity. There are also areas that do not make use of Catalogues or even metadata. Foundry will deliver the technical components needed to join up these various different levels of capability and enable a pan-defence view of data to be brought together into a federated central data catalogue.

The catalogue will initially address the discoverability issues - ie exposing what data is in the estate. Once exposed, making that data accessible will need to follow via manual processes, maturing into system enabled processes.

See [Use of Data Catalogues](#use-of-data-catalogues) and [Data Catalogue Solutions](#data-catalogue-solutions) for guidance on designing and building solutions utilising Data Cataloguing.

#### Architecture

provides Design Governance

#### Exploitation

### How does Foundry work with Defence AI Centre?

## Designing Data Solutions (Guidance on Data Architecture)

### Foundry is subject to CDO Data Architecture principles

### Data Sharing

#### Definition of 'Data Products'

Published description of shared data

#### API Usage

#### Standards

#### Use of Metadata

#### Use of Data Catalogues

See [Catalogues](#catalogues) above

Foundry built solutions should consider data cataloguing from the outset; using data cataloguing to organise and manage its own data, how it will need to integrate into the federated data catalogue and how it may be able to consume data from other sources.

See [Data Catalogue Solutions](#data-catalogue-solutions) for implementation guidance.

#### Privacy (CoP7)

#### Links to EA / Policies etc

### Data Processing

- Batch
- Stream

### Data Analytics

- AI
- ML

## Building Data Solutions (Implementation Patterns?)

### Data Solution Products

Insert List of Data Components and/or link to Component library

#### DDAP

The Defence Data and Analytics Platform (DDAP) is a Data Platform designed to enable data to be ingested and

#### Data Catalogue Solutions

See [Catalogues](#catalogues) and [Use of Data Catalogues](#use-of-data-catalogues) above. Projects should decide on the best fit for their cataloguing requirements, whilst also ensuring their choice is able to integrate with the wider federated catalogue coherently (open standards, etc).

The Strategic Technology choice for the federated catalogue is Informatica EDC (TBC)

The [Data Publishing Service](product_page) provides mechanisms to allow programmes to expose their metadata into the federated catalogue using standard components

The foundry offers the following catalogue components for use by projects...

### Storage Strategies

#### Encryption at rest

#### Retention vs Housekeeping

##### tiers

## Operating Data Solutions

### Change Management

#### Data

#### Metadata

#### System

#### Making changes in Data Intensive systems

Changes to systems which hold data need to take account of the data extant in that system. That is any changes to either the model or the view elements need to be backwardly compatible, either by being tolerant of data before the change and/or by updating data to match the new schema as part of the change. It is worth noting that changes to large volumes of data can take significant time so ideally those changes should be made out of line with application updates and/or outages in order to minimise required downtime - depending on the appropriate SLA for the application.

### OSM facets

Things OSM expects from Foundry delivered solutions:
- dock into 'backplane' within hosting solution rather than individual app integrations to Central Integration Layer (CIL)
- OSM (Operational Service Management) requires alerts
- CI/CD output should include OSM artefacts - service descriptions for users, service description and contact points for L1 support

#### Metrics

to be defined with Service Management framework V3 (SMFv3)

### Data Access Policies

In conjunction with CDO/data owner

#### Data Centric Security (DCS)

Relationship to Zero Trust Architecture (ZTA)
Foundry guidance on DCS and ZTA - pockets of good, expand the pockets...

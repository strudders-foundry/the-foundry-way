# How we do security in the Foundry

As a way to frame our security priorities (and documentation), we refer to the NCSC's [10 steps to cyber security](https://www.ncsc.gov.uk/collection/10-steps). They are (with links to relevant content):

- [Risk management](./threat-and-risk-management/index.md)
- [Engagement and training](#engagement-and-training)
- [Asset management](#asset-management) (to do - Terry H)
- [Architecture and configuration](#architecture-and-configuration) (to do)
- [Vulnerability management](../software-development/how-to-manage-third-party-software-dependencies.md)
- [Identity and access management](#identity-and-access-management)
- [Data security](#data-security) (to do - N Ruddick)
- [Logging and monitoring](../running-services/logging-monitoring-alerting/index.md)
- [Incident management](../running-services/incident-management.md) - Justin to chair
- [Supply chain security](#supply-chain-security)

## Engagement and training

Currently, training is covered by mandatory security training at a Defence-level. More to come in the future. 

From an engagement perspective, regular security working groups (SWGs) include all delivery teams - both management and technical people. 

## Asset management

To do

## Architecture and configuration

To do

## Identity and access management (IdAM)

Approaches to IdAM vary depending on the scenario.

For software as a service (SaaS) products and similar (which constitutes the majority of what we use), we always enforce 2-factor authentication (2FA). In addition, where it is possible to use an existing SaaS product as an identity provider, which already has 2FA enforced, we do so. 

Each individual product or service that the Foundry develops will inevitably have similar and different elements. Where they are able to, products and services will adopt the MoD's Enterprise IdAM approach and integration, for **authentication**. Where not possible, we will endeavour to re-use solutions across the Foundry. 

From an **authorisation** perspective, necessarily, each product or service will have different needs. 

Since we carry out reviews of SaaS products in line with the [NCSC's guidance](https://www.ncsc.gov.uk/guidance/understanding-software-service-saas-security), monitoring and logging of user activity is usually a standard offering. Where products and services have authenticated users, similar logging and monitoring is undertaken. 

Joiners, movers and leavers (JML) processes are available internally. 

## Data security

To do

## Supply chain security

Some elements of supply chain security are catered for by wider Defence policy, including the need to carry out an assessment under the [Defence Cyber Protection Partnership (DCPP)](https://www.gov.uk/guidance/defence-cyber-protection-partnership) and related service. 

In addition, suppliers engage with the Foundry under a [Security Aspects Letter (SAL)](https://www.gov.uk/guidance/defence-equipment-and-support-principal-security-advisor#:~:text=What%20is%20a%20security%20aspects%20letter%3F), which ensures that suppliers (and any sub-contractors) are aware of the expectations placed upon them. This includes working under a [Foundry-wide SyOps](https://github.com/defencedigital/foundry-syops). 

From a code-base supply chain perspective, this is covered under vulnerability management in our section on [managing third party libraries](../software-development/how-to-manage-third-party-software-dependencies.md).

# How we do incident management in the Foundry

The following is guidance that we expect delivery teams to take. Outside of delivery teams (higher level, cross-Foundry or extraordinary incidents), incidents may be managed slightly differently. 

## Principles and definitions

**General** incident management in the Foundry focuses on restoring normal operations quickly with minimal impact on users. 

**Security** incident management focuses on ensuring, as best possible, continued service for users, while ensuring that their data, our data, and the applications and infrastructure they sit on are secure. 

In all cases, tasks aimed at the mitigation of the root causes of both general and security incidents will be prioritised alongside all other development/delivery work (i.e. they will not automatically be considered top priority). 

As much as possible, incidents (or events, in the first instance) should be identified automatically, through monitoring and alerting. 

## Incident priority

| Classification | Type | Example | Response time | Update frequency |
| -------------- | ---- | ------- | ------------- | ---------------- |
| P1 | Critical | Complete outage, or ongoing unauthorised access | 20 minutes (in and outside of office hours) | 1 hour |
| P2 | Major | Substantial degradation of service | 60 minutes (in and outside of office hours) | 2 hours |
| P3 | Significant | Users experiencing intermittent or degraded service due to platform issue | 2 hours (in office hours only) | Once after 2 business days |
| P4 | Minor | Component failure that does not immediately impact a service, or an unsuccessful DoS attempt | 1 business day (in office hours only) | Once after 5 business days |

## Incident response

All incidents (general and security) will follow the following process:

1. [Establish an incident lead](#1-establish-an-incident-lead)
2. [Inform your team](#2-inform-your-team)
3. [Prioritise the incident](#3-prioritise-the-incident)
4. [Form a response team](#4-form-an-incident-response-team)
5. [Investigate](#5-investigate)
6. [Contain](#6-contain)
7. [Eradicate](#7-eradicate)
8. [Recover](#8-recover)
9. [Communicate to a wider audience](#9-communicate-to-a-wider-audience)
10. [Resolve the incident](#10-review-and-resolve-the-incident)


### 1. Establish an incident lead

Establish who your incident lead is. Find out who noticed the problem and if anyone else is investigating and fixing it. If that person is you, assume the role of incident lead.


### 2. Inform your team

Inform your team using the appropriate Slack channel (or other means of communication that your team usually uses). If the incident involves a data or security breach, notify [FIXME] who’ll help you manage the incident. 


### 3. Prioritise the incident

Prioritise the incident against the above priority levels and start tracking actions, updates and communications. Create a new incident report - copied from the incident report template - and use it to track updates and progress.


### 4. Form an Incident Response team

Form a team with both an incident lead and a communications lead. The communications lead will make sure relevant parties are updated according to the incident priority table. The communications lead will often be the DM or PO, although it can be anybody who is not undertaking another (technical) role to solve the problem. 


### 5. Investigate

Make sure you keep your incident report up to date. If the incident involves a data breach follow your team’s GDPR documentation.

If the incident is a data or security breach you should follow steps 6, 7 and 8. If the incident is not cyber security-related, skip to step 9.


### 6. Contain

You should determine the right containment procedures. In some cases, you may require a forensic clone.

#### 6.1 Short-term containment

You should start short-term containment measures as soon as you detect an incident. This could help minimise impact and maintain availability. Make sure that all affected systems are isolated from the non-affected systems. 

#### 6.2 Long-term containment

You’ll need to make sure long-term containment is in place.

You should take the system offline if possible. Once the system is offline, you can proceed to step 7.

If the system has to remain in production, remove all malware and other artifacts from the affected systems, and harden the affected systems from further attacks. You should re-image the affected systems, or restore from the last known good backup.

#### 6.3 Forensic clone

As well as gathering evidence to help resolve an incident, you should collect evidence to support any potential follow-on disciplinary or legal proceedings.

To maintain the forensic integrity of the environment you should:

- document all commands used during the investigation and keep the documentation up to date - include how the evidence has been preserved
- store any forensic images taken during the investigation in a secure location, to prevent accidental damage or tampering

### 7. Eradicate

Eradication may be necessary to remove components of the incident that remain on your systems, such as traces of malware. To help with eradication you should:

- identify all affected hosts
- remove all malware and other artifacts left behind by the attackers
- re-image and patch the affected system
- check backups, code, images and the affected systems are protected against further attacks

### 8. Recover

Recovery is necessary to reduce the impact on user confidence and to reduce the likelihood of further successful attacks.

You should:

- confirm the affected systems are patched and hardened against the recent attack, and possible future attacks
- decide what day and time to restore the affected systems back into production (if they were taken offline)
- check the systems you’re restoring to production are not compromised in the same way as the original incident
- consider how long to monitor the restored systems for, and what to look out for

### 9. Communicate to a wider audience

If the incident is serious (P1 or P2) you’ll need to contact a wider audience and potentially your service users.

Your communications lead must manage:

- external and internal communications
- incident escalations
- external and internal communications

Make sure internal and external parties, like Information Assurance (IA) or your service users are fully informed at every stage of your incident management process.

Post regular updates to the status of an incident in the appropriate Slack channel (or elsewhere). This helps people without having to find and follow multiple notification mechanisms.

#### Incident escalations

Notify escalation contacts (to be defined by each team) of all high priority incidents (P1/P2). 

#### Report cyber security incidents

The incident lead must inform the National Cyber Security Centre (NCSC) of any category 1, 2 or 3 incidents. The NCSC defines security incidents in its categorisation system prioritisation framework.

Depending on the incident, the NCSC may be able to provide technical support.


### 10. Review and resolve the incident

Hold an incident and lessons learned review, following a blameless post mortem culture so your service can improve. Add a row to the central incidents summary spreadsheet linking to your incident report document.

Reviews should be held as soon as possible after the resolution of the incident, to ensure that information and recollection is accurate. 

# Security in the Digital Foundry

Security is rarely a standalone activity, so you'll find most of the security guidance and documentation has been included within other sections of the Foundry Way; however, this section includes some security-specific stuff where it does stand alone. 

## Security classification of data
The Digital Foundry follows the [UK government security classification policy](https://www.gov.uk/government/publications/government-security-classifications). Development teams should carefully consider the design of their solution/system, ensuring that data it will handle is appropriately protected.

!!! tip "Remember"

    Classifications with caveats - such as OFFICIAL-SENSITIVE - are not classifications themselves. 

## Security assurance
The Foundry follows [Secure by Design](https://modgovuk.sharepoint.com/sites/SecureByDesign) for assuring our products, services and platforms. While this means we do not prescribe to 'accreditation' as a practice, there are assurance activities that delivery teams have to carry out to demonstrate to their product or service's risk owner that they have put appropriate and proportionate controls in place to satisfy the risk owner's risk appetite. 

Content that describes how we follow Secure by Design in the Foundry is on the backlog. For now, if you have any questions, get in touch with the Foundry security team.

## 'Zero trust' architecture
Digital Foundry services should implement the principles outlined in the [NCSC zero trust architecture design principles](https://www.ncsc.gov.uk/collection/zero-trust-architecture).

## Operational and Personal Security
TODO

---

## Things our delivery teams don't do

### Track software or hardware assets
Digital Foundry hardware assets are managed by the Digital Foundry platform team - product/service teams do not need to worry about this!

In the future there will be guidance that details licence management, asset management, etc. processes within the Digital Foundry (for those teams who do have to worry about it). 

### Install anti-virus software
Industry best practice for developing cloud native services within containers, including making containers stateless and immutable, means that scanning with anti-virus is neither application nor required. In fact, it may increase a service's exposure to vulnerabilities. For this reason, you should rarely, if ever, come across an occasion where you need to install anti-virus software.  

### Endpoint Detection and Response (EDR) 
These tools are traditionally used to monitor physical or virtual machines for cyber threats. Much like anti-virus tools, these software tools are installed on the machine and monitor local activity. As described above, this is not relevant when services follow industry best practice to develop cloud native services within immutable, stateless containers.

### Patching (including operating systems)
Patching, by definition, refers to making changes to a stateful 'thing'; this could be a running operating system, or other infrastructure. As discussed above, all infrastructure (whether cloud-based, VMs or physical infrastructure) must be stateless/ephemeral. This means that 'patching' is not an applicable concept and alternatives should be implemented instead (such as updating a container's pinned base image version). 

## TO DO

- Cross-domain
- Links to how Foundry platforms do security 'for you'
- Reusable components
# How to manage third party software dependencies

When you develop and operate a service, it’s important to keep any third party dependencies you use up-to-date. By doing this, you can avoid potential security vulnerabilities.

Any automated tools you use to manage third party dependencies should be compatible with [MOD recommended programming languages](programming-languages.md). The tools you use should neither slow down your development process nor disclose potential security vulnerabilities to the public.

You can read more about [managing software dependencies in the Service Manual](https://www.gov.uk/service-manual/technology/managing-software-dependencies), where you will find a list of common dependency management tools.

Our programming language [style guides](style-guides.md) also contain language-specific advice about managing dependencies (for example, managing Python dependencies).

# Update dependencies frequently

Update your dependencies frequently rather than in ‘big bang’ batches. This works well with continuous delivery principles and makes sure the changes introduced are small and can be automatically tested.

There are tools which scan GitHub repositories and raise pull requests when they find dependency updates. Teams at MOD are using:

- [Dependabot](https://github.com/dependabot) - available on GitHub SaaS and recommended as part of the [Defence Digital template-repository](https://github.com/defencedigital/template-repository)

```
Note: this is separate from the security-only updates provided automatically by GitHub Dependabot.

Note: repos requiring at least one approving review for PRs cannot, and should not, use Dependabot’s auto-approve-and-merge facility.

Note: we have not enabled “Treat PR approval as a request to merge”, as this would lead to a surprising behaviour at the point of approval.
```
- PyUP - a Python dependency checker.

## Monitor for vulnerabilities

You should monitor for potential vulnerabilities in every layer of your technology stack. This is not straightforward but tooling exists to help. [The Service Manual provides guidance on browser technology, tooling and mailing lists you can subscribe to](https://www.gov.uk/service-manual/technology/managing-software-dependencies#managing-risks-in-third-party-code).

Most of the tooling that helps you stay on top of dependency updates will also highlight vulnerabilities. Additional tooling includes:

### [GitHub security alerts](https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)

When GitHub discovers or is informed about a vulnerability, it will email an alert to the repository owner and users with admin access. GitHub security alerts will be turned on for all github.com/defencedigital repositories. If services wish to opt out of security advisories on their repository, they can contact Digital Foundry Security and then add the no-security-advisories tag to their repository.

### [Snyk](https://snyk.io)

Snyk is capable of detecting vulnerabilities in a variety of languages including all the GDS supported programming languages. You can configure Snyk to raise PRs, email regular reports and alert you when new vulnerabilities are detected. To be added to the Snyk orgnisation, please reach out on Defence Digital Slack #security.

### Archive old repositories

If you have an old repository that is receiving security alerts but is not being worked on or maintained, you may wish to archive your repository instead.

### Security Dashboards TODO

The Foundry Security team will investigate providing a security dashboard that gives service teams visibility of vulnerabilities in their repositories. This may require the repositories for your service to be tagged correctly.

## Managing Container dependencies

### Rebuild Container base images

Like dependencies, Container base images are also frequently updated. If you run containers as part of your service, you should regularly rebuild your images (and base images) to include the latest updates. Automate this process where possible.

### Specifying Container image tags

The Foundry Way Containerfile guidance contains advice on how to use image tags to specify the exact container image version to use.

### Use official Container base images

Always use official base images. The main container registries (including Quay as used by the Defence DevSecOps Service) regularly scans official images and you can view the results by logging into the container registry. If you do not regularly update your base image, you must make sure a manual process exists to monitor and prioritise fixes for detected vulnerabilities.

The Digital Marketplace team uses Snyk container vulnerability management tooling to regularly scan base images.

**TODO - more from GDS Way**

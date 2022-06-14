# Updating and fixing things

## How to know when something needs updating

Checking for updates, just as checking for vulnerabilities, should be automated. More information on [vulnerability scanning](../logging-monitoring-alerting/vulnerability-scanning.md) is provided separately. 

Dependabot, which is included with our instance of GitHub, is one of the ways that you can automatically check for vulnerabilities - it will automatically run against repositories (where it has access) and deliver a report to you for your consider. It'll sometimes even update your code and raise a pull request - magic!

Having followed the Foundry Way guidance on [pinning versions](../../software-development/version-control/pinning-versions.md) of libraries, software, etc., you should automatically check for out-dated things each time you run your [continuous delivery pipelines](../../software-development/building-and-deploying/index.md). This should expose a list of things that need updating, which can be prioritised as part of your normal working practices. 

## Updating container base images

TODO

## Third-party libraries/packages

Information on managing (including updating) third-party assets (such as libraries and packages) can be found in the [Software Development section](../../software-development/how-to-manage-third-party-software-dependencies.md).


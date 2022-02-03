# Service Levels 

## The traditional context

In traditional IT, and in particular in matters of commercial agreements (i.e. contracts), the norm was to state ‘service level agreements’ (SLAs) as a way of guaranteeing (lest the provider have penalties foist upon them) certain minimum levels of performance against the given theme. 

For example, there might be a minimum ‘up time’ – say, 99.95% – which would thereby allow a maximum amount of downtime over a period of time (a month, a year, etc.). Similarly, there might be a minimum performance level, such as being able to handle at least 1000 concurrent requests per second at all times. 

The problem with SLAs like this is that they can be one-dimensional: they are rarely based on the actual outcomes that they mean to achieve, and they are often illogically applied. This, in turn, often leads to over-optimisation and therefore increases in costs. 

For example, for services that are generally only used in business hours in one timezone, ensuring high availability and performance overnight is very expensive indeed. And should the service go down (for example for maintenance) in a period of time in which no users are impacted, does it make sense to penalise for dropping below a threshold when the result is a more reliable service in the longer term (i.e. by doing maintenance when needed)?

SLAs are still a thing in (S)RE, particularly since those employing it usually do have contractual obligations (which we don’t, since our ‘customers’ are within the same organisation), but the approach outlined below (SLIs and SLOs) comes first. 

## Re-introducing service levels

### Metrics that matter: SLIs

Let’s take an example from above: ‘uptime’. ‘Uptime’ is a blunt instrument and doesn’t necessarily indicate a service level that the user is experiencing. It’s also not specific about what we mean by uptime. Does it mean how many hours a day the servers are running? Or how many errors the server returns to a user? Or something else?

Service Level Indicators (SLIs) are about understanding what the intended effect is and then to describe how we can measure that intent. The above, then, may change to become something like this:

> The availability of the service to users, as indicated by percentage of user requests that receive a HTTP status code in the 4xx or 5xx ranges. 

Here you can see a clear outcome or effect (service level) you are trying to indicate (availability), followed by a technical description of how that will be measured. 

### Reliable enough: SLOs

So in the above example, what is ‘reliable enough’? In answering that question, we can decide what our objective should be for that service level. Objectives should be based on users (including non-human users like systems that use APIs and suchlike) needs and expectations. 

Since breaching the objective requires teams to divert efforts to resolving the situation, it’s also important not to over-egg the objectives beyond what’s genuinely needed. So, if a system isn’t ‘critical’ (e.g. life-saving or -threatening) and having a less performant service is acceptable (e.g. you could wait 5 seconds for a page to load), then ensure that the objective is representative. Similarly, if users are willing to reload a page if they get an error, then don’t have penalising objectives based on availability. 

Coupled with the SLI, the SLO needn’t be complicated. In this case, it may be:

> The SLO is for 99% availability of the service for users.

## Measuring and reporting

Since we have established a categorically, technically measurable metric in this process, it means that we can necessarily implement monitoring. This thereby automates the process of collecting metrics, rather than somebody having to do manual reporting on a regular basis. 

So that’s measuring and monitoring, but what about reporting? Reporting is primarily for the benefit of and action by the team supporting the service, since any dip below the SLO should result in action being taken to rectify the situation. In reality, this will also be discussed with the Service Owner, in many cases, if it will significantly impact the prioritisation of other work. This is because rectification of a breach of SLOs should take priority over almost all other work (excepting things like urgent security work). 

Other than automatically-measured metrics, no other metrics relating to reliability will be provided to any stakeholders, since they are implicitly irrelevant to the service and its users. 

## What this means for our stakeholders

### Our users

For our users, this is only good news. It means that we focus on ensuring that they get a service that’s reliable enough for their needs, while putting appropriate time and focus into the work that makes a real (positive) difference to them. 

### Our customers

For our customers, such as the parts of the business on whose behalf we are delivering a product or service, there are different considerations. In particular, they need to ensure that their programme funding is being well spent! 

Since we’re all working for the same organisation, we have to have a collaborative relationship rather than a contractual or penal one. As such, the Foundry will:

- Ensure that the relevant parties are involved in establishing SLOs (often the Service Owner)
- Vow that, if the service dips below the SLO threshold, work will immediately be prioritised to bring it back above that line
- Provide sight of performance metrics against these SLOs, as they become available (i.e. once the work has been done to put the technical monitoring in place, once SLOs are established)

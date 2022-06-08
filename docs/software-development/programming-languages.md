# Programming languages
We use a range of programming languages in the MOD because we think using the right tool for the job gives us the best chance of building services that best meet users’ needs. This document does not apply to choosing ‘off the shelf’ software (open source or not).

We focus on using a small number of programming languages for core software development tasks.

This should make it easier for developers to:

- move around the organisation
- develop shared components
- improve their personal development
- master how they operate applications

## Frontend development

TODO

## Backend development
Our core languages for backend development are:

- Python
- Go

We’ve chosen these languages because they are successfully used by teams at the moment, and we are confident in how to host and operate applications written in them. You should carry out new development in one of these languages.

### Python
You should write new Python projects in Python 3. Python 2 reached end of life in 2020. Python 3 is now well-supported by application frameworks and libraries, and is commonly used in production.

### Go
Go is an appropriate language for systems programming, like proxying, routing, and transforming HTTP requests. However you should only write these sorts of components if there is no alternative maintained open source tool available.

Go has a feature complete standard library, good concurrency primitives and is a memory safe language. These features make it a good choice for backend application which aggregate or transform APIs, or have performance requirements.

### Languages we do not use for new projects
TODO

## Using other languages
There will be sensible reasons to not follow the above guidance on languages. For example when you’re:

- extending an existing codebase or ecosystem
- scripting in a particular environment
- experimenting during an alpha (with an expectation that it’s replaced by something we have more confidence in for beta)
- working in a very specific or unusual problem domain, like heavy use of WebSockets
- The set of languages we’re comfortable supporting will change over time.

If you want to use a new language, talk to the Foundry Engineering community and then create a prototype. If it goes well you can open a pull request to change this document.

If you’re having problems using one of the languages we support, open a pull request to document the issues.

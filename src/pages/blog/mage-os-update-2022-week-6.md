---
layout: '@/layouts/post.astro'
date: 2022-02-11
title: Week 5 and 6 of 2022
description: An update on last month's progress on Mage-OS
---

Every Tuesday we have a meeting to discuss technical topics, and every Wednesday we have a meeting regarding organizational topics.

This is the first post of the new bi-weekly status updates we will be publishing to be more transparent regarding the work we are doing.
Please expect these updates will be less polished but more frequent than our prior posts.


## Technical topics

### Package generation

We are continuing to work on the package splitting functionality. A reference implementation regarding the general package generation is complete. We are building multiple implementations using different languages in order to increase the bus-factor. Noteworthy is that all mage-os composer packages will have stable checksums.
We are close to being able to create a mirror distribution, but are still missing:

1. The composer.json file for the magento/magento2-base package. The question of how to get a base package composer.json is solved, but not yet implemented. More information on why that isn’t straight forward and what is required can be found in a [google doc](https://docs.google.com/document/d/1VFFL7JbsUV0MUVZE_1ojCPRI9F4ZZtema1_cOgreNDo/edit?usp=sharing).  
   A public repository with all relevant composer.json files can be found at  
  [github.com/mage-os/magento2-base-composer-json](https://github.com/mage-os/magento2-base-composer-json)

2. The meta-package and project-package generation.


We expect the meta- and project-package composer.json generation to be simpler than the base-package composer.json and intend to complete these tasks until the next meeting, at least with the JavaScript package splitter implementation.

### Preparing the GitHub organization for being open to the public

We discussed how to handle write privileges to the repositories and who will implement the necessary configuration.

## Organizational topics

### Magento Open Source Marketing Content Creation

* Since Adobe has effectively removed next to all content on the brand Magento and shut down the magento.com domain, we feel it is super urgent to provide an alternative portal where merchants can inform themselves about Magento Open Source.
* Until that exists, a lot of companies who have built their business around Magento Open Source are suffering from Adobe's decision to redirect magento.com to their Adobe commerce landing page.
* We decided to reach out to individuals in the community asking for help in creating content. Feature descriptions, key value propositions and case studies are the most important.
* Once we have a reasonable amount of content compiled, we will set up a website.
* We want to do this independently of the Magento Association and Adobe since they probably will take a lot more time to get it done. And we think time is of essence.
* If a better website is set up later under a better domain, we will be happy to share or hand over any Magento Open Source marketing content that is relevant to merchants. We are very willing to collaborate, but do not want to wait idle.

### Magento Open Source STS

The biggest topic was news shared by Adobe at the Open Source Task Force meeting that they intend to create a Magento Open Source Short Term Support (STS) distribution, which would run in parallel with a LTS version.

This is amazing good news if it is realized. Adobe offered to share their build processes and tools as part of this.

We welcome this wholeheartedly, but at the same time feel it is very important to continue on our path to create independent distributions, since we all have experienced the time it takes for things in big companies to happen.
We want to move faster.

Once the STS release exists, all the work we will have done can benefit it.

Right now, the STS version of Magento is a proposal, and many things are still unclear or not yet decided on. It is a very positive outlook, but we’re cautious to celebrate too early.



Thank you,

*The whole Mage-OS team*
---
layout: '@/layouts/post.astro'
date: 2022-04-09
title: Week 12 - 14 of 2022
description: An update on the last three weeks of progress on Mage-OS
---

Seeing the horror of the slaughter of Bucha in Ukraine took its toll on productivity.  
Keeping up the motivation despite everything going on was tough for some of us.  
At the same time, it feels very uplifting to be able to provide support to our friends and family in Ukraine. It also is wonderful to see others selflessly provide shelter, money, material and time to help those who managed to flee, and to those who stayed to fight.  

Here are the updates relating to Mage-OS we made over the last couple of weeks.

## Technical topics

### Mage-OS Magento® Mirror Repository

Hypernode created the first Mage-OS mirror using the mirror-repo-generator image and [wrote about it](https://www.hypernode.com/blog/weve-created-the-worlds-first-mage-os-mirror/)! To our surprise they are already using their mirror to provision client instances, which means Mage-OS is already being used in the wild!

Other hosting companies have also started to experiment with the mirror repo generator and plan on publishing their findings soon.
Also, we have received some first PRs, which is wonderful.

As soon as 2.4.4 will be released next Tuesday it should be possible to make it available in mirrors, too, by running the mirror generator again.

If you have questions or ideas, please join our [discord](https://discord.gg/nvZDVA2NdC) and say hi in the #tech channel.

### Mage-OS Distributions

Creating a mirror repository is not our main objective. That’s only the first step towards creating our own distribution. Now that the mirror repository is fully functional, we move our focus to the first steps in creating our first custom distribution.

The first step for this is to figure out the automatic generation of the base package dependencies. First experiments have been done to get that information using static code analysis without the need for a full Magento installation.

Figuring out this puzzle will allow the creation of nightly builds based on the current develop branch, which in turn will give us an opportunity to set up continuous integration.


### GitHub permissions

We have now collected all the knowledge to implement Terraform to manage GitHub permissions for the Mage-OS organization repositories. We expect to complete this step soon.


## Organizational topics

### The Mage-OS Association

The founding of the Mage-OS association is moving along swiftly.  
The initial board has been decided on and the last details of the bylaws are being cleared by lawyers. As soon as the association is founded, we will publish all details.

Here is a sneak peek into part of the bylaws:

> **Art. 3 - Purpose**
> 
> The purpose of the Mage-OS Association is to enable the long-term success of the Magento ecosystem by empowering the community to maintain and develop the Mage-OS platform (based on Magento Open Source) through communication, coordination, and funding.
> 
> In particular, the Mage-OS Association has the following goals:
> * Increase the number of people involved
> * Nurture good vibes and values
> * Increase the market share
> * Increase confidence in the Magento ecosystem
> * Sustain Magento Open Source position as a leading platform for custom e-commerce development

> **Art. 4 - Tasks**  
> * In particular, the Mage-OS Association has the following tasks:
> * Coordinating and funding the Mage-OS development and long-term support
> * Creating quality content that supports the long-term livelihood of the platform
> * Providing documentation and education/certification paths
> * Supporting organizations empowering the Magento Open Source ecosystem (both regional, like OpenGento and global, like the Magento Association)
> * Provide insights, research, and materials to support those outcomes

We look forward to seeing you soon, hopefully even at an in-person event!

That's all for today! Stay safe and prosper,

The Mage-OS folks
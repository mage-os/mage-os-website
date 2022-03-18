---
layout: '@/layouts/post.astro'
date: 2022-03-18
title: Week 10 and 11 of 2022
description: An update on the last two weeks of progress on Mage-OS
---

The ongoing horrific war in Ukraine means we continue to prioritize supporting our friends, family members and coworkers there.
We nevertheless have managed to make progress with Mage-OS, too.  

## Technical topics

### Mirror distribution

The mirror distribution available at [mirror.mage-os.org](https://mirror.mage-os.org) is now fully functional. It can be used to install Magento Open Source versions 2.4.0 up to 2.4.3-p1 using independently built composer packages.

Try it:
```bash
mkdir mage-os-243p1
composer create-project --repository-url=https://mirror.mage-os.org/ magento/project-community-edition mage-os-243p1 2.4.3-p1
```

Build your own mirror:

It is easy to host your very own mirror with self-built packages using the mirror repository generator found at [github.com/mage-os/generate-mirror-repo-js](https://github.com/mage-os/generate-mirror-repo-js).

The generation from scratch takes about 1.5 hours on a low-end server (2G RAM, no swap). We are actively improving the tool to make it faster and more usable, however, alternative implementations will be the primary tools in the future. The current JavaScript based implementation was started as a research project. 

If you have questions of ideas, please join our discord at [discord.gg/nvZDVA2NdC](https://discord.gg/nvZDVA2NdC) and say hi in the #tech channel.

### GitHub permissions

No progress has been made on this topic because of real life matters. Work will continue in the coming week.


## Organizational topics

### Operations management

We discussed two ways to bootstrap the organization behind Mage-OS:

1. Find a person to act as the COO, who's first task will be to create the organization and their own role.
   This would be a lot quicker, but it also would require someone who is able to work full time without immediately requiring compensation.

2. Found the organization ourselves, which then allows us to collect funds. Then hire a COO.

We will take this second option as this allows us to make faster progress and deal with filling COO and other roles in near future.
So far we have drafted by-laws which are being verified independently by two lawyers.

We are very excited about the prospect that soon there will be an organization to provide a solid foundation for Mage-OS!


### Magento Association

We do not see the supporting organization around Mage-OS in conflict with the Magento Association.  
Each is distinct. The Mage-OS organization moves quicker and brings a much-needed external point of view to the table, while the Association is able to work with Adobe through established channels and can rely on the support provided by a big company.

Mage-OS future-proofs Magento Open Source by providing an independent distribution.
We envision Mage-OS, the Magento Association STS and Adobe LTS/Commerce distributions collaborating closely.

Should at one time in the future Mage-OS become obsolete because of the Magento Association STS distribution, they can be merged.

We continue to believe speed is of an essence, so we will continue to move forward without being held back by established processes.


That's all for today! Stay safe and prosper,

The Mage-OS folks
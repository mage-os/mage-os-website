---
layout: '@/layouts/post.astro'
date: 2022-08-15
title: Mirror 2.4.5 release and many contributions
description: The 2.4.5 and related releases have been added to the mirror repositories and a lot of progress has been made, thanks to many contributions.  
---

Work has been progressing nicely, and we celebrate that more people are getting involved! Here is an overview of what has been happening since the last blog post.

## Technical topics

### Mage-OS Magento® Mirror Distribution

Adobe released Magento Open Source 2.3.7-p4, 2.4.3-p3, 2.4.4-p1 and 2.4.5 on the 9th of August!
We are pleased to announce that these versions can now also be installed as independently built packages, using the [Mage-OS mirror](https://mirror.mage-os.org).

While preparing the releases, we discovered (very few) inconsistencies in upstream composer.json files that broke our build process.
We reported these inconsistencies upstream to Adobe (for example in the [security package](https://github.com/magento/security-package/issues/321) and [adobe-stock-integration](https://github.com/magento/adobe-stock-integration/pull/1872) repositories), and they are being addressed. At the same time, we have improved the [build tool](https://github.com/mage-os/generate-mirror-repo-js) to account for these issues  allowing Mage-OS to become more independent.

Finally, Damien Retzinger from [Graycore](https://www.graycore.io/) contributed GitHub actions to automate testing builds in parallel. This allowed us to move much, much faster, and we are very grateful for his participation!

Daniel Sloof created GitHub actions to check the integrity of the Mage-OS packages against the upstream releases. This QA tooling is invaluable.

Many thanks to [Damien](https://github.com/damienwebdev) and [Daniel](https://github.com/danslo), and to all others like [Anton](https://github.com/speedupmate), [Daniel Fahlke](https://github.com/flyingmana) and many others who participated in discussions and helped with good ideas in the #tech channel or joined a stream on Discord.


### Mage-OS Magento® Mirror Nightly Builds

The new versioning scheme for the nightly build packages, as discussed in the [previous post](https://mage-os.org/blog/mage-os-update-2022-week-30), has been implemented, and is currently being evaluated, if it indeed serves the desired purpose.  
We expect the nightly builds to be available soon.


### Contributing

People have been asking how to contribute. It is very encouraging to see that many people want to help, and so far we still don't have a good answer.

Since we are currently  "meta-building", instead of building Magento features and improvements, we are in  a bit of a special situation. We expect this to change once the infrastructure for the mirror, nightly builds, and the Mage-OS distribution is closer to complete.

The usual approach to encouraging contributions to open source projects is to do "Issue grooming" and then to choose tickets that are good first issues. This approach is not applicable (yet) to the Mage-OS project.

At the moment, most people  have started by joining [Discord](http://chat.mage-os.org), following the  #tech channel, and joining streams in the #Watercooler channels, where problems are being discussed and solved together.

It has been very valuable to interact in this way.

Currently,  this is  the best way to get started, as it helps develop an understanding of what is required at a given moment in time, be it debugging, writing code, pairing or coming up with ideas.

So if you are interested in helping,  join a stream in Discord and get an idea what is happening. It is fun, too, if you like problem-solving and coding :)

For those who simply wish to keep up, start by following the discord #tech channel.

We are welcoming and inclusive at [chat.mage-os.org](http://chat.mage-os.org)!


## Organizational topics

### Mage-OS Association

Vacation season is keeping us busy, but we are moving to complete the founding of the association.

We will form a committee to set the price for members and supporting members (companies).  
If you would like to be involved, please join the [Mage-OS Discord](http://chat.mage-os.org) #membership channel and let us know!


For now that’s all, more updates are coming soon.

The Mage-OS folks
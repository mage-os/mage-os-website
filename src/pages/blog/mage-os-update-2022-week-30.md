---
layout: '@/layouts/post.astro'
date: 2022-07-29
title: Week 26-30 of 2022
description: Version 2.3.7-p3 added to mirror; New nightly build versioning convention; Community updates.  
---

Lots is happening, folks!

## Milestones

### New website!

You can find a lot of content beyond the blog now by visiting <https://mage-os.org>!

Many thanks to Ryan Hoerr who spent a lot of time massaging the previous blog into this shape. Content will continue to be updated.


## Technical topics

### Mage-OS Magento® Mirror Distribution

Quite some work went into stabilizing older releases of the mirror distribution. All supported releases install cleanly and quickly now.

Also, we added release 2.3.7-p3 to the list of supported releases because it is still being used in some CI pipelines to test modules against it.
Now all relevant versions can be installed from the <https://mirror.mage-os.org> composer repository.

Thank you to Daniel Sloof, Flyingmana, and Damian Retzinger for helping to debug some of the issues! Your input was invaluable.

Please join our [discord](http://chat.mage-os.org), say hi in the #tech channel, and join the conversation!


### Mage-OS Magento® Mirror Nightly Builds

So far we haven’t really made the nightly release repository public, and for good reason. Until now every package in a nightly release was given a new version built from the git branch prefix and the current date (YYYYMMDD) as a alpha package number, for example `2.4-a20220721`.

This worked and resulted in an installable release, however, it breaks most composer version constraints of packages built for Magento. The primary use case for nightly builds is testing, and this is very cumbersome with this naming scheme.

So we decided to change this, and instead use the last release version of a package, followed by a fourth part .1 version, followed by the date. For example, the last release for the `magento/framework` package is `103.0.4`. 
The nightly builds of this package will in future have the version `103.0.4.1-a20220721`. This satisfies commonly used composer version constraints like `^103.0.4`, and any package under test can simply be installed without any hassle.

Thanks to Anton, Willem, Simon, Daniel, and Flyingmana (and others whom we might have forgotten) for providing input on this topic. So far most of the implementation has been done by our own Vinai, but we're very open to helping hands. If you're interested in joining the effort, please don't hesitate to reach out!

Once this change is implemented we will post details on how to install a build nightly release, and also how to build nightly releases yourself.


## Organizational topics

### Magento Open Source Content

The content team continues to work on creating content for a Magento Open Source focused website. More content creators are very welcome! Every Monday at 4pm CET we meet to coordinate. Please join our [discord](http://chat.mage-os.org) and visit the #content channel to participate.

### Community

The [Mage-OS Discord](http://chat.mage-os.org) is becoming more lively, which is lovely. Please join and introduce yourself, it is great to see people are interested in an independent Magento Open Source.

Also, we want to have online meetups or town hall hangouts, soon. These will be a great place to get to know each other, ask questions, and hear about what is happening.

Finally, we are using Discords audio and video channels to stream longer dev sessions about once a week. This usually is rather spontaneous, usually during the weekend. Keep an eye out for Vinai or others hanging out in the Watercooler chats, if you are interested to discuss technicalities, pair program, or just watch.


That's all for today!  
Enjoy the week, more news coming soon,

The Mage-OS folks

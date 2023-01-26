---
layout: '@/layouts/post.astro'
date: 2023-01-27
title: January 2023 Updates
description: See the latest on the Mage-OS Distribution, content, community, and association
---

Happy New Year, dear friends!

Over the holidays we took some time to rest and reflect on all that we’ve achieved last year. We hope you found as much energy as we did to help reach your 2023 goals.

While it was quiet on the outside, we still got a lot done, thanks to your contributions.


## Founding the Mage-OS Association

In full transparency, we are still waiting for the Mage-OS Association foundation to be finalized. Our first application and appeal were returned by the court of Warsaw for statutory changes. We’ve been working with our lawyers and the court to resolve the situation. The latest word is the court and our lawyers are treating our case as a top priority, and we hope to have good news soon.

This delay has prevented us from opening a bank account or conducting any business that requires a registered entity. Until then, we aren’t able to open our membership program, or collect or disburse funds to speed up the pace of our activities.

The silver lining is that this has given us more time to prepare the membership program, budget, and plans for the coming year. Here’s a sneak preview of the Mage-OS supporter program badges:

![A preview of the Mage-OS Association's upcoming membership badges, courtesy of Amasty](/blog/2023/2023-01-27-mageos-badge-preview.png)

A massive thank you to Sergej Derzap and the Amasty graphic team for their work designing these badges!


## Technical Update

We have discovered that the nightly-mirror builds are an excellent way to be aware of what is happening inside Magento Open Source.

Recently, an issue in the Magento Open Source repository caused the Mage-OS nightly builds to fail. Adobe implemented a workaround in the 2.4.6 beta builds (outside of the Magento repository), which we have also applied to the nightly builds until a proper and permanent solution is applied.

In brief: A new [Magento_Elasticsearch8](https://github.com/mage-os/mirror-magento2/tree/2.4-develop/app/code/Magento/Elasticsearch8) module is added to Magento Open Source 2.4.6, and requires `elasticsearch/elasticsearch` library version 8. That directly conflicts with the existing `Magento_Elasticsearch7` module, which requires version 7 of the same library. Only one can be installed at a time, so this causes an unresolvable dependency failure and a broken build.

In 2.4.6-beta1, Adobe resolved this by removing the requirement from `Magento_Elasticsearch8`. However, that makes the `Elasticsearch8` module non-functional, because composer will always install `elasticsearch/elasticsearch` version 7. Damien Retzinger opened [an issue](https://github.com/magento/magento2/issues/36687) on the Magento Open Source repository to track and discuss this problem.

These kinds of issues can go undetected for a long time between releases, and this is another reason we are happy to have the nightly builds in place as an early warning system.

During the holiday season most of us involved in the technical development of Mage-OS took a break, though some continued to power on (shout out to Adam Crossland!). Since the new year, momentum has picked up again. Work is progressing on the continuous integration pipeline, which is critical to us accepting contributions to the Mage-OS Distribution.

There is also discussion ongoing about the first new feature we will add to the upcoming Mage-OS Distribution.

We invite you to join our technical meetings every week on Tuesdays at 3 PM CET (9 AM EST) at [chat.mage-os.org](http://chat.mage-os.org)!


## Content Update

Things have been moving along nicely on the new Mage-OS website. The new website will give vital information about Mage-OS and Magento Open Source to merchants and professionals, since such content no longer has a home at Magento.com.

Since the last update, the content team has migrated all content from the existing Mage-OS site, decided on all the additional content we need for launch, added many content pages, and updated the navigation menu following a strategic review.

We’re now working on the final content and design for our initial content site launch. We are hopeful to meet (if not exceed) our target of launching the new site by April.

This has all been achieved thanks to our team of regular contributors. Special thanks to Sergej Derzap (and the Amasty team), Roland Haselager, Neil Khedekar, Aaron Moss, and John Prendergast for their recent contributions. We would not have gotten this far without them.

If you want to get involved, please reach out in the #content room or join our weekly meetings on Mondays at 4 PM CET (10 AM EST) at [chat.mage-os.org](http://chat.mage-os.org). Right now we’re looking for help with:

* Technical content writing about Magento Open Source as a platform/product, and platform comparisons
* Non-technical content writing about the Magento community
* Collating and populating useful resources for merchants, developers, and other Magento professionals
* Creating/adding images, screenshots, and videos to pages to make them visually more appealing
* Some small frontend development tasks to tidy up the theme and improve performance
* 301 Redirects from the old site

If there is something else you feel you can contribute with, please let us know!


## Community Update

As of today, over 600 of you have joined our [Discord community](http://chat.mage-os.org), and nearly 900 are following us on [LinkedIn](https://www.linkedin.com/company/mage-os/). 

A number of localized channels have been created in Discord for the following communities: Netherlands, Ukraine, Poland, France, India, and Italy. If you have a local ecommerce community you're interested in giving a home in Mage-OS, let us know!

The Dutch community has gone a step further, by founding a new Dutch Magento community organization under the name of Mage-OS: [Mage-OS Nederland](https://nl.mage-os.org/). This organization was formally created in December 2022. During the general meeting of Mage-OS Netherlands on January 19th 2023, its new board was installed and consists of Jisse Reitsma, Sanne Bolkestein, Sander de Graaf, Jeroen Boersma, Roland Haselager, Core de Reeper, and Michiel Gerritsen. We hope that the success of Mage-OS NL can serve as a blueprint for other regional groups going forward.


## Mage-OS in the World

Community events and outreach have stepped up in a big way recently, and we thank you all for your interest!

We were delighted to meet many of you at recent events, and thank you for all the great chats and feedback you've given us. Here are some happenings you may have missed:

* [Meet Commerce Spain](https://drive.google.com/file/d/10m_Ni5gA6RyotI-5E1afJIPlGJ5q1vBe/view?usp=share_link)
* JetRails podcast: [Mage-OS - A New Magento Non-Profit For a New Era](https://youtu.be/3b2wb9gioiE)
* CenturiaLive: [A new way to connect with Magento Community: Mage-OS](https://www.linkedin.com/posts/centuria-s-a_centurialive-activity-7005823254049239040-9R8t)
* [Magento Meetup Mainz](https://www.linkedin.com/posts/mage-os_mageos-magento-community-activity-7020451880921112576-_WhX/)
* [Magento Meetup Poznan](https://www.linkedin.com/events/magentopozna-meetup7014236022452457472/comments/)
* The first ever [Mage-OS Meetup, India](https://www.linkedin.com/feed/update/urn:li:activity:7020745173651341313/)
* The foundation of [Mage-OS Nederland](https://www.yireo.com/blog/2023-01-14-quickly-choose-magento-association-or-mage-os)

#### Where will we be next?

* 3rd February 2023: [Meet Magento India](https://meetmagento.in/) – Vinai will give a remote talk about Mage-OS
* 8th February 2023: [Magento Meetup Stuttgart, Germany](https://www.phoenix-media.eu/de/magento-stammtisch-stuttgart.html) 
* 1st April 2023: [MageTitans UK 2023, Manchester, UK](https://uk.magetitans.com/)


That's all for now. Thanks for reading! 🙌🏻

The Mage-OS folks

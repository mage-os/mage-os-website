---
layout: '@/layouts/post.astro'
date: 2022-02-02
title: Mage-OS update January 2022
description: More about the progress of Mage-OS buidling
---

## Mage-OS update January 2022

Dear Magento community members,

It has been a while since you last heard from us. Apart from updates on social media and conferences/discussion panels we haven’t communicated much publicly.

This will finally change today. You may expect regular updates from us, in short or long form. Even if there is little to report on, we will let you know what is being worked on.

There are a couple of things we would like to update you on, and tell you what happened over the course of the past four months.

### There was a lot of talking
When we wrote our letter, it came from concerns around the future of Magento Open Source. There was no clear direction on the Open Source product, especially compared to the amount of communication and marketing around Adobe Commerce.

The community seemed to be slipping away, vanishing into the dark. We believe, in retrospect, that this is the result of two things:

* Leadership at Adobe changed and core members with strategic positions left. There was no replacement for these figures and a lack of business case for further investment into Open Source.
* A growing disconnect between Adobe and the Community has risen, as a result of dissatisfaction around the Open Source contribution model, a lack of communication and a lack of a clear roadmap

We very much believe these two factors played into each other and created a downward spiral.

It seems the open letter broke that spiral. Adobe noticed the community still cared and had a real need for an open strategy around open source and a commitment to the long-term support of Magento Open Source.

As a result, the Open Source Task Force was created by the Magento Association, where the community and Adobe get together to voice these concerns, discuss the future of Magento and find common ground on important issues, to make sure the community can get back on their feet and close the gap between Adobe and the Community.

During a one hour meeting every second week, several topics are being discussed, with mixed results. So far eight calls have taken place, usually joined by about 10 people, of which almost half are Adobe employees. The rest consists of community members (those that are able to join) under which three of our Mage-OS members; Bartek Igielski, Vinai Kopp and Willem Wigman.

Even though there is little publicly visible output coming from these efforts, we believe it has been extremely valuable just to get an alignment on what the community needs from Adobe, and what Adobe is willing to provide.

* Commitment has been made by Adobe to keep investing into Magento Open Source, and ensure us there is no plan for deprecation of the monolith
* The community engineering team will get more resources in the near future
* Adobe has proposed a Community maintained “Short Term Support” (STS) version of Magento Open Source. The plans are still at a very early stage, but they look quite promising. This is a clear signal that awareness of the Community and the importance of Magento Open Source is growing inside Adobe, and - if followed through - would demonstrate Adobe's long term commitment to Open Source. There are many open questions which are being discussed in the task force.
* Luma will be deprecated, but not on short term
* Discussions are ongoing around the possibility of slimming down the core of the Magento Framework to allow multiple distributions in the future.
* Adobe will not provide any marketing around Magento Open Source towards merchants from either magento.com, or the adobe.com website. The magento.com domain now redirects to a landing page at adobe.com with resources around Magento.

It is much clearer now what Adobe’s strategy is regarding Open Source, and that is a big win.

We now feel a lot more confident that Adobe will take care of the basic needs to be able to keep using Magento Open Source for the next couple of years. We can expect full vendor support for critical bugs, stability upgrades and security support.

When Adobe follows through with their suggestion of a Community owned STS version of Magento Open Source, the power of the community and the backing of a large enterprise will enable innovation and growth of the Magento eco-system for many years into the future.

This is all of great value, and an investment from Adobe we should not oversee or underestimate. We are thankful for this support.

It is also now very clear that, even though Adobe takes care of the platform’s basic needs, it will not invest heavily in any innovation or feature development on it. The focus is very much on Adobe Commerce and it’s position in the Adobe ecosystem, building out integrations with other Adobe products and microservices, rather than building new features using Magento (PHP) extensions.

If we want the platform and community to flourish and grow, it will have to come from the community.

So now we know what we are planning for.

### The Fork
A fork was indeed created. Which is not a big thing in itself, since many developers fork Magento on a daily basis. It is even a requirement to be able to contribute to the platform.

What is special about this fork, is that it is tracking changes on the official Magento repositories and automatically updates, then creates meta-packages from the repository and puts these into a distributed repository that can be used with Composer.

Figuring out how to split out the mono-repo from Magento’s repositories and creating packages out of those, mirroring exactly the same output as Magento’s official repository took some time to reverse engineer. And to find the most performant and efficient way to get this done.

We will publish both the fork, the build scripts and all documentation on the process we went through publicly soon. Even though we’ve worked on this in the background, our goal is to be as transparent as possible about what we did and why.

These processes will be up for discussion as soon as we’ve published it and invited anyone interested into our Discord (see “The Community” below).

The Fork is just a contingency fallback for when the day comes large deprecations might happen on the official Magento repository or when those would go away all at once.
You might remember when Magento 1 was deprecated, not only the repository was gone, but also the merchant documentation.

We want to be prepared for any scenario in the future, and have complete ownership over a copy of the product and have the knowledge to maintain such an infrastructure.

This also includes the merchant documentation.

### The Distribution
The interesting part will be the work on our own distribution. We imagine building a version of Magento that allows us a lot more flexibility to evolve.

This would include:
* Removing optional functionalities in core, such as a choice between mysql search or elastic search, or removing MSI (Multi Stock Inventory) by default
* Implement bug fixes faster
* Implement performance improvements faster
* Include new features
* Repackage Luma into an LTS version, removing Luma from core by default

And many other things we can’t even think of at this stage. It should allow us to do experiments again, and bring back innovation to the platform.

Since the proposed Magento Open Source STS version is not yet realized, we believe we need to move forward with Mage-OS. Any work we do will be able to flow back into Magento STS when it exists and is in the hands of the community.

The community needs an initiative to keep the dialog with Adobe alive and growing.

### The Community
The community needs a big shift. We’ve gotten caught up in negativity and got tired of the push back we got from those that got burned by the release of Magento 2.

Yes, we can safely state that the initial release of Magento 2 was premature and caused damage to many members of our community. Merchants, agencies and developers all alike.

Many of those that were hurt during that period are no longer part of our community, based on their experiences from that moment in time, which is understandable.

Today however, Magento 2 is in fantastic shape, thanks to a lot of effort put in by both Adobe and the community. The platform has never been more flexible and stable, filling all merchants' needs.

So what our community needs is a new sound that resonates with today's state. And leave the past behind us.

We have a vibrant community with businesses, people and families that are building their livelihoods on Magento offering Integrations, Extensions, Hosting, Payments, Marketing services and so much more.

We have everything we need, right in front of us. Positivity in our ecosystem will go a long way.
New merchants are offered the choice for a platform every day, new students become professionals and new agencies grow out of those students every day.

The eCommerce industry keeps growing, and every platform keeps growing. The only thing we need to do is to get together and start moving.

We need Magento events to make a comeback, educate and welcome newcomers, celebrate our victories and help each other out, sharing solutions to our common problems as we’ve done for over a decade.

Mage-OS will open up to the public using Discord.com as a communication platform, where we would like to welcome you and exchange ideas on how to start defining the future of Magento.

We will publish the access information to this environment on our website and newsletter as soon as we’ve made it available.

### The Magento Brand
Adobe owns the rights to the Magento brand. They also decided not to market the Magento brand any longer.
The Magento Association owns the rights to a subset of the Magento brand, for a limited amount of time. This means that we have very limited control over the brand.

And that is okay. We will make our best effort to provide the branding around the product and make it clear it is the same product without violating intellectual property.

Mage-OS will be the name of our initiative, and the distribution we will build. Additionally, we’ve started working on a branding and content strategy.

We will make sure merchants have a place to go to and learn about the Magento platform and its capabilities.

### The Mage-OS entity
We’ve also set up a working group to focus on an official entity for Mage-OS. This will include the organization structure, strategy, funding, partnerships and all that comes with that.

There are currently two weekly meetings: one technical meeting and one organizational. The form in which these meetings are being held is temporary until we’ve set up the basics and feel we have the capacity to expand more globally. When we open Discord up to everybody, we welcome new members to participate in these meetings, too.

We are very much aware of the closed nature of our current organizational structure, which is absolutely not meant for the long term. It merely exists in this form because we tried to stay small and regional to be able to move fast and plan meetings in the same time zone. We’re implementing a code of conduct and will focus on diverse representation in the organization as soon as possible.

### Next steps
We’re planning to start bringing out regular updates on progress. Please make sure you are on [our mailing list](#newsletter) if you want to be updated on our next steps, which will include:
* Open access to Mage-OS Discord
* Public access to the Mage-OS fork
* A new website to replace the current mage-os.org site with background information, a blog and merchant information about Magento
* Progress updates on the Mage-OS distribution

[Sign up to our mailing list here](#newsletter)

Thank you,
The Mage-OS team,

* Willem Wigman, Hyvä Themes B.V.
* Vinai Kopp, Hyvä Themes B.V.
* Andreas von Studnitz, integer_net GmbH
* Fabian Schmengler, integer_net GmbH
* Ignacio Riesco, Interactiv4 S.L.
* Óscar Recio, Interactiv4 S.L.
* Peter Jaap Blaakmeer, elgentos
* Wouter Steenmeijer, elgentos
* Jeroen Boersma, elgentos
* Kuba Zwolinski, snow.dog
* Kamil Balwierz, snow.dog
* Bartek Igielski, snow.dog
* Simon Sprankel, CustomGento GmbH
* Ryan Hoerr, ParadoxLabs, Inc
* Thien-Lan Weber, OneStepCheckout
* Alessandro Ronchi, Magento Community Maintainer
* John Hughes, Fisheye Media Ltd.
* Tomas Gerulaitis
* Ivan Chepurnyi, EcomDev B.V.
* Maciej Kalkowski, Centuria sp. z o.o.

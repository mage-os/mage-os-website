---
layout: '@/layouts/document.astro'
title: Product Vision
description: Our vision for the Mage-OS branded distributions
---

This document describes the current short to mid-term desired state of the Mage-OS distributions. This is what we are working toward.

Details are subject to change, but the gist should remain the same.

Mage-OS is a collection of Magento distributions. Each distribution can be thought of as a different flavor of Magento, optimized for a specific set of requirements.

## The Magento mirror repository

The mirror repository is a clean, unchanged copy of Magento Open Source. Whenever Magento publishes a release, we will rebuild the same release from sources for the mirror repository.

The difference between the mirror repository and Magento Open Source are:

* It is built based on git repositories mirroring the upstream Magento repositories.
* The build scripts that create the individual composer packages and the meta-package are custom and open source.
* It is distributed using an independent composer repository that can be accessed without authentication.

Mirror repository packages are interchangeable with Magento Open Source packages. The only difference is the composer repository from which the packages are obtained.

The purpose of the mirror repository is to ensure the independence of the upstream infrastructure. In the event that the Magento Open Source repository becomes unavailable or shut down, all the infrastructure is in place to ensure continued access and distribution. Learning to build and maintain the infrastructure is explicitly one of the goals of the mirror repository.

This has been completed. [Mirror repository details](/distribution#magento-mirrors)

## The Mage-OS core distribution

The Mage-OS core distribution will be an upstream compatible metapackage based on Magento Open Source. Think of it as an independent version of Magento--based on Magento source code, but including additional changes specific to Mage-OS.

The core distribution will be built from a fork of the mirror git repositories.

The difference between the Mage-OS core distribution and the Magento mirror repository is that the Mage-OS core distribution includes changes to the upstream.

Every change will be carefully evaluated in terms of upstream compatibility.

The purpose of the Mage-OS core distribution is to provide

* Improved decoupling of packages
* Improved developer experience while working with the product
* Improved developer experience while contributing to the product
* Full compatibility with Magento extensions
* Focus on additional security
* Reduced infrastructure stack dependencies
* Low-level code improvements, for example in the areas of code generation and caching
* Removal of most bundled extensions contained in upstream (they can still be independently installed if desired)
* A simple documented migration path to Magento Open Source or Adobe Commerce

Mage-OS core distribution releases are made independently of upstream releases. This enables it to move faster when desired, for example when enabling compatibility with new PHP versions.

New upstream releases will trigger a new Mage-OS core release, once all changes have been rebased onto the new upstream release. Because the Magento mirror is constantly synchronized, this will be an ongoing process, not a big rebase when an upstream release happens.

New functional features will be introduced only through independently installable modules, in other words, no new functional features will be introduced in the Mage-OS packages that are based on the upstream. This follows the same decoupling approach that Adobe Commerce is using, allowing for a more stable core and an independent feature module release schedule.

The goal of the reduced infrastructure stack dependencies is to enable new developers to be onboarded more easily. The desired target is to be able to use a plain XAMPP stack on any machine, including Windows, to run and develop with Mage-OS. This requires making Elasticsearch optional, as well as ensuring services like Redis, RabbitMQ, Node.js and such remain optional.

Mage-OS will maintain backward compatibility and the ability to migrate upstream at multiple levels:

* Compatibility with third-party extensions
* Database level compatibility (data and schema)
* API stability

## The Mage-OS flavored distributions

The Mage-OS flavored distributions will be composer metapackages that bundle packages of the Mage-OS core for specific purposes. For example:

* The Mage-OS headless distribution might contain no storefront theme
* The Mage-OS minimal distribution might contain only a minimal set of packages to enable building lightweight applications
* The Mage-OS headfull distribution might contain no GraphQL packages

Each will have pros and cons, to be considered by the developer choosing to use one. That being said, it will be relatively simple to switch from one 'flavor' to another, or to the full core distribution.

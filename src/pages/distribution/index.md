---
layout: '@/layouts/document.astro'
title: Mage-OS Distribution
description: Mage-OS Distribution
---

## About the Mage-OS Distribution

Mage-OS is an upstream compatible, lightweight composition of Magento Open Source packages. Some of those packages will contain changes, and some will be entirely new. We aim to keep it compatible with all existing Magento 2 extensions and integrations to the greatest extent possible.

What differentiates Mage-OS from Magento Open Source and Adobe Commerce?

* Independent and community-driven
* More accessible to developers and contribution
* Lightweight package selection by default
* Simple migration to and from Magento Open Source

[Read our product vision for the Mage-OS Distribution](/distribution/product-vision)

## Installation

The Mage-OS composer repository is located at [repo.mage-os.org](https://repo.mage-os.org). This is not yet ready for production use, but will be the eventual source for Mage-OS releases.

We have not yet published a Mage-OS distribution release, but we hope to soon.

<!--
## Mage-OS Mirrors

The following have graciously hosted public mirrors of the Mage-OS distribution:

- US: ...
- EU: ...
-->

----

## Magento<sup>®</sup> Mirrors

You can obtain Magento packages through these Mage-OS-built Magento mirror repositories for composer:

- EU: [mirror.mage-os.org](https://mirror.mage-os.org) *(Mage-OS)*
- EU: [mage-os.hypernode.com/mirror/](https://mage-os.hypernode.com/mirror/) *(Hypernode)*

These can be used to install Magento Open Source 2.4+ without authentication. For example, to install `magento/project-community-edition` 2.4.4 in your working directory:

```bash
composer create-project --repository-url=https://mirror.mage-os.org/ magento/project-community-edition:2.4.4 .
```

### Magento Mirror Repository Generation

You can create your own Magento mirror with self-built packages, using the mirror repository generator found at [github.com/mage-os/generate-mirror-repo-js](https://github.com/mage-os/generate-mirror-repo-js).

Generating from scratch takes about 1.5 hours on a low-end server (2G RAM, no swap). We are actively improving the tool to make it faster and more usable, however, we expect alternative implementations to be the primary tooling in the future for performance reasons. The current JavaScript-based implementation was started as a research project into minimizing dependencies.

If you publish a mirror, please let us know to add it to the list above!

----

## Roadmap

Mage-OS is community maintained and community developed, so to some extent the direction depends on what people contribute.

Our first priority is to get an independent distribution live, then iterate on that to improve simplicity and performance in a backwards-compatible way.

Stay tuned, or [start contributing](/get-involved) to help set the roadmap!

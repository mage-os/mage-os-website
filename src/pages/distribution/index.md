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

## Installation

The Mage-OS composer repository is located at [repo.mage-os.org](https://repo.mage-os.org)

## Mage-OS Mirrors

The following have graciously hosted public mirrors of the Mage-OS distribution:

- US: ...
- EU: ...

## Magento<sup>®</sup> Mirrors

In addition to the customized Mage-OS distribution, we have developed independent builds of the Magento software packages from the source repositories.

You can obtain packages through the following public Magento mirror repositories for composer:

- US: ...
- EU: [mirror.mage-os.org](https://mirror.mage-os.org)
- EU: [mage-os.hypernode.com/mirror/](https://mage-os.hypernode.com/mirror/) *(Hypernode)*

These Magento mirrors can be used to install Magento Open Source 2.4 or above without authentication. For instance:

```bash
mkdir magento-mirror-244
composer create-project --repository-url=https://mirror.mage-os.org/ magento/project-community-edition magento-mirror-244 2.4.4
```

### Magento Mirror Repository Generation

You can create your own Magento mirror with self-built packages, using the mirror repository generator found at [github.com/mage-os/generate-mirror-repo-js](https://github.com/mage-os/generate-mirror-repo-js).

The generation from scratch takes about 1.5 hours on a low-end server (2G RAM, no swap). We are actively improving the tool to make it faster and more usable, however, we expect alternative implementations to be the primary tools in the future. The current JavaScript-based implementation was started as a research project into minimizing dependencies.

## Roadmap

Stay tuned, or [join us on Discord](https://discord.gg/nvZDVA2NdC)!

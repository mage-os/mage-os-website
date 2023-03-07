---
layout: '@/layouts/post.astro'
date: 2023-02-28
title: Dependency Graphs, Website, and more
description: An update on Mage-OS NX dependency graphs and the upcoming website
---

## Product Update

See [Adam Crossland](https://www.linkedin.com/in/ACoAABVdXVwBWm0JxapAOsPq629nbfblC5TKxhM)'s NX demo for a sneak peek of where Mage-OS tech is headed.

Adam Crossland and Damien Retzinger have been working on using a tool called NX to build a dependency graph of all code in Mage-OS. This graph lets us use code or commands to trace the files and modules that each bit of code depends on.

Using this, we can identify the exact modules that are affected by each contribution to Mage-OS. That means we can run only the code tests that are relevant to a pull request, which will make for a much faster contribution and testing cycle! The full testing suite takes many hours to complete, so being able to run only part of them will be a huge improvement for everyone.

In the short term, we are creating GitHub Actions that use the graph to run fast unit and integration tests of all changes.

Long-term, we intend to use this work to simplify the dependency graph by decreasing the dependencies between different modules in Mage-OS. That will have all sorts of benefits, especially for being able to only install the modules you need for a specific site.

This is a big step toward enhancing Mage-OS for composable commerce.

[Watch the Mage-OS NX graph demo](https://www.youtube.com/watch?v=seMz0iCs5Jo)  
[![A preview of the YouTube video demo showing NX usage with Mage-OS](/blog/2023/2023-02-28-nx-graph-demo.png)](https://www.youtube.com/watch?v=seMz0iCs5Jo)

## New Website

We're making significant progress on the new website for [Mage-OS](https://www.linkedin.com/company/mage-os/) which includes essential information about Magento Open Source. This content has been sorely missing for many years, especially since [magento.com](http://magento.com/) was discontinued.

This wouldn't have been possible without the help of so many great people in our community 🙌

Thanks to the many who have contributed over the past few months to help get to a point where we are nearly ready to launch! 

* [Arron Moss](https://www.linkedin.com/in/ACoAAATSFqoBN1V9bIVbizRHk-_tOmWx8V_GNCs)
* [Indraneil Khedekar](https://www.linkedin.com/in/ACoAACqTMmMBKWyikCW-la83TB30tCCxFUOmI2c)
* [John Hughes](https://www.linkedin.com/in/johnhughes1984/)
* [John Prendergast](https://www.linkedin.com/in/ACoAAAIKKTQBRsxSIqAIFG5ANnsMCO2U64tXIkM)
* [Nicole Mentzen](https://www.linkedin.com/in/ACoAAARV5a0BDpADrwyrN7JhQA511uOzyW9Sqtk) 
* [Reuben Southall](https://www.linkedin.com/in/reuben-southall-1b95b5162/)
* [Roland Haselager](https://www.linkedin.com/in/ACoAAANEB1YBd8wn7x88ltRzvcHTz2fnB0QurAY)
* [Ryan Hoerr](https://www.linkedin.com/in/ACoAAAMP6kYBs22BgReRp1jseVbSNvFH79x592Y) 
* [Sergej Derzap](https://www.linkedin.com/in/ACoAAAOF4GABdf-dRxjOwjttBs7Wn0O0Y0osnKM)
* [Thien-Lan Weber](https://www.linkedin.com/in/ACoAAAAHT_8Bn4rNTZL-Ff82Yi-RhBzlTOo2nDI)

We plan to launch the new site before the end of March.

![A preview of the new Mage-OS website](/blog/2023/2023-02-28-new-website-preview.png)

If you want to help out before it launches, head over and say hello on the content channel on our Discord server. 👋

[http://chat.mage-os.org/](http://chat.mage-os.org/)

We'd highly value additional case studies, community stories, and pictures, so that the website represents us all!


## Association Status

As a follow-up from last month: our lawyers made the appeal, gathered signatures from all founding members in Poland, and resubmitted our case to the court. We hope to have great news to share next month.

Again thank you everyone for your support in the various work streams and on social media. We've exceeded 1,000 followers on [LinkedIn](https://www.linkedin.com/company/81885701), and 700 members on the [Mage-OS Discord](http://chat.mage-os.org). Join us if you haven't already!


That's all for now. Thanks for reading! 🙌🏻

The Mage-OS folks

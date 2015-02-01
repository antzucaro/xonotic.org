---
author: merlijn
comments: false
date: 2012-07-29 17:32:53+00:00
layout: post
slug: heads-up-for-osx-mountain-lion-users
title: Heads up for OSX Mountain Lion users
wordpress_id: 2865
categories:
- Announcements
- Development
tags:
- mac
- mountain lion
aliases:
- /2012/07/heads-up-for-osx-mountain-lion-users
---

A couple of days ago Apple has presented their latest version of Mac OS X: Mountain Lion (10.8). This latest release adds quite a few security measures, which can affect the use of Xonotic. In this post I'd like to address these issue and how they can easily be solved.

For users downloading a fresh copy of Xonotic from our website, they will get an error when trying to start the game for the first time. The error looks like this:

[![](/m/uploads/2012/07/Screen-Shot-2012-07-29-at-7.21.43-PM.png)](/m/uploads/2012/07/screen-shot-2012-07-29-at-7-21-43-pm.jpg)

This is the new Gatekeeper verifying downloads when starting them for the **first time**. The simple solution is to right-click the Xonotic application, and select 'Open' - you will now be presented with a window where you can choose to specifically trust the Xonotic application (yes, you can trust us ;-). After doing this once, you can simply start the application the next time by clicking it directly.

The alternative is to disable Gatekeeper altogether, which can be done under the Privacy & Security tab in the System Settings. We however do not encourage you to do this, as the workaround to whitelist specific applications is pretty easy.

For users running from git, we are still working out the kinks in order to be able to properly download and compile in Mountain Lion. Please get in touch with us on IRC if you have specific issue and we can look into it.

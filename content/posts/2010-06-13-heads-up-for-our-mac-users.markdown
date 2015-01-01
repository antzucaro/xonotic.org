---
author: merlijn
comments: true
date: 2010-06-13 19:11:34+00:00
layout: post
slug: heads-up-for-our-mac-users
title: Heads up for our Mac users
wordpress_id: 275
---

In the past few weeks I've been taking a stab at all the Mac specific stuff for Xonotic. Most of these changes will probably go unnoticed for the majority of our players, but for the sake of documentation I will post some details about what I've done.

Let's start out with the good news, all of the libraries have been updated to the latest versions and are now all capable of running as 64-bit (x86_64). For many Snow Leopard users this will mean easier compilation and we will be able to include 64-bit binaries in our future releases. Furthermore we are switching to the SDL interface as the default for OSX now, largely because it is easier to maintain and there is very little difference in performance these days. The `all' script automatically selects SDL already, however you can choose AGL by means of `./all compile agl' and `./all run agl' if desired.

The reason why we're moving away from AGL is that the interface has massively changed in Snow Leopard, and currently AGL doesn't even compile on Snow Leopard. In fact this is unlikely to ever get fixed, as it would require the rewrite of a large portion of the code. This really only makes AGL an option for those of us still on Leopard.

Due to the 64-bit capability, we've also had to drop support for OSX 10.4 Tiger. I suspect everyone who likes gaming on his Mac does not run Tiger any more, and even PPC users can still upgrade to Leopard (Yes, we still support PPC).

With all of these changes, it has also become pretty easy to run Xonotic from GIT on your Mac. You will still need to install XCode and the SDL framework, but that's pretty simple. More information can be found on the [wiki page ](http://dev.xonotic.org/projects/3/wiki/Repository_Access). If you run into any trouble, please let me know.

Merlijn Hofstra

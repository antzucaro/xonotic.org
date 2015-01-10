---
author: FruitieX
comments: true
date: 2010-05-31 15:42:57+00:00
layout: post
slug: first-development-update-theres-a-lot-to-mention
title: First development update - There's a lot to mention
wordpress_id: 156
categories:
- Development
---

### Intro

As you can see it's finally possible for us to post news updates about the project! The news site apparently had some problems, and with our web developer busy there was no way to write news here. That doesn't mean nothing happened though, if you have been reading GIT log there's been a lot going on "behind the scenes" if you want to call it that :) The project has been going forward at a fast pace thanks to the great community of contributors that we have.

I'll start out in a little bit of a rush, trying to sum up the most important development that has been going on in the project, from the view of a busy developer who is just getting back into contributing actively :)
  

### Player models

{{% polaroid
   "http://pics.nexuizninjaz.com/images/f6i2wct8fna1tvux1q.jpg"
   "http://pics.nexuizninjaz.com/images/f6i2wct8fna1tvux1q.jpg"
   "Ignis, Female Version"
%}}

The player models are finally getting the update they deserve. Dib and tZork (hope I didn't miss anyone) are working on getting Oblivion's awesome player models working and looking fine in the game. Dib is also working on fixing the weapon scale, which previously was too big.

More screenshots in the [image gallery](http://xonotic.org/media).
  

### Maps

{{% polaroid
   "http://pics.nexuizninjaz.com/images/zkiws2z0x8qekb1hqvj2.jpg"
   "http://pics.nexuizninjaz.com/images/zkiws2z0x8qekb1hqvj2.jpg"
   "WIP screenshot of Glowarena remake by tZork"
%}}

{{% polaroid
   "http://pics.nexuizninjaz.com/images/5n4zm98lx8ympaip0la.jpg"
   "http://pics.nexuizninjaz.com/images/5n4zm98lx8ympaip0la.jpg"
   "WIP screenshot of Space Elevator by FruitieX"
%}}

{{% polaroid
   "http://pics.nexuizninjaz.com/images/29xg8ajq1cdzrnqk1s4.jpg"
   "http://pics.nexuizninjaz.com/images/29xg8ajq1cdzrnqk1s4.jpg"
   "WIP screenshot of Dance by FruitieX"
%}}

Most of the Nexuiz maps weren't really up to today's quality standards, so the old favorites are being remade by mappers like tZork, Cortez, sev, FruitieX (me), Cuinnton and others. Currently it _looks _like at least the following maps will have remakes: Glowarena (tZork), Dance (FruitieX), Space elevator/Gasolinepowered (Cuinnton/FruitieX), Aggressor (FruitieX) Stormkeep (FruitieX), Runningmanctf (FruitieX, I'm promising much here :D), Downer (Cortez), Evilspace (Cortez), Soylent (sev), Castles (Cuinnton), Space CTF aka cb_ctf1 (C. Brutail) and probably more that I've missed :). Aside from remakes, I'm also seeing brand new maps appearing in the forum, and even in the repo (condemned_castles by MooKow). Which of these that appear in the initial release is something I have no idea about yet :)

### Code

There's quite a lot going on code-wise. This is probably the part that's the most invisible to people in the community that do not hang around irc channels all the time, or read git log. We have been seeing big and important changes taking place, made possible much thanks to the switch to git: The developers aren't all tied to work in one place, in the stable "branch" anymore as they pretty much were in svn, now they can simply create a branch even for their most experimental changes. This enabled huge changes such as CSQC players to be possible to develop in parallel to other smaller things: that (as of today) still experimental stuff does not interfere with the rest of the development. When finished that should give us better animations, better prediction code, better compatibility to future versions (new physics code can simply be sent by the server, as opposed to now when you need an engine update) among other things. Also, Taoki has been working on adding more natural animations for the 1st person weapon models when moving the view around, similar to what most other modern fps engines are doing.

### HUD

Another immediately visible thing in the initial Xonotic release should be the completely new HUD system, developed and initially brainstormed by me and Dib: the "Panel HUD". It takes each HUD element and divides them into rectangular panels, each panel freely movable and resizeable with the mouse cursor, similar to how you manipulate your windows on your computer. Thus you'll be able to create your own HUD layout easily, and with some extra effort and image editing skills, your entirely own skin. The default layout/skin has not been decided on yet, it's up to the community to provide the best!

{{% youtube Ac3197XbkkM %}}

{{% polaroid
   "http://pics.nexuizninjaz.com/images/hph3jau64w6eewq9dnl.jpg"
   "http://pics.nexuizninjaz.com/images/hph3jau64w6eewq9dnl.jpg"
   "WIP Panel HUD skin by sev"
%}}

### Menu

{{% polaroid
   "http://pics.nexuizninjaz.com/images/pj13gstvgqpbamgxrxzm.jpg"
   "http://pics.nexuizninjaz.com/images/pj13gstvgqpbamgxrxzm.jpg"
   "WickedX menu theme, also by sev"
%}}

We've also had a menu uplift, with new animation code by esteel and the new default menu theme looking like this:

### Physics/balance

Other interesting changes include an update to the physics config, which now allows for circlejumps and more controlled strafe turning. divVerent has also tweaked them to remove exploits such as strafebots from being used. Doublejumps are an option still discussed, but before they are enabled by default "the code has to be more mature".

A subject that's currently discussed a lot about is the weapon balance, with many contributors having their own set of weapon settings. There's not much to say about any kind of "official" balance yet, but it seems like it is going to differ from the Nexuiz balance a bit. Personally I hope that we'll get as unique weapons as possible, with each weapon having it's own uses that differ from the others as much as possible, which was a little bit of a problem in the Nexuiz balance.

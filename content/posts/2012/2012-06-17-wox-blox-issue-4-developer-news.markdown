---
author: C.Brutail
comments: false
date: 2012-06-17 20:26:08+00:00
layout: post
slug: wox-blox-issue-4-developer-news
title: 'WoX-BloX Issue #4: Developer news'
wordpress_id: 2525
---

Welcome to the 4th issue of Wox-BloX! It's been a while since we gave word about the project, but fear not, it's not because we didn't do anything remarkable or have been resting on our laurels! 
Xonotic 0.6 got a very good reception, with coverage on various gaming sites. Since the release, the game has been downloaded **over 43000 times** from xonotic.org. We now have around **1000 active players, 29 of which are playing at any given time** (at least that’s what our stats tell us). 
This is still not the end of the road, as Xonotic is still far from perfect on numerous aspects. There's no ETA for a new release, but I can already tell you it'll have a lot of long awaited and interesting features, raising the high bar set by 0.6. Let's go over what happened with the game since the latest official release!

[
![](http://www.xonotic.org/m/uploads/2012/06/wazzup_with_development-500x400.jpg)](http://www.xonotic.org/m/uploads/2012/06/wazzup_with_development.jpg)

## **New Weapons design**

Listening to various sources of feedback from inside and outside the community, **Xonotic’s weapons are being re-designed**. The idea is to bring the default game down to only **8 core weapons**: a spawn weapon, the Nexrifle, a lightning gun (aka. **Arc Cannon**), the Rocketlauncher, the Crylink, the Mortar, the Electro and the Hagar. The goals for this consolidation are to remove redundancy, improve on usability, simplify overly complex designs, and generally streamline the system to be more consistent and logical. For competitive players, this will be absolutely essential because it provides features and ideas they've been requesting for ages. It will make the game less confusing and messy for casual players as well. The first step towards this redesign was to move the "gimmick" weapons (Mine Layer, Sniper Rifle, H.L.A.C., T.A.G. seeker etc.) into a game mutator, now known as "**new toys**".

[
![](http://www.xonotic.org/m/uploads/2012/06/xonotic20120614165646-00-500x400.jpg)](http://www.xonotic.org/m/uploads/2012/06/xonotic20120614165646-00.jpg)

The second step is already in the works by **Samual**, who made the 0.6 weapon balance. The basic concept for starters is to merge the two current spawn weapons (the Shotgun and the Laser) into only one, but keeping all the aspects of the two guns: hitscan spread spawn/finishing weapon, laser jumping tool, and melee capability. Further plans include removing the Machinegun (replaced by the Arc Cannon), and the Nexrifle getting its own ammo type. The shotgun’s ammo will also be removed as it becomes obsolete. 
For more information regarding the weapon re-design, check out it's [official thread](http://forums.xonotic.org/showthread.php?tid=3029) on our forums.

## **Simple Items**

**tZork** implemented the quite popular feature among more competitive players known as "Simple Items,” known from Quake3 and QuakeLive for example. But what are "simple items"? The function of simple items is to replace weapon pickup and item models with a simple sprite image that faces the player at all times. 

The sprite models are made by K__, who made a streamlined set of simple items:

[![](http://www.xonotic.org/m/uploads/2012/06/simple_items-500x375.jpg)](http://www.xonotic.org/m/uploads/2012/06/simple_items.jpg)

To learn more, take a visit to the [Simple items](http://forums.xonotic.org/showthread.php?tid=2766&page=5) thread on our forums.

## **XonStat updates**

**Antibody**, "the Chuck Norris of databases", continues to maintain and further develop our global statistics tracking system, Xonstat. Changes include accuracy and effective damage graphs, favorite map tracking per-player, and ranking information on the player info page (stats.xonotic.org/player/). 
The first graph shows a player's average accuracy for a given weapon along with the accuracy for that weapon for up to the past 20 games. The graph replaces what was once a big table of numbers containing the accuracy and damage details. One thing to note is that a weapon won't show up under the graph until the tracked player has used it five or more times in the past 90 days. 
The second graph shows the effective damage a player dealt per splash damage weapon (Rocket Launcher, Mortar, Electro, etc.). Missed shots (eg. spam) don't count, so with this new graph you can really keep track of how well you're on target.

[![Click on the graph for more images!](http://www.xonotic.org/m/uploads/2012/06/0505_accuracy_after-500x187.jpg)](http://www.xonotic.org/m/uploads/2012/06/0505_accuracy_after.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/20120616_xonstat_dmg_graph.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/20120618_ranks.jpg)

Note: if you happen to loose your player key file (key_0.d0si), and you'd like merge the new one with the old, simply write an email or pm to either [Antibody](http://forums.xonotic.org/member.php?action=profile&uid=530) or [Mirio](http://forums.xonotic.org/member.php?action=profile&uid=213) on the Xonotic forums. They can consolidate your player data so all stats information is stored under one account.

## Item timers for spectators

Thanks to **terencehill** the HUD has a new **important items timer panel** that can only be enabled and seen in spectator mode. The new panel, as its name suggests, prints out the the time remaining in seconds for spawn of the most important items like the Mega Health, Mega Armor, Strenght etc. As usual, the panel has lots of configuration options, so one can fine tune its layout and information printout for personal taste.

[![](http://www.xonotic.org/m/uploads/2012/06/xonotic20120615234247-00-500x400.jpg)](http://www.xonotic.org/m/uploads/2012/06/xonotic20120615234247-00.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/xonotic20120615230334-00.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/xonotic20120615230325-00.jpg)

The branch is still heavily experimental and could contain bugs, so until it hits master, you can try it out by checking out the branch: 
[xonotic/xonotic-data.pk3dir.git/terencehill/itemstime](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/terencehill/itemstime;js=1)

## Cubemap reflections on playermodels

Further boosting the impressive visual quality of Xonotic, **MirceaKitsune** added cubemap reflections to the playermodels. As the change cannot be well shown with only screenshots, check out the video below to see the new, shiny looks of our playermodels!

<object style="visibility: visible;" id="vvq-2525-youtube-2" data="http://www.youtube.com/v/hxuIKk189dI&amp;#038;rel=0&amp;#038;fs=1&amp;#038;showsearch=0&amp;#038;showinfo=0" type="application/x-shockwave-flash" height="385" width="640"><param value="opaque" name="wmode"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"></object>

The merge request for the cubemap reflections is already done. If you'd like to take a sneak-peak before it reaches master, do a git check out on: 
[xonotic/xonotic-data.pk3dir.git/mirceakitsune/player_cubemaps](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/mirceakitsune/player_cubemaps)

## Bezier curves for func_trains

Again, **MirceaKitsune** coded with help from **divVerent** a mapping feature, that allows func_train entities to use bezier curves for trajectory and rotation. The code is already merge requested, so expect this functionality to show up in later releases. If you'd like to try it out before that happens, do a git checkout on:
[mirceakitsune/func_train_beizer_curve](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/mirceakitsune/func_train_beizer_curve;js=1)

and dowload the pk3 of the [example map](http://beta.xonotic.org/autobuild-bsp/city_new-york-full-5873b14a2a35a280e41f6005fe0106556bf9a547-07de2bd22bf0cf9cde26891013c6bd6183223b28.pk3):

<object style="visibility: visible;" id="vvq-2525-youtube-3" data="http://www.youtube.com/v/AEfT6LOYm-M&amp;#038;rel=0&amp;#038;fs=1&amp;#038;showsearch=0&amp;#038;showinfo=0" type="application/x-shockwave-flash" height="385" width="640"><param value="opaque" name="wmode"><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"></object>

## New maps: 8-bit Arena and Vociferous

In the [first issue of WoX-BloX](/posts//2011/wox-blox-issue-1-developer-news/), we gave word about **8-bit Arena**,  which is a map built in a very unique 8-bit style with retro gaming references, and homages made to a classic and beautiful era of computer history. It was originally planned to support CTF and Nexball too, but it turned out that the glowy floor-tiles on a larger map would put too much pressure on a server, so those game modes were dropped. Apart from its unique style, the map might be interesting on the technical side for mappers too, as it showcases some mapping tricks never seen in any Xonotic maps before:

  * Bobbing elements that are not func_bobbing entities, so they do not network any data from the server to the clients
  * Warpzones that don't network data, so while they provide seamless transportation, cannot be seen through
  * Floor tiles, that glow when a player steps on them

[![](http://www.xonotic.org/m/uploads/2012/06/8bit_arena1-500x400.jpg)](http://www.xonotic.org/m/uploads/2012/06/8bit_arena1.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/8bit_arena2.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/8bit_arena3.jpg)

![](http://www.xonotic.org/m/uploads/2012/06/8bit_arena4.jpg)

After **C.Brutail** [proposed a new, more collaborative mapping procedure for official Xonotic maps](http://forums.xonotic.org/showthread.php?tid=2875), he started the very first [map incubator thread for Vociferous](http://forums.xonotic.org/showthread.php?tid=3061), which is the WIP title for a new, competitive oriented TDM map. The map is still very early in planning and designing stages, but ideas are already pouring from the more experienced players, so there's big hope that the map will feature a good flow and a well planned tactical layout that is necessary for a competitive map.

## Ending words

Phew, that was massive! I hope we could get you all up to date with this developer blog, and excited about the new features, that Xonotic 0.7 will bring to you! I'm most certain that the upcoming months will be very exciting regarding development, especially because of the new weapon design. Many thanks to **fisume**, who helped me in writing this blog! The next issue of WoX-BloX will be about community news. Stay tuned, and happy fragging!

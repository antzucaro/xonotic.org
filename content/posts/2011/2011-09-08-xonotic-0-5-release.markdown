---
author: Samual
comments: false
date: 2011-09-08 02:34:26+00:00
slug: xonotic-0-5-release
title: 'Xonotic 0.5 Release '
wordpress_id: 953
categories:
- Announcements
- Development
aliases:
- /2011/09/xonotic-0-5-release
---

Today we can bring you some great news, a brand new release of Xonotic! It has been quite a while since the 0.1 preview version, but we have made immense progress over the last few months. In this blog post we'll be showing off the latest improvements and tell you about the changes we made from the feedback we had after the initial release.

Xonotic 0.5 is the pinnacle of years of collaborative work by gamers, for gamers. It is the second game release from Team Xonotic, but it is the first in which we have really solidified our gameplay direction and decided how we want to progress with development. We're still not ready to call it 1.0 yet, as we have quite a few things we'd like done before that. However, we have made a lot of progress since the 0.1 preview, and you may consider this a stable release already, even though there's still plenty of work left to do.

Again there is a lot to tell, so here is the download link and you can read along whilst you're downloading ;-)

### Download Here

[Download via torrent](http://dl.xonotic.org/xonotic-0.5.0.zip.torrent)

[Download via HTTP](http://dl.xonotic.org/xonotic-0.5.0.zip)

MD5: cdadb384ccf9cad926bb377312832c2f

Package size: 943MiB

We have found a better compression method than used for previous release, so the 0.5 release is much smaller than what it would've been with old compression (1.4GB).

You can also download and play this release on Desura:
[![Desura Digital Distribution](http://button.desura.com/play/outline/games/12648.png)](http://www.desura.com/games/xonotic)


### Multi-language support

<ul class="clearing-thumbs clearing-feature" data-clearing> 
  <li class="clearing-featured-img"><a href="/m/uploads/2011/09/english.jpg"><img src="/m/uploads/2011/09/english-200x200.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/german.jpg"><img src="/m/uploads/2011/09/german.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/russian.jpg"><img src="/m/uploads/2011/09/russian.jpg"></a></li> 
</ul>

Localization spanning across the menu and most of the game now allows for easy translation into many different languages! Currently included are German, Spanish, French, Italian, Hungarian, Dutch, Portuguese, Romanian, Russian and Finnish. (Click image to view some examples)

### New and updated maps

<ul class="clearing-thumbs clearing-feature" data-clearing> 
  <li class="clearing-featured-img"><a href="/m/uploads/2011/09/afterslime-1.jpg"><img src="/m/uploads/2011/09/afterslime-1-200x200.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/courtfun-3.jpg"><img src="/m/uploads/2011/09/courtfun-3.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/leave-em-behind-1.jpg"><img src="/m/uploads/2011/09/leave-em-behind-1.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/newtonian-nightmare-1.jpg"><img src="/m/uploads/2011/09/newtonian-nightmare-1.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/runningman-2.jpg"><img src="/m/uploads/2011/09/runningman-2.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/techassault-1.jpg"><img src="/m/uploads/2011/09/techassault-1.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/xoylent-1.jpg"><img src="/m/uploads/2011/09/xoylent-1.jpg"></a></li> 
</ul>

7 new default maps were added the game (afterslime, courtfun, leave_em_behind, newtonian-nightmare, runningman, techassault, xoylent), and many others have been updated with new details and gameplay tweaks. Community mappers have also stepped up to add over 100 additional maps which can be played in the game.

### Vehicles

<ul class="clearing-thumbs clearing-feature" data-clearing> 
  <li class="clearing-featured-img"><a href="/m/uploads/2011/09/xonotic000962.jpg"><img src="/m/uploads/2011/09/xonotic000962-200x200.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/xonotic000963.jpg"><img src="/m/uploads/2011/09/xonotic000963.jpg"></a></li> 
  <li><a href="/m/uploads/2011/09/xonotic000964.jpg"><img src="/m/uploads/2011/09/xonotic000964.jpg"></a></li> 
</ul>

We now have vehicles! They are mostly functional at this point and fairly mature with few bugs remaining. However, we still consider this feature to be experimental, and they will need major rebalancing in the future, so no maps for vehicles are included by default, although a few of the aforementioned community maps support them quite well in CTF and DM.

### Weapons and player movement

<a href="/m/uploads/2011/09/xonotic000966.jpg"><img src="/m/uploads/2011/09/xonotic000966-200x200.jpg"></a>

We have almost completely rethought the weapon balance and part of player physics, enhancing the core elements of Nexuiz' gameplay style which were so fun in the past while also progressing with new features and tactics.

### Technical achievements

There are, of course, a number of other achievements which aren't exactly as major the ones mentioned above but are still quite fantastic and should be noted:
	
  * Optimized post-processing effects, including damage blur and better bloom / HDR. Decals can also be enabled on player models for realistic blood and impact effects.
  * Several new exciting texture packs (including metaltech, stein1, trak6, trak7, exomorph) ready to be used by mappers.
  * Bots now have major AI improvements, including pathfinding, object priorities and movement in general. They also support the Assault game mode now. Included maps were tweaked to have the best possible waypoints for bots.
  * Improvements to how spectating works, now spectators don't go through walls normally and are bound inside the map (though it can be disabled with cl_clippedspectating).
  * Countless updates to how the HUD system works and what it can display, plus a completely new HUD theme to match Luminos menu theme.
  * Updated how waypoints and shownames feature worked. There are now floating names above players, also indicating the health and armor of team mates.
  * Weapon coloring and team coloring is now done almost entirely with glow so that models can now be improved to better match player styling.
  * We have also improved how audio channels are managed. For example,now we can have many separate sounds played for different weapons at the same time without them cutting each other off.
  * Added new game modes and revived some of the older ones. (keepaway, freezetag, assault, etc).
  * New system to manage instant action/bot match creation.
  * Hundreds of bugfixes and code cleanups, including a fix involving a major crash with the Crylink weapon.
  * A large number of old models were replaced or updated, including health models, weapon models, and some other pickup models.  Additionally, new player models bring new animations, and we did a little work regarding how model animation works in the code. (Also detail scaling is now possible on all player models, which can help improve framerate).
  * Entirely new font called “Xolonium” made just for Xonotic, which has a giant range of character support, specifically to allow for multiple languages to work flawlessly.
  * Various soundtracks by community members have been added with the new maps, plus there are several waiting and ready to be added with your own new map.
  * And many others...!

**Known bugs**

Due to a change in the new version of Apple's OS X (Lion), it is not possible to play fullscreen for now. By default it will start windowed, and attempting to set it to fullscreen will give you a completely white screen. This bug is caused by an incompatibility in libsdl, which hopefully will be fixed soon.

### Final thoughts

In the bigger picture, as a descendant of Nexuiz, we are raising the standard for F/OSS gaming by focusing on quality over quantity. Taking the time needed to have the best artwork, design and gameplay possible, relative to the free gaming world. As you can see, we're making huge steps toward this goal, and we would love to for you to enjoy our work. Of course, we also invite anyone to contribute and help us in our quest to create the best possible fast-paced open-source FPS game. Either way, we hope this release will be just as fun for all to play as it is for us to make.

Please spread the word about this release, and let us know any feedback you have about the game. Take a look at the media page for Xonotic content (such as banners, screenshots, videos) for advertising and support.

You can also [report a bug](#) by going to the Redmine [Development Tracker](#) (Development > Report Bug), and join us in discussion on the [Forums](http://forums.xonotic.org) (Community > Forums) or on IRC via #xonotic on [irc.quakenet.org](irc://irc.quakenet.org/xonotic) or [irc.freenode.org](irc://irc.freenode.org/xonotic).

Happy fragging. ;)

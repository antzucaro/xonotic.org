---
author: detrate
comments: false
date: 2010-12-23 20:05:54+00:00
layout: post
slug: xonotic-0-1-preview-released
title: Xonotic 0.1 Preview Released
wordpress_id: 512
categories:
- Announcements
- Development
tags:
- crosshairs
- hud
- maps
- models
aliases:
- /2010/12/xonotic-0-1-preview-released
---

Today is an exciting day for us, as we are proud to bring you the first preview of Xonotic! There is a lot to tell, but since this release has already grown to a whopping 1.3GB - we will provide you with a download link right away. Please continue reading while it downloads. :-)

### DOWNLOAD XONOTIC 0.1 PREVIEW HERE

[Download via torrent](http://dl.xonotic.org/xonotic-0.1.0preview.zip.torrent)
[Download via HTTP](http://dl.xonotic.org/xonotic-0.1.0preview.zip)

md5sum: aafb43893aa66e01488c817e3a60d96d

The last release of Nexuiz (2.5.2) was on the first of October 2009, and when we decided to fork early March 2010 we continued where we had left off with Nexuiz. Large parts of the code, graphics and music have been redone and have improved immensely. In over a year we have managed to make huge progress on pretty much every part of the game.  However this release is still a preview, which means that bugs are likely to exist and that some of our decisions turn out to have unwanted side effects. This first preview also still has a limited number of maps, but we do have many maps being worked on for future releases! In the next sections we will explain what new features are available and the main things that have changed from Nexuiz.

### Performance

Many things have progressed, both in features and graphics, and this usually takes its toll on the speed of the game. We are proud to say that even with the enormous amount of new stuff, Xonotic performs very well on most systems we have tested. One of the things that makes the game feel much more smooth is the change from 20 to 60 server frames per second. We have also been able to merge the D3D code into darkplaces, which has resulted in a fps improvement on all supported OSes!

With all the new graphics you do need more RAM to store these in memory, we consider 2GB RAM a minimum for the normal game, however we also provide versions with compressed textures which are more suitable for lower end hardware.

### Panelhud

One of the most noticeable things is that the way the HUD is shown is now completely dynamic. Everything is divided into panels that can be individually customized and moved around. This way you can create the HUD config that provides you exactly the information you want, and where you want it. There also are various pre-made configurations you can choose from if you don't want to spend the time to tweak everything.

[![](/m/uploads/2010/12/xonotic000132-200x200.jpg)](/m/uploads/2010/12/xonotic000132.jpg)[![](/m/uploads/2010/12/xonotic000133-200x200.jpg)](/m/uploads/2010/12/xonotic000133.jpg)[![](/m/uploads/2010/12/xonotic000134-200x200.jpg)](/m/uploads/2010/12/xonotic000134.jpg)

  

Apart from the HUD, there now is a big set of new and good looking crosshairs. The crosshair now also provides you with more information about several things, like the Nex charge, picking up items and showing from which angle you're being attacked. Updated Crosshairs based on the concepts below:

[![](/m/uploads/2010/12/CrossConcept-381x500.jpg)](/m/uploads/2010/12/CrossConcept.jpg)

### New menu

[![](/m/uploads/2010/11/xonotic_menu_options-200x200.jpg)](/m/uploads/2010/11/xonotic_menu_options.jpg)[![](/m/uploads/2010/11/xonotic_server_list-200x200.jpg)](/m/uploads/2010/11/xonotic_server_list.jpg)

  

The menu theme has been updated and the options have been tuned to better reflect what values players are likely to change. This means that some options that were available before are now only accessible through the advanced menu or by editing the cvars directly.

The server menu now has a few extra logos that can help you to select the server you'd like to play on. The 'AES' symbol means that a server support encryption, the Xonotic logo means it is a 'pure' server and the third logo tells you that a server has IPv6 support.

Pure servers are a new concept in Xonotic, which basically tells you that on this server there are no gameplay changing settings enabled. On these servers you can expect to find a game the way we designed it, however server admins are still free to use their own settings as they like. For consistency, please do let your players know what has changed in the MOTD or server name.

### Physics and balance

The physics and balance have both changed a lot, while still staying true to being a fast paced action game. Movement has been simplified in both the code and in the way it feels, it is now easier to gain speed and to do turns without losing a lot of speed. There is still some benefit to using strafing to gain speed, but this has been lowered to make the game more accessible to new players.

{{% youtube "5SZgyP-0C0Q" %}}

The entire weapon balance has been rewritten from scratch, and while we still have the old weapons, some of them have been given entirely new functions. Others have been tuned to be more balanced in relation to the other weapons. Some of the weapons have also gotten new models and/or textures, and we also have a brand new weapon: the minelayer. (Screenshots can be found of the minelayer below)

This balance part of the preview release is really a test to see how it works out. We have obviously been testing a lot, but this part is likely going to need fine tuning and we need your input to get it right for the final release.

### New player models and animation

The old player models in Nexuiz were quite outdated, so we decided to remove them all and start from scratch. Currently we do not have as many models as we used to, but they are of much higher quality. The animations have also been done from scratch, and they are now well aligned with the player models.

[![](/m/uploads/2010/05/412771687019-200x200.png)](/m/uploads/2010/05/412771687019.png)

[![](/m/uploads/2010/05/9127717046613-200x200.png)](/m/uploads/2010/05/9127717046613.png)

[![](/m/uploads/2010/05/012771705399-200x200.png)](/m/uploads/2010/05/012771705399.png)

[![](/m/uploads/2010/05/412771683267-200x200.png)](/m/uploads/2010/05/412771683267.png)

[![](/m/uploads/2010/05/di-1212771613363-200x200.png)](/m/uploads/2010/05/di-1212771613363.png)

[![](/m/uploads/2010/05/712771685977-200x200.png)](/m/uploads/2010/05/712771685977.png)

  

In addition to the player models, some other models were updated like the flag model, armor models, and a few weapon models.

[![](/m/uploads/2010/12/xonotic-weapon-nex-1st-person-charged-200x200.jpg)](/m/uploads/2010/12/xonotic-weapon-nex-1st-person-charged.jpg)[![](/m/uploads/2010/12/xonotic-weapon-nex-1st-person-200x200.jpg)](/m/uploads/2010/12/xonotic-weapon-nex-1st-person.jpg)[![](/m/uploads/2010/12/xonotic-weapon-nex-200x200.jpg)](/m/uploads/2010/12/xonotic-weapon-nex.jpg)[![](/m/uploads/2010/12/xonotic-weapon-mine-layer-1st-person-200x200.jpg)](/m/uploads/2010/12/xonotic-weapon-mine-layer-1st-person.jpg)[![](/m/uploads/2010/12/xonotic-weapon-mine-layer-200x200.jpg)](/m/uploads/2010/12/xonotic-weapon-mine-layer.jpg)[![](/m/uploads/2010/12/xonotic-armor-chips-200x200.jpg)](/m/uploads/2010/12/xonotic-armor-chips.jpg)[![](/m/uploads/2010/12/xonotic-armor-200x200.jpg)](/m/uploads/2010/12/xonotic-armor.jpg)[![](/m/uploads/2010/11/xonotic_new_flag-200x200.jpg)](/m/uploads/2010/11/xonotic_new_flag.jpg)[![](/m/uploads/2010/12/xonotic000141-200x200.jpg)](/m/uploads/2010/12/xonotic000141.jpg)

  

### New Maps

Xonotic features several remade and brand new maps, many of which are entirely recreated with new visuals and gameplay tweaks. So far we have 4 DM maps and 2 CTF maps, however there are MANY other great maps made for Xonotic which are still waiting to be added that could even be added by a server owner if they want to.

[![](/m/uploads/2010/12/xonotic-map-dance-blue-base-200x200.png)](/m/uploads/2010/12/xonotic-map-dance-blue-base.png)[![](/m/uploads/2010/12/xonotic-map-dance-red-base-200x200.png)](/m/uploads/2010/12/xonotic-map-dance-red-base.png)[![](/m/uploads/2010/12/xonotic-map-g-23-main-room-200x200.png)](/m/uploads/2010/12/xonotic-map-g-23-main-room.png)[![](/m/uploads/2010/12/xonotic-map-g-23-outside-200x200.png)](/m/uploads/2010/12/xonotic-map-g-23-outside.png)[![](/m/uploads/2010/12/xonotic-map-glowplant-inside-200x200.png)](/m/uploads/2010/12/xonotic-map-glowplant-inside.png)[![](/m/uploads/2010/12/xonotic-map-glowplant-outside-200x200.png)](/m/uploads/2010/12/xonotic-map-glowplant-outside.png)[![](/m/uploads/2010/12/xonotic-map-nexball-arena-close-up-200x200.png)](/m/uploads/2010/12/xonotic-map-nexball-arena-close-up.png)[![](/m/uploads/2010/12/xonotic-map-nexball-arena-full-view-200x200.png)](/m/uploads/2010/12/xonotic-map-nexball-arena-full-view.png)[![](/m/uploads/2010/12/xonotic-map-red-planet-blue-base-200x200.png)](/m/uploads/2010/12/xonotic-map-red-planet-blue-base.png)[![](/m/uploads/2010/12/xonotic-map-red-planet-inside-200x200.png)](/m/uploads/2010/12/xonotic-map-red-planet-inside.png)[![](/m/uploads/2010/12/xonotic-map-red-planet-outside-200x200.png)](/m/uploads/2010/12/xonotic-map-red-planet-outside.png)[![](/m/uploads/2010/12/xonotic-map-red-planet-red-base-200x200.png)](/m/uploads/2010/12/xonotic-map-red-planet-red-base.png)[![](/m/uploads/2010/12/xonotic-map-stormkeep-warpzone-1-200x200.png)](/m/uploads/2010/12/xonotic-map-stormkeep-warpzone-1.png)[![](/m/uploads/2010/12/xonotic-map-stormkeep-warpzone-2-200x200.png)](/m/uploads/2010/12/xonotic-map-stormkeep-warpzone-2.png)

  

### Client authentication and encryption

We have created and integrated a new [cryptography library](https://github.com/divVerent/d0_blind_id) which allows both servers and clients to authenticate. Currently this is only used to store records and make them persistent after nickname changes. In the future we can use this system for various other things like statistics tracking and achievements.

Additionally we have added optional AES encryption support, which allows clients to communicate privately to a server. This can be used to prevent various attacks against the udp protocol used to communicate.

### Final thoughts

We hope you will enjoy playing this game as much as we enjoyed making it. Please spread the word about the release, and let us know how you like this preview. Bug reports can go to the development tracker, and discussion can be done on the forums or on irc. You can find us in #xonotic on QuakeNet for discussion, the same channel on freenode is meant for development related chat. Happy fragging.

You can find additional media, including advertisements on the [media pages](/media) (check the menu for subpages) to help spread news and support Xonotic.

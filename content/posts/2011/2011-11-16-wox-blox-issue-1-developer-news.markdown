---
author: C.Brutail
comments: false
date: 2011-11-16 03:33:13+00:00
slug: wox-blox-issue-1-developer-news
title: 'WoX-BloX Issue #1 - Developer news'
wordpress_id: 1346
categories:
- Development
aliases:
- /2011/11/wox-blox-issue-1-developer-news
---

Hello folks!

So, as we've promised, here's the first real issue of WoX-BloX! For those who've missed the [good news](/posts/2011/good-news-everyone/), WoX-BloX translates to "World of Xonotic - Blogs": an insider developer blog for the masses, so you don't have to mess with reading cryptic [git commit logs](https://gitlab.com/groups/xonotic), go treasure hunting in the depths of our [forums](http://forums.xonotic.org), or lurk for hours on the  [developers' IRC channel](irc://irc.freenode.net/xonotic) for information morsels to feed your hunger for Xonotic WIP news (however, you're welcomed to do so, if you want :D ).

![What's cookin', Doc?](/m/uploads/2011/11/woxbloxpress-500x375.jpg)

## Development news

### XonStat

The first and most important news to share is the availability of the long awaited statistics system by Antibody, **XonStat**. It's main purpose is to take game data (frags, deaths, captures, weapon accuracy, etc. etc.) and store them in a way that can be viewed at a later time. The aim of the project is to provide a place where players can see how they improve over time or remember the fun times they had. The main backend of the stats setup is based on a PostGreSQL database of Antibody's design (who is a DBA in real life), and the frontend and submission parts of the application are written in Python using the Pyramid web application framework which is given data transferred by POST requests from authorized Xonotic servers using divVerent's blind_id library. Additionally, because of the private identification of servers/players and security of the system, it makes it that much more difficult to cheat the system which helps keep the statistics clean and free of hacks and otherwise mistakes.

The stats testing system can be found at [http://stats.xonotic.org/](http://stats.xonotic.org/). It's still heavily work in progress and has several flaws - this means that it will be taken down periodically for maintenance and bugfixes. The data being stored there should also be considered temporary, as it will be purged when we go from testing to stable. Still, it is a major step forward with the project and it is important to test and get criticism on during its early developmental stage.

Antibody had a lot help along the way. He received wonderful game icons from JayWalker and a theme from -z-. divVerent, Samual, and FruitieX have all helped getting the Xonotic server code up to par with his enhancement requests. Mirio, asyyy, and Mepper have been great at finding bugs and submitting enhancements. Because of their collective efforts we now have a system that captures accuracy and scoreboard data. Kudos to all these great people, thank you very much guys! Below you can see some of the icons currently used in the application contribute by JayWalker:

![Deathmatch icon made by JayWalker](/m/uploads/2011/11/dm.png)![Capture the flag icon made by JayWalker](/m/uploads/2011/11/ctf.png)![Team Deathmatch icon made by JayWalker](/m/uploads/2011/11/tdm.png)

![1v1 icon made by JayWalker](/m/uploads/2011/11/duel.png)![Last Man Standing icon made by JayWalker](/m/uploads/2011/11/lms.png)![Freezetag icon made by JayWalker](/m/uploads/2011/11/ft.png)

### Speaking of statistics...

We encourage server owners to work with us and help us test the system, and you can help out too by just setting one cvar (console variable) in your server configuration file:

    
    g_playerstats_uri "http://stats.xonotic.org/stats/submit" 

Additionally, there are a few cvars which clients may need to adjust manually if you're playing from the Xonotic 0.5 release... Reason being that these cvars are not default in Xonotic 0.5 release, and you have to set them manually (by dropping down the console with SHIFT+ESC, and typing in these commands). In future releases, we will have these options both in the menu and asked of you the first time you play the game.

    
    cl_allow_uid2name: "1" means your name will be shown, "0" means it will NOT be shown.
    cl_allow_uidtracking: "1" means you will be tracked across games using an ID (called a hashkey), "0" means you will NOT. 

Of course, configure these how you see fit... For testing purposes though, we would appreciate you enabling both of them so we can better work with the data directly.

### **sRGB lightmaps**

There's a major fixing of the rendering of map lighting that divVerent is working on: **sRGB lightmap encoding.** Oh, come on, don't give me that face, I'll explain it right away what it does! In real life, lights have 1/r^2 falloff (and q3map2 emulates that too). This means, if you move away from the light source, the intensity of the light decreases linearly in an exponential way: the double the distance, the quarter the light intensity.

Ok, are you still with me? Good. But, here comes the problem: light values on your screen are not linear. In fact, the quarter the light value is actually 21th (!) the light intensity. This produces overshadowed, and unrealistically sharp lighting in maps. sRGB lighmap encoding fixes this issue, so we'll have more natural, more realistic lights, that modern engines like CryEngine render. Here are some screenshots to demonstrate the effect (before and after).

Note: The greyish tint is actually due to a bug where the lights don't use the proper color tinting values, this bug was fixed by the time of this post, so pay no attention to it for now and simply look at the lighting/shadowing.

[![G-23 without sRGB render #1](/m/uploads/2011/11/3n-200x200.jpg)](/m/uploads/2011/11/3n.jpg) [![G-23 with sRGB render #1](/m/uploads/2011/11/3s-200x200.jpg)](/m/uploads/2011/11/3s.jpg)

[![G-23 without sRGB render #2](/m/uploads/2011/11/4n-200x200.jpg)](/m/uploads/2011/11/wox-blox-issue-1-developer-news/4n.jpg) [![G-23 with sRGB render #2](/m/uploads/2011/11/4s-200x200.jpg)](/m/uploads/2011/11/4s.jpg)

[![G-23 without sRGB render #3](/m/uploads/2011/11/5n-200x200.jpg)](/m/uploads/2011/11/wox-blox-issue-1-developer-news/5n.jpg) [![G-23 with sRGB render #3](/m/uploads/2011/11/5s-200x200.jpg)](/m/uploads/2011/11/5s.jpg)

This might not get fully in our next release, simply because this is not only an engine change, but maps have to be re-lit too to take full effect (adding more targetted spotlight style ligths instead of floating ones).

If you'd like to see this cool new feature for yourself ingame, here are the git branches you need to check out:
[xonotic/darkplaces.git/divVerent/srgbfixes](http://git.xonotic.org/?p=xonotic/darkplaces.git;a=shortlog;h=refs/heads/divVerent/srgbfixes)
[xonotic/xonotic-data.pk3dir.git/divVerent/enable-srgb](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/divVerent/enable-srgb)
[xonotic/xonotic-maps.pk3dir.git/divVerent/sRGB](http://git.xonotic.org/?p=xonotic/xonotic-maps.pk3dir.git;a=shortlog;h=refs/heads/divVerent/sRGB)

### Gamecommand codebase overhauled

Samual ﻿is making the gamecommand system simplier (like "gametype", "cointoss", "gotomap" just to name a few), and improving the help system, plus adding new commands and new features which almost everyone can benefit from. From a developer standpoint, it'll be much easier and cleaner to add new commands once he's fnished this tremendous work. [Here](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=blob_plain;f=qcsrc/server/gamecommand.qc;h=1c69eced60f4c66bbe740a04f6aaaa7352a51a68;hb=refs/heads/samual/updatecommands) you can see an example of the already reworked code for server side commands. If you desire to tinker around with the codebase, here's the development branch:

[xonotic/xonotic-data.pk3dir.git/samual/updatecommands](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/samual/updatecommands)

### New maps: Lightspeed and 8-bit Arena (WIP)

The next release will also have a new map to frag your opponents to fleshy gibs: **Lightspeed** by C.Brutail! The map is a small, 1v1 or 2v2 CTF map, that features brutal fast gameplay and the not yet used [facility114 texture set](http://forums.xonotic.org/showthread.php?tid=337) made by Oblivion. It also has randomly triggered sound effects for lightning, a mapping feature divVerent developed on mapper request especially for this map (in fact, randomisation can be used on all triggers, see entity info or the map sources for explanation and details).

[![Red base of Lightspeed](/m/uploads/2011/11/xonotic000460-200x200.jpg)](/m/uploads/2011/11/xonotic000460.jpg)[![Blue Base](/m/uploads/2011/11/xonotic000464-200x200.jpg)](/m/uploads/2011/11/xonotic000464.jpg)[![Mega health on crossbridge](/m/uploads/2011/11/xonotic000461-200x200.jpg)](/m/uploads/2011/11/xonotic000461.jpg)

[![Blue upper hallway](/m/uploads/2011/11/xonotic000463-200x200.jpg)](/m/uploads/2011/11/xonotic000463.jpg)[![Red Base hallway](/m/uploads/2011/11/xonotic000465-200x200.jpg)](/m/uploads/2011/11/xonotic000465.jpg)[![Blue window](/m/uploads/2011/11/xonotic000462-200x200.jpg)](/m/uploads/2011/11/xonotic000462.jpg)

[![Facility 114](/m/uploads/2011/11/xonotic000466-200x200.jpg)](/m/uploads/2011/11/xonotic000466.jpg)

**8-bit Arena** is a multy gamemod map, still in WIP status. The map will support deathmatch, capture the flag, and nexball gamemods. It was built a very unique 8-bit style with retro gaming references, and homages made to a classic and beautiful era of computer history. The map also features a very cool, conceptual eye-candy element: touch sensitive floor tiles! There's still some quite work left to do on the map, but you can always check out the latest version from the [automatic map compile server](http://beta.xonotic.org/autobuild-bsp/?d). For technical details, see and check out the branch:
[xonotic/xonotic-maps.pk3dir.git/cbrutail/map-8bit_arena](http://git.xonotic.org/?p=xonotic/xonotic-maps.pk3dir.git;a=shortlog;h=refs/heads/cbrutail/map-8bit_arena).

{{% youtube "2mChGS-zAcY" %}}

### New Minstanex-gun model

A new **MinstaNex-gun** model is in WIP for a very long time now, but it seems it'll finally see the pretty lights of a heated minsta battle, replacing the ancient "vacuum-cleaner" mocknamed model (that deadly piece of household machinery has been with us since Nexuiz 1.5 or so!). It was modelled by theShadow, and the texturing is currently under work in LJFHutch's master painter hands. You can see the original concept art and the currently done third and first person view of this mighty weaponry on the pictures below:

[![New MinstaNex - Concept art](/m/uploads/2011/11/minstanexb-500x281.jpg)](/m/uploads/2011/11/minstanexb.jpg)

[![](/m/uploads/2011/11/minstanex08-200x200.jpg)](/m/uploads/2011/11/minstanex08.jpg)

[![Minstanex first person view](/m/uploads/2011/11/minstanex08b-200x200.jpg)](/m/uploads/2011/11/minstanex08b.jpg)

### New game mod and a mutator WIP: Sandbox and Overkill

That's right folks, you've read it right! There's a new gamemod and a mutator in development, and each one is more fun than the other!

**Sandbox** is a one-man project coded by MirceaKitsune.  This gamemod offers you the ability to spawn all kind of models found in the game - place them around the map, recolor or resize them, link them together etc. There's also an internal data storage and a clipboard system, so you can save your modelsets, load them to clipboard, and paste them anytime you want. The mod offers both offline and online play - this gives you the opportunity to share your saved modelsets with the aid of the clipboard with other players on the server! It's still early in development, but MirceaKitsune already made huge progress in just a few days. While it's not yet so flexible as the famous Garry's Mod for Half-Life2,  the project is geared towards further goals like adding physics, predefined clipboard sets for easier model creations, make model bones possible to pose from in-game etc. Below you can see a small video featuring the already implemented and working functions. You can find the sandbox git branch at:
[xonotic/xonotic-data.pk3dir.git/mirceakitsune/sandbox](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/mirceakitsune/sandbox)

{{% youtube "2KFYPQRLLys" %}}

You can try out the mod online at MirceaKitsune's Xonotic server (you need to check out his branch first, and recompile your engine in order to be able to play). For more info on the mod, check out it's [developer thread on the Xonotic forum](http://forums.xonotic.org/showthread.php?tid=2266)

Last, but not least, here comes the big bang mutator from the coding master tZork and the artisan modeller Morphed:

**OVERKILL**

Overkill is like Xonotic on steroids (can you imagine that?!):  you only have 3 brutally overpowered weapons - the nex, the shotgun, and the machinegun. All the weapons have infinite ammo, but they have to be reload once in a while. The secondary firemodes of the weapons have been replaced by an offhand laser, pumping up the vertical movement ability to the max. From time to time, you can also pull the pin off of an offhand grenade that can be shot with every weapon, triggering a large combo explosion that rips everything to smithereens in the nearby. To countereffect the insane firepower of the guns, health regeneration is incresed to a very high speed. In teambased gamemods, player respawning happens next to nearest living teammates; this often leads to never ending massacres near a tactically important item or place on a map >:D .
The mod also has some new player and weapon models, although yet untextured.

[![Robot playermodel of Overkill #1](/m/uploads/2011/11/robo01-200x200.jpg)](/m/uploads/2011/11/robo01.jpg)[![Robot playermodel of Overkill #2](/m/uploads/2011/11/robo02-200x200.jpg)](/m/uploads/2011/11/robo02.jpg)[![Robot playermodel of Overkill #3](/m/uploads/2011/11/robo03-200x200.jpg)](/m/uploads/2011/11/robo03.jpg)[![Robot playermodel of Overkill #4](/m/uploads/2011/11/robo04-200x200.jpg)](/m/uploads/2011/11/robo04.jpg)

[![Human playermodel of Overkill #1](/m/uploads/2011/11/human01-200x200.jpg)](/m/uploads/2011/11/human01.jpg)[![Human playermodel of Overkill #2](/m/uploads/2011/11/human02-200x200.jpg)](/m/uploads/2011/11/human02.jpg)[![Human playermodel of Overkill #3](/m/uploads/2011/11/human03-200x200.jpg)](/m/uploads/2011/11/human03.jpg)[![Human playermodel of Overkill #4](/m/uploads/2011/11/human04-200x200.jpg)](/m/uploads/2011/11/human04.jpg)

{{% youtube "gxc-kREijH4" %}}

tZork and Morphed's mod became very popular, no doubt, and it has a public testing server, that you can visit anytime:[
[MoN] Overkill. Now with votable game modes. (87.250.159.246:27000)](http://dpmaster.deathmask.net/?game=xonotic&server=87.250.159.246:27000)

If you'd like to check out the technical details behind the mod, the git branch you need to pull is:
[xonotic/xonotic-data.pk3dir.git/tzork/extragib](http://git.xonotic.org/?p=xonotic/xonotic-data.pk3dir.git;a=shortlog;h=refs/heads/tzork/extragib)

Wow, that's massive! I'd like to thank everyone participating in developmet, both from the official dev team and the community members too - you all provide great ideas, advices, and helpful bugreports, that keeps Xonotic rolling to it's next release!

### ATTENTION TO FELLOW DEVELOPERS!

As writing this blog is not a simple task that can be done in a few minutes, I'd like to ask for all your help! May I introduce you all the git commit tag:

    
    #woxblox#

From now on please add this humble word to the the message field, when you push a commit to remote that you'd especially like to be featured in WoX-BloX! This will add the opportunity to us to filter important commit messages and help writing the nexz blog issue with the following command:

    
    ./all each git log --all --grep='#woxblox#' --since="1 week ago"

That's all for now folks! See you all in the next issue of WoX-BloX, that'll feature the recent buzz in the community!

GL & HF!

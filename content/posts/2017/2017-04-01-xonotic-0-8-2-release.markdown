---
author: Antibody
comments: false
date: 2017-04-01 14:00:00+00:00
slug: xonotic-0-8-2-release
title: Xonotic 0.8.2 Release
categories:
- Announcements
---
Avoid the April foolery with some fast-paced fragging: Xonotic 0.8.2 is available today! Comprised of over a year's worth of effort, this one packs quite a shotgun slap. There's vehicle improvements, a quick menu, minigames, and several new weapon models to mention just a few things. Grab yourself a copy using the information below, then read on for more details of the changes before you bunny hop into the fray.

#### Download information:

[Download via HTTP](http://dl.xonotic.org/xonotic-0.8.2.zip)  
[Download via torrent](http://dl.xonotic.org/xonotic-0.8.2.zip.torrent)  
MD5: 1bd46c1fb79aae42bb13e74f5a0ff46e  
Package size: 946M  

Already have Xonotic on your machine? There's no need to download the game again to get into the action. Use the following steps to upgrade your client to the 0.8.2 release:

  1. Navigate to your Xonotic installation folder
  2. Navigate to the misc/tools/rsync-updater folder
  3. Execute the update-to-release.sh (for Linux or Mac) or update-to-release.bat (for Windows) and wait for it to complete
  4. Profit. You're done!

#### Feature Highlights

Here are some feature highlights for this release:

[TimePath][TimePath Profile] has been working tirelessly on the codebase to improve its quality. His efforts have removed many longstanding issues originating as far back as the original Quake! All that refactoring has made Xonotic much more developer friendly, which we hope will encourage more contributions. The organizational changes he's made also structure the code such that a move to an alternative engine, [daemon][daemon project], is possible in the future.

<a href="/m/uploads/2017/02/quickmenu.jpg"><img src="/m/uploads/2017/02/quickmenu_t.jpg" title="Quick Menu" class="right th m10"></a>Developer [terencehill][terencehill Profile] has added a "quick menu" system to the in-game HUD layer. This system allows you to expand your configuration options without having to occupy additional keybindings. Access it by hitting the F8 key (by default), which will bring up a menu overlay on your screen where you can then use the arrow keys to navigate  and make selections. terencehill has also helpfully included an [example configuration file][quickmenu example] for customizing the options in your quick menu.

<a href="/m/uploads/2017/02/boil.jpg"><img src="/m/uploads/2017/02/boil_t.jpg" title="Boil" class="left th m10"></a>Mapping czar [Mirio][Mirio Profile] and his team have integrated several new maps for our collective playing enjoyment. In addition to fixing many details of existing maps in the portfolio we now have [Boil][Boil] by [kuniu the frogg][kuniu the frogg Profile], [Geoplanetary][Geoplanetary] by [MintOX][MintOX Profile], and [Erbium][Erbium] by [Justin][Justin Profile] shipped with the game. Both Boil and Erbium are deathmatch-oriented maps, each with a unique look-and-feel. Geoplanetary is a CTF-oriented map with an open design, a central vortex location, and clever warpzone placement. Boil features a new music track ["Go Get 'Em"][Boil music] by [TheAudioMonkey][TheAudioMonkey Profile], while Erbium features the new track ["Nanite"][Nanite] by [Archer][Archer Profile]. In addition, fan-favorite map Darkzone has received some visual and structural updates.<a href="/m/uploads/2017/02/erbium.jpg"><img src="/m/uploads/2017/02/erbium_t.jpg" title="Erbium" class="right th m10"></a>

When playing a match with a lot of players, did you ever want to know who was spectating you? Your curiosity can now be satisfied with a new feature that lists who's watching your gameplay. Don't get nervous - "It's only game" after all! You can control this setting with the "cl_showspectators" cvar in your client and the "sv_showspectators" cvar on the server. By default it is disabled on the client and enabled on the server.

Vehicles now have properly colorized crosshairs, and you can now spectate players who are driving vehicles (practically impossible before). Using your "dropweapon" keybindings (backspace and G by default) will toggle the third-person view. These spectator view mode toggles are also available for all other game modes.<a href="/m/uploads/2017/02/geoplanetary.jpg"><img src="/m/uploads/2017/02/geoplanetary_t.jpg" title="Geoplanetary by MintOX" class="right th m10"></a>

The radar has some new functionality when playing onslaught mode. Players can teleport between control points by pressing the "Use keybinding" near one (F by default), and can even spawn at control points by clicking them.

<a href="/m/uploads/2017/02/minigame_pong.jpg"><img src="/m/uploads/2017/02/minigame_pong_t.jpg" title="The pong minigame" class="left th m10"></a>If you've ever been waiting your turn in a duel league server, you know how the feeling of inaction can lead to frustration. You envision yourself making those flick shots and amazing frags, but it's still seven minutes before your chance to play! Fear not, for there is a new minigame system to occupy your time while you wait. Introduced by [Melanosuchus][Melanosuchus Profile], this system will bring up fun games for you to play with other spectators. There's pong, tic-tac-toe, connect four, and many more! Access the minigame system via the F9 keybinding.

<a href="/m/uploads/2017/02/damagetext.jpg"><img src="/m/uploads/2017/02/damagetext_t.jpg" title="Damage Text config panel" class="right th m10"></a>You can now see how much health points your shots deal with damage indicators. After connecting with a shot, you'll see yellow numerical text representing how much damage you dealt. Paired with the pitch-enabled hitsounds introduced in 0.8.1, you now have two methods - visual and auditory - to help you assess how much havoc you wreak. As you'd expect, these things are easily configurable in a new "Damage Text" panel in the game settings area.

[Mario][Mario Profile] created several new mutators: Rocket Minsta, Vampire Hook, and Breakable Hook! Rocket Minsta is a longstanding fan favorite that uses instagib-like rockets instead of vaporizer beams, yielding crazy splash damage and hilarity. Vampire Hook allows health stealing or giving by hooking your enemies or teammates, respectively. Breakable Hook allows hook attachments to be broken with blaster shots, dealing damage to the owner at the same time.

<a href="/m/uploads/2017/02/itemtimers.jpg"><img src="/m/uploads/2017/02/itemtimers_t.jpg" title="Item Timers" class="left th m10"></a>The item timing panel introduced in the last release is now enabled by default in warmup mode and for spectators. As mentioned before, this feature allows commentators (like yours truly) and spectators to anticipate the action coming as players jockey for position and control. It's also useful for newcomers who want to learn the basics of item timing and how they can work that into the flow of their game. In similar fashion to the panel, you can now use the %t and %T message formatters in chat messages to relay to your team (or to everyone, should you choose) when you took an item! The "%T" in the message will be replaced with the time elapsed in the match thus far, while the "%t" in the message will be replaced with the time remaining.

<a href="/m/uploads/2017/02/grenadelauncher.jpg"><img src="/m/uploads/2017/02/grenadelauncher_t.jpg" title="Grenade Launcher by Morphed" class="right th m10"></a>[Morphed][Morphed Profile] has been hard at work making new weapon models, and this release we reap the benefits! We have new models for the devastator, grenade launcher, hagar, rifle, fireball, and all of the overkill weapons. They look fantastic and feel polished to use. It's a real joy to have such a talented modeler on the team. Thanks also go to jeff for funding the creation of these models.

What was already top-notch netcode got even better. There's been a huge number of improvements to the client-side prediction code. The myriad changes mean the game became playable for those who have ever higher pings.

<a href="/m/uploads/2017/02/hud-shake.gif"><img src="/m/uploads/2017/02/hud-shake_t.gif" title="HUD shake" class="left th m10"></a>To increase a sense of immersion in the game, the HUD can now visibly shake when you jostle around or take a large amount of damage. This is the work of terencehill, and like most of his work it is configurable to your liking. Enable or disable the feature entirely with the "hud_dynamic_shake" cvar, control the damage it takes to initiate a shake with "hud_dynamic_shake_max" and min cvars, and change the scaling or intensity of the shake with the "hud_dynamic_shake_scale" cvar. All of these effects coincide with the preexisting hurt effects.

After having several discussions with the advanced dueling community, a "grace period" was introduced to the spawn time. This allows recently fragged players to delay their spawns up to a maximum limit in order to avoid spawn frags. It has proven to be a very effective deterrent for that purpose, especially on maps like Aerowalk and Stormkeep. Server administrators can control the length of this grace period with the "g_respawn_delay_max" cvar.

[Mario][Mario Profile] created a new bonus grenade type called "Entrap". Once deployed, this grenade will create a "slowdown" field around your enemies, which gives you the edge in firefights.

Map downloads are now done in parallel, letting you get into the action faster than ever! The download rate limit has also been increased.

The UI theme has received even more updates by the masterful [sev][sev Profile]. What was beautiful before is now even more stunning. Hooray!

The scoreboard is now a HUD panel, allowing you to greatly configure its size, position, and appearance. Spectators are also shown as a wrapped list at the bottom, preventing them from trailing off the screen during large games like they did in the past.

As usual, none of these features would be possible without such a vibrant and helpful community. Thank you all for your contributions and participation! Go forth and have fun - happy fragging!

[Archer Profile]: https://forums.xonotic.org/member.php?action=profile&uid=3351
[Boil]: https://forums.xonotic.org/showthread.php?tid=6749
[Boil music]: https://forums.xonotic.org/showthread.php?tid=7299&pid=80292#pid80292
[daemon project]: https://wiki.unvanquished.net/index.php?title=Engine
[Erbium]: https://forums.xonotic.org/showthread.php?tid=5715
[Geoplanetary]: https://forums.xonotic.org/showthread.php?tid=447
[Justin Profile]: https://forums.xonotic.org/member.php?action=profile&uid=380
[kuniu the frogg Profile]: https://forums.xonotic.org/member.php?action=profile&uid=184
[Mario Profile]: http://forums.xonotic.org/member.php?action=profile&uid=1258
[MintOX Profile]: https://forums.xonotic.org/member.php?action=profile&uid=310
[Mirio Profile]: https://forums.xonotic.org/member.php?action=profile&uid=213
[Melanosuchus Profile]: http://forums.xonotic.org/member.php?action=profile&uid=4709
[Morphed Profile]: http://forums.xonotic.org/member.php?action=profile&uid=8
[Nanite]: https://forums.xonotic.org/showthread.php?tid=5766
[quickmenu example]: https://gitlab.com/xonotic/xonotic-data.pk3dir/blob/master/quickmenu_example.txt
[sev Profile]: http://forums.xonotic.org/member.php?action=profile&uid=46
[terencehill Profile]: https://gitlab.com/terencehill
[TheAudioMonkey Profile]: https://forums.xonotic.org/member.php?action=profile&uid=7722
[TimePath Profile]: https://gitlab.com/TimePath

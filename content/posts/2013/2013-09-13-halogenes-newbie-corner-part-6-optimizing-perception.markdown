---
author: Halogene
comments: false
date: 2013-09-13 16:44:41+00:00
layout: post
slug: halogenes-newbie-corner-part-6-optimizing-perception
title: 'Halogene''s Newbie Corner - Part 6: Optimizing Perception'
wordpress_id: 3448
categories:
- Tutorials
tags:
- crosshairs
- newbie
- tutorial
aliases:
- /2013/09/halogenes-newbie-corner-part-6-optimizing-perception
---

![Newbie Corner Banner](/m/uploads/2012/09/Halogenes-newbiecorner.png)

*Edit: Visit the complete and updated tutorial [here](http://gitlab.com/xonotic/xonotic/wikis/Halogenes_Newbie_Corner)*

Welcome back to the (probably) final part of my Newbie Corner. This time, as announced in my last post, I will turn to tweaking the game appearance in order to optimize perception. The concept is easy and straight-forward: the better you can see and hear other players and their actions, the better you can react to them.

* * *

[![console](/m/uploads/2013/09/console.png)](/m/uploads/2013/09/console.png)

Even though some settings are available via menu, we'll change most settings via console, so before I go into details let's have a quick look at how this awesome tool works. You can open the console by pressing <Shift> <ESC>. Now you have a command prompt where you can issue commands to query and change settings. If you already know how a command you are going to type is called, you can just type the first few letters and hit <TAB>. This will automatically complete the command. If the letters match several possible commands, it will auto-complete to the extent all potential completions match and show you all potential completions. For example, typing "cross" in console and hitting <TAB> will auto-complete to "crosshair" and show the commands like "crosshair", "crosshair_alpha",... If you try this you will notice the console will show you not only the possible command completions, but also more info to each possible completion: what is its current (local!) setting, what is its default setting (in square brackets) and a short description what the command does.

In most cases you won't know the exact command to type, and this is where a special command will help you: "apropos". If you, for example, want to know how to do change screen resolution, you can just type "apropos resolution" into console, and the console will spit out all commands with description that have the string "resolution" in their name or in their description.

If you'd like to know more about the Xonotic console, check out [BlaXpirit's forum thread about console tips and tricks](http://forums.xonotic.org/showthread.php?tid=2987).

Now that we know the basics about how to tweak the game, let's get going!

* * *

[![effects](/m/uploads/2013/09/effects.png)](/m/uploads/2013/09/effects.png)

First of all be warned that if you follow this tutorial and implement all changes I suggest here your game will look pug-ugly to say the best. I myself usually play with more or less regular settings because I like to experience the great work developers, modelers and mappers have done to create decent graphics. But if you intend to play competitively, it will be to your advantage to lower the complexity of what is displayed in order to be able to fully focus on the information that is relevant for your gameplay.

[![damageblur](/m/uploads/2013/09/damageblur.png)](/m/uploads/2013/09/damageblur.png)

The first thing to do is to disable the damage blur. Getting hit is already bad enough, you won't want to punish yourself with temporary blindness additionally. This is so crucial that I even disabled this "feature" in the left screenshot above in the "Visuals" caption, otherwise you wouldn't have been able to see a thing there. If you haven't done so already, disable this by doing

```
hud_damage_blur 0
```

While we're at it, we can also reduce the damage flash when getting hit:

```
hud_damage 0.4
```

[![fov-double](/m/uploads/2013/09/fov-double.png)](/m/uploads/2013/09/fov-double.png)

It obviously is crucial to see what is happening around you. To increase the area that you can see, adjust the field of view to your liking. While the default value is at 90, I personally play with a field of view of 120, and find this a quite usable setting. Remember though, that changing the field of view has an impact on your ability to aim, very similar to changing settings of your mouse sensitivity. The higher the field of view, the harder it can be to aim. I have a lousy aim anyway, so I can play with fov 120 alright. You can change the field of view in the menu or via console by:

```
fov 120 (adjust to your liking)
```

[![forceplayers-double](/m/uploads/2013/09/forceplayers-double.png)](/m/uploads/2013/09/forceplayers-double.png)

Most player models are really hard to spot, as they are optimized to look good and, to some extent, realistic. This means their textures are subject to the usual rendering procedures which calculate how much light from the surroundings will be reflected by the player models. Consequently, most models are hard to see in dark corners, and don't have a strong contrast to the background in general. There is one model though that uses "fullbright" textures, which are always displayed at full brightness, and this is the "Mega Erebus". Now there is a way to make every other player be displayed to you as "Mega Erebus" even if they selected a different model, and you can do that by selecting it for your own player and forcing your own model on everyone. This can be done via menu, but here's the console command:

```
cl_forceplayermodels 1
```

Be warned though that the sounds other players make still remain the same, so don't be shocked if a Mega Erebus is commenting to you in a Pinky Pie voice on servers that have ponies enabled. If you dislike other people using colors that may blend too well into the map, you can also select a particularly bright color for yourself and force it onto everyone as well:

```
cl_forceplayercolors 1
```

These settings obviously have the disadvantage that you become extremely visible to everyone else, too - but it would be rather unfair if you could make everyone extremely visible while staying a grey mouse, wouldn't it?

[![other-effects](/m/uploads/2013/09/other-effects.png)](/m/uploads/2013/09/other-effects.png)

I personally strongly dislike blood splatter and gibs flying around as a matter of taste, but disabling all the gory mess also has visual advantages beyond personal preference. The more unnecessary detail gets rendered, the harder it is to filter out the information that is actually relevant. Therefore, turning off gibs is a good way to get rid of a whole bunch of effects that only get in your way if you want to keep an overview in the heat of a fight:

```
cl_gentle_gibs 1 (note that you may need to restart Xonotic or reconnect for this change to take effect)
```

But not only gibs can obscure things, also particle effects of explosions, coronas and bloom can impact on visibility:

```
cl_particles_alpha 0.2 (feel free to experiment with values between 0 and 1)
cl_particles_sparks 0
cl_particles_blood 0
r_coronas 0
r_bloom 0
```

[![picmip-and-simple-items-double](/m/uploads/2013/09/picmip-and-simple-items-double.png)](/m/uploads/2013/09/picmip-and-simple-items-double.png)

Now the game still looks somewhat ok-ish. Time to change this! Let's get rid of all those details in textures that generate contrasts where it isn't needed:

```
gl_picmip_world 10
gl_texturecompression 1 (if you like, or need faster loading)
```

What, still looks the same? Well, then do

```
vid_restart
```

and enjoy :D

Some people even like to replace the beautiful pickup models by twodimensional, bright sprites. I personally don't see a visibility benefit, but the bright symbols could be considered as easier to spot. To enable "simple items", do:

```
cl_simple_items 1
```

You will have to reconnect to the server (or, if you test it in a local game, type "restart" in console). Note that this change only works on servers that allow this setting to be used.

[![crosshair](/m/uploads/2013/09/crosshair.png)](/m/uploads/2013/09/crosshair.png)

The next thing is to set an always visible crosshair. Though I personally like the per-weapon crosshairs, they unfortunately are not very bright. With them, I often had the problem of identifying where that crosshair actually is in the middle of a battle. Even though I probably ended up landing quite some hits this way due to my particularly fuzzy aim which seldomly places the crosshair on the target, I decided to make the crosshair really visible, now that I deliberately chose to use the darn thing. You can very comfortably configure the crosshair via the menu or just copy my settings:

```
crosshair 27 (this is really all about personal preference)
crosshair_alpha 1
crosshair_effect_scalefade 0
crosshair_effect_time 0
crosshair_enabled 2
crosshair_dot 1
crosshair_dot_color 0.24 1 0.13 (this too is all about personal preference)
crosshair_per_weapon 0
crosshair_color_per_weapon 1 (if you like to know the weapon per crosshair color)
crosshair_ring 0 (this removes the nex ring, keep it if you like to see it)
crosshair_ring_reload 1 (mg reload ring might be useful)
crosshair_ring_reload_size 1 (adjust to your liking, default is too big imho)
crosshair_size 0.28 (adjust to your liking)
```

[![fine-tuning](/m/uploads/2013/09/fine-tuning.png)](/m/uploads/2013/09/fine-tuning.png)

If you have already set up weapon binds following my [previous tutorials](/tags/newbie/) and are really confident about them, you might even choose to remove the rendered first person weapon model so it doesn't block your view:

```
r_drawviewmodel 0
```

Now you'll only know what weapon you hold by remembering the bind you pressed last and by the color of the crosshair. But if you managed to get the weapon binds into your cerebellum, this is manageable - decide for yourself if you're ready for this.#

When using the zoom to improve sight in a fast paced game like Xonotic, you won't want the view to be impaired by some mask around the crosshair that generates the impression you look through some binoculars or something:

```
cl_reticle 0
```

Also, who wants to waste time for the transition between zoom and non-zoom?

```
cl_zoomspeed -1
```

Bobbing effects are generally only for conveying a "realistic feel" but don't serve a purpose that's important for the gameplay. Quite to the contrary, they make your view less steady. So you might want to switch off all sorts of bobbings:

```
cl_bobfall 0
cl_bobmodel 0
cl_bobup 0
```

If you like to keep an eye on the action (and on who takes which items) when you get fragged, you can disable automatically showing the scoreboard when dead with:

```
cl_deathscoreboard 0
```

* * *

[![audio](/m/uploads/2013/09/audio.png)](/m/uploads/2013/09/audio.png)

Apart from all the visual stuff, you can of course also improve perception by adjusting the audio settings. While there is quite some remarkably good music in Xonotic, in-game music can distract you and predominate pickup or movement sounds that you might want to hear. The same goes for ambient sounds. Whereas these greatly add to the atmosphere of the game, they can prevent you from predicting where an opponent will come from, what the player's approximate health status is and what is being picked up. So if you can do without the atmosphere, you might want to turn those off via the menu.

* * *

That's it for now again, thanks for reading and stay tuned, as the next project I'll be working on is to rework the existing parts of the Newbie Corner into a comprehensive Newbie Manual in order to keep the information up to date.

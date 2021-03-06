---
author: detrate
date: 2015-04-04 17:30:00+00:00
title: Command and cvar search tool
categories:
- Announcements
---

_Link for the impatient: [xonotic.org/tools/cacs](http://xonotic.org/tools/cacs)_

Back in the days of Nexuiz, finding cmds and cvars was difficult. We had a wiki with a limited list, that didn't always keep up with the ever-changing game. Thanks to handy tip from a fellow player, I learned I could use "cmdlist" and "cvarlist" to dump them all to console. Combined with "log_file", I was able to get an exhaustive list of every command and cvar in the game... which is a lot.

Rather than search through those text files, I opted to build a tool to do that for me (and anyone else interested), this led to the first iteration of what is now referred to as "CACS" (Command and cvar search). Soon after, divVerent was kind enough to build a similar tool into the menu system (shown below).

{{% polaroid
  "/m/uploads/2015/04/advanced_settings.jpg"
  "/m/uploads/2015/04/advanced_settings.jpg"
  "The Xonotic advanced settings panel"
%}}

While this serves many needs and will never be out-of-date, sometimes it's easier to search for cvars outside of the game. This is why I decided to rewrite the tool from scratch to it make easier to maintain and integrate into other projects.

Today I'd like to announce integrating the tool into xonotic.org under an emerging section of the website, "tools".

{{% polaroid
  "/m/uploads/2015/04/web_cvars.jpg"
  "/m/uploads/2015/04/web_cvars.jpg"
  "The new CACS tool"
%}}

You can visit the tool at [xonotic.org/tools/cacs](http://xonotic.org/tools/cacs).

An isolated version of the tool and source code with multigame support is available on [GitHub](https://github.com/z/cacs).

Comments and suggestions are welcome in the discussion thread [here](http://forums.xonotic.org/showthread.php?tid=5429). Enjoy!

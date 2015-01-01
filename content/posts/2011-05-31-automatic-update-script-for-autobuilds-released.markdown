---
author: Antibody
comments: false
date: 2011-05-31 16:21:43+00:00
layout: post
slug: automatic-update-script-for-autobuilds-released
title: Automatic Update Script for Autobuilds Released
wordpress_id: 926
categories:
- Announcements
tags:
- autobuild
- current
- divverent
- linux
- mac
- update script
- windows
---

Those of you wanting to stay current with the latest Xonotic builds now have a new option – an [automatic update script](http://rm.rm.rm-f.org/~xonotic/xonotic-autobuild-downloader.zip) for downloading autobuilds! Released just yesterday [by divVerent](http://forums.xonotic.org/showthread.php?tid=1863&pid=25681#pid25681), this script uses rsync to download only the files you need to keep current. This will save you (and the project, of course) a bunch of bandwidth.

To run the script, extract the zip file linked above to a folder of your choosing, then run the file appropriate to your environment (update-xonotic.sh for Linux and Mac, update-xonotic.bat for Windows) to start the update process. If you do not currently have a Xonotic build installed to that directory one will be downloaded. If you have a preexisting Xonotic build installed there it will be updated to the most recent daily build of the master branch.

Take note that this script is intended for players – developers and testers will most likely want to stay with the git version and its corresponding “all” script.

Happy fragging!

**EDIT: The URL is dead, the script comes now with the release and you can find it at ~\Xonotic\misc\tools\rsync-updater**

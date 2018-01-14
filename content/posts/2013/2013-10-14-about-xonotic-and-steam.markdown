---
author: C.Brutail
comments: false
date: 2013-10-14 07:13:57+00:00
slug: about-xonotic-and-steam
title: About Xonotic and Steam
wordpress_id: 3542
aliases:
- /2013/10/about-xonotic-and-steam
---

In the past couple of months bringing Xonotic to Valve's digital distribution platform [Steam](http://store.steampowered.com) was a very hot topic. We got numerous questions if we'd like to start the [Greenlight](http://steamcommunity.com/greenlight) procedure, and if yes, when, and why it's not happening right now. With this blog post, we'd like to answer those questions, and also try to disperse the fog of doubts and half-truths and misconceptions.

**Q:** Why don't you want to bring Xonotic to Steam?

**A:** This is not true. We'd very much like to bring Xonotic to Steam. However, there are some problems that we might need to solve before that. First of all, the game is not ready for that, as we're still in beta stage, and the game has tons of bugs and half working features that we first would like to fix, and fully implement before introducing it to larger audiences.

**Q:** Xonotic might be in beta stage, but it's still in better shape than a lot of "stable" games on Steam. Also, Greenlight accepts beta staged software.

**A:** First of all, just because other developers or publishers decide to release a buggy game it doesn't mean we have to do so too. Also, it's not about being beta or not. As I wrote before, we'd like to iron out the largest wrinkles before. A rushed release on such a high profile platform could have terrible consequences on our reputation.

**Q:** Is it because of the 100 USD fee that Xonotic is not introduced on Steam Greenlight yet?

**A:** No, it is not. Or rather, partially. 100 USD is not a big deal, we spend a lot more annually on servers for the developer infrastructure. It's not even the question of who'll pay for it (though that'd be an interesting question too). Also, as 100% of the money we need to pay for Valve goes to [Child's Play](http://www.childsplaycharity.org/), we'd be more than happy to pay that price anyway.

**Q:** Is it because Steam doesn't support GPL games?

**A:** No, it's not. There are already GPL software (Blender, DosBOX) and partially free games (War§ow, Penumbra Overture, Aquaria, Gish) on Steam.

**Q:** Is it because of SteamWorks implementation?

**A:** Now we're getting closer on the largest problem. Currently, there's no "free" library that Valve officially supports too for SteamWorks API. Although, Valve doesn't force a game to use Steamworks, but then we'll loose the ability to integrate Xonotic into the Steam infrastructure, track statistics, let users earn achievements etc.

**Q:** Wait a minute, what about Xonstat?

**A:** That is another good point. There's just no way currently we could do two way synchronisation between Xonstat and Steamworks - extracting data from Steamworks might be possible, but injection from Xonstat is impossible. In the end we might have to choose to use Steamworks and ditch Xonstat - obviously this is totally unacceptable, it's out of the question.

**Q:** So is Steamworks integration totally ruled out?

**A:** Yes it is. Technically, we could still use an extra binary to transfer data between the Steamworks API and Xonotic, but that's an ugly hack which is really hard to pull off, and right now we don't have the manpower to do it (and most likely we'll never have) . Not to mention, it's a legally grey territory.

**Q:** What about the trolls coming from Steam?

**A:** It's not very nice to refer the userbase of Steam as trolls. There are already lots of happy and well mannered Steam users in the community and in the developer team too, so the overall generalisation is nonsense. Sure, a higher userbase could introduce the game to higher number of ill mannered players, but don't forget that it'll also draw the attention of more nice people too who haven't even heared about Xonotic yet.
Also, don't forget: Xonotic is a free game. It's free to use, play and enjoy for everybody, regardless of age, gender or origin.

**Q:** You still didn't tell when you'll release Xonotic on Steam.

**A:** And that is not a question either ;) We can't even give an estimated deadline. But I can assure you, you'll notice when Xonotic goes to Steam.

I really hope we could answer all your questions about Steam and Xonotic. If you have any further questions or concerns, feel free to state them in the [official Xonotic forum](http://forums.xonotic.org/showthread.php?tid=4538).

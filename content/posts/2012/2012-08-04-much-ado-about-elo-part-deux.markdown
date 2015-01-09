---
author: Antibody
comments: false
date: 2012-08-04 02:36:03+00:00
layout: post
slug: much-ado-about-elo-part-deux
title: 'Much Ado About Elo: Part Deux'
wordpress_id: 2875
categories:
- Announcements
- Development
tags:
- elo
- rank
- scorefactor
- xonstat
---

It has been about two weeks since I talked initially about our Elo ranking system. How time flies! As that time has passed, I've collected lots of valuable feedback both from players as well as my fellow developers, and I'm very excited to tell you about some further tweaks I've made to the algorithm. There are two relatively big changes: one dealing with non-duel game modes, and another dealing with how S is calculated in the original formula. I'll talk about the ranking changes to the various game modes first.

### Duels Versus...Everything Else

Let me start by saying duel is largely unaffected. Phew! It is naturally the most competitive game mode, thus it deserves a more pure, winner-take-all algorithm. It's a good match for the implementation I discussed in my last post. 

Team games are a different animal, however. With team games we see win-switchers (switching right before the end to be on the winning team), stackers (loading up the talent on one team only), and quitters. While we really can't do anything about the latter, we can do something about the former two. The change I made to counteract those is to rank-compare every player in the game to everyone else regardless of team. The points gained or lost against each opponent are then summed to formulate the final net gain/loss. This means that you have to hold your own against everyone else to gain points instead of relying on just being on the winning team. Imagine that! This also means that you can still lose points when you win if you don't score equal to or higher than expected.

### The Scorefactor

Wait, did you say score? Yes, I said score. In order to make individual comparisons work, I had to use the individual's score as a means of comparison in lieu of just win or loss (1 or 0 for the S value). Each player's score is first converted into score per second, which takes his or her alivetime in the game into account. The scores for two players A and B are then compared with the following formula to obtain the scorefactor, S:

![](http://media.antzucaro.com/uploads/2012/08/scorefactor.png)

This formula yields a value between 0 and 1, which tells us the “winner” in the comparison. A value less than 0.5 means player A won, a value greater than 0.5 mean player B won, and a value of exactly 0.5 represents a draw. Note that the sum total of A and B's scorefactor here is 1, so B's scorefactor is simply 1-Sa. 

The resulting S value is plugged into the original formula I covered in my initial post, which is then used to calculate the final points gained or lost. For the sake of completeness, I'll relist it here:

![](http://media.antzucaro.com/uploads/2012/08/elodelta.png)

The big change here is that S can now take on a range of values between 0 and 1. It's that range that allows players to get an accurate points value for their contribution to the game, no matter the team they're on. It's a big improvement over the black and white algorithm that we had before. 

### In Conclusion

So what we have now for non-duel games is something that scales the points gained or lost according to how well you score versus everyone else in the game. For duel games, the initial algorithm remains in place. The end result is a ranking system that I think everyone can find fair, albeit imperfect. That being said, I suggest that you take all of the ranks and scores with a grain of salt: there is no number that is a true indicator of what you bring to the table as a player. Get in the game and focus on what is truly important: having fun! Happy fragging, and I'll see you out there!


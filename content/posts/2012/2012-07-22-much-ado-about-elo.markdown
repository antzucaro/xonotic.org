---
author: Antibody
comments: false
date: 2012-07-22 22:15:43+00:00
layout: post
slug: much-ado-about-elo
title: Much Ado About Elo
wordpress_id: 2861
categories:
- Development
- Web Development
tags:
- elo
- rank
- xonstat
---

I’ve had several players ask me about how the ranking system for XonStat works. This is my humble attempt to do so. If you have any particular questions that aren’t answered here, ping me in the Xonotic IRC or forums and I’ll try to answer it. If the wind is blowing in a favorable direction, I might also update this very post.

### The Short Story

Did I mention that there is a short story and a long story to this? There is - how delightful!The short story is that I’m using the Elo rating system to gauge the strength of players in Xonotic. It’s similar, though not exactly the same, as what is used in many chess ranking systems. An excellent writeup of the history and mathematical details behind the Elo algorithm can be found on [Wikipedia](http://en.wikipedia.org/wiki/Elo_rating_system). For those who want all the gory details, read that and become enlightened! Or read it and become more confused. It’s okay either way. Now for the long story. 

### The Long Story

Way back when I was first implementing XonStat, people would often approach me with an idea to incorporate global rankings into the system. I had no idea of how to do so until someone pointed out the aforementioned Elo system to me, also noting that several other popular FPS games had also done so. I looked into it and how it works. divVerent and I set out to implement it within our database.

The Elo system is based on wins and losses versus your opponents. You gain points from winning, and you lose points from losing. Sounds simple, right? It really is, but adopting the algorithm to Xonotic had a few nuances. The rating of your opponent also comes into play such that wins over stronger opponents will give you more points than wins over weak ones. This means that a win over a person rated higher than you yields more Elo points than a win over a person new to the game. The same principles apply to losses.

Let’s cut right to the chase and talk about how XonStat determines the points increase or decrease for each match. Unfortunately for this part we’ll have to look at the gory mathematical details. We’ll use a theoretical match between players A and B, and we’ll look specifically at the points increase/decrease for player A (forgive me for the bad screen caps):

![](http://antzucaro.com/uploads/2012/07/elo/elo.png)

In the notation above E is the expected outcome, S is the actual outcome (1 for a win, 0 for a loss), and K is the experience adjustment factor. We’ll talk more about K in a minute, but for now just think of it as a constant.

To get the points increase (or decrease) value for each match, we first have to start with what the expected outcome would be. Simply put, stronger players are more likely to defeat weaker players, and the formula for E is just expressing that in terms of a likelihood between 0 and 1. This may help you understand why winning against very weak opponents nets you very little points - if the expected outcome is near 1 (a sure win), it follows that what’s left over after subtracting it from 1 will not be very much, thus the amount of points gained will be low. 

### The Experience Factor

The more games you have under your belt, the more accurate we can say your Elo score is, and thus the less we need to adjust your score after each game. This is exactly what the K is for in the formulas above. We vary K along with how many games you’ve played. You start off with a K value of 200, but over the course of 32 games that factor decreases linearly down to 40. This means that new player will jump up and down in point value much more dramatically than a seasoned veteran until he or she reaches the requisite number of games. 

In XonStat we also use the K value to account for players who have not played an entire match. Such players have their K value modified downwards by the percentage of the match they did not play. This is determined by comparing their alivetime value with the match’s overall duration. For example, if a player plays 800 seconds out of a 1000-second match, their K value will be 80% of what it would have been otherwise. 

### A Real Example

Enough with this A and B business. Let’s do an example with real values! Imagine I (Elo 350) play Mirio (Elo 450) in a duel and Mirio wins. Assuming both of us are experienced players with over 32 games played, we’ll each have a K value of 40. Since Mirio won, his S value is 1 while mine is 0.

Mirio’s points value from his win will be:
    
    40*(1- 13.33/(13.33+7.50)) = 14.40

My points from the loss will be:
    
    40*(0- 7.50/(7.50+13.33)) = -14.40

Now let’s turn the tables and see the points values for if I win the match! This time Mirio’s S value will be 0 and mine will be 1.

Mirio’s points from his loss will be:
    
    40*(0- 13.33/(13.33+7.50)) = -25.60

My points from the win will be:
    
    40*(1- 7.50/(7.50+13.33)) = 25.60

Take note of the points differences when the winners are transposed. If I won the match, I was rewarded with more points because I was expected to lose. Hooray to the underdog!

### Team Matches

Thus far we’ve only discussed matches between two players. That’s fine and well, but what about team matches where there is more than one person to compare against? I handle this by running the above calculations between each winner and loser and averaging the result. For example, if a player has won a game against three individuals, the points he gets is the sum of all of the points from each individual calculation divided by three. The points gained is thus the average points gained from each individual a player has defeated, with the opposite being true for lost points. 

### Rankings

As you may have guessed by now, we use the aggregated Elo scores of players to determine rank. Ranks are calculated at the beginning of each day using the Elo values at that time. Ranks are per game type, and mutators are not taken into account. You can check out the current ranks on the “leaderboard” page of stats each day. 

### In Conclusion

In this post I’ve covered the details of the Elo implementation within XonStat, the statistics database for Xonotic. I’ve covered individual and team games as well as how the basic structure of Elo is used to determine point gains and losses from matches. I also discussed a little about how experience alters the ratings and how ranking works. I hope you’ve found this subject matter entertaining! As always, you can contact me in the forums at forums.xonotic.org or on IRC at #xonotic on Quakenet (I’m Antibody or dfdashh) with any questions or comments. 

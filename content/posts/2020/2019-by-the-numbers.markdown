---
author: Antibody
comments: false
date: 2020-01-20 17:00:00+00:00
slug: 2019-by-the-numbers
title: 2019 By The Numbers
categories:
- Announcements
---
Sitting at home on this cold and wintry day, I thought it'd be good to dig out the
old "by the numbers" code to see what 2019 looked like for Xonotic in [XonStatDB][xonstatdb]. 
Let's have a look! Also, let's do a bit more data exploration just for the heck of it, shall we? 

First up is the number of games per month throughout the year:

<a href="/m/uploads/2020/01/2019_games_per_month.png">
  <img src="/m/uploads/2020/01/2019_games_per_month.png" title="2019 Games Per Month" class="th m10">
</a>

Given the huge popularity of [WTWRP's votable server][WTWRP votable], I chose to include the clan
arena game type in the chart this time around. The result is a major bump in the number
of games per month versus when we [last did this][2017 games per month] for 2017. Nice! Overall CTF 
and DM still hold the top spots, which is unsurprising.

Next up let's see when people are hitting the servers to get their frag on.
This chart tracks the most popular hours in which games are recorded:

<a href="/m/uploads/2020/01/2019_hours_heatmap.png">
  <img src="/m/uploads/2020/01/2019_hours_heatmap.png" title="2019 Hours Heatmap" class="th m10">
</a>

There's just something about 8PM UTC that always takes the cake! For the
previous two years that has been the witching hour for fragging. I suppose we
just don't want to spoil a good thing.

How about the number of distinct players per month? Let's have a looksie:

<a href="/m/uploads/2020/01/2019_players_per_month.png">
  <img src="/m/uploads/2020/01/2019_players_per_month.png" title="2019 Players Per Month" class="th m10">
</a>

As compared to [2017][2017 distinct players] we're trending quite a bit upwards. Hooray! Keep playing,
folks, and keep telling your friends to join you. Another interesting 
thing is that the both years of data share the same basic "shape", which is to say around summer time
there's an appreciable dip. I wonder if that's because everyone is going on vacation...

Next up let's take a look at the damage done by weapons, broken down into
monthly increments:

<a href="/m/uploads/2020/01/2019_weapon_damage_per_month.png">
  <img src="/m/uploads/2020/01/2019_weapon_damage_per_month.png" title="2019 Weapon Damage Per Month" class="th m10">
</a>

I always look for adequate representation for all weapons in this chart. If we saw disproportionate numbers for
any one weapon it would warrant some additional design discussion amongst the
community at large (*oh no, balance discussions! Eeeek!*). Fortunately that's not what we see here - for
the most part we see each weapon staking claim to a reasonable percentage of
the damage dealt. Okay, okay... except for the devastator in August. I have no
explanation for THAT.

Next up is the frags attained by those weapons:

<a href="/m/uploads/2020/01/2019_weapon_frags_per_month.png">
  <img src="/m/uploads/2020/01/2019_weapon_frags_per_month.png" title="2019 Weapon Frags Per Month" class="th m10">
</a>

It's always a contest between mortar, devastator, shotgun, and vortex for the
lead when it comes to closing the deal on frags. What's interesting is that
vortex is clearly NOT the front runner here - in *every single month* the devastator
edges it out for more frags. Maybe some of these forum discussions about
balance should turn their attention towards rockets! Nah, that's just wishful
thinking.

So that's it for the charts. Let's turn our attention to something more fun and
completely irrelevant for once. How about who had the most kills? First, the
query:

```
SELECT p.player_id, p.stripped_nick, sum(pgs.kills)
FROM player_game_stats pgs join players p on pgs.player_id = p.player_id
WHERE pgs.kills is not null
and p.player_id > 2
and pgs.create_dt between '2019-01-01' and '2019-12-31'
GROUP BY p.player_id, p.stripped_nick
ORDER BY sum(kills) desc
LIMIT 10;
```

...and the results (drum roll please):

```
 player_id |      stripped_nick       |  sum   
-----------+--------------------------+--------
     50029 | C2                       | 144984
     62373 | Speardriver              | 141570
     18179 | EAC · Kult               | 110760
     77131 | umnu                     | 109104
     10042 | SealBeater               | 105606
    130686 | GAYDOW SHADOW            |  90747
    134788 | Anonymous Player #134788 |  85226
    136382 | Phoenix (XHC) ←😈→       |  78629
     25311 | AFKPEK                   |  75894
     76328 | nAnXiety                 |  73883
```

Holy moly that's a lot of frags!

How about something a bit sillier? Let's flip that query around and look for
who had the most *deaths* in 2019:

```
 player_id |     stripped_nick     |  sum  
-----------+-----------------------+-------
    136382 | Phoenix (XHC) ←😈→    | 99180
    130686 | GAYDOW SHADOW         | 98115
    110074 | [BOT]SeeK-y           | 88913
     30937 | draco                 | 85272
     10042 | SealBeater            | 81335
     77131 | umnu                  | 79693
    137126 | ♩♪♫ мµѕιcgoαт[91] ♫♪♩ | 79173
     74883 | Visse.exe             | 78864
     31622 | wındaxg               | 78782
     33241 | Lts9                  | 74700
```

Whoa! I'm surprised to see some of the same names on here, but that's probably
just by virtue of their time in-game. Either way it's cool to see.

Now let's have a look at who had the best K:D for the year, with some entrance
criteria to weed out some bad data: those having a minimum amount of 5K frags
for the year and a non-zero amount of deaths. First the query:

```
select p.player_id, p.stripped_nick, round(cast(sum(pgs.kills) as decimal)/sum(pgs.deaths), 2) kd
from player_game_stats pgs join players p on pgs.player_id = p.player_id
where pgs.deaths is not null 
and pgs.kills is not null
and pgs.deaths > 0
and p.player_id > 2
and pgs.create_dt between '2019-01-01' and '2019-12-31'
group by p.player_id, p.stripped_nick having sum(kills) > 5000
order by 3 desc 
limit 10;
```

...and its results:

```
 player_id |      stripped_nick       |  kd  
-----------+--------------------------+------
     59519 | Anonymous Player #59519  | 4.61
    101655 | Alex                     | 4.26
      8848 | Gayger^^                 | 3.74
     30489 | Yurashina                | 3.06
     81836 | ☢☢                       | 2.98
    132731 | snor                     | 2.83
    164623 | cliffstah 😈             | 2.74
    160051 | Anonymous Player #160051 | 2.67
     50029 | C2                       | 2.66
    104542 | Rascal                   | 2.64
```

Very cool indeed. We definitely have some efficient fraggers roaming the
servers out there. 

That's all for this year's data spelunking. I hope you enjoyed! You can find
the code behind all of these charts up on [Github][repo] should you be interested to
poke around. In the interim, I'll be seeing you out on the servers. Happy
fragging to you in 2020! 


[2017 distinct players]: https://xonotic.org/m/uploads/2018/01/2017_players_per_month.png
[2017 games per month]: https://xonotic.org/m/uploads/2018/01/2017_games_per_month.png
[xonstatdb]: https://gitlab.com/xonotic/xonstatdb
[repo]: https://github.com/antzucaro/xonotic-by-the-numbers
[WTWRP votable]: http://stats.xonotic.org/server/13293

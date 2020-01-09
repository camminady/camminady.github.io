---
id: 30
title: Data sets
date: 2018-07-12T15:29:10+02:00
author: thomas
layout: page
guid: http://82.165.203.187/?page_id=30
---
This site contains some of the data sets that I have been working with. Some of them were created, postprocessed or crawled by me. A small description is contained below, together with links to the corresponding Github repositories.

## Every Cyclist of the Tour de France

Click [here](https://github.com/camminady/LeTourDataSet) to go to the Github repository. More information is given [here](http://www.camminady.org/every-cyclist-of-the-tour-de-france-in-a-single-csv-file/). Here is a preview of the data.

```
year,rank,name,id,team,time,h,m,s  
1903,1,MAURICE GARIN,1,TDF 1903,94h 33m 14s,94,33,14  
1903,2,LUCIEN POTHIER,37,TDF 1903,97h 32m 35s,97,32,35  
1903,3,FERNAND AUGEREAU,39,TDF 1903,99h 02m 38s,99,2,38  
1903,4,RODOLPHE MULLER,33,TDF 1903,99h 12m 44s,99,12,44  
1903,5,JEAN-BAPTISTE FISCHER,12,TDF 1903,99h 41m 58s,99,41,58  
1903,6,MARCEL KERFF,9,TDF 1903,101h 37m 38s,101,37,38
```

## All Bundesliga games ever played data set

Click [here](https://github.com/camminady/AllBundesligaGamesEver) to go to the Github repository. Summary from Github:

History of every Bundesliga game ever played

Data is obtained from Kicker. The website was crawled and the obtained html files have been filtered to reduce everything to a single csv file.
 
The 3 Point rule was starting in season 1995/96, before that winning yielded 2 points (0 to loser), after that 3 points (0 to loser). A draw is always 1 point each.
 
The summary is in the following format:

```
SeasonFrom | SeasonTo |Matchday| Day| Date| Time| Home| Guest| Score90| Score45| Score90Home| Score90Guest| Score45Home| Score45Guest| PointsHome| PointsGuest
```

## Men&#8217;s running best performances data set

Click [here](https://github.com/camminady/MensRunningDataSet) to go to the Github repository. Summary from Github:

The Men&#8217;s running data set
 
All the data is taken from http://www.alltime-athletics.com/men.htm  
a website by Peter Larsson.  
Women data can be obtained here: http://www.alltime-athletics.com/

This repository contains .txt files for the following events:  
Men&#8217;s 100m  
Men&#8217;s 200m  
Men&#8217;s 400m  
Men&#8217;s 800m  
Men&#8217;s 1500m  
Men&#8217;s 5000m  
Men&#8217;s 10000m  
Men&#8217;s Marathon

The .txt files contain in each row an entry similar to this example:  
```
1 9.58 +0.9 Usain Bolt JAM 21.08.86 1 Berlin 16.08.2009  
```
which encodes information like the position in the list (first entry) the time (second) the name (here fourth) and others.  
Each file contains multiple thousand lines of results, i.e. the first thousand best performances in their sports.  
Therefore, it is really the LIST OF BEST PERFORMANCES, NOT WORLD RECORDS.

## Friendster data set

Click [here](https://github.com/camminady/FriendsterDataSet) to go to the Github repository. Summary from Github:

> The following files include a compressed representation of the first 1 million users of the Friendster network in Matlab. All data is taken from Archive.org, where a complete copy of the Friendster network is stored (<a href="https://archive.org/details/archive-team-friendster" rel="nofollow">https://archive.org/details/archive-team-friendster</a>). At Archive.org, the available files contain all profile data in html format. However, often it is not necessary to work with the complete profile data. We do not claim, that the presented data is correct, nor that it is complete. All profile information have been gather by using grep on the profile.html files. There are user profiles, which are not public and therefore, no information could be extracted. We did not differentiate between private profiles / deleted profiles / missing profiles.


## Cities in Germany data set

Click [here](https://github.com/camminady/CitiesGermanyDataSet) to go to the Github repository. Summary from Github:

> We took the 79 largest cities of Germany from Wikipedia (<a href="https://en.wikipedia.org/wiki/List_of_cities_in_Germany_by_population" rel="nofollow">https://en.wikipedia.org/wiki/List_of_cities_in_Germany_by_population</a>). Using the Google Maps API, we calculated the distance for a road trip from one city to all other cities, repeating this process for every of the 79 cities. Therefore we obtain a matrix for the duration of a trip from one city to another, as well as for the distance. Additionally, we used the coordinates from the same Wikipedia article and the radius of the earth to compute the great-circle distance between two cities.

## Airports data set

Click [here](https://github.com/camminady/AirportDataSet) to go to the Github repository. Summary from Github:

> This README explains the content of FlightData.mat. FlightData.mat contains six different variables. It is a summary of &#8220;On-Flight Market Passengers Enplaned&#8221; arriving or leaving the US in the year 2010. Note, that the data is arranged in such a way, that the entries in Names are sorted according to the number of passengers leaving an Airport, meaning that sum(Traffic) is decreasing.
> 
> Names Names is a cell array of three letter airport identifiers, e.g. &#8216;ATL&#8217; for Hartsfield- Jackson Atlanta International Airport.
> 
> Latitude Latitude is a double array that contains the latitude of the airports listed in Names.
> 
> Longitude Longitude is a double array that contains the longitude of the airports listed in Names.
> 
> Traffic Traffic is a matrix that contains in row i, column j the number of &#8220;On-Flight Market Passengers Enplaned&#8221; from airport Names(i) to airport Names(j).
> 
> Distance Distance is a matrix that contains in row i, column j the degree (in deg) of the angle that is spanned by the shortest connection of the airport Names(i) and Names(j). The distance in meters is then given by the expression 2 pi R Distance(i,j) / 360, where R is the radius of the earth.
> 
> FullAirportDetails FullAirportDetails is a cell matrix that contains detailed information about the airports. The order is the same as in Names. The information provided are: &#8220;Name&#8221;, &#8220;City&#8221;, &#8220;Country&#8221;, &#8220;IATA/FAA&#8221;, &#8220;ICAO&#8221;, &#8220;Latitude&#8221;, &#8220;Longitude&#8221;, &#8220;Altitude&#8221;, &#8220;Timezone&#8221;, &#8220;DST&#8221;.
> 
> Sources: For flight data: <a href="https://toreopsahl.com/datasets/#usairports" rel="nofollow">https://toreopsahl.com/datasets/#usairports</a> <a href="http://www.transtats.bts.gov" rel="nofollow">http://www.transtats.bts.gov</a>
> 
> For airport data: <a href="http://openflights.org/data.html" rel="nofollow">http://openflights.org/data.html</a>
> 
> License: The AirportDataSet is made available under the Open Database License. Any rights in individual contents of the database are licensed under the Database Contents License. In short, these mean that you are welcome to use the data as you wish, if and only if you both acknowledge the source and and license any derived works made available to the public with a free license as well.

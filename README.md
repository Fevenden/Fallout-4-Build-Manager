# BuildTech

BuildTech is a Fallout 4 build manager

Live [App](https://fallout-4-build-manager.now.sh/)

## Motivation

Fallout 4's character creation does a poor job of telling you exactly what perks are available to you when you first create your character. Because of this every time I created a new character I'd spend a lot of time googling which stats unlock which perks. I wanted to create an app that could provide users all of this information in one place while remaining simple to use. I also added the ability for users to save their builds for reference later.

## Technology used

BuildTech was built using React, Nodejs, Express, and PostgreSQL. It is a Full-Stack web app and you can view the API Repo at this [Link](https://github.com/f3ve/build-tech-api)

## Logging in

![landing](https://github.com/f3ve/Build-Tech-Client/blob/master/readMeImgs/landing.png)

From the landing page you can choose to create a new account or login to an existing account. After creating a new account you will be navigated to the login page where you must login to your newly created account. A demo user is provided on the login page for users who would prefer to not create an account. (keep in mind others will also use this demo)

## Builds Page

![buildsPage](https://github.com/f3ve/Build-Tech-Client/blob/master/readMeImgs/buildspage.png)

After you are logged in you will see your builds page. Here you can view and manage all of your saved builds. To create a new build navigate to the bottom of the page and click the "Create New Build" button.

## Create Build Page

![createBuildPage](https://github.com/f3ve/Build-Tech-Client/tree/master/readMeImgs)

The Create Build page is where you can create and save your builds. When you open the build page you will see a place to enter a title and a place to enter a description. There are 2 primary sections of the build Page: the Special inputs and the Perk inputs. 

### Special Inputs

Special refers to the 7 stats in the game: Strength, Perception, Endurance, Charisma, Intelligence, Agility, and Luck. Each stat has specific perks that become available to unlock as the stat increases up to maximum of 10. In the Special section you will see a Special Points number and Required Level number. 

You start with a total of 21 special points which reflects the amount of points you start with in the game. these points can only be spent on stats in anyway you choose. Once you spend all of your Special points increasing a stat will increase the required level of your build. 

The required level refers to the in game level you character must be to have match the build you are creating. The required level starts at 1 and increases when stats are increased after spending all your special points and when you activate a perk.

### Perk Inputs

The perk section is where you can activate perks associated with specific stats. At the top of the section you will see a tab bar with a letter in each tab. The letter refers to the first letter of each stat. Clicking a sta tab will display all of the perks associated with that stat. Perks become available as a stats value increases. 

Perks are the primary way you shape your character. They give you character unique abilities and allow you to develope different play styles and strategies. Most perks have ranks. Each Rank of a perk you activate increases the required level of your build. Clicking an a perk icon will display information about that perk. To activate a perk make sure the stat associated with it is high enough and then click the choose rank button beneath the perk Icon and select the rank you want.

### Creating the build

After you have finished selecting the stats and perks you want click the create button beneath the Special section. This will save your build and redirect you back your build page where you can view and manage your new build. You can also leave the page without saving your build by pressing the cancel button. 


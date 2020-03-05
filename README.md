
# LA2050 Grants Challenge

This is a website for the My LA2050 Grants Challenge.

https://challenge.la2050.org/

* [How to make changes](#how-to-make-changes)
* [How to switch between contest phases](#how-to-switch-between-contest-phases)
* [How to see a preview of your changes](#how-to-see-a-preview-of-your-changes)
* [How to develop locally](#how-to-develop-locally)
* [Generating responsive images](#generating-responsive-images)
* [Handy guides](#handy-guides)

## Deployment status

### staging-challenge.la2050.org

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d2102d1-a835-49c8-8944-99458b7ba18b/deploy-status)](https://app.netlify.com/sites/staging-challenge-la2050/deploys)

### challenge.la2050.org

[github.com/la2050/archive/deployments](https://github.com/la2050/challenge/deployments)

## How to make changes

The website is published with [GitHub Pages](https://pages.github.com) & [Netlify](https://www.netlify.com), and the files are generated with [Jekyll](http://jekyllrb.com).

As you make changes and commit/push them to GitHub, the [website](https://challenge.la2050.org) will automatically update.

For example, if you [edit the about page](https://github.com/la2050/challenge/edit/master/about.markdown) on GitHub, and then press the “Commit changes” button–you should see your changes on the [about page](https://challenge.la2050.org/about/) of the website within a few minutes.

## How to switch between contest phases

The website is set up to show different content based on the current phase of the contest. To change which phase is active, you can follow these steps…

1) Open the [configuration file](https://github.com/la2050/challenge/blob/master/_config.yml)

2) Find the current phase, and comment it out by placing a `#` sign in front of it.

For example, change this…
```
# New challenge announced: 
# February 1
phase: 1
```

…into this…
```
# New challenge announced: 
# February 1
# phase: 1
```

3) Find the phase you’d like to switch to, and do the opposite (remove the `#` in front of it).

For example, change this…
```
# Entries being accepted: 
# March 1
# phase: 2
```

…into this…
```
# Entries being accepted: 
# March 1
phase: 2
```
4) Commit your changes.

## How to see a preview of your changes

If you’d like to see how your changes will look on the website before making them public, you can work in the [staging branch](https://github.com/la2050/challenge/tree/staging)–a copy of the website files, that’s published at https://staging-challenge.la2050.org

![staging](https://user-images.githubusercontent.com/926616/47131296-bcb61180-d252-11e8-90e0-56a2e7552163.png)

You can make edits in the staging branch and commit them just as you would normally. They’ll automatically appear on the staging website within a few minutes.

Once you’re happy with how your changes look on the staging website, you can copy them over to the [public website](https://challenge.la2050.org) (the `master` branch) using a pull request. Here are the steps:

1. Press the “new pull request” button.

https://github.com/la2050/challenge/pull/new/staging

![1-new-pull-request-button](https://user-images.githubusercontent.com/926616/47131298-bde73e80-d252-11e8-8cd6-f64703af5c2b.png)

2. Write a title for your pull request (this is optional).

3. Press the “create pull request” button.

4. And then, press the “merge pull request” button.

5. And lastly, press the “confirm merge” button.

![3-merge-pull-request](https://user-images.githubusercontent.com/926616/47131302-c0499880-d252-11e8-9393-75dcfcd49650.png)

## How to develop locally

If you want to see a preview of your changes while you work, you can [run a Jekyll server](https://jekyllrb.com) on your local machine. [Installing Ruby and Jekyll](https://jekyllrb.com/docs/installation/) is a good place to start.

After you have Jekyll installed, you can clone this project with [Git](https://git-scm.com) or [GitHub Desktop](https://desktop.github.com)…

```
git clone https://github.com/la2050/challenge.git
```

And then start running the Jekyll application like this...

```
jekyll serve
```
## Generating responsive images

Some of the images on the website are available in multiple sizes, to save bandwidth. For example, you can regenerate the “goals” images by following these steps…

1) Install [Node.js and NPM](https://nodejs.org/en/download/)

2) Run this command to install the dependencies for this project

```
npm install
```

3) Place your images in the [assets/images/goals/original](https://github.com/la2050/challenge/tree/master/assets/images/goals/original) folder

```
/assets/images/goals/original/connect.jpg
/assets/images/goals/original/create.jpg
/assets/images/goals/original/learn.jpg
/assets/images/goals/original/live.jpg
/assets/images/goals/original/play.jpg
```

4) Switch to the `_node` directory and then run this command, to generate the images

```
npm run images:create
```

If you want to generate a different set of images, you can edit the [gulpfile](https://github.com/la2050/challenge/blob/master/gulpfile.js) and then repeat the steps above.

## Handy guides

* [Markdown](https://guides.github.com/features/mastering-markdown/)
* [Liquid](https://shopify.github.io/liquid/)
* [Liquid for Designers](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers)
* [Jekyll](https://jekyllrb.com/docs/home/)


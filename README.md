# unsocial

Every time I post something on the web, I'm stuck in the social confirmation dillema. I know it's not good for me to count the claps and retweets of my posts. But my flesh is week... y'a know?

This Browser Extension removes those 'social' features for some of the pages I use - because I want to create content, without bothering about how much likes and shares it gets.

-> [**Read the full article**](https://tsc.li/unsocial) on this topic on medium.

## Supported Pages

Currently, there is only one supported page.
**I'm thinking about adding more!** If you'd like to get a page added, comment on the medium article above or - even better - fork this repo and send me a pull request with your site added.


### **medium.com**
- filter out all notifications except for comments (because I want to answer those)
- remove the clap counters on my own articles so I don't know how many people clapped for me
- hides all links to stats
- hides all my personal stats from my profile page


## Get the Browser Extension

Currently available for [🦊 Firefox](https://tsc.li/unsocial-firefox) and [⚽ Chrome](https://tsc.li/unsocial.chrome)

# DEV Stuff

This browser extension is open source and can be downloaded from [github](https://tsc.li/unsocial-code). It was built with the [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox). See their page for how to use the build scripts.

## Install

    $ git clone https://github.com/timschoch/unsocial.git
	$ npm install

## Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge
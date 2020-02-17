## Overview
This puts miniaturized versions of webpages in iframes, which expand to fullscreen when clicked. They remain iframes at this point, their URLs distinguished from the original via a slug. Upon "back", they shrink back to original size.

## Notes
- [work.co] has a simpler situation going on, in which the new locations are not different sites in iframes, but merely different react components. This makes things simpler and faster, and makes sense in the context of different pages on the same site.
- this method is super slow as it loads each entire site
- it's possible to actually navigate to each site via window.location.replace; this will of course take time. A slicker plan would be to grab the html out of the iframe and replace the window html with it. I gave up on this after ten minutes due to CORS-related difficulties, although it looks possible.

Ideally this technique would be used as in the original example with content within the same web page.

## A craftier approach for different domains
Assuming a finite number of them, and us being ok with their content appearing under your own domain, would be to
- (a) use a thumbnail image,
- (b) kick off ajax requests for the content of each page in componentDidMount, saving the resulting html to state, and
- (c) swap in the already-downloaded html upon completion of the animation.

## To run
`npm run start`


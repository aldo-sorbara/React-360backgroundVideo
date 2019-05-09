// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const player = r360.compositor.createVideoPlayer('myplayer');
  player.setSource("./static_assets/test.mp4", '3DTB', 'mp4');

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('edition_13th', {}),
    r360.getDefaultSurface()
  );
  
}

window.React360 = {init};




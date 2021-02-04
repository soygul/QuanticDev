# Automating My YouTube Uploads Using Node.js
YouTube has the most comprehensive control panel of all video hosting services. Yet, this comprehensiveness comes at a cost. There is a ridiculous number of metadata fields you are supposed to fill per video. It is not obligatory, but the more metadata you provide to the YouTube algorithm, the more discoverable your videos will be. And filling all those fields by hand is a huge pain. Especially if you prepare the script of your videos using Word as I do. You can automate away this pain using the code provided on this page. You can also follow the video tutorial if you can't get the code to work on your own.

Table of contents:
* [Resources](#resources)
* [youtube-upload.js](#youtube-uploadjs)
* [Project Design Document](#project-design-document)
* [Next Steps](#next-steps)

## Resources
Video guide: [https://www.youtube.com/watch?v=gncPwSEzq1s](https://www.youtube.com/watch?v=gncPwSEzq1s){:target="_blank"}{:rel="noopener"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/gncPwSEzq1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The video has the full demonstration of this project. If you want to read the comments or leave a comment, do so under the YouTube video. If you want to contribute to the article, make a pull request on GitHub.

YouTube API Resources:
* Node.js Client QuickStart Guide. My uploader code is adapted from this. Follow the first section of it to download your project credentials: [https://developers.google.com/youtube/v3/quickstart/nodejs](https://developers.google.com/youtube/v3/quickstart/nodejs){:target="_blank"}{:rel="noopener"}
* API Reference: [https://developers.google.com/youtube/v3/docs/videos/insert](https://developers.google.com/youtube/v3/docs/videos/insert){:target="_blank"}{:rel="noopener"}
* API Credentials: [https://console.developers.google.com/apis/dashboard](https://console.developers.google.com/apis/dashboard){:target="_blank"}{:rel="noopener"}

If you don't already have a verified YouTube project, or an old Google APIs project, you will have to ask your project to be whitelisted or your uploads cannot be made public:
* YouTube API Compliance Audit Request Form: [https://support.google.com/youtube/contact/yt_api_form](https://support.google.com/youtube/contact/yt_api_form){:target="_blank"}{:rel="noopener"}

You can find my YouTube uploader code on GitHub too:
* [https://gist.github.com/soygul/42677432fa89df7fd783e0232a43a8cf](https://gist.github.com/soygul/42677432fa89df7fd783e0232a43a8cf){:target="_blank"}{:rel="noopener"}

## youtube-upload.js
Below is my entire YouTube uploader code in Javascript. If you can't get it to work, I do a live demonstration in the video posted above, so you can follow it. In fact, that video was uploaded using the below code!

```js
// YouTube API video uploader using JavaScript/Node.js
// You can find the full visual guide at: https://www.youtube.com/watch?v=gncPwSEzq1s
// You can find the brief written guide at: https://quanticdev.com/articles/automating-my-youtube-uploads-using-nodejs
//
// Upload code is adapted from: https://developers.google.com/youtube/v3/quickstart/nodejs

const fs = require('fs');
const readline = require('readline');
const assert = require('assert')
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// video category IDs for YouTube:
const categoryIds = {
  Entertainment: 24,
  Education: 27,
  ScienceTechnology: 28
}

// If modifying these scopes, delete your previously saved credentials in client_oauth_token.json
const SCOPES = ['https://www.googleapis.com/auth/youtube.upload'];
const TOKEN_PATH = '../' + 'client_oauth_token.json';

const videoFilePath = '../vid.mp4'
const thumbFilePath = '../thumb.png'

exports.uploadVideo = (title, description, tags) => {
  assert(fs.existsSync(videoFilePath))
  assert(fs.existsSync(thumbFilePath))

  // Load client secrets from a local file.
  fs.readFile('../client_secret.json', function processClientSecrets(err, content) {
    if (err) {
      console.log('Error loading client secret file: ' + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the YouTube API.
    authorize(JSON.parse(content), (auth) => uploadVideo(auth, title, description, tags));
  });
}

/**
 * Upload the video file.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function uploadVideo(auth, title, description, tags) {
  const service = google.youtube('v3')

  service.videos.insert({
    auth: auth,
    part: 'snippet,status',
    requestBody: {
      snippet: {
        title,
        description,
        tags,
        categoryId: categoryIds.ScienceTechnology,
        defaultLanguage: 'en',
        defaultAudioLanguage: 'en'
      },
      status: {
        privacyStatus: "private"
      },
    },
    media: {
      body: fs.createReadStream(videoFilePath),
    },
  }, function(err, response) {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    console.log(response.data)

    console.log('Video uploaded. Uploading the thumbnail now.')
    service.thumbnails.set({
      auth: auth,
      videoId: response.data.id,
      media: {
        body: fs.createReadStream(thumbFilePath)
      },
    }, function(err, response) {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      }
      console.log(response.data)
    })
  });
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const clientSecret = credentials.installed.client_secret;
  const clientId = credentials.installed.client_id;
  const redirectUrl = credentials.installed.redirect_uris[0];
  const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, function(err, token) {
    if (err) {
      getNewToken(oauth2Client, callback);
    } else {
      oauth2Client.credentials = JSON.parse(token);
      callback(oauth2Client);
    }
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', function(code) {
    rl.close();
    oauth2Client.getToken(code, function(err, token) {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
    if (err) throw err;
    console.log('Token stored to ' + TOKEN_PATH);
  });
}
```

## Project Design Document
Software development process starts with a design document. If you are interested, you can learn more about [Software/Systems Development Life Cycle on Wikipedia](https://en.wikipedia.org/wiki/Systems_development_life_cycle){:target="_blank"}{:rel="noopener"}.

![Software and Systems Development Life Cycle](media/software_development_life_cycle.png)

Below is the software design document that I created for this project. If you want, you can take inspirations from it in your own projects.

Objective:
* Upload my videos to YouTube programmatically using YouTube API in Node.js. All the video metadata needs to be parsed from the video's script, which is written in Microsoft Word.

Requirements Analysis:
* Read and parse the video metadata from the video's script, which is a Word document.
* Upload the main 4K video (40GB+) to YouTube and set proper metadata and thumbnail.
* I want to use JavaScript and Node.js to get this done as fast as possible. Python is my second choice.

Feasibility:
* I checked the developer documentation, and YouTube API has a nice HTTP endpoint to upload new videos so we can use it.
  * They also provide a Node.js API Client which we can use to simplify this further.
* Even though there are several libraries to read Word documents, we don't need them. We can programmatically start Word from command line and export a plaintext file of the video script and parse that instead. One less dependency!

Design:
* Simple modular design, using Node.js (CommonJS) modules. Each distinct functionality like parsing Word documents, using YouTube API, etc., will be in their modules.
* Optional: A fully flagged command-line app using "[Yargs](https://www.npmjs.com/package/yargs){:target="_blank"}{:rel="noopener"}" argument parser library.

Proof of Concept:
* There is an excellent YouTube upload CLI tool in existence already so it proves that this is doable, so there is no need for a separate POC: [https://github.com/tokland/youtube-upload](https://github.com/tokland/youtube-upload){:target="_blank"}{:rel="noopener"}

Implementation Plan:
* Use `npm init` for a quick start with Node.js.
* Create the module layout.
* Implement each module and the module tests.
* Put all modules together as a simple command-line app.
* Document everything in a README file (and the article's resources section).

## Next Steps
I plan to expand this project to automate my other chores like Twitter posts, Instagram updates, compressing the master video using FFmpeg for storage, and finally storing everything on cheap cloud storage. As I make these improvements, I will post an update article (and video) demonstrating my entire workflow automation. I plan to stick with Node.js as it worked out very well for me. But if you convert my code to Python, ping me so I can post it in the resources section above. And if you don't want to miss the update when it's out, follow me on my socials.

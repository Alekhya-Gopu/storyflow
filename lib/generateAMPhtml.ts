import { supabase } from '@supabase/client';

const AMP_HTML = (stories: string) => `
    <!DOCTYPE html>
    <html amp lang="en">

    <head>
    <meta charset="utf-8" />
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
    <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
    <title></title>
    <link rel="canonical" href="" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    <style amp-boilerplate>
        body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both;
        }

        @-webkit-keyframes -amp-start {
            from {
                visibility: hidden;
            }

            to {
                visibility: visible;
            }
        }

        @-moz-keyframes -amp-start {
            from {
                visibility: hidden;
            }

            to {
                visibility: visible;
            }
        }

        @-ms-keyframes -amp-start {
            from {
                visibility: hidden;
            }

            to {
                visibility: visible;
            }
        }

        @-o-keyframes -amp-start {
            from {
                visibility: hidden;
            }

            to {
                visibility: visible;
            }
        }

        @keyframes -amp-start {
            from {
                visibility: hidden;
            }

            to {
                visibility: visible;
            }
        }
    </style>
    <noscript>
        <style amp-boilerplate>
            body {
                -webkit-animation: none;
                -moz-animation: none;
                -ms-animation: none;
                animation: none;
            }
        </style>
    </noscript>
    </head>

    <body>
        ${stories}
    </body>

    </html>`;

// function generateCTALink(url: string, text: string = 'Call to action'): string {
//     return `<amp-story-cta-layer>
//           <a href="${url}"
//             style="
//                   position: absolute;
//                   bottom: 5px;
//                   left: 5px;
//                   color: white;
//                   font-family: sans-serif;
//                   font-size: 14px;
//                   font-weight: bold;
//                   text-align: center;
//                   text-decoration: none;
//                   border-radius: 10px;
//                   cursor: pointer;
//                   background-color:#ff7e1d;
//                   padding:8px;">
//             ${text}
//           </a>
//         </amp-story-cta-layer>`;
// }

// generate story extension markup based on media type
export function generateStoryExtensionMarkUp(media: any): string {
    let storyMarkup = '';

    switch (media.type) {
        case 'video':
            storyMarkup = `
          <amp-video
            layout="responsive"
            src="${media.url}"
            height="480"
            width="270"
            autoplay>
        </amp-video>
        `;
            break;
        case 'image':
            storyMarkup = `
          <amp-img
            src="${media.url}"
            height="480"
            width="270"
            layout="responsive">
          </amp-img>
        `;
            break;
        case 'youtube':
            storyMarkup = `
          <amp-youtube
            data-videoid="${media.media_id}"
            layout="responsive"
            width="480"
            height="270">
          </amp-youtube>
        `;
            break;
        case 'instagram':
            storyMarkup = `
          <amp-instagram
            data-shortcode="${media.media_id}"
            layout="responsive"
            width="480"
            height="270">
          </amp-instagram>
        `;
            break;
        case 'twitter':
            storyMarkup = `
          <amp-twitter
            data-tweetid="${media.media_id}"
            layout="responsive"
            width="480"
            height="270">
          </amp-twitter>
        `;
            break;
        case 'amp-story':
            storyMarkup = `
          <a href="${media.url}" />
        `;
            break;
        default:
            break;
    }
    return storyMarkup;
}

export default async function generateAMPhtml(userId: string) {
    const { data, error } = await supabase
        .from('stories')
        .select('*')
        .eq('user_id', userId);

    const storyExtensionsLinks = data?.filter(m => m.type !== 'amp-story');

    const ampStory = `<amp-story standalone
                title="Storyflow AMP"
                publisher="Storyflow">
                ${storyExtensionsLinks?.map((extensionStories, index) => `
                <amp-story-page id="${index}">
                    <amp-story-grid-layer template="fill">
                        ${generateStoryExtensionMarkUp(extensionStories)}
                    </amp-story-grid-layer>
                </amp-story-page>`)}
            </amp-story>`;

    return AMP_HTML(ampStory);
}
import B2 from 'backblaze-b2';

const b2 = new B2({
    apiUrl: 'https://api.backblazeb2.com/b2api/v2',
    applicationKeyId: process.env.BACKBLAZE_APP_ID,
    applicationKey: process.env.BACKBLAZE_APP_KEY
});

export default b2;
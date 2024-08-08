// PersonalWebSite\Portfolio-frontend\src\common\aws.jsx

import axios from 'axios';

export const awsUploadImage = async (img) => {
  let imgURL = null;

  try {
    const {
      data: { uploadURL },
    } = await axios.get(`${import.meta.env.VITE_SERVER_DOMAIN}/get-upload-url`);

    console.log('Obtained upload URL:', uploadURL);

    const response = await axios.put(uploadURL, img, {
      headers: {
        'Content-Type': img.type || 'image/jpeg',
      },
    });

    console.log('Upload response status:', response.status);

    if (response.status === 200) {
      imgURL = uploadURL.split('?')[0];
    }
  } catch (error) {
    console.error(
      'Error uploading image:',
      error.response ? error.response.data : error.message
    );
  }

  return imgURL;
};

// PersonalWebSite\Portfolio-frontend\src\components\Blog\blogApp\BlogTools.jsx

// importing tools from editor.JS

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Image from '@editorjs/image';
import List from '@editorjs/list';
import LinkTool from '@editorjs/link';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import { awsUploadImage } from '../../../common/aws';

// from the documentation of editorjs to upload images by url
const uploadImageByUrl = e => {
  let link = new Promise((resolve, reject) => {
    try {
      resolve(e);
    } catch (err) {
      reject(err);
    }
  });
  return link.then(url => {
    return {
      success: 1,
      file: [url],
    };
  });
};

// from the documentation of editorjs to upload images by file

const uploadImageByFile = e => {
  return awsUploadImage(e).then(url => {
    if (url) {
      return {
        success: 1,
        file: [url],
      };
    }
  });
};

export const tools = {
  embed: Embed,
  header: {
    class: Header,
    config: {
      placeHolder: 'Type Heading...',
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
    },
  },
  image: {
    class: Image,
    config: {
      uploader: {
        uploadByFile(file) {
          return awsUploadImage(file).then(url => {
            return {
              success: 1,
              file: {
                url: url,
              },
            };
          });
        },
      },
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },

  linkTool: LinkTool,
  quote: Quote,
  editorJS: EditorJS,
  inlineCode: InlineCode,
  marker: Marker,
};

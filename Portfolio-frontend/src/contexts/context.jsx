// image-gen/client/src/contexts/context.jsx
import { createContext } from 'react';

// Define a default context value with empty or default states
const defaultContextValue = {
  onDeoIconGold1Click: () => {},
  status: 'notAuthenticated',
  setStatus: () => {},
  userAuth: {
    accessToken: null,
    profile_img: null,
    username: null,
  },
  setUserAuth: () => {},
  onSignOutClick: () => {},
  editorState: 'editor',
  setEditorState: () => {},
  blog: [
    {
      title: '',
      banner: '',
      content: [],
      tags: [],
      description: '',
      author: { personal_info: {} },
    },
  ],
  setBlog: () => {},
  blogStructure: {
    title: '',
    banner: '',
    content: [],
    tags: [],
    description: '',
    author: { personal_info: {} },
  },
  textEditor: { isReady: false },
  setTextEditor: () => {},
};

export const userContext = createContext(defaultContextValue);

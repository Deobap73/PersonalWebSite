// PersonalWebSite\Portfolio-frontend\src\common\session.jsx

const storeInSession = (key, value) => {
  sessionStorage.setItem(key, value);
};

const lookInSession = (key) => {
  const value = sessionStorage.getItem(key); // Adicione logs para verificar
  return value;
};

const removeFromSession = (key) => {
  sessionStorage.removeItem(key);
};

const logOutSession = () => {
  sessionStorage.clear();
};

export { storeInSession, lookInSession, removeFromSession, logOutSession };

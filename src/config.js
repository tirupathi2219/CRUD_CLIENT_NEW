const config = {
  BE_URL:
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_API_BASE_URL_DEV
      : process.env.REACT_APP_API_BASE_URL_PROD,
};

export default config;

const config = {
  openweathermap: {
      base_url: process.env.REACT_APP_OW_BASE_URL as string,
      app_id: process.env.REACT_APP_OW_ID as string,
      lang: process.env.REACT_APP_OW_LANG as string,
      unit: process.env.REACT_APP_OW_UNIT as string,
  },
};

export default config;

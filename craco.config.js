module.exports = {
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.headers = {
      ...devServerConfig.headers,
      // enable SharedArrayBuffer to meeting
      "Cross-Origin-Embedder-Policy": "require-corp", // credentialless => only support by chrome
      "Cross-Origin-Opener-Policy": "same-origin"
    };
    return devServerConfig;
  }
};

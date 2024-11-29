function parseProtocol(url) {
    const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
  
    const [, protocol, fullHost, fullPath] = parsedURL;
    return protocol;
  }
  
  console.log(
    parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
  );
  // "https"
  
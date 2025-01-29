const Formatter = (function () {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUpperCase();
  };

  const writeToDOM = (selector, message) => {
    if (!!document && "querySelector" in document) {
      document.querySelector(selector).innerHTML = message;
    }
  };

  return {
    makeUppercase,
    writeToDOM,
  };
})();
console.log(Formatter.makeUppercase("prodip"));
Formatter.writeToDOM("#target", "Hi there");

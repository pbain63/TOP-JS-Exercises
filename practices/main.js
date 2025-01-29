const documentMock = (() => ({
  querySelector: (selector) => ({
    innerHTML: null,
  }),
}))();

const Formatter = (function (doc) {
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

  const makeUppercase = (text) => {
    log("Making uppercase");
    return text.toUppercase();
  };

  const writeToDom = (selector, message) => {
    doc.querySelector(selector).innerHTML = message;
  };

  return { makeUppercase, writeToDom };
})(document || documentMock);

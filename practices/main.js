const Formatter = (function () {
  let timesRun = 0;
  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
  const setTimesRun = () => {
    console.log("Setting times run");
    ++timesRun;
  };
  const makeUppercase = (text) => {
    log("Making uppercase");
    setTimesRun(); 
    return text.toUpperCase();
  };
  return { makeUppercase, timesRun };
})();

console.log(Formatter.makeUppercase("prodip")); 
console.log(Formatter.timesRun); 


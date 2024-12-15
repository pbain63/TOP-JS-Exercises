const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("_includes/styles/*.css");
    eleventyConfig.addPassthroughCopy("_redirects");
    eleventyConfig.addPassthroughCopy("manifest.json");
    eleventyConfig.addPassthroughCopy("_includes/icons");

    eleventyConfig.addFilter("addZone", require("./filters/zone.js") );
    eleventyConfig.addFilter("dayOffset", require("./filters/dayOffset.js"));

    eleventyConfig.setLiquidOptions({
      dynamicPartials: true
    });

    eleventyConfig.addPlugin(pluginPWA, {
      swDest: "./_site/service-worker.js",
      globDirectory: "./_site",
      clientsClaim: true,
      skipWaiting: true
    });
  
    return {
      dir: {
        addPassThroughCopy: true
      }
    };
  };
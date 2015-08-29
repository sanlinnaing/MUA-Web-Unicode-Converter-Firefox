var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentStyleFile: data.url("zawgyi.css"),
  contentScriptFile: [data.url("parabaik.js"),data.url("converter.js")]
});
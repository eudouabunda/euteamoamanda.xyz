'use strict';
fetch(`${"https://tokyo.tokyocity.repl.co/avatar/386215881966878721"}`, {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  document.getElementById("dzn").src = fieldDescribe.url;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("dzn");
});

'use strict';
fetch(`${"https://tokyo.tokyocity.repl.co/avatar/853352916072661012"}`, {
  method : "GET",
  mode : "cors"
}).then(function(responseJson) {
  if (responseJson.ok) {
    return responseJson.json();
  }
  return Promise.reject(responseJson);
}).then(function(fieldDescribe) {
  console.log(fieldDescribe.url);
  document.getElementById("amanda").src = fieldDescribe.url;
}).catch(function($ownerNode) {
  console.warn("Something went wrong.", $ownerNode);
  document.getElementById("amanda");
});

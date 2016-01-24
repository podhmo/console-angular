module.exports = function pp(e){
  var s = e.toString();
  var replaced = s
      .replace(/class="ng-isolate-scope"/g, "@")
      .replace(/class="ng-scope"/g, "*")
      .replace(/class="ng-binding"/g, "%")
      .replace(/ng-isolate-scope/g, "@")
      .replace(/ng-scope/g, "*")
      .replace(/ng-binding/g, "%")
  ;
  console.log(replaced);
};


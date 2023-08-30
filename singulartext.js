// Name: text
// ID: text

(function (ext) {
  ext._shutdown = function () {};

  ext._getStatus = function () {
    return { status: 2, msg: "Ready" };
  };

  ext.myReporter = function (input) {
    return input;
  };

  var descriptor = {
    blocks: [
      ["r", "%s", "myReporter", "Input"],
    ],
  };

  ScratchExtensions.register("text", descriptor, ext);
})({});

/*global angular */
var app = angular.module('sendQRData', []);
app.controller('QRDataController', function($scope, $http) {


    $scope.sendData = function () {

    };

});

$(document).ready(function() {
  var vid1 = $("#vid1")[0];
  var btn1 = $("#btn1")[0];

  $(btn1).click(start);

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;
  URL = window.URL || window.webkitURL || window.mozURL || window.oURL || window.msURL;

  function start() {
    $(btn1).attr('disabled', true);
    navigator.getUserMedia({audio:true, video:true}, gotStream, function(err) {console(err);});
  }

  function gotStream(stream){
    vid1.src = URL.createObjectURL(stream);
  }
});

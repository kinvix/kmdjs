kmdjs.exec([{"a":[],"b":"var t=__class.extend({statics:{init:function(){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}(),window.requestInterval=function(t,n){function a(){var s=(new Date).getTime(),o=s-i;o>=n&&(t.call(),i=(new Date).getTime()),e.value=requestAnimFrame(a)}if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setInterval(t,n);var i=(new Date).getTime(),e=new Object;return e.value=requestAnimFrame(a),e},window.clearRequestInterval=function(t){window.cancelAnimationFrame?window.cancelAnimationFrame(t.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(t.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(t.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(t.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(t.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(t.value):clearInterval(t)}}}});return t","c":"KmdGame.RAF","d":[]}])
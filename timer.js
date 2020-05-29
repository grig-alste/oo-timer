function trim(string) { return string.replace (/\s+/g, " ").replace(/(^\s*)|(\s*)$/g, ''); }
let init=0;
let startDate,thisDate,tdiff;
let clocktimer;
var sum=0;
var index=0;

    function clearFields() {
    init = 0;
    clearTimeout(clocktimer);
    document.clockform.clock.value='00:00:00.00';
    document.clockform.label.value='';
}

function clearALL() {
        clearFields();
    document.getElementById('marker').innerHTML = '';
    sum = 0;
    index = 0;
    document.getElementById('markerSum').innerHTML = 'Всего: 00:00:00';
}

function timeToStr (t) {
    var ms = t%1000; t-=ms; ms=Math.floor(ms/10);
    t = Math.floor (t/1000);
    var s = t%60; t-=s;
    t = Math.floor (t/60);
    var m = t%60; t-=m;
    t = Math.floor (t/60);
    var h = t%60;
    if (h<10) h='0'+h;
    if (m<10) m='0'+m;
    if (s<10) s='0'+s;
    if (ms<10) ms='0'+ms;
    return h + ':' + m + ':' + s + '.' + ms;
}

function startTIME() {
    thisDate = new Date();
    tdiff = thisDate.getTime() - startDate.getTime();
    var str = timeToStr (tdiff);
    if (init==1) document.clockform.clock.value = str;
    clocktimer = setTimeout("startTIME()",10);
}

function findTIME() {
    if (init==0) {
        startDate = new Date();
        startTIME();
        init = 1;
    }
    else {
        sum += tdiff;
        let str = trim(document.clockform.label.value);
if (str=='') {
    document.getElementById('marker').innerHTML = (++index+': ') +
        document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
    document.getElementById('markerSum').innerHTML = 'Всего: ' + timeToStr(sum);
    }
        else
            {
          document.getElementById('marker').innerHTML = (str+': ') +
              document.clockform.clock.value + '<br>' + document.getElementById('marker').innerHTML;
          document.getElementById('markerSum').innerHTML = 'Всего: ' + timeToStr(sum);
            }
        clearFields();
    }
}


// //function saveTIME() {
//     (function (window, undefined) {
//
//         window.Asc.plugin.button = function (id) {
//
//              if (id == 0) {
//             sumOf = timeToStr(sum);
//                     this.callCommand(function() {
//                         //    Api.GetActiveSheet().GetRange('B1').SetValue();
//                         Api.GetActiveSheet().GetRange('B4').Value = timeToStr(sum);
//                        // Api.GetActiveSheet().GetRange('B3').SetValue('333');
//
//                     }, true);
//
//              }
//              else
//              {
//                  this.executeCommand("close", "");
//              }
//
//         };
//     })(window, undefined);
// //}


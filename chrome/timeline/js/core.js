/*
 * POC test to see if a simile timeline can be added to an existing page
 */

var timeline_element = document.createElement('DIV');
timeline_element.setAttribute('id', 'timeline_element');
timeline_element.setAttribute('style', 'height: 250px; border: 1px solid #aaa;');
document.getElementById('content').appendChild(timeline_element);

//SimileAjax_urlPrefix = chrome.extension.getURL("js/timeline_2.3.0/timeline_ajax/");
//Timeline_ajax_url   = chrome.extension.getURL("js/timeline_2.3.0/timeline_ajax/simile-ajax-api.js");
//Timeline_urlPrefix  = chrome.extension.getURL("js/timeline_2.3.0/timeline_js/");
//
//Timeline_parameters ='bundle=true';
var createScriptElement1 = function() {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.language = "JavaScript";
            script.src = chrome.extension.getURL("js/timeline_2.3.0/timeline_ajax/simile-ajax-api.js");
            document.getElementsByTagName("head")[0].appendChild(script);
        }
createScriptElement1();
var createScriptElement2 = function() {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.language = "JavaScript";
            script.src = chrome.extension.getURL("js/timeline_2.3.0/timeline_ajax/simile-ajax-bundle.js");
            document.getElementsByTagName("head")[0].appendChild(script);
        }
createScriptElement2();
var createScriptElement3 = function() {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.language = "JavaScript";
            script.src = chrome.extension.getURL("js/timeline_2.3.0/timeline_js/timeline-bundle.js");
            document.getElementsByTagName("head")[0].appendChild(script);
        }
createScriptElement3();
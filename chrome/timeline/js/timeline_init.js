
var tl;
function on_page_load() {
    var eventSource = new Timeline.DefaultEventSource(0);
    
    /*
     *
     */
    var theme = Timeline.ClassicTheme.create();
    theme.event.bubble.width = 320;
    theme.event.bubble.height = 220;
    theme.ether.backgroundColors[1] = theme.ether.backgroundColors[0];
    
    
    var start_view_at_date = Timeline.DateTime.parseGregorianDateTime("1920")
    var bandInfos = [
    Timeline.createBandInfo({
        width:          "15%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        intervalPixels: 200,
        date:           start_view_at_date,
        showEventText:  false,
        theme:          theme
    }),
    Timeline.createBandInfo({
        width:          "85%", 
        intervalUnit:   Timeline.DateTime.DECADE, 
        intervalPixels: 200,
        eventSource:    eventSource,
        date:           start_view_at_date,
        theme:          theme
    })
    ];
    
    /*
     * start a +/- timeline counter from the given point.
     * 
     * i.e.
     * -15    -10    -5    0    5    10    15
     *                    1925
     */
    bandInfos[0].etherPainter = new Timeline.YearCountEtherPainter({
        startDate:  "Jan 01 1925 00:00:00 GMT",
        multiple:   5,
        theme:      theme
    });
    
    /*
     * To make the two bands scroll in synchrony, and then to make the bottom 
     * band highlights the visible time span of the top band
     */
    bandInfos[0].syncWith = 1;
    bandInfos[0].highlight = true;
    
    /*
     * creates a labled band
     * i.e.
     * (birth)----------------------(death)
     * 1840                            1926
     */
//    bandInfos[0].decorators = [
//    new Timeline.SpanHighlightDecorator({
//        startDate:  "Nov 14 1840 00:00:00 GMT",
//        endDate:    "Dec 05 1926 00:00:00 GMT",
//        startLabel: "birth",
//        endLabel:   "death",
//        color:      "#FFC080",
//        opacity:    50,
//        theme:      theme
//    })
//    ];
            
    tl = Timeline.create(document.getElementById("my-timeline"), bandInfos, Timeline.HORIZONTAL);
    /*
     * load an XML src file
     */
//    tl.loadXML("monet.xml", function(xml, url) {
//        eventSource.loadXML(xml, url);
//    });
    /*
     * load a JSON src file 
     */
//    tl.loadJSON("timeline-src.js?"+ (new Date().getTime()), function(json, url) {
//        eventSource.loadJSON(json, url);
//    });
}
var resizeTimerID = null;
function on_page_resize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            tl.layout();
        }, 500);
    }
}




//SimileAjax_urlPrefix = chrome.extension.getURL("js/timeline_2.3.0/timeline_ajax/");
//Timeline_ajax_url   = chrome.extension.getURL("js/timeline_2.3.0/timeline_ajax/simile-ajax-api.js");
//Timeline_urlPrefix  = chrome.extension.getURL("js/timeline_2.3.0/timeline_js/");
//
//Timeline_parameters ='bundle=true';

//var head= document.getElementsByTagName('head')[0];
//var script= document.createElement('script');
//script.type= 'text/javascript';
//script.innerHTML =
//    'Timeline_ajax_url ="timeline_2.3.0/timeline_ajax/simile-ajax-api.js";'
//    + 'Timeline_urlPrefix ="timeline_2.3.0/timeline_js/";'
//    + 'Timeline_parameters ="bundle=true";';
//head.appendChild(script);

//var script2= document.createElement('script');
//script2.type= 'text/javascript';
//script2.src = chrome.extension.getURL("js/timeline_2.3.0/timeline_js/timeline-api.js")+"?bundle=true";
//head.appendChild(script2);


/*************
 * ##########
 * Left Off:  
 * 
 * 
 * With this current setup, the ajax files are being loaded from 
 * static.mit....
 * 
 */

$('body').resize(function(){
  on_page_resize();
});
$('body').click(function(){
  on_page_load();
});




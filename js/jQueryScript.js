/*
    Jquery function to render the world map and to set its options
*/
jQuery(document).ready(function() {
      jQuery('#vmap').vectorMap({
        map: 'world_en',
        // backgroundColor: '#a5bfdd',
        borderColor: '#818181',
        borderOpacity: 1.5,
        borderWidth: 1,
        color: '#f4f3f0',
        colors: {at: "#FDFD0A",
                 us: "#77F563",
                 de: "#F71010",
                 dk: "#0C8E4D",
                 gb: "#A5BFDD",
                 gr: "#075089",
                 nl: "#F50FF5",
                 no: "#388E2B",
                 pl: "#77F563",
                 se: "#180BD5",
                 bs: "#9A036D"},
        enableZoom: false,
        hoverColor: '#c9dfaf',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: null,
        showTooltip: true,
        // onRegionClick: function(element, code, region)
        // {
        //     var message = 'You clicked "'
        //         + region
        //         + '" which has the code: '
        //         + code.toUpperCase();
        //
        //     alert(message);
// }
      });
    });

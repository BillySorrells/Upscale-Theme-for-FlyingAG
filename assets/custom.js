// Add your own custom JS here.
var mini4_2024 = document.querySelector('div#shopify-section-template--16628616200349__video_list_tQwgmt .video-outer');
var mavic_3t_thermal = document.querySelector('div#shopify-section-template--16642113732765__video_list_tcaa9J .video-outer');
var mavic_3m_multispectral = document.querySelector('div#shopify-section-template--16642113699997__video_list_hE9gdN .video-outer');

var flkty1 = new Flickity( mini4_2024, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    draggable: true,
    groupCells: 1
});

var flkty2 = new Flickity( mavic_3t_thermal, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    draggable: true,
    groupCells: 1
});

var flkty3 = new Flickity( mavic_3m_multispectral, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    draggable: true,
    groupCells: 1
});
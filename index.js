/* Feel free to change the JS functionality as well. Keep in mind the chrome extension
will NOT update with your changes until you remove the extension & re-add it to chrome */

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var newImg = request.data || {};

    function changeImages(newImg) {
        var images = document.querySelectorAll('img');
        console.log(images);
        for (i = 0; i < images.length; i++) {
            images[i].src = newImg;
        }
        return;
    }

    changeImages(newImg);
    sendResponse({data: newImg, success: true});
});
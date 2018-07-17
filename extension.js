document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('status').textContent = "Extension loaded";
    var button = document.getElementById('changelinks');

    button.addEventListener('click', function () {
        document.getElementById('status').textContent = "Link Changing";

        var text = document.getElementById('linkstext').value;
        if (!text) {
            document.getElementById('status').textContent = "Invalid URL provided";
            return;
        }
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {data: text}, function(response) {
                document.getElementById('status').textContent = "Updated Images";
                console.log('success');
            });
        });
    });
});
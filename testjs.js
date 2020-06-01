

         var record = new CampaignRecord({
            jsParams: '{"getCount":"/campaign/get-count","openWindow":"/campaign/open-window","window_close_timeout":100,"website_hits_timeout":15,"checkCampaign":"/campaign/check-campaign","nextCampaign":"/campaign/get-next-campaign","popupWindowWidth":1000,"popupWindowHeight":600,"skipCampaign":"/campaign/skip-campaign"}',
         });
    
document.getElementById("time-counter").parentElement.innerHTML = `
                View the video <span id="time-counter">0</span> / 100 seconds            `
document.querySelectorAll('.coins_color_red')[0].innerHTML = "50 bonus coins";
setTimeout(
	
	function() {
	record= new CampaignRecord({
            jsParams: '{"getCount":"/campaign/get-count","openWindow":"/campaign/open-window","window_close_timeout":45,"website_hits_timeout":15,"checkCampaign":"/campaign/check-campaign","nextCampaign":"/campaign/get-next-campaign","popupWindowWidth":1000,"popupWindowHeight":600,"skipCampaign":"/campaign/skip-campaign"}',
         });

},95000);

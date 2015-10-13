chrome.omnibox.onInputEntered.addListener(function (text) {
	var createProperties = {
		url : "http://vimeo.com/search?q="
		 + encodeURIComponent(text)
	};
	chrome.tabs.create(createProperties);
});
chrome.omnibox.onInputStarted
.addListener(function () {
	var suggestion = {
		description : "Search Vimeo for the query: %s "
	}
	chrome.omnibox.setDefaultSuggestion(suggestion);
});

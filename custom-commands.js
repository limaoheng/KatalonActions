// Usage: Add this to Extension Scripts, restart Katalon Recorder, and refresh the browser tab

Selenium.prototype.doTypeRandomUsername = function(locator, text) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);
    var sUsername = "testUsername";
    var nRandomNumber = Math.floor((Math.random() * 10000000) + 5000);

    // Replace the element text with the new text
    this.page().replaceText(element, sUsername + nRandomNumber);
};

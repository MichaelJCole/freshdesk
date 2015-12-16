Helpers = {};
Helpers.showSupportPopup = function(){
  console.log(FreshWidget);
  console.log(
    FreshWidget.init("", {"queryString": "&widgetType=popup", "utf8": "✓", "widgetType": "popup", "buttonType": "text", "buttonText": "Support", "buttonColor": "black", "buttonBg": "#5bc0de", "alignment": "4", "offset": "235px", "formHeight": "500px", "url": "https://support.freshdesk.com"} ) //jshint ignore:line
  );
};

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template.hello.onRendered(Helpers.showSupportPopup);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

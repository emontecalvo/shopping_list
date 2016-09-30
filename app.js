$(function() {
  var state = {
    items: []
  };

  function addItem (state, item) {
    state.items.push(item);
  };

  function renderList (state, element) {
    var htmlItems = state.items.map(function (item) {
      return "<li> " + 
        "<span class='shopping-item'>" + item + "</span>" + 
        "<div class='shopping-item-controls'>" +
          "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>check</span> " +
          "</button>" + " " +
          "<button class='shopping-item-delete'>" +
            "<span class='button-label'>delete</span>" +
          "</button>" +
        "</div>" +
      "</li>"
    });
    var lastItem = htmlItems[htmlItems.length-1];
    element.append(lastItem);
  };

  $(document).delegate(".shopping-item-toggle", "click", function(){
    var currentItem = $(this).parent().siblings();

    if (currentItem.hasClass("shopping-item__checked")) {
      currentItem.removeClass("shopping-item__checked");
    } else {
      SucurrentItem.addClass("shopping-item__checked");
    };
  });

  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    addItem (state, $("#shopping-list-entry").val());
    console.log(state);
    renderList(state, $(".shopping-list"));
  });

});







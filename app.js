$(function() {
  var state = {
    items: []
  };

  function addItem (state, item) {
    state.items.push(item);
    $(".value").text(state.items.length);
  };

  function removeItem (state, item) {
    var newItems = [];
    for (var i = 0; i < state.items.length; i++) {
      if (state.items[i] !== item) {
        newItems.push(state.items[i]);
      }
    }
    state.items = newItems;
    $(".value").text(state.items.length);
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
      currentItem.addClass("shopping-item__checked");
    };
  });

  $(document).delegate(".shopping-item-delete", "click", function(){
      var itemToDelete = $(this).parent().siblings().html();
      var garbage = $(this).parent().siblings().parent();
      garbage.remove();
      removeItem(state, itemToDelete);
  });

  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    addItem (state, $("#shopping-list-entry").val());
    renderList(state, $(".shopping-list"));
  });

});







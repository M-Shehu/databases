var Parse = {

  server: 'http://10.3.32.115:8000',

  create: function(type, message, successCB, errorCB = null) {

    if (type === 'message') {
      url = '/classes/messages';
    } else if (type === 'user') {
      url = '/classes/users';
    } else {
      url = '';
    }

    $.ajax({
      url: Parse.server + url,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  readAll: function(type, successCB, errorCB = null) {

    if (type === 'messages') {
      url = '/classes/messages';
    } else if (type === 'users') {
      url = '/classes/users';
    } else {
      url = '';
    }
    
    $.ajax({
      url: Parse.server + url,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};
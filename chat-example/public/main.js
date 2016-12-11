$(function () {
    var socket = io();
    var $inputMessage = $('.inputMessage');//输入区域
    var $usernameInput=$('.usernameInput');
    var $messages = $('.messages');//新消息显示的区域
    var username;
    var $window = $(window);
    var $loginPage = $('.login.page');
    var $chatPage = $('.chat.page');
    //LogIn
    function setUsername() {
        username=$usernameInput.val();
        console.log(username);
        if (username) {
            $loginPage.fadeOut();
            $chatPage.show();
            $loginPage.off('click');
            socket.emit('adduser', username);
        }
    }
    //AlreadyLogin Sending Message     
    function sendMessage() {
        var message = $inputMessage.val();
        if (message) {
            $inputMessage.val('');
            addChatMsg({
                username: username,
                message: message
            });
            // console.log(message);
        }
        socket.emit('newMsg', message);
    }
    function addChatMsg(data) {
        var $usernameDiv = $('<span class="username"/>')
            .text(data.username);
        // .css('color', getUsernameColor(data.username));
        var $messageTextDiv = $('<span class="messageBody"/>')
            .text(data.message);
        var $messageDiv = $('<li class="message"/>')
            .data('username', data.username)
            .append($usernameDiv,$messageTextDiv);
        // console.log($messageTextDiv);
        addMessageElement($messageDiv);
    }
    function addMessageElement(el) {
        var $el = $(el);
        $messages.append($el);
        // $messages[0].scrollTop = $messages[0].scrollHeight;
    }
    socket.on('newMsg', function (data) {
        addChatMsg(data);
    });

    $window.keydown(function (event) {
        if (event.which === 13) {
            if (username) {
                sendMessage();
                // console.log('Test');
                // socket.emit('stop typing');
                // typing = false;
            } else {
                setUsername();
            }
        }
    });



});
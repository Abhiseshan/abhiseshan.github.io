function command(){
    var output = '';

	todo = getinput();

    if(todo == 'clear'){
        document.getElementById('output').innerHTML = '';
        return;
    }

    // Display list of commands.
    if(todo === 'help'){
        output = 'Terminal-Mockup.htm commands:'
          + '<pre><b>clear</b>.....Clears entire terminal content.<br>'
          + '<b>help</b>......Lists available commands. You are here!<br>'
          + '<b>time</b>......Display time in local timezone.</pre>'
          + '<BR>';

    // Display current time.
    // Format: year-month-day hour:minute:second timezone_offset.
    }
	else if(todo === 'time'){
        var now = new Date();
        output = now.getFullYear() + '-'
          + two_digits(now.getMonth() + 1) + '-'
          + two_digits(now.getDate()) + ' '
          + two_digits(now.getHours()) + ':'
          + two_digits(now.getMinutes()) + ':'
          + two_digits(now.getSeconds()) + ' '
          + 'UTC ' + (now.getTimezoneOffset() > 0 ? '-' : '+')
          + (now.getTimezoneOffset() / 60) + 'h<BR>';
    }
	
	else if(todo =='skills'){
		output = 'None :( <BR>';
	}
	
	else if(todo == 'fuck you'){
		output= 'fuck you too <BR>';
	}
	
	else if(todo =='login'){
		output = 'No users found <BR>';
	}
	
	else if(todo == 'name'){
		output = 'root <BR>';
	}
	
	else if(todo == 'su'){
		output = 'No root access <BR>';
	}
	 
	else if(todo == 'info'){
		output = '------------------<BR>|                 |<BR>|                 |<BR>-----------/      /<BR>          /      /<BR>         /      /<BR>        /      /<BR>       /      /<BR>      /      /<BR>     /      /<BR>    /      /<BR>   /      /<BR>  /      /<BR> /      /<BR>/      /-----------<BR>|                 |<BR>|                 |<BR>-------------------<BR>';
	} 
	
	else if(todo.length > 0){
        output = 'Unrecognized command. Type <b>help</b> for a list of commands.<BR>';
    }
	

    document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + '> ' + 	todo + '<BR>'+ output;
}

function getinput()
{
	var input = document.getElementById('input').value;
    document.getElementById('input').value = '';
	return input;
}

function two_digits(value){
    if(value.toString().length < 2){
        value = '0' + value;
    }
    return value;
}

//document.getElementById('input').focus();

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    if(key === 13){
        command();
    }
	
};

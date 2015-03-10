function command(){
    var output = '';
	
	var intro = 'ZTerm version 1.0.0 designed by Abhinav Rajaseshan. <BR>(c) 2015 Abhinav Rajaseshan. All rights reserved. <BR>Type help for list of commands. <BR>'
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + intro;
	
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
		output = 'None :(';
	}
	
	else if(todo =='login'){
		var auth = login();
		if (auth == 1) output = 'Success';
		else output = 'Failed';
	}
	
	else if(todo == 'name'){
		output = 'root <BR>'
	}
	
	else if(todo.length > 0){
        output = 'Unrecognized command. Type <b>help</b> for a list of commands.<BR>';
    }

	//output = output + '<BR>abhiseshan.me&bsol;term> ';
	//output = output + '<BR>abhiseshan.me&	bsol;term> ';
    document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + output;
}

function login()
{
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + 'User Name: ';
	setTimeout(loop, 0);
	var uname = getinput();
	setTimeout(loop, 0);
	document.getElementById('output').innerHTML = document.getElementById('output').innerHTML + '3' + uname + '3' + '<BR>Password: ';
	var pass = getinput();
	//if (uname == 'root' && pass = 'toor') return 1;
	//else return 0;
	return 0;
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

document.getElementById('input').focus();

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    if(key === 13){
        command();
    }
};

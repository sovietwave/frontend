var trackTimer,
	tempShowing = false;

function setTempTitle(title)
{
	tempShowing = true;
	var track         = $('#player-trackinfo');
	
	track.html(title);
	clearTimeout(trackTimer);
	trackTimer = setTimeout(function() {tempShowing = false; setTrackInfo(RADIO_CURRENT_TRACK); }, 5000);
}

function trackVote (isClass)
{
	var auth = getVal('auth_code');
	if (!auth)
	{
		setTempTitle('Сначала пройди авторизацию.');
		return;
	}
	
	var method = (isClass) ? 'class' : 'disclass';
	
	setTempTitle('Голосуем...');
	$.getJSON('//api.nay.su/airin/trackvote/'+method, {'auth' : auth}, onVoted);
	
}

function onVoted(result)
{
	if (!result || typeof result['status'] == 'undefined')
	{
		setTempTitle('Не получилось ._.');
		return;
	}
	
	var mesg; 
	switch (+result['status'])
	{
		case -1: mesg = 'Чёт с сервером не то...'; break;
		case 0 :
		case 4 :
			var voteResult = (+result['payload'] == 1) ? 'класс' : 'дискласс',
				voteMode = (+result['status'] == 0) ? 'Поставили ' : 'Переголосовали, теперь стоит ';
			mesg = voteMode + voteResult;
			break;
			
		case 1 : mesg = 'Требуется авторизация :3'; break;
		case 2 : mesg = 'Неверный метод.'; break;
		case 3 : mesg = 'Ты уже голосовал за этот трек.'; break;
		default : mesg = 'Чёт херь какая-то: '+result['status'];
	}
	
	setTempTitle(mesg);
}
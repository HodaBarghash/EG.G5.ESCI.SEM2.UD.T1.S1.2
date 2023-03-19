function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6n6zlig7Btk":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzNIZ7ZXxGfZXpVlEgs7ZjmfoOygQ89-_LDOFvcJT_efktlsj5zEhGXSjUgmpYyjTN84g/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}


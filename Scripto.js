function Clean () {
	document.forms["Clean"].elements["login"].value = ""
	document.forms["Clean"].elements["senha"].value = ""
}
function Apagar () {
	document.forms["Clean"].elements["nome"].value = ""
	document.forms["Clean"].elements["senha"].value = ""
	document.forms["Clean"].elements["replace"].value = ""
}
/*function Cadastro () {
	login = document.forms["Clean"].elements["nome"].value
	if (login = "" )
		alert ("invalido")
	senha = document.forms["Clean"].elements["senha"].value
	if (senha = "")
		alert ("invalido")
	cookie
}*/
function Login (){
	login = document.forms["Clean"].elements["login"].value
	if (login.length < 3)
		alert ("invalido")
	senha = document.forms["Clean"].elements["senha"].value
	if (senha.length < 3)
		alert ("invalido")
}
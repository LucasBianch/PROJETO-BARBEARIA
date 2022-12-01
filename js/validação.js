function validar(){
    let celular = document.querySelector('#celphone').value;
    let senha = document.querySelector('#passw').value;
    let mensagem = "";
        if (celular === "")
            mensagem = "Celular ;";
        if (senha === "")
            mensagem += "\nSenha ;";
        if (mensagem !== ""){
            mensagem = "Os dados abaixo são obrigatórios:\n" + mensagem;
            alert(mensagem);
            return false;
        }
        return true;
}

function validatenewregistration(){
    let name = document.getElementById("name").value;
    let tel = document.getElementById("telphone").value;
    let password = document.getElementById("pass").value;
    let repitpassword = document.getElementById("repitpass").value;
    
    let mensagem = "";
        if (name === "")
        mensagem = "Nome Completo ;";
        if (tel === "")
        mensagem += "\nNúmero de Telefone ;";
        if (password === "")
        mensagem += "\nCrie uma senha ;";
        if (repitpassword === "")
        mensagem += "\nRepita a Senha ;";
        if (mensagem !== ""){
            mensagem = "Os dados abaixo são obrigatórios:\n" + mensagem;
            alert(mensagem);
            return false;
        }    
    alert("Cadastro Realizado com Sucesso");
    return true;
}

function validadenewpassword(){
    let telefone = document.getElementById("newpassword").value;

    let mensagem = "";
        if (telefone === "")
        mensagem = "Número de Telefone ;";
        if (mensagem !== ""){
            mensagem = "Os dados abaixo são obrigatórios:\n" + mensagem;
            alert(mensagem);
            return false;
        }
        alert("Nova senha enviada!");
    return true;
}

function validarlogadm(){
    let email = document.getElementById("EMAIL").value;
    let senha = document.getElementById("senha").value;
    let mensagem = "";

        if (email === "")
        mensagem = "E-mail;";
        if (senha === "")
        mensagem += "\nSenha";
        if (mensagem !== ""){
            mensagem = "Os dados abaixo são obrigatórios:\n" + mensagem;
            alert(mensagem);
            return false;
        }
    window.location.href = "Administrador.html"
    return true;
}

function newtab(){
    const url = '../Administrador.html'
    const tab = window.open(url, '_blank')
}
lg-adm.addEventListenner('click', () =>{
    openInNewTab(url)
})


function openlogcli(){
    const url = '../Agendar.html'
    const tab = window.open(url, '_blank')
}
lg-cli.addEventListenner('click', () =>{
    openInNewTab(url)
})
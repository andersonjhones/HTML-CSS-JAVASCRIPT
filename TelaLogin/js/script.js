const login = document.querySelector('#login');
const senha = document.querySelector('#senha');
const enviar = document.querySelector('#enviar');

enviar.onclick = ()=>{
  let  login_func =login.value;
  let   senha_func =senha.value;

  if(login_func ==="admin" && senha_func === "admin"){
    alert("Sucesso!");
    location.href = "home.html";
  }else if((login_func ==="") && (senha_func === "admin")){
    alert("Preencha o campo Login!");
  }else if ((senha_func === "") && (login_func ==="admin")){
    alert("Preencha o campo Senha!");
  }else if((login_func ==="") && (senha_func === "")){
    alert("Preencha os campos!")
  }else{
    alert("Usuário ou senha incorretos!");
  }
  login.value=""
  senha.value=""
  return false
}


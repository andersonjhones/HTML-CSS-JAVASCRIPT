const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const uf = document.querySelector("#uf");
const cidade = document.querySelector('#cidade');
uf.addEventListener('change', async ()=>{
    const urlCidades = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.value}/municipios`;
    const request = await fetch(urlCidades);
    const response = await request.json();
    // console.log(response)
    let options = '';
    response.forEach((cidade)=>{
       options += '<option>'+cidade.nome+'</option>';
    })
    cidade.innerHTML = options;
})

window.addEventListener('load', async ()=>{
    const request = await fetch(urlUF);
    const response = await request.json();
    // console.log(response)
    const optionsgroup = document.createElement("optgroup");
    optionsgroup.setAttribute("label", "UFs")
    response.forEach((uf) => {
        optionsgroup.innerHTML += '<option>'+uf.sigla+'</option>';
    });

    uf.append(optionsgroup);
    // console.log(uf)

});


const searchWrapper = document.querySelector('.search');
const inputBox = searchWrapper.querySelector('input');
const sugestBox = searchWrapper.querySelector('.list');
const icon = searchWrapper.querySelector('.icon');
let linkTag = searchWrapper.querySelector('a');
let weblink;

inputBox.onkeyup =(e) =>{
    let userData = e.target.value;
    let emptyArray = [];

    if(e.key=== 'Enter'){
        if(userData){
            window.open(`https://www.google.com/search?q=${userData}`, '_blank');
        };
    };

    if (userData){
        icon.onclick = () =>{
            weblink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute('href', weblink);
            linkTag.click();
        };
        emptyArray = sugestoes.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
        });

        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });

        searchWrapper.classList.add('active');

        ShowSuggestuions(emptyArray);

        let allList = sugestBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
           allList[i].setAttribute('onclick', 'select(this)');
            
        }

        if(e.key==='Escape'){
            searchWrapper.classList.remove('active');
        }
    }else{
            searchWrapper.classList.remove('active');
        };


    



};

function select(element){
    selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () =>{
        weblink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute('href', weblink);
        linkTag.click();
    };
    searchWrapper.classList.remove('active');
}



function ShowSuggestuions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
        listData = list.join('');
    };

    sugestBox.innerHTML = listData;
}


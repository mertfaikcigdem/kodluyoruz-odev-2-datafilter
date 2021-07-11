let data=[];

function fetchData(){
     // filtrele butonu görünür olsun
    let filterBox=document.querySelector("#filterBox");
    if (filterBox.style.display == "none") {
        filterBox.style.display = "flex";
    } else {
        filterBox.style.display = "flex";
    }
    try {
        // verilerin çekildiği yer
        fetch("data.json")
        .then(response => {
            return response.json();
        })
        .then(responseData => {
             // okunan verinin array'e aktarılması
            data=responseData;
            // verinin html'de listelenmesi için yazılan fonksiyon çağrılıyor
            listData(responseData);
        })  
        // işlem sırasında hata ile karşılaşılırsa catch'e düşüp hatayı bildiriyor
    } catch (e) {
        alert(e);
    }
    
}
// verinin belirtilen tagler içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li class='list-group-item' id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold '>number:</span> ${element.number}
            <span class='bold'>email:</span> ${element.email}
            <span class='bold'>age:</span> ${element.age}
            <span class='bold'>city:</span> ${element.city}
            <span class='bold'>isActive:</span> ${element.isActive}
        </li>
        `;
    })
}
// verinin belirtilen seçeneklerle filtrelenmesini sağlayan fonksiyon
function filterData (filter) {
    let age = document.querySelector("#age");
    let active = document.querySelector("#active");
    let fname = document.querySelector("#fname").value.toUpperCase();
     if (active.checked == true && age.checked == true && fname) {
        let filteredData = data.filter(element => element.isActive === true && element.age > 17 && element.name.charAt() === fname)
        listData(filteredData);
    }
    else if (active.checked == true && age.checked == true) {
        let filteredData = data.filter(element => element.isActive === true && element.age > 17)
        listData(filteredData);
    }
    else if (active.checked == true && fname) {
        let filteredData = data.filter(element => element.isActive === true  && element.name.charAt() === fname)
        listData(filteredData);
    }
    else if (age.checked == true && fname) {
        let filteredData = data.filter(element => element.age > 17 && element.name.charAt() === fname)
        listData(filteredData);
    }
    else if (age.checked == true) {
        let filteredData = data.filter(element => element.age > 17)
        listData(filteredData);
    }
    else if (active.checked == true) {
        let filteredData = data.filter(element => element.isActive === true)
        listData(filteredData);
    }
    else if (fname) {
        let filteredData = data.filter(element => element.name.charAt() === fname)
        listData(filteredData);
    }
    else {
        alert("Filtreleme yapınız.")
    }
} 

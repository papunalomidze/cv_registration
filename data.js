let indx = degreeIndex()


let data = {
    name: sessionStorage.getItem("name"),
    surname: sessionStorage.getItem("surName"),
    email: sessionStorage.getItem("mail"),
    phone_number: sessionStorage.getItem("number"),
    experiences:[
        {
            position: sessionStorage.getItem("position"),
            employer: sessionStorage.getItem("employer"),
            start_date: sessionStorage.getItem("workStartdate"),
            due_date: sessionStorage.getItem("workDueDate"),
            description: sessionStorage.getItem("workDescription"),
        }
    ],
    educations: [
        {
            institute : sessionStorage.getItem("study"),
            degree_id :indx,
            due_date : sessionStorage.getItem("degDate"),
            description : sessionStorage.getItem("degDescription"),
        }
    ],
    image: "image-name.png",
    about_men: sessionStorage.getItem("info"),
}

function degreeIndex(){
    if(sessionStorage.getItem("degree") == "საშუალო სკოლის დიპლომი"){
        return 1
    }else if (sessionStorage.getItem("degree") ==   "ზოგადსაგანმანათლებლო დიპლომი"){
        return 2
    }else if(sessionStorage.getItem("degree") ==  "ბაკალავრი"){
        return 3
    }else if(sessionStorage.getItem("degree") ==  "მაგისტრი"){
        return 4
    }else if(sessionStorage.getItem("degree") ==  "დოქტორი"){
        return 5
    }else if(sessionStorage.getItem("degree") ==  "ასოცირებული ხარისხი"){
        return 6
    }else if(sessionStorage.getItem("degree") == "სტუდენტი"){
        return 7
    }else if(sessionStorage.getItem("degree") ==  "კოლეჯი(ხარისიხს გარეშე)"){
       return  8
    }else if(sessionStorage.getItem("degree") ==  "სხვა"){
        return 9
    }
}


// const byteCharacters = atob()
// const byteNumbers = new Array(byteCharacters.length);
// for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
// }
// const byteArray = new Uint8Array(byteNumbers);
// const blob = new Blob([byteArray], {type: contentType});


// const api_select = 'https://resume.redberryinternship.ge/api/degrees'
// async function getchoice(){
//     const responce = await (fetch(api_select));
//     const coices = await responce.json()
//     console.log(coices)
// }

// getchoice()


// fetch('https://resume.redberryinternship.ge/api/cvs', {method: "POST", body: JSON.stringify(data)})
// .then(results => results.json())
// .then(console.log);





// const options = {
//     method: 'POST',
//     Headers: { 
//         'Content-Type': 'application/json'
//     },body: JSON.stringify(data)
// }
// fetch('https://resume.redberryinternship.ge/api/cvs', options).then(response =>{
//     console.log(response);
// })


// var formdata = new FormData();
// formdata.append("name", "დავით");
// formdata.append("surname", "ონიანი");
// formdata.append("email", "davitoniani@redberry.ge");
// formdata.append("phone_number", "+995598123456");
// formdata.append("experiences", "[{\n  \"position\": \"back-end developer\",\n  \"employer\": \"Redberry\",\n  \"start_date\": \"2019/09/09\",\n  \"due_date\": \"2020/09/23\",\n  \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum.\"\n}]");
// formdata.append("educations", "[{\n  \"institute\": \"თსუ\",\n  \"degree_id\": 7,\n  \"due_date\": \"2017/06/25\",\n  \"description\": \"სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ.\"\n}]");
// formdata.append("about_me", "\"ჩემი აღწერა\"");

// var requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://resume.redberryinternship.ge/api/cvs", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

fetch('https://resume.redberryinternship.ge/api/cvs', {
    method: 'POST',
    body: JSON.stringify({ data })
})
.then(response => {
    console.log(response)
})
.catch(error => {
    console.error('Error:', error);
});


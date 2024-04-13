let tbody = document.querySelector(".tbody");
let thead = document.querySelector(".thead");
let body = document.querySelector("body")
let cover=document.createElement("div");
body.append(cover);
cover.classList.add("cover");
let datejs =[
    {
        id : 1,
        img : "icons/Avatar1.svg",
        name : "Jones",
        surname : "Jacob",
        email : "jackson.graham@example.com",
        city : "Dushanbe",
        active : "Inactive",
        phone : "00-000-00-00",
        status : false
    }
];

let lightMode = document.querySelector(".lightModeBtn")
let darkMode = document.querySelector(".darkModeBtn")
let darkh1 = document.querySelector(".darkh1")
let selectDark = document.querySelector(".selectDark")
let selectDark1 = document.querySelector(".selectDark1")
let inputDark = document.querySelector(".inputDark")

darkMode.onclick=()=>{
    body.style.backgroundColor = "#121212"
    lightMode.style.backgroundColor = "#383737"
    darkh1.style.color = "white"
    selectDark.style.backgroundColor = "black"
    selectDark.style.color = "white"
    selectDark1.style.backgroundColor = "black"
    selectDark1.style.color = "white"
    inputDark.style.backgroundColor = "black"
    inputDark.style.color = "white"
    thead.classList.remove("thead");
    thead.classList.add("theadDark")
    tbody.style.backgroundColor = "black"
    tbody.style.color = "white"
}

lightMode.onclick=()=>{
    body.style.backgroundColor = "white"
    lightMode.style.backgroundColor = "#00000014"
    darkh1.style.color = "#343A40"
    selectDark.style.backgroundColor = "white"
    selectDark.style.color = "black"
    selectDark1.style.backgroundColor = "white"
    selectDark1.style.color = "black"
    inputDark.style.backgroundColor = "white"
    inputDark.style.color = "black"
    thead.classList.add("thead");
    thead.classList.remove("theadDark")
    tbody.style.backgroundColor = "#FBFBFB"
    tbody.style.color = "#40464C"
}

let addDialog = document.querySelector(".addDialog")
let addBtn = document.querySelector(".addBtn")
let formAdd = document.querySelector(".formAdd")
addBtn.onclick=()=>{
    addDialog.showModal()
}
formAdd.onsubmit=(e)=>{
    formAdd["selectActive"].value === "Active";
    e.preventDefault()
    let user={
        id : Date.now(),
        img : formAdd["addImg"].value,
        name :formAdd["addName"].value,
        surname : formAdd["addSurname"].value,
        email : formAdd["addEmail"].value,
        active : formAdd["selectActive"].value,
        city : formAdd["selectCity"].value,
        phone : formAdd["addPhone"].value,
        status : false
    }
    datejs.push(user)
    get()
    formAdd["addImg"].value=""
    formAdd["addName"].value=""
    formAdd["addSurname"].value=""
    formAdd["addEmail"].value=""
    formAdd["selectActive"].value=""
    formAdd["selectCity"].value=""
    formAdd["addPhone"].value=""
    addDialog.close()
}

let editDialog = document.querySelector(".editDialog")
let formEdit = document.querySelector(".formEdit")

function deletes(id) {
    datejs=datejs.filter(el=>{
        return el.id!=id
    })
    get()
}

let cancelDialog = document.querySelector(".cancelBtn")
cancelDialog.onclick=()=>{
    addDialog.close()
}

let cancelDialog1 = document.querySelector(".cancelBtn1")
cancelDialog1.onclick=()=>{
    addDialog.close()
}

let cancelDialogEdit = document.querySelector(".cancelBtnEdit")
cancelDialogEdit.onclick=()=>{
    editDialog.close()
}

let cancelDialogEdits = document.querySelector(".cancelBtnEdits")
cancelDialogEdits.onclick=()=>{
    editDialog.close()
}

let serachTeam = document.querySelector(".search")
let copyDate = datejs
serachTeam.oninput=(e)=>{
    let searchItem = e.target.value.trim().toLowerCase()
    if(searchItem===""){
        datejs=copyDate
    }
    else{
        datejs=copyDate.filter(el=>{
            return `${el.name}${el.surname}`.toLowerCase().includes(searchItem)
        })
    }
    get()
}

let selectCity = document.querySelector(".selectCity")
let copyCity = datejs
selectCity.oninput=(e)=>{
    let cityItem = e.target.value.trim().toLowerCase()
    if(cityItem===""){
        datejs=copyCity
    }
    else{
        datejs=copyCity.filter(el=>{
            return el.city.toLowerCase().includes(cityItem)
        })
    }
    get()
}

function checking(id) {
    datejs=datejs.map(el=>{
        if(el.id==id){
            el.status=!el.status
        }
        return el
    })
    get()
}

let selectActive = document.querySelector(".selectActive")
let copyActive = datejs
selectActive.oninput=()=>{
    datejs=copyActive.filter(el=>{
        if(el.status==true && selectActive.value=="Active"){
            return el
        }
        if(el.status==false && selectActive.value=="Inactive"){
            return el
        }
        if(selectActive.value===""){
            return el
        }
    });
    get()
}

let sortBtn = document.querySelector(".sortBtn")
sortBtn.onclick=()=>{
    datejs=datejs.sort((a,b)=>{
        if(a.surname<b.surname || a.surname.toLowerCase()<b.surname.toLowerCase()){
            return -1
        }
        if(a.surname>b.surname || a.surname.toLowerCase()>b.surname.toLowerCase()){
            return 1
        }
        return 0
    })
    get()
}

let dublicateBtn = document.querySelector(".dublicateBtn")
dublicateBtn.onclick=()=>{
    datejs.sort((a,b)=>{
        if(a.name<b.name){
            return -1
        }
        if(a.name>b.name){
            return 1
        }
        return 0
    })
    let arr=[];
    for(let i=0;i<datejs.length;i++){
        if(datejs[i].name!=datejs[i+1]?.name){
            arr.push(datejs[i]);
        }
    }
    datejs=arr
    get()
}

let newDate = []
let wiewProfile = document.querySelector(".profileInfo")
let infoSection = document.querySelector(".bottom-section-profile")
let closeInfo = document.querySelector(".top-section-profile_left p")
let topSectionInfo = document.createElement("div")
topSectionInfo.classList.add("section-profile")
let divInfoImg = document.createElement("div")
let bottomSectionInfo = document.createElement("div")
bottomSectionInfo.classList.add("section-info-bottom")
let infoImg = document.createElement("img")
let allInfo = document.createElement("div")
let infoText = document.createElement("div")
let infoNameAndSurname = document.createElement("h1")
let infoEmail = document.createElement("p")
let infoBottomDiv = document.createElement("div")
let infoBottomDiv2 = document.createElement("div")
let infoBottomDiv1 = document.createElement("div")
let infoBottomDiv_left = document.createElement("div")
let infoBottomDiv1_left = document.createElement("div")
let infoBottomDiv2_left = document.createElement("div")

let infoBottomDiv_right = document.createElement("div")
let infoBottomDiv1_right = document.createElement("div")
let infoBottomDiv2_right = document.createElement("div")

let infoCityProf = document.createElement("h1")
let infoPhoneProf = document.createElement("h1")
let infoStatusProf = document.createElement("button")

let infoText_left = document.createElement("p")
let infoImg_left = document.createElement("img")
let infoText1_left = document.createElement("p")
let infoImg1_left = document.createElement("img")


let infoText2_left = document.createElement("p")
let infoImg2_left = document.createElement("img")

let bntInfo_1 = document.createElement("button")
let textBtn_1 = document.createElement("p")
let imgBtn_1 = document.createElement("img")

let btnInfo_2 = document.createElement("button")
let textBtnDelete_2 = document.createElement("p")
let imgBtnDelete_2 = document.createElement("img")

let infoBtnDetail = document.createElement("div")
let infoDivEnd = document.createElement("div")
infoDivEnd.classList.add("allDivBtn")

function info(id) {
    topSectionInfo.innerHTML="";
    newDate=datejs.map(el=>{
        if(el.id==id){
        divInfoImg.classList.add("infoImg")
        infoImg.src  = el.img
        infoImg.style.width = "180px"
        divInfoImg.append(infoImg)
        infoText.classList.add("infoText")
        infoNameAndSurname.classList.add("informNameAndSurname")
        infoNameAndSurname.innerHTML = `${el.surname} ${el.name}`
        infoEmail.classList.add("infoEmail")
        infoEmail.innerHTML=el.email
        infoText.append(infoNameAndSurname,infoEmail)
        allInfo.append(divInfoImg,infoText)
        topSectionInfo.append(allInfo)
        infoSection.append(topSectionInfo,bottomSectionInfo,infoDivEnd)
        closeInfo.onclick=()=>{
            wiewProfile.classList.remove("widthOpen")
            wiewProfile.classList.add("widthClose")
            cover.classList.remove("black")
        }

        
        infoBottomDiv_left.classList.add("infoBottomDiv_left")
        infoBottomDiv1_left.classList.add("infoBottomDiv_left")
        infoImg_left.src = "icons/lock.svg"
        infoText_left.innerHTML = "City"
        infoText_left.classList.add("allThInfo")


        infoBottomDiv2_left.classList.add("infoBottomDiv_left")
        infoImg2_left.src = "icons/phone.svg"
        infoText2_left.innerHTML = "Phone"
        infoText2_left.classList.add("allThInfo")


        infoImg1_left.src = "icons/statustim.svg"
        infoText1_left.innerHTML = "Status"
        infoText1_left.classList.add("allThInfo")

        infoCityProf.innerHTML = el.city
        infoPhoneProf.innerHTML = el.phone
        
        infoCityProf.classList.add("infoAllText")
        infoPhoneProf.classList.add("infoAllText")
        infoStatusProf.innerHTML = el.active
        if(el.active=="Inactive"){
            infoStatusProf.classList.add("inactive")
        }
        if(el.active=="Active"){
            infoStatusProf.classList.add("active");
        }

        infoBottomDiv_left.append(infoImg_left,infoText_left)
        infoBottomDiv2_left.append(infoImg2_left,infoText2_left)
        infoBottomDiv1_left.append(infoImg1_left,infoText1_left)
        infoBottomDiv2_right.append(infoPhoneProf)
        infoBottomDiv_right.append(infoCityProf)
        infoBottomDiv1_right.append(infoStatusProf)
        infoBottomDiv.append(infoBottomDiv_left,infoBottomDiv_right,infoBottomDiv1_left)
        infoBottomDiv.classList.add("infoDivBottom")
        infoBottomDiv1.append(infoBottomDiv1_left,infoBottomDiv1_right)
        infoBottomDiv2.append(infoBottomDiv2_left,infoBottomDiv2_right)
        infoBottomDiv1.classList.add("infoDivBottom")
        infoBottomDiv2.classList.add("infoDivBottom")
        bottomSectionInfo.append(infoBottomDiv,infoBottomDiv1,infoBottomDiv2)

        textBtn_1.innerHTML = "Edit"
        imgBtn_1.src = "icons/editwhite.svg"
        bntInfo_1.append(imgBtn_1,textBtn_1)
        bntInfo_1.classList.add("btnsInfo")
        bntInfo_1.onclick=()=>{
                editDialog.showModal()
                formEdit["editImg"].value=el.img
                formEdit["editName"].value=el.name
                formEdit["editSurname"].value=el.surname
                formEdit["editEmail"].value=el.email
                formEdit["editSelectActive"].value=el.active
                formEdit["editSelectCity"].value=el.city
                formEdit["editPhone"].value=el.phone
    
                formEdit.onsubmit=(e)=>{
                    e.preventDefault()
                    el.img=formEdit["editImg"].value
                    el.name=formEdit["editName"].value
                    el.surname=formEdit["editSurname"].value
                    el.email=formEdit["editEmail"].value
                    el.active=formEdit["editSelectActive"].value
                    el.city=formEdit["editSelectCity"].value
                    el.phone=formEdit["editPhone"].value
                    get()
                    editDialog.close()
                    wiewProfile.classList.add("widthClose")
                    cover.classList.remove("black")
                }
        }

        textBtnDelete_2.innerHTML = "Delete"
        imgBtnDelete_2.src = "icons/delete.svg"
        btnInfo_2.append(imgBtnDelete_2,textBtnDelete_2)
        btnInfo_2.classList.add("btnsInfo1")
        btnInfo_2.onclick=()=>{
            deletes(el.id)
            wiewProfile.classList.add("widthClose")
            cover.classList.remove("black")
        }
        
        infoDivEnd.append(bntInfo_1,btnInfo_2)
        }
    });
    get()
}

function get() {
    tbody.innerHTML=""
    datejs.forEach(el=>{
        let tr = document.createElement("tr")
        let tdNameAndSurname = document.createElement("td")
        let allUser = document.createElement("div")
        allUser.classList.add("allUser")
        let leftImgUser = document.createElement("div")
        let imgUser = document.createElement("img")
        imgUser.classList.add("imgUser")
        imgUser.src = el.img
        leftImgUser.append(imgUser)
        let rightImgUser = document.createElement("div")
        let divNameAndSurname = document.createElement("div")
        let nameAndSurname = document.createElement("p")
        nameAndSurname.innerHTML = `${el.surname} ${el.name}`
        nameAndSurname.classList.add("nameAndSurname")
        divNameAndSurname.append(nameAndSurname)
        let divEmail = document.createElement("div")
        let emailUser = document.createElement("p")
        emailUser.innerHTML = el.email
        emailUser.classList.add("emailUsers")
        divEmail.append(emailUser)
        rightImgUser.append(divNameAndSurname,divEmail)
        allUser.append(leftImgUser,rightImgUser)
        tdNameAndSurname.append(allUser)

        let tdCity = document.createElement("td")
        tdCity.innerHTML = el.city
        tdCity.classList.add("textTd")
        let tdActive = document.createElement("td")
        let activeBtn = document.createElement("button")
        activeBtn.innerHTML = el.active
        tdActive.append(activeBtn)
        if(el.active=="Inactive"){
            activeBtn.classList.add("inactive")
        }
        if(el.active=="Active"){
            activeBtn.classList.add("active")
        }

        let tdPhone = document.createElement("td")
        tdPhone.innerHTML=el.phone
        tdPhone.classList.add("textTd")
        let tdAction = document.createElement("td")
        tdAction.classList.add("more")
        tdAction.innerHTML = ". . ."

        let moreclick = document.createElement("div")

        let divProfile = document.createElement("div")
        divProfile.classList.add("editBtn")
        let profileImg = document.createElement("img")
        profileImg.src = "icons/profile.svg";
        let textProfile = document.createElement("p")
        textProfile.innerHTML = "Profile";
        divProfile.append(profileImg,textProfile)
        divProfile.onclick=()=>{
            wiewProfile.classList.remove("widthClose")
            wiewProfile.classList.add("widthOpen")
            wiewProfile.style.zIndex="100";
            cover.classList.toggle("black");
            wiewProfile.style.transition = "0.5s"
            info(el.id)
        }

        let divDelete = document.createElement("div")
        divDelete.classList.add("editBtn")
        let deleteImg = document.createElement("img")
        deleteImg.src = "icons/delete.svg";
        let textDelete = document.createElement("p")
        textDelete.innerHTML = "Delete";
        textDelete.classList.add("textDelete")
        divDelete.append(deleteImg,textDelete)
        divDelete.onclick=()=>{
            deletes(el.id)
        }

        let divCheck = document.createElement("div")
        divCheck.classList.add("checkBtn")
        let check = document.createElement("input")
        check.type = "checkbox"
        check.checked = el.status
        check.classList.add("checkbox")
        check.onclick=()=>{
            checking(el.id)
        }
        if(el.status==true){
            nameAndSurname.classList.add("names")
            activeBtn.classList.add("active")
            activeBtn.innerHTML = "Active"
        }
        // completed line throw
        let checkText = document.createElement("p")
        checkText.innerHTML = "Complited"
        checkText.classList.add("checkText")
        divCheck.append(check,checkText)

        let divEdit = document.createElement("div")
        divEdit.classList.add("editBtn")
        let editImg = document.createElement("img")
        editImg.src = "icons/edit.svg";
        let textEdit = document.createElement("p")
        textEdit.innerHTML = "Edit";
        divEdit.append(editImg,textEdit)
        
        divEdit.onclick=()=>{
            editDialog.showModal()
            formEdit["editImg"].value=el.img
            formEdit["editName"].value=el.name
            formEdit["editSurname"].value=el.surname
            formEdit["editEmail"].value=el.email
            formEdit["editSelectActive"].value=el.active
            formEdit["editSelectCity"].value=el.city
            formEdit["editPhone"].value=el.phone

            formEdit.onsubmit=(e)=>{
                e.preventDefault()
                el.img=formEdit["editImg"].value
                el.name=formEdit["editName"].value
                el.surname=formEdit["editSurname"].value
                el.email=formEdit["editEmail"].value
                el.active=formEdit["editSelectActive"].value
                el.city=formEdit["editSelectCity"].value
                el.phone=formEdit["editPhone"].value
                get()
                editDialog.close()
            }
        }
        moreclick.append(divProfile,divEdit,divCheck,divDelete);
        moreclick.classList.add("none");
        tdAction.append(moreclick);
        tdAction.onclick=()=>{
            moreclick.classList.toggle("allMore");
        }

        tr.append(tdNameAndSurname,tdCity,tdActive,tdPhone,tdAction)
        tbody.append(tr)
    })
}
get()
var plus = document.getElementById("plus");
var refresh = document.getElementById("refresh");
var search = document.getElementById("search");
var firstInput = document.getElementById("firstInput");
var isClicked = true;
var input = document.getElementById("input");
var date = document.getElementById("date");
var check = document.getElementById("check");
var erase = document.getElementById("erase");
var erase1 = document.getElementById("erase1");
var errorContent = document.getElementById("errorContent");
var taskListUl = document.getElementById("taskListUl");
var completedTaskUl = document.getElementById("completedTaskUl");
var oldTaskUl = document.getElementById('oldTaskUl');
var progressContent = document.getElementById("progressContent");
var inputValue = document.getElementById("inputValue");
var firstListLi = document.getElementById("firstLi");
var searchinput = document.getElementById("searchinput");
var secondInput = document.getElementById("secondInput");
secondInput.style.display = "none";
var arr = [];
var arr1 = [];


plus.addEventListener("click", function () {
    if (isClicked) {
        firstInput.style.display = "block";
        isClicked = false;
    }
    else {
        firstInput.style.display = "none";
        isClicked = true;
    }
});

refresh.addEventListener("click", function () {
    location.reload();
})

search.addEventListener("click", function () {
    if (isClicked) {
        secondInput.style.display = "block";
        isClicked = false;
    }
    else {
        secondInput.style.display = "none";
        isClicked = true;
    }
})

check.addEventListener("click", function () {
    if (input.value == "" || date.value == "") {
        errorContent.style.color = "red"
        errorContent.textContent = "Please Provide Input!"
        // errorContent.style.display ="block";
    }
    else {
        // errorContent.style.display ="none";
        errorContent.textContent = "";
        arr.push(object());
        addList();
    }
});

erase.addEventListener("click", function () {
    input.value = "";
    date.value = ""
});

erase1.addEventListener("click", function () {
    searchinput.value = "";
    arr.forEach((item) => {
        var xyz = document.getElementById(item.inputName)
        if (xyz) {
            xyz.style.display = "block";
            xyz.style.display = "flex";
            completedTaskUl.style.display = "block";

            completedTaskUl.style.justifyContent = "center";
            oldTaskUl.style.display = "block";

            oldTaskUl.style.justifyContent = "center";
        }
    })
});


function addList() {
    var li = document.createElement("li")
    var mainDiv = document.createElement("div");
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var edit = document.createElement("span");
    var del = document.createElement("span");
    mainDiv.setAttribute("id", input.value);
    del.setAttribute("id", date.value);
    div1.innerHTML = input.value;
    div2.innerHTML = date.value;
    edit.innerHTML = "<i class='fa fa-pencil'></i>";
    del.innerHTML = "<i class='fa fa-trash'></i>";
    mainDiv.appendChild(div1);
    mainDiv.appendChild(div2);
    mainDiv.appendChild(edit);
    mainDiv.appendChild(del);
    li.appendChild(mainDiv);
    taskListUl.append(li);
    mainDiv.classList.add("liststyle");
    div1.addEventListener("click", function () {
        // completedTaskUl.append(div1);
        // completedTaskUl.append(div2);
        // li.remove(mainDiv);
        // mainDiv.classList.add("liststyle1");
        // var li1 =document.createElement("li")
        var li1 = document.createElement("li");
        // var div3 = document.createElement("div");
        // var div4 = document.createElement("div");
        li1.innerHTML = div1.innerHTML + " " + div2.innerHTML;
        li1.style.display = "flex";
        li1.style.justifyContent = "center";
        li1.style.fontSize = "21px";
        // div1.style.paddingRight="40px";
        // para.classList.add("liststyle");
        // li1 = para;
        completedTaskUl.append(li1);
        arr1.push(object());
        progressContent.innerHTML = "You Have Completed " + Math.floor((100 * arr1.length) / arr.length) + "%";
    })
    div2.addEventListener("click", function () {
        var li1 = document.createElement("li");
        li1.innerHTML = div1.innerHTML + " " + div2.innerHTML;
        li1.style.display = "flex";
        li1.style.justifyContent = "center";
        li1.style.fontSize = "21px";
        completedTaskUl.append(li1);
        arr1.push(object());
        progressContent.innerHTML = "You Have Completed " + Math.floor((100 * arr1.length) / arr.length) + "%";
    })
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    var diffInMs = new Date(today) - new Date((date.value).toString())
    var diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    if (diffInDays > 0) {
        var li2 = document.createElement("li");
        li2.innerHTML = div1.innerHTML + " " + div2.innerHTML;
        li2.style.display = "flex";
        li2.style.justifyContent = "center";
        li2.style.fontSize = "21px";
        oldTaskUl.appendChild(li2);
    }

    del.addEventListener("click", function () {
        taskListUl.removeChild(li);
    })
}

function object() {
    var obj = {}
    obj["inputName"] = input.value;
    obj["dateName"] = date.value;
    return obj;
}

searchinput.addEventListener("keypress", function (event) {
    if (event.which == 13) {
        // if(searchinput.value === div1){
        //     // taskListUl.textContent ="";
        //     alert("clicked")
        // }
        // alert("clicked");
        arr.forEach((item) => {
            var xyz = document.getElementById(item.inputName)
            if (xyz) {
                xyz.style.display = "none"
            }
        })
        var abc = document.getElementById(searchinput.value);
        if (abc) {
            abc.style.display = "block";
            abc.style.display = "flex"
            // abc.classList.add("liststyle");
            completedTaskUl.style.display = "none";
            oldTaskUl.style.display = "none";
        }
    }
});
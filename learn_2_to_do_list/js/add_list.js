var add = document.getElementById("add");
var todolist = document.getElementById("todolist");
var task_name = "";
var todolistdata= [];
add.onclick = function() {
  var obj_list = {
    todo: "",
    done: false
  };
 
  task_name = prompt("新建任务");
  if (task_name.trim() === null) {
    alert("不能为空");
    return;
  }
  obj_list.todo = task_name.trim();
  todolistdata.push(obj_list);
  saveData(todolistdata);
  loadDatalist();
};

function saveData(data) {
  localStorage.setItem("mytodolist", JSON.stringify(data));
}
function loadData() {
  var data = localStorage.getItem("mytodolist");
  if (data != null) {
    return JSON.parse(data);
  } else {
    return [];
  }
}
function edit(i) {
    var edit=document.getElementById("edit"+i);
    var pcontent=edit.innerHTML;
    console.log(pcontent);


    edit.innerHTML="<input type='text' id='input"+i+"'"+" value='"+pcontent+"'>";
    var updateinput=document.getElementById("input"+i);
    updateinput.focus();
    updateinput.setSelectionRange(0,updateinput.value.length);
    updateinput.onblur=function(){
        if(updateinput.value.length==0){
            edit.innerHTML=pcontent;
        }else{
            update(i,"todo",updateinput.value);
        }
    };
    // updateinput.onkeypress=function(e){
    //     if(e.keyCode===13){
    //         if(updateinput.value.length===0){
    //             edit.innerHTML=pcontent;
    //         }else{
    //             update(i,"todo",updateinput.value);
    //         }

    //     }

    // }
}
function update(i, field, value) {
  var todolistdata = loadData();
  todolistdata[i][field] = value;
  saveData(todolistdata);
  loadDatalist();
}
function remove(i) {
  var todolistdata = loadData();
  todolistdata.splice(i, 1);
  saveData(todolistdata);
  loadDatalist();
}
function loadDatalist() {
  var todolist = document.getElementById("todolist");
  var donelist = document.getElementById("donelist");
  var todoString = "";
  var doneString = "";
  var todocount = 0;
  var donecount = 0;
  todolistdata = loadData();

  if (todolistdata != null) {
    for (var i = 0; i < todolistdata.length; i++) {
      if (!todolistdata[i].done) {
        todoString +=
          "<li class='list-li'><input class='list-li-input' type='checkbox' onchange='update(" +
          i +
          ",\"done\",true)'><p class='list-li-p' id='edit" +
          i +
          "' onclick='edit(" +
          i +
          ")'>" +
          todolistdata[i].todo +
          "</p><a class='li-a' onclick='remove(" +
          i +
          ")'>-</a></li>";
        todocount++;
      } else {
        doneString +=
          "<li class='list-li'><input class='list-li-input' type='checkbox' onchange='update(" +
          i +
          ",\"done\",false)' checked><p class='list-li-p' id='edit" +
          i +
          "' onclick='edit(" +
          i +
          ")'>" +
          todolistdata[i].todo +
          "</p><a class='li-a' onclick='remove(" +
          i +
          ")'>-</a></li>";
        donecount++;
      }
    }
    todolist.innerHTML = todoString;
    donelist.innerHTML = doneString;
  } else {
    todolist.innerHTML = "";
    donelist.innerHTML = "";
  }
}

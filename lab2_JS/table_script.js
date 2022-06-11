let ct = 0;

function add_row() {
    let table = document.getElementById("things")
    let row = table.insertRow()
    let cell1 = row.insertCell()
    let cell2 = row.insertCell()
    let cell3 =row.insertCell()
    
    color()

    cell1.setAttribute("id", "cell1"+ct)
    cell2.setAttribute("id", "cell2"+ct)
    cell3.setAttribute("id", "cell3"+ct)
    cell1.innerHTML = "<input type=\"text\" id=\"name"+ct+"\" name=\"name\">"
    cell2.innerHTML = "<input type=\"number\" id=\"quan"+ct+"\" name=\"quan\">"
    cell3.innerHTML = "<button type=\"button\" onclick=\"save_row("+ct+")\">Save</button>"
    ct++;
}

function color() {
    let tr = document.getElementsByTagName("tr")
    let i
    for (i = 0; i < tr.length; i++) {
        if (i % 2===0) {
            tr[i].setAttribute("style", "background-color: white")
        } else {
            tr[i].setAttribute("style", "background-color: grey")
        }
    }
}
function delete_row(x) {
    let p = x.parentNode.parentNode;
    p.parentNode.removeChild(p)
    if (p.rowIndex % 2===0) {
        p.setAttribute("style", "background-color: white")
    } else {
        p.setAttribute("style", "background-color: grey")
    }
    
    color()
}

function save_row(x) {
    let table = document.getElementById("things")
    let name = document.getElementById("name"+x).value
    let quantity = document.getElementById("quan"+x).value
    let name_cell = document.getElementById("cell1"+x)
    let quan_cell = document.getElementById("cell2"+x)
    let fun_cell = document.getElementById("cell3"+x)

    name_cell.innerHTML = "<p>"+name+"</p>"
    quan_cell.innerHTML = "<p>"+quantity+"</p>"
    
    fun_cell.innerHTML = ""

    let edit_btn = document.createElement("button")
    edit_btn.innerHTML = "Edit"
    edit_btn.onclick = function () {
        name_cell.innerHTML = "<input type=\"text\" id=\"name"+x+"\" name=\"name\" value=\""+name+"\">"
        quan_cell.innerHTML = "<input type=\"number\" id=\"quan"+x+"\" name=\"quan\" value=\""+quantity+"\">"
        
        let save_btn = document.createElement("button")
        save_btn.innerHTML = "Save"
        save_btn.setAttribute("onclick", "save_row("+x+")")
        fun_cell.appendChild(save_btn)

        fun_cell.removeChild(edit_btn)
        fun_cell.removeChild(del_btn)
    }
    fun_cell.appendChild(edit_btn)

    let del_btn = document.createElement("button")
    del_btn.innerHTML = "Delete"
    del_btn.setAttribute("onclick", "delete_row(this)")
    fun_cell.appendChild(del_btn)
}
var text = document.getElementById("in-text");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    var inpt = document.getElementById("inpt");
    var inptValue = inpt.value;


    var division = document.createElement("div");
    text.appendChild(division);



    var out = document.createElement("p");
    division.appendChild(out);
    out.innerHTML = inptValue;
    out.classList.add("out");

    var del = document.createElement("button");
    division.appendChild(del);
    del.innerHTML = "Remove";
    del.classList.add("butn");

    var edit = document.createElement("button");
    division.appendChild(edit);
    edit.innerHTML = "Edit";
    edit.classList.add("edit")


    var done = document.createElement("button");
    division.appendChild(done);
    done.innerHTML = "Done";
    done.classList.add("done");
    done.style.visibility = "hidden";



    del.addEventListener("click", function () {
        division.remove();

    })
    edit.addEventListener("click", function () {
        out.contentEditable = true;
        out.style.backgroundColor = "#fff";
        done.style.visibility = "visible";
    })

    done.addEventListener("click", function () {
        out.contentEditable = false;
        out.style.backgroundColor = "#eebd8d";
        done.style.visibility = "hidden";

    })

})
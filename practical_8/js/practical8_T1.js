function createForm() {
    var body = document.getElementById('body');
    var form = document.createElement('form');
    var header1 = document.createElement('h1');
    var ta = document.createElement('textarea');

    form.setAttribute('name', 'userSurvey');
    form.setAttribute('id', 'userSurvey');
    form.setAttribute('onsubmit', 'return validAll()');

    header1.innerHTML = "User Survey";
    form.appendChild(header1);
    form.appendChild(document.createElement('hr'));
    form.appendChild(document.createElement('h2')).innerHTML = "User Information";
    form.appendChild(document.createElement('p')).innerHTML = "Please enter your details below";

    form.appendChild(createInputBoxesAndLabelsInTable());
    form.appendChild(document.createElement('hr'));
    form.appendChild(document.createElement('p')).innerHTML = "Please check your favourite types of books" +
        " (check all that apply)";

    form.appendChild(createBookCheckboxes());

    ta.setAttribute('id', 'textarea');
    form.appendChild(ta);

    form.appendChild(createButtons());

    body.appendChild(form);

}

function createInputBoxesAndLabelsInTable() {
    var nameLabel = document.createElement('label');
    var emailLabel = document.createElement('label');
    var phoneLabel = document.createElement('label');
    var nameInput = document.createElement('input');
    var emailInput = document.createElement('input');
    var phoneInput = document.createElement('input');

    nameLabel.innerHTML = "Name: <br/> (required)";
    nameLabel.setAttribute('for', 'userName');
    nameInput.setAttribute('name', 'userName');
    nameInput.setAttribute('id', 'userName');

    emailLabel.innerHTML = "Email: <br/> (required)";
    emailLabel.setAttribute('for', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('id', 'email');

    phoneLabel.innerHTML = "Phone: <br/> (required)";
    phoneLabel.setAttribute('for', 'phone');
    phoneInput.setAttribute('name', 'phone');
    phoneInput.setAttribute('id', 'phone');

    var table, rows, columns;
    table = document.createElement('table');

    rows = table.insertRow(0);
    columns = rows.insertCell(0);
    columns.appendChild(nameLabel);
    columns = rows.insertCell(1);
    columns.appendChild(nameInput);

    rows = table.insertRow(1);
    columns = rows.insertCell(0);
    columns.appendChild(emailLabel);
    columns = rows.insertCell(1);
    columns.appendChild(emailInput);

    rows = table.insertRow(2);
    columns = rows.insertCell(0);
    columns.appendChild(phoneLabel);
    columns = rows.insertCell(1);
    columns.appendChild(phoneInput);

    return table;
}

function createBookCheckboxes() {
    var table, row, columns;
    table = document.createElement("table");
    row = table.insertRow(0);

        var books = ["bookchoice0", "bookchoice1", "bookchoice2", "bookchoice3"];
        var title = ["Science Fiction", "Travel Guide", "Short story collection", "Other"];

    for (var i = 0; i < books.length; i++) {

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = books[i].valueOf();
        checkbox.value = books[i].valueOf();
        checkbox.checked = false;

        var label = document.createElement("label");
        label.htmlFor = books[i].valueOf();
        label.innerHTML = title[i].valueOf();

        columns = row.insertCell(i);
        columns.appendChild(checkbox);
        columns.appendChild(label);
    }

    return table;
}

function createButtons() {
    var table, row, columns;
    table = document.createElement("table");
    row = table.insertRow(0);

    var submit = document.createElement("button");
    submit.innerHTML="Submit";

    columns = row.insertCell(0);
    columns.appendChild(submit);

    var resetForm = document.createElement("button");
    resetForm.innerHTML="Reset Form";

    columns = row.insertCell(1);
    columns.appendChild(resetForm);

    return table;
}


function validName() {
    var letters = /^[A-Za-z]+$/;

    if (!document.getElementById('userName').value.match(letters)) {
        alert("Please enter valid name");
        document.getElementById('userName').focus();
        return false;
    }
    return true;

}

function validNo()
{
    if (!document.userSurvey.phone.value)
    {
        window.alert("Phone number missing. Please enter a valid phone number to continue.");
        document.userSurvey.phone.focus();
        return false;
    }
    else
    {
        var numbersOnly = "";
        var chars = "";
        var phoneNo = document.userSurvey.phone.value;
        for (i = 0; i < phoneNo.length; i++)
        {
            chars = phoneNo.substring(i,i+1);
            if (chars >= "0" && chars <= "9")
            {
                numbersOnly = numbersOnly + chars;
            }
        }
        if (numbersOnly.length != 13)
        {
            window.alert("Incorrect phone number format.You must enter 13 numbers.");
            document.userSurvey.focus();
            return false;
        }
        else
        {
            var areacode = numbersOnly.substring(0,2);
            var leading0 = numbersOnly.substring(2,3);
            var exchange = numbersOnly.substring(3,5);
            var ext1 = numbersOnly.substring(5,9);
            var ext2 = numbersOnly.substring(9);
            var newNumber =( "+" + areacode + " " +"(" + leading0
                + ")" + exchange + " " + ext1 + "-" + ext2);
            document.userSurvey.phone.value = newNumber;
            return true;
        }
    }
}

function validEmail()
{
    if (!document.userSurvey.email.value) {
        window.alert("E-mail Address missing. Please enter a valid E-mail address to continue.");
        document.userSurvey.email.focus();
        return false;
    }
    else
    {
        var emailAddress = document.userSurvey.email.value;
        var atLoc = emailAddress.indexOf("@",1);
        var dotLoc = emailAddress.indexOf(".",atLoc+2);
        var len = emailAddress.length;
        if (atLoc > 0 && dotLoc > 0 && len > dotLoc+2)
        {
            return true;
        }
        else
        {
            alert("Invalid E-mail address! Please enter your email address again.");
            document.userSurvey.email.focus();
            return false;
        }
    }
}

function validChoice()
{
    var bookChoice = "";
    var x= "";
    for (i=0;i< 4;i++)
    {
        if (document.userSurvey['bookchoice'+i].checked)
        {
            bookChoice =
                document.userSurvey['bookchoice'+i].value;
            x = x +"\n"+ bookChoice; //"\n" output a
            newline
        }
    }
    if (bookChoice == "")
    {
        window.alert("You must select at least one book category.");
        return false;
    }
    else
    {
        var userName = document.userSurvey.userName.value;
        var eMail = document.userSurvey.email.value;
        var phoneNo = document.userSurvey.phone.value;

        document.userSurvey.textarea.value = (userName + " " + eMail + " " + phoneNo);
        return true;
    }
}

function validAll() {
    if( (validName() && validEmail()) && (validNo() && validChoice())){
        return true;
    } else{
        return false;
    }
}

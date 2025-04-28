var Label;
(function (Label) {
    Label["Family"] = "Family";
    Label["Friend"] = "Friend";
    Label["Business"] = "Business";
    Label["Work"] = "Work";
})(Label || (Label = {}));
var contacts = []; // fixed typing
var form = document.getElementById("contactForm");
var table = document.getElementById("contactTable");
function addContact(name, phone, email, label) {
    if (label === void 0) { label = Label.Friend; }
    var contact = {
        id: Date.now(), // safer unique id
        name: name,
        phone: phone,
        email: email,
        label: label
    };
    contacts.push(contact);
    return contact;
}
function removeContact(contactId) {
    var initialLength = contacts.length;
    contacts = contacts.filter(function (contact) { return contact.id !== contactId; });
    return contacts.length !== initialLength;
}
function render() {
    var tbody = table.querySelector("tbody");
    if (tbody) {
        tbody.innerHTML = "";
        contacts.forEach(function (contact) {
            var tr = document.createElement("tr");
            tr.innerHTML = "\n                <td>".concat(contact.name, "</td>\n                <td>").concat(contact.phone, "</td>\n                <td>").concat(contact.email, "</td>\n                <td>").concat(contact.label, "</td>\n            ");
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", function () {
                deleteContact(contact.id);
            });
            var actionTd = document.createElement("td");
            actionTd.appendChild(deleteButton);
            tr.appendChild(actionTd);
            tbody.appendChild(tr);
        });
    }
}
function deleteContact(contactId) {
    if (removeContact(contactId)) {
        render();
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var label = document.getElementById("label").value;
    // Validate phone number: must be only digits and exactly 10 digits
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Phone number must contain only digits and must be exactly 10 digits long.");
        return; // Stop form submission
    }
    addContact(name, phone, email, label);
    render();
    form.reset();
});
render();

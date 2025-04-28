enum Label {
    Family = "Family",
    Friend = "Friend",
    Business = "Business",
    Work = "Work"
}

type Contact = {
    id: number;
    name: string;
    phone: string;
    email: string;
    label: Label;
};

let contacts: Contact[] = []; // fixed typing
const form = document.getElementById("contactForm") as HTMLFormElement;
const table = document.getElementById("contactTable") as HTMLTableElement;

function addContact(name: string, phone: string, email: string, label: Label = Label.Friend): Contact {
    const contact: Contact = {
        id: Date.now(), // safer unique id
        name,
        phone,
        email,
        label
    };
    contacts.push(contact);
    return contact;
}

function removeContact(contactId: number): boolean {
    const initialLength = contacts.length;
    contacts = contacts.filter(contact => contact.id !== contactId);
    return contacts.length !== initialLength;
}

function render(): void {
    const tbody = table.querySelector("tbody");
    if (tbody) {
        tbody.innerHTML = "";
        contacts.forEach(contact => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>${contact.label}</td>
            `;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.addEventListener("click", () => {
                deleteContact(contact.id);
            });

            const actionTd = document.createElement("td");
            actionTd.appendChild(deleteButton);

            tr.appendChild(actionTd);
            tbody.appendChild(tr);
        });
    }
}

function deleteContact(contactId: number): void {
    if (removeContact(contactId)) {
        render();
    }
}

form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const label = (document.getElementById("label") as HTMLSelectElement).value as Label;

    // Validate phone number: must be only digits and exactly 10 digits
    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
        alert("Phone number must contain only digits and must be exactly 10 digits long.");
    return; // Stop form submission
  }
   
    addContact(name, phone, email, label);
    render();
    form.reset();
});

render();

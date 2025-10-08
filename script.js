const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const addBtn = document.getElementById('addBtn');
const contactList = document.getElementById('contactList');

let contacts = [];

addBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const number = numberInput.value.trim();

  if (name === '' || number === '') {
    alert('Please enter both name and number!');
    return;
  }

  const contact = { id: Date.now(), name, number };
  contacts.push(contact);
  renderContacts();

  nameInput.value = '';
  numberInput.value = '';
});

function renderContacts() {
  contactList.innerHTML = '';

  contacts.forEach(contact => {
    const div = document.createElement('div');
    div.classList.add('contact');

    div.innerHTML = `
      <div class="info">
        <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="avatar">
        <div class="text">
          <h3>${contact.name}</h3>
          <p>${contact.number}</p>
        </div>
      </div>
      <div class="actions">
        <i class="edit" onclick="editContact(${contact.id})">✏️</i>
        <i class="delete" onclick="deleteContact(${contact.id})">🗑️</i>
      </div>
    `;

    contactList.appendChild(div);
  });
}

function deleteContact(id) {
  contacts = contacts.filter(c => c.id !== id);
  renderContacts();
}

function editContact(id) {
  const contact = contacts.find(c => c.id === id);
  if (!contact) return;

  const newName = prompt('Enter new name:', contact.name);
  const newNumber = prompt('Enter new number:', contact.number);

  if (newName && newNumber) {
    contact.name = newName;
    contact.number = newNumber;
    renderContacts();
  }
}

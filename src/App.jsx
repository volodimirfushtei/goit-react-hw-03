import ContactForm from "./Components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactList/ContactList";

const LOCAL_STORAGE_KEY = "contactStorage";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const [filter, setFilter] = useState("");

  // Зчитування контактів з local storage
  useEffect(() => {
    const storedContacts = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);
  // Запис контактів в local storage
  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Функція для додавання нового контакту
  const addContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };
  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleAddContact = (newContact) => {
    addContact(newContact);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContact));

    setFilter(""); // Очищення поля пошуку після додавання контакту
  };
  // Функція для регістру
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filterContacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
}

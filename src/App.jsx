import ContactForm from "./Components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { useState } from "react";

import ContactList from "./components/ContactList/ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState("");
  // Функція для додавання нового контакту
  const addContact = (newContact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: `id-${prevContacts.length + 1}`, ...newContact },
    ]);
  };
  const getFilteredContacts = () => {
    const query = searchQuery.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(query) ||
        contact.number.includes(query)
    );
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Додайте логіку для пошуку за query, наприклад, фільтрацію контактів
    console.log("Search Query:", query);
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList
        contacts={contacts}
        getFilteredContacts={getFilteredContacts}
      />
    </>
  );
}

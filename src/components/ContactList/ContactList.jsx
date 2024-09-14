import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contacts}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};
export default ContactList;

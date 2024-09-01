import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import Contact from '../contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const phoneBook = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  function visibleContacts() {
    if (!filter.length) {
      return phoneBook;
    }

    return phoneBook.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase()) || item.phone.includes(filter));
  };

  return (
    <div className={css.list}>
      {visibleContacts().map(item => (
        <Contact key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactList;

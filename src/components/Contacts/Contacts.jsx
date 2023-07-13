import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contacts/contacts-selectors";
import { fetchDeleteContact } from "../../redux/contacts/contacts-operations";
import { selectFilter } from "../../redux/filter/filter-selectors";
import styles from "./contacts.module.css";

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const filterSearch = () => {
    if (!filter) {
      return contacts;
    }
    const newContact = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return newContact;
  };

  const filtredContacts = filterSearch();

  const onDeleteContact = (_id) => {
    dispatch(fetchDeleteContact(_id));
  };

  return (
    <div>
      <ul className={styles.list}>
        {filtredContacts.map(({ _id, name, phone, email }) => {
          return (
            <li className={styles.item} key={_id}>
              <div className={styles.wrapper}>
                <p className={styles.itemTitle}>{name}</p>
                <p className={styles.itemText}>{phone}</p>
                <p className={styles.itemText}>{email}</p>
              </div>
              <button
                onClick={() => onDeleteContact(_id)}
                className={styles.btn}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

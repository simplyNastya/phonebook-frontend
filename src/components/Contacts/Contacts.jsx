import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contacts/contacts-selectors";
import { fetchDeleteContact } from "../../redux/contacts/contacts-operations";
import {
  toggleIsEditing,
  setSelectedId,
} from "../../redux/contacts/contacts-slice";
import { selectFilter } from "../../redux/filter/filter-selectors";
import styles from "./contacts.module.css";

import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";

import Button from "../Button/Button";

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

  const onToggleEditContact = (_id) => {
    dispatch(toggleIsEditing());
    dispatch(setSelectedId(_id));
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
              <div className={styles.itemBtnWrap}>
                <Button
                  className={styles.contBtn}
                  onClick={() => onToggleEditContact(_id)}
                >
                  <BiSolidEditAlt />
                </Button>
                <Button
                  className={styles.contBtn}
                  onClick={() => onDeleteContact(_id)}
                >
                  <RiDeleteBin7Line />
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contacts;

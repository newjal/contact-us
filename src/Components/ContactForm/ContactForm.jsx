import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Newjal");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");
 
 const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA  SUPPORT CHAT"
            icon={<MdMessage fontSize="25px" />}
          />
          <Button

           text="VIA CALL" icon={<FaPhoneAlt fontSize="25px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<GrMail fontSize="25px" />}
        />
        <form onSubmit={onSubmit}> 
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="test" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="Text" rows= "8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT HERE" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_img}>
        <img src= "./img/contact.svg" alt="contactimage" />
      </div>
    </section>
  );
};

export default ContactForm;

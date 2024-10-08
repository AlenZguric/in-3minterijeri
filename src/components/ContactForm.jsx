import React, { useState } from "react";
import { TextField, Button, IconButton, Box } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { motion } from "framer-motion";
// import { scrollAnimations } from "../styles/utils/animations/animations";

import "../styles/components/ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        from_number: number,
        to_name: "Žarko",
        message: message,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");
      toast.success(
        "Email uspješno poslan! Odgovoriti ćemo Vam u najkraćem mogućem vremenu.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    } catch (error) {
      console.error(error);
      toast.error(
        "Došlo je do greške prilikom slanja emaila. Pokušajte ponovno.",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  };

  return (
    <Box className="contact-container">
      <Box className="contact-info">
        <div className="title-contact-info">
          <h2>Izradimo nešto zajedno</h2>
          <h4>NAZOVI NAS</h4>
        </div>
        <div className="contact-info">
          <address>
            <dl>
              <dt></dt>
              <dd>In3m Interijeri</dd>

              <dt></dt>
              <dd>
                <a href="tel:+385917208379">+385 91 720 8379</a>
              </dd>

              <dt></dt>
              <dd>
                <a href="mailto:info.in3m@gmail.com">info.in3m@gmail.com</a>
              </dd>
            </dl>
          </address>
        </div>

        <Box className="social-icons">
          <div className="title-social">
            {/* <h3>
              <span>* </span>zapratite nas
            </h3> */}
          </div>
          <div className="icons-social">
            <IconButton
              href="https://www.instagram.com/interijeri_in3m/"
              target="_blank"
              className="instagram"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://web.facebook.com/profile.php?id=100090646789855"
              target="_blank"
            >
              <Facebook />
            </IconButton>
          </div>
        </Box>
      </Box>

      {/* <motion.section
        initial="hidden"
        whileInView="show"
        variants={scrollAnimations.fadeInDownRight}
        viewport={{ once: true, amount: 0.2 }}
      > */}
      <Box component="form" onSubmit={handleSubmit} className="contact-form">
        <div className="title-contact">
          <p>
            Vaše vizije savršenog namještaja mogu postati stvarnost. Izazovite
            nas i dopustite da vaš dom postane živahno mjesto. Ne čekajte,
            obratite nam se danas za besplatnu izradu namještaja po
            mjeri.
          </p>
          <p> Slanjem ovog obrasca slažete se s pravilima privatnosti naše
            stranice. Podaci prikupljeni ovim putem neće biti javno objavljeni
            niti korišteni u druge svrhe, osim za odgovor na vaš upit!</p>
        </div>
        <TextField
          fullWidth
          label="Ime"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: " rgb(75,77,77)",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "white", // Boja okvira kad je fokusirano
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white", // Boja labela kad je fokusirano
            },
          }}
          required
        />
        <TextField
          fullWidth
          label="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: " rgb(75,77,77)",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "white", // Boja okvira kad je fokusirano
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white", // Boja labela kad je fokusirano
            },
          }}
          required
        />
        <TextField
          label="Broj tel."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: " rgb(75,77,77)",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "white", // Boja okvira kad je fokusirano
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white", // Boja labela kad je fokusirano
            },
          }}
        />
        <TextField
          fullWidth
          label="Unesi poruku"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          rows={4}
          required
          sx={{
            "& .MuiInputBase-root": {
              backgroundColor: " rgb(75,77,77)",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "white", // Boja okvira kad je fokusirano
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white", // Boja labela kad je fokusirano
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#e4dfdf",
            color: "black",
            "&:hover": { backgroundColor: "#eec668" },
          }}
        >
          zatraži ponudu
        </Button>
      </Box>

      <ToastContainer />
      {/* </motion.section> */}
    </Box>
  );
};

export default ContactForm;

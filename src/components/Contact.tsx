import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setNameError(!name.trim());
    setEmailError(!email.trim());
    setMessageError(!message.trim());

    if (name && email && message) {
      alert('Message sent successfully! (mock)');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box
            component="form"
            className="contact-form"
            onSubmit={sendEmail}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <TextField
                fullWidth
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                sx={inputFixStyles}
              />

              <TextField
                fullWidth
                label="Email / Phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                sx={inputFixStyles}
              />
            </Box>

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              sx={inputFixStyles}
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

/* ✅ GUARANTEED TEXT VISIBILITY FIX */
const inputFixStyles = {
  '& .MuiInputBase-input': {
    color: '#ffffff', // DARK MODE DEFAULT
  },
  '& .MuiInputLabel-root': {
    color: '#ffffff',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255,255,255,0.3)',
  },

  /* LIGHT MODE OVERRIDE */
  '.light-mode & .MuiInputBase-input': {
    color: '#0d1116',
  },
  '.light-mode & .MuiInputLabel-root': {
    color: '#0d1116',
  },
  '.light-mode & .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(13,17,22,0.3)',
  },
};

export default Contact;

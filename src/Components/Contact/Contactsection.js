import React from 'react'
import   '../Contact/Contactsection.css';
import Swal from 'sweetalert2';

function Contactsection() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cd95e67e-b95b-4801-bd58-4d27bcfe164f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Send!",
        icon: "success"
      });
      event.target.reset();
    }
  };
  return (
    <div>
      <section className="contactsection">
        <h1 className="contacttitle">Contact Me</h1>
       <span className="contactdescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, dolorem eligendi! Consequuntur tempore laudantium nostrum, vero nam iste voluptas quam!</span>
       <form  onSubmit={onSubmit}   className="contactform">
        <input type="text" className='name' placeholder='Enter Your Name' rows={2} required/>
        <input type="email" className="email" placeholder='Enter Your Email' rows={2} required/>
        <textarea name="message"  className='msg' placeholder='Enter Your Message' rows={6} required></textarea><br />
        <button className="submit" value='submit' >Submit</button>
       </form>
      </section>
    </div>
  )
}


export default Contactsection

import instagramIcon from '../assets/icons/instagram.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import { useFormik } from 'formik'

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-5">
        <h1>Contact Me</h1>
      </div>
      <div className="d-flex justify-content-center">
        <iframe className="w-75" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12046.998463026293!2d29.12161597544436!3d40.98696324165389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac8a7d44b6587%3A0x208a1d8ff0bf7e10!2zQXRhxZ9laGlyLCBBdGHFn2VoaXIgQXRhdMO8cmssIDM0NzU4IER1ZHVsbHUgT3NiL0F0YcWfZWhpci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1696251660556!5m2!1str!2str" width="600" height="450"   loading="lazy" ></iframe>
      </div>
      <div className="d-flex my-5 justify-content-center">
        <p >
          You can contact me via email or social media.
        </p>
      </div>
      <div>
        <div className="d-flex justify-content-center mb-5">
          <p className="fw-bold"><a href="mailto:osmanugurdemirer@gmail.com">Email: osmanugurdemirer@gmail.com</a></p>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h2>Social Media</h2>
          <div>
            <a href="https://www.instagram.com/ugurdmrer/" target="_blank" rel="noopener noreferrer"><img  src={instagramIcon}></img></a>
            <a href="https://github.com/Ugurdmrer" target="_blank" rel="noopener noreferrer"><img  src={githubIcon}></img></a>
            <a href="https://www.linkedin.com/in/osman-ugur-demirer/" target="_blank" rel="noopener noreferrer"><img  src={linkedinIcon}></img></a>
          </div>
        </div>
      </div>
      <div>
        <form className='d-flex flex-column my-5' onSubmit={formik.handleSubmit}>
          <div className='d-flex justify-content-center gap-5'>
            <div className='d-flex flex-column justify-content-center text-center'>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className='d-flex flex-column justify-content-center text-center'>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className='d-flex flex-column justify-content-center text-center'>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
            </div>
          </div>
          <div className='d-flex flex-column text-center my-4'>
            <label htmlFor="text">Message</label>
            <textarea
              className='w-50 mx-auto '
              id="text"
              name="text"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          <div className='d-flex justify-content-center'>
            <button className='btn border border-primary w-25 text-primary' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}


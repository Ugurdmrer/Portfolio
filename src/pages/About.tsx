import aboutImage from "../assets/images/ugurdemirer.jpg";

export default function About() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center fw-bold mb-5">About Me</h1>
      <div className="d-flex">
        <div className="col-6 justify-content-center d-flex">
          <img src={aboutImage} alt="image" className="rounded w-50" />
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <p className="text-center fw-bold">
            Hello, my name is Osman Uğur Demirer. Since I was 13, I have dreamed
            of improving myself in the IT sector due to my interest in
            computers, and in order to realize this dream, I have tried to reach
            information that will improve myself in my spare time, this effort
            and desire still continues. Instead of my passion for IT, I studied
            insurance in my high school life. About 3 years ago, I decided to
            gain experience in the field of IT and worked for 1.5 years at a
            hosting company called Climax Host. In this way, I had the
            opportunity to develop myself in the fields of networking, software
            and operating systems. I want to develop myself more in the field of
            IT by relying on my youth and my determination to learn, to find new
            job opportunities and to experience the experiences that these will
            add to me.
          </p>
        </div>
      </div>
      <h1 className="d-flex justify-content-center fw-bold mb-5">Skills</h1>
      <div className="d-flex justify-content-center">
        <div className="col-2">
          <ul className="d-flex flex-column gap-5">
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">HTML <span className=" badge bg-primary rounded-pill">90%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Css <span className=" badge bg-primary rounded-pill">80%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Javascript <span className=" badge bg-primary rounded-pill">80%</span></div>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="d-flex flex-column gap-5">
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Python <span className=" badge bg-primary rounded-pill">80%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">NodeJs <span className=" badge bg-primary rounded-pill">40%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Typescript <span className=" badge bg-primary rounded-pill">40%</span></div>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="d-flex flex-column gap-5">
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">MongoDB <span className=" badge bg-primary rounded-pill">80%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Sqlite <span className=" badge bg-primary rounded-pill">50%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Mysql <span className=" badge bg-primary rounded-pill">40%</span></div>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="d-flex flex-column gap-5">
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Tailwind <span className=" badge bg-primary rounded-pill">90%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Bootstrap <span className=" badge bg-primary rounded-pill">80%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Figma <span className=" badge bg-primary rounded-pill">40%</span></div>
            </li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="d-flex flex-column gap-5">
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">React <span className=" badge bg-primary rounded-pill">50%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Django <span className=" badge bg-primary rounded-pill">70%</span></div>
            </li>
            <li className="list-group-item">
              <div className="border rounded p-4 d-flex gap-4 bg-light fw-bold">Flask <span className=" badge bg-primary rounded-pill">40%</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

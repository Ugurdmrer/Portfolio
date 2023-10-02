
export default function AboutSection(props: any) {
    const { image,text } = props;
  return (
    <>
        <div className="container d-flex ">
            <div className="">
                <img className="w-100" src={image} alt="image"></img>
            </div>
            <div className="container d-flex flex-column justify-content-center text-center">
                <p className="fw-bold">{text}</p>
            </div>

        </div>
    </>
  )
}


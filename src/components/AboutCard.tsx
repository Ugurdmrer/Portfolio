
export default function AboutCard(props: any) {
    const { title, text, image } = props;
  return (
    <div className="col d-flex justify-content-center mt-5 ">
        <div className="card " style={{"width":"18rem"}}>
            <img className="card-img-top h-100" src={image} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <hr/>
                <p className="card-text">{text}</p>
            </div>
        </div>
    </div>
  )
}


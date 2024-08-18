import heart from "../../icons/heart.png"

export default function MovieCard ({ title, releaseDate, rating, imageUrl }) {

    return (
        <div class="col">
        <div class="card mb-3 h-100" style={{boxShadow: "0 2px 8px rgba(0, 0, 0, .1)"}}>
          <img src={imageUrl} class="card-img-top" alt="Movie Image"/>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <div className="d-flex align-items-center justify-content-between">
              <p class="card-text m-0" style={{color: "rgba(0, 0, 0, .6)"}}>{releaseDate}</p>
              <img src={heart} alt="" />
            </div>
            <div class="d-flex justify-content-center">
              {/* <span class="badge bg-success">{rating}%</span> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
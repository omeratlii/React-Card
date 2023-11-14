// rafc kısayolunu kullanarak functional component açabiliriz fakat burada daha farklı bir yol izledik.
import React from "react";

// props tittle'a eşit, description ise description'a karşılık.

function Course({ image, title, description }) {
  // değerlerimizi bir değişkene atayarak return içerisinde props.title demek yerine direkt title diyebiliriz.

  // const title = props.title;
  // const description = props.description;

  // şimdi daha profesyonel bir yolunu göstereceğim. üstte yazmış olduğumuz 2 satır kod buradaki tek satır koda tekabül ediyor. fakat bunun da güzel bir yolu var.
  // normalde üstte function Course(props) yazıyoruz ancak props yazmak yerine direkt gönderdiğimiz değerleri yani title ve description'ı yazarsak yine olur. yani {} içinde title, description yazmak yeterli.

  // const {title, description} = props;

  return (

    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Dream Garage"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">

      <div className="media-content">
        <p className="title is-4">{title}</p>
      </div>
    </div>

    <div className="content">{description}</div>
  </div>
</div>
    /* <div>
      <img className="image" src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
    </div> */
  );
}

export default Course;

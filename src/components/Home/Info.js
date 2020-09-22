import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              iste maxime optio, incidunt cum officia ea ipsa ipsam obcaecati
              commodi voluptate laudantium asperiores laborum excepturi ducimus
              accusantium nobis voluptatem suscipit sed cupiditate quibusdam
              nemo necessitatibus dicta? Molestiae sit commodi aliquam, possimus
              maiores, reprehenderit asperiores sequi error officia cumque eius
              non eos minima esse aut dolore alias enim dolores modi tenetur.
              Nulla labore provident suscipit accusantium itaque voluptates,
              consequuntur, maxime quibusdam dolorum ipsa eaque repudiandae
              esse?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from "react"
import Layout from "../components/layout"



export default function About() {

  return (
      <Layout>
            <div id="about">
              <div className="header">
            <h3><i className="fa fa-star-o" aria-hidden="true"></i> About me <i className="fa fa-star-o" aria-hidden="true"></i></h3>  
            </div>          
            <img src="/terry.jpg" alt="Terry Sanchez" className="img-thumbnail terry img-fluid" />
            <p>My name is Terry Sanchez I’ve been in the animal services industry for the past 14 years. I started as an animal control officer and achieved Director of Animal Services before leaving. I also served as tech support for my past two employers. I’m a driven self-starter and fast learner seeking to transfer my new skills I have learned from completing Front-End Development from the U of A to a new career in Web Development.      </p>           
                    </div>
      </Layout>
  )
}


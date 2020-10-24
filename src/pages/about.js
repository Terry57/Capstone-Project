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
            <p>My name is Terry Sanchez I’ve been in the animal services industry for the past 14 years. I started as an animal control officer and achieved Director of Animal Services before leaving. I am looking to change career paths to web development. Before I started as an animal control officer I had taken CCNA 1 from NWAC and served as tech support for my previous job at the Embassy Suites in Rogers. I hope after completing this class it will help facilitate a job and the start of a new career.   </p>           
                    </div>
      </Layout>
  )
}


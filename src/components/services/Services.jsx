import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Basic Plan */}
        <div className="card">
          <div className="card-i">
            <h3>Basic</h3>
            <h4>$100<span>/mo</span></h4>
            <ul>
              <li>✔ 5 Pages Website</li>
              <li>✔ Basic SEO</li>
              <li>✔ Email Support</li>
            </ul>
            <button className="btn">Choose Basic</button>

          </div>
        </div>

        {/* Extended Plan */}
        <div className="card recommended">

          <div className="card-i">
            <h3>Extended</h3>
            <h4>$350<span>/mo</span></h4>
            <ul>
              <li>✔ 10 Pages Website</li>
              <li>✔ Advanced SEO</li>
              <li>✔ Priority Support</li>
            </ul>
            <button className="btn">Choose Extended</button>
          </div>
        </div>

        {/* Custom Plan */}
        <div className="card">

          <div className="card-i">
            <h3>Custom</h3>
            <h4>$750<span>/mo</span></h4>
            <ul>
              <li>✔ Unlimited Pages</li>
              <li>✔ Full SEO Optimization</li>
              <li>✔ 24/7 Support</li>
            </ul>
            <button className="btn">Choose Custom</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
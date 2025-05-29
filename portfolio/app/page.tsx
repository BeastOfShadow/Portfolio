'use client';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  return (
    <div>
      <h2 className="lh gradient pb-3">
        Simone is a passionate Computer Science student specializing in full-stack development, building websites and
        applications that deliver seamless, engaging user experiences.
        While new to the field of artificial intelligence, he is eager to dive into machine learning and deep learning, with
        plans to apply these technologies to real-world projects in the future.
      </h2>

      <hr />

      {/* Projects */}
      <p className="light-c pt-1">PROJECTS</p>
      <div className="row mb-4">
        {/* Mobishare App */}
        <div className="col-lg-4 text-start">
          <div className="card-top pt-3 pb-2 pe-4 ps-4 mb-4">
            <p className="h2">Mobishare</p>
          </div>
        </div>
        {/* Keep The Time App */}
        <div className="col-lg-4 text-start">
          <div className="card-top pt-3 pb-2 pe-4 ps-4 mb-4">
            <p className="h2">Keep The Time</p>
          </div>
        </div>
        {/* Vulnerability AI */}
        <div className="col-lg-4 text-start">
          <div className="card-top pt-3 pb-2 pe-4 ps-4 mb-4">
            <p className="h2">Vulnerability AI</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Experiences */}
      <p className="light-c pt-1">EXPERIENCES</p>
      <div className="col-lg-4">
        {/* Fanderlust */}
        <div className="card-top pt-3 pb-2 pe-4 ps-4 mb-4" onClick={() => window.open('https://fanderlust.com', '_blank')}>
          <div className="row mb-4">
            <div className="col-12 col-md-6">
              <p className="h2">Fanderlust</p>
            </div>
          </div>

          <div className="text-center mb-4">
            <Image
              src="/data/img/fanderlust_phone.png"
              alt="fanderlust-project-img"
              width={300}
              height={500}
              style={{ maxWidth: '50%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

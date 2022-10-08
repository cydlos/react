import React from 'react'

const Card = () => {
    return (
      <div className="container_card col-12 col-lg-4 mt-5">
      <div className="box__left">
        <div className="avatar">
          <div className="box__image">
            <img src={require("https://avatars.githubusercontent.com/u/42797266?v=4")} alt="avatar" />
          </div>
        </div>
      <div className="box__infos">
        <h2 className="nome"> CYD LOSEKANN</h2>
        <h2 className="mb-4" style={{ fontSize: '14px' }}>Front-end Dev.</h2>
        <p>Age: 34 y/o</p>
        <p>Based in Rio de Janeiro, Brazil</p>
        <p>Born in Porto Alegre, RS, Brazil</p>
        <p>Hobbys: </p>
        <h2>
          <i className="fa-solid fa-code m-1" title="Coding"></i>
          <i className="fa-solid fa-book m-1" title="Reading"></i>
          <i className="fa-solid fa-gamepad m-1" title="Video games"></i>
          <i className="fa-solid fa-dog m-1" title="Playing with my 2 dogs"></i>
          <i className="fa-solid fa-futbol" title="Watching soccer matches"></i>
        </h2>
      </div>
      </div>
      <div className="box__right">
        <div className="right--1">
          <h2><i className="fa-brands fa-2x fa-square-github" title="Take a look at my GitHub page"></i></h2>
        </div>
        <div className="right--1">
          <h2><i className="fa-brands fa-2x fa-linkedin" title="Visit my LinkedIn"></i></h2>
        </div>
        <div className="right--1">
          <h2><i className="fa-solid fa-2x fa-at" title="Email me :)"></i></h2>
        </div>
      </div>
    </div>
    )
}

export default Card;

import React from 'react';
import './BackToTop.css';

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("BackToTop").style.display = "block";
  } else {
    document.getElementById("BackToTop").style.display = "none";
  }
}

function MoveTop() { 
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
}


function BackToTop() {
    return (
        <div>
        <button id='BackToTop' onclick={MoveTop} title="Go to top">⮝</button>
        </div>
    );
}

export default BackToTop;
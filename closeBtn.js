// https://codepen.io/salmanraza/pen/PpoMKb


var x = document.querySelectorAll(".closeBtnComponent");
var i;
for (i = 0; i < x.length; i++) {
  const shadowRoot =  x[i].attachShadow({ mode: 'open' })
  shadowRoot.innerHTML = `<style>


* {
    box-sizing: border-box;
  }
  
  
  main {
    position: absolute;
    top: 1%;
    right: 1%;

    z-index: 1000;
     
  }
  main:after {
    content: 'Salman Raza';
    position: absolute;
    bottom: -90px;
    left: 50%;
    color: rgba(0, 0, 0, 0.017);
    font-size: 150px;
    line-height: 140px;
    white-space: nowrap;
    text-transform: lowercase;
    transform: translateX(-50%);
    pointer-events: none;
    z-index: -1;
  }
  .sub_cnt {
    display: inline-block;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    border-radius: 5px;
    position: relative;
    margin: 0 10px 10px 0;
  }
  .sub_cnt:after {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  .sub_cnt:nth-of-type(1):after { content: '::hover'; }
  .sub_cnt:nth-of-type(2):after { content: '::focus'; }
  .sub_cnt:nth-of-type(3):after { content: '::active'; }
  /* Button styles */
  button {
    vertical-align: middle;
    position: relative;
    width: 80px;
    height: 80px;
    background-color: transparent;
    overflow: hidden;
    border:1px solid #333;
    transition: all 0.4s ease-in-out 0s;
    cursor: pointer;
  }
  .arrow,.arrow:after, button:after, button:before {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    left: 50%;
    width: 3px;
    height: 46px;
    background-color: #000;
    transition: all 0.4s ease-in-out 0s;
  }
  .arrow:after, button:after, button:before { content: ''; }
  .arrow:after { transform: translate(0px, -100px); } 
  button:before { transform: translate(-50%, -50%) rotate(-45deg);  }
  button:after { transform: translate(-60px, -75px) rotate(-45deg);  }
  button:focus, button:focus .arrow:focus {outline: none;}
  
  button.hover:hover:after,
  button.focus:focus:after,
  button.active:after 
  { 
    transform: translate(0px, -14px) rotate(-45deg);
  }
  button.hover:hover:before,
  button.focus:focus:before,
  button.active:before
  {
    transform: translate(60px, 45px) rotate(-45deg);
  }
  button.hover:hover .arrow,
  button.focus:focus .arrow,
  button.active .arrow
  {
    transform: translate(-61px, 45px) rotate(45deg); 
  }
  button.hover:hover:after,
  button.hover:hover .arrow:after,
  button.focus:focus:after,
  button.focus:focus .arrow:after,
  button.active:after,
  button.active .arrow:after
  {
    background-color: #fff;
  }
  button.hover:hover,
  button.focus:focus,
  button.active
  { 
    background-color: red; border-color: red; 
  }
  
</style>
<main>
    <div class="sub_cnt">
      <button class="hover">
          <span class="arrow"></span>
      </button>
    </div>


  </main>
`;
}



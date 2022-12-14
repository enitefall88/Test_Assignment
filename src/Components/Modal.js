import React from "react";

function Modal() {
 return <div className="modalBackground">
   <div className="modalContainer">
     <div className="title">
       <button>X</button>
       <h1>Are you sure you want to continue</h1>
       <p>Blah blah</p>

     </div>
     <button>Cancel</button>
     <button>Confirm</button>
   </div>

 </div>
}

export default Modal;

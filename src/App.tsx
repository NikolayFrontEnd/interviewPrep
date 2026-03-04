import ModalComponent from "./modalCreation/App";




import React, { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <button onClick={() => setOpen(true)}>Open modal</button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.5)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#fff", padding: 20, borderRadius: 8, minWidth: 240 }}
          >
            <h3 style={{ marginTop: 0 }}>Modal</h3>
            <p>Hi! Click outside or the button to close.</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
/* type Nullable<T> =T | null;
let name: Nullable<number> = 5; */
  // string | null
// number | null
// boolean | null
// ...

//2

/*  console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then((res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("timer1");
}, 0);

console.log("end"); 
  */
import React, { useState } from "react";

export default function Hooks(props) {
  // TODO: USE HOOKS!

  return (
    <section>
      <h1>Demo With Hooks</h1>
      <label>
        First Name
        <input />
      </label>
      <br />
      <label>
        Last Name
        <input />
      </label>
    </section>
  );
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// const [firstName, setFirstName] = useState("Jordan");
// const [lastName, setLastName] = useState("Widdison");
//
// function handleChangeFirstName(e) {
//   setFirstName(e.target.value);
// }
//
// function handleChangeLastName(e) {
//   setLastName(e.target.value);
// }

// const firstName = useFormInput("Jordan");
// const lastName = useFormInput("Widdison");

// function useFormInput(initialValue) {
//   const [value, setValue] = useState(initialValue);
//
//   function handleChange(e) {
//     setValue(e.target.value);
//   }
//
//   return {
//     value,
//     onChange: handleChange
//   };
// }
//
//
// return (
//   <section>
//     <h1>Demo With Hooks</h1>
//     <label>
//       First Name
//       <input {...firstName} />
//     </label>
//     <br />
//     <label>
//       Last Name
//       <input {...lastName} />
//     </label>
//   </section>
// );

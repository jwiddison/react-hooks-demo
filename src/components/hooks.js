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

// --------------------
// Using the useState hook:
// --------------------
//
// export default function Hooks(props) {
//   const [firstName, setFirstName] = useState("Harry");
//   const [lastName, setLastName] = useState("Potter");
//
//   function handleChangeFirstName(e) {
//     setFirstName(e.target.value);
//   }
//
//   function handleChangeLastName(e) {
//     setLastName(e.target.value);
//   }
//
//   return (
//     <section>
//       <h1>Demo With Hooks</h1>
//       <label>
//         First Name
//         <input value={firstName} onChange={handleChangeFirstName} />
//       </label>
//       <br />
//       <label>
//         Last Name
//         <input value={lastName} onChange={handleChangeLastName} />
//       </label>
//     </section>
//   );
// }
//
// --------------------
// Using custom hooks:
// --------------------
//
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
// export default function Hooks(props) {
//   const firstName = useFormInput("Harry");
//   const lastName = useFormInput("Potter");
//
//   return (
//     <section>
//       <h1>Demo With Hooks</h1>
//       <label>
//         First Name
//         <input {...firstName} />
//       </label>
//       <br />
//       <label>
//         Last Name
//         <input {...lastName} />
//       </label>
//     </section>
//   );
// }

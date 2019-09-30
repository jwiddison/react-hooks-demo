import React from "react";

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
};

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
//
//
// --------------------
// Using apollo:
// --------------------
//
// import { useQuery, useMutation } from '../lib/apollo';
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
// const USER_QUERY = `
//   query user($id: ID) {
//     user(id: $id) {
//       firstName
//       lastName
//     }
//   }
// `;
//
// const USER_MUTATION = `
//   mutation userUpdate(
//     $id: ID
//     $firstName: String
//     $lastName: String
//   ) {
//     userUpdate(
//       id: $id
//       firstName: $firstName
//       lastName: $lastName
//     ) {
//       id
//       firstName
//       lastName
//     }
//   }
// `;
//
// export default function Hooks() {
//   const id = useFormInput('1');
//   const { data, loading } = useQuery({ query: USER_QUERY, variables: { id: id.value } });
//   const [mutate, { loading: saving }] = useMutation({
//     mutation: USER_MUTATION,
//     variables: { id: id.value }
//   });
//
//   return (
//     <section>
//       <h1>Demo With Hooks</h1>
//       <label><span>ID</span> <input {...id} type="number" step="1" min="1" /></label>
//       <br />
//       {loading ? <LoadingForm /> : (
//         <UserForm
//           key={id.value}
//           user={(data && data.user) || {}}
//           saveUser={mutate}
//           saving={saving}
//         />
//       )}
//     </section>
//   );
// }
//
// function LoadingForm() {
//   return (
//     <React.Fragment>
//       <label>First Name <input className="loading" /></label>
//       <br />
//       <label>Last Name <input className="loading" /></label>
//     </React.Fragment>
//   );
// }
//
// function UserForm({ user, saveUser, saving }) {
//   const firstName = useFormInput(user.firstName);
//   const lastName = useFormInput(user.lastName);
//
//   function handleSubmit(e) {
//     e.preventDefault();
//     saveUser({ firstName: firstName.value, lastName: lastName.value });
//   }
//
//   const inputClass = saving ? 'loading' : 'fade-in';
//
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>First Name <input {...firstName} className={inputClass} /></label>
//       <br />
//       <label>Last Name <input {...lastName} className={inputClass} /></label>
//       <div className="button-wrapper"><button disabled={saving}>Save</button></div>
//     </form>
//   );
// }

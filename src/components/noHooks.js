import React, { Component } from "react";

class NoHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Harry",
      lastName: "Potter"
    };

    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
  }

  handleChangeFirstName = e => {
    this.setState({
      firstName: e.target.value
    });
  };

  handleChangeLastName = e => {
    this.setState({
      lastName: e.target.value
    });
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <section>
        <h1>Demo Without Hooks</h1>
        <label>
          First Name
          <input value={firstName} onChange={this.handleChangeFirstName} />
        </label>
        <br />
        <label>
          Last Name
          <input value={lastName} onChange={this.handleChangeLastName} />
        </label>
      </section>
    );
  }
}

export default NoHooks;
















































// apollo example
//
//
// import { Query, Mutation } from '../lib/apollo';
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
// export default class NoHooks extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { id: "1" };
//
//     this.handleChangeId = this.handleChangeId.bind(this);
//   }
//
//   handleChangeId = e => {
//     this.setState({ id: e.target.value });
//   };
//
//   render() {
//     const { id } = this.state;
//
//     return (
//       <section>
//         <h1>Demo Without Hooks</h1>
//         <label>
//           <span>ID</span>
//           <input
//             value={id}
//             onChange={this.handleChangeId}
//             type="number"
//             step="1"
//             min="1"
//           />
//         </label>
//         <br />
//         <Query query={USER_QUERY} variables={{ id }}>
//           {({ loading, data }) => (
//             <Mutation mutation={USER_MUTATION} variables={{ id }}>
//               {(saveUser, { loading: saving }) => loading ? <LoadingForm /> : (
//                 <UserForm
//                   key={id}
//                   user={(data && data.user) || {}}
//                   saveUser={saveUser}
//                   saving={saving}
//                 />
//               )}
//             </Mutation>
//           )}
//         </Query>
//       </section>
//     );
//   }
// }
//
// class UserForm extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {};
//
//     this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
//     this.handleChangeLastName = this.handleChangeLastName.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChangeFirstName = e => {
//     this.setState({
//       firstName: e.target.value
//     });
//   };
//
//   handleChangeLastName = e => {
//     this.setState({
//       lastName: e.target.value
//     });
//   };
//
//   handleSubmit = e => {
//     const { user, saveUser } = this.props;
//     const { firstName, lastName } = this.state;
//     e.preventDefault();
//     saveUser({
//       firstName: firstName || user.firstName,
//       lastName: lastName || user.lastName
//     });
//   }
//
//   render() {
//     const { user, saving } = this.props;
//     const { firstName, lastName } = this.state;
//
//     const inputClass = saving ? 'loading' : 'fade-in';
//
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           First Name
//           <input value={firstName || user.firstName} onChange={this.handleChangeFirstName} className={inputClass}/>
//         </label>
//         <br />
//         <label>
//           Last Name
//           <input value={lastName || user.lastName} onChange={this.handleChangeLastName} className={inputClass} />
//         </label>
//         <div className="button-wrapper"><button disabled={saving}>Save</button></div>
//       </form>
//     );
//   }
// }

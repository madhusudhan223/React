import React from "react";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }
// const user = {
//   firstName: "madhu",
//   lastName: "sudhan",
// };

// export const element = (
//   <div>
//     <h1>Hello {formatName(user)}</h1>
//   </div>
// );
// export class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>MAdhu</h1>
//       </div>
//     );
//   }
// }

// export default function Madhu() {
//   if (user) {
//     return (
//       <div>
//         <h1>Hello {formatName(user)}</h1>
//       </div>
//     );
//   } else return <div>Hello Stranger</div>;
// }
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name1: "madhu" };
    this.changeName = this.changeName.bind(this);
  }
  // componentDidMount() {
  //   this.id = setInterval(() => this.tick(), 1000);
  // }
  // componentWillUnmount() {
  //   clearInterval(this.id);
  // }
  // tick() {
  //   this.setState({
  //     date: new Date(),
  //   });
  // }
  changeName() {
    this.setState({
      name1: "sudhan",
    });
  }
  render() {
    return <h1 onClick={this.changeName}> {this.state.name1}</h1>;
  }
}
export default Clock;

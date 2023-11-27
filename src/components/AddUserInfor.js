import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             address: "",
//             age: "",
//         };
//     }

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value,
//         });
//     };
//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         });
//     };
//     handleOnChangeAddress = (event) => {
//         this.setState({
//             address: event.target.value,
//         });
//     };
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100 + 1) + "test",
//             name: this.state.name,
//             age: this.state.age,
//         });
//     };
//     render() {
//         return (
//             <div>
//                 Toi ten la {this.state.name} nam nay {this.state.age} tuoi o{" "}
//                 {this.state.address}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label htmlFor="">Your Name</label>
//                     <input
//                         value={this.state.name}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     <label htmlFor="">Your Age</label>
//                     <input
//                         value={this.state.age}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <label htmlFor="">Your Address</label>
//                     <input
//                         value={this.state.address}
//                         type="text"
//                         onChange={(event) => this.handleOnChangeAddress(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [age, setAge] = useState('');
         
           const  handleOnChangeInput = (event) => {
            setName(event.target.value);
            };
            const handleOnChangeAge = (event) => {
                setAge(event.target.value);
            };
            const handleOnChangeAddress = (event) => {
                setAddress(event.target.value);
            };
           const handleOnSubmit = (event) => {
                event.preventDefault();
                props.handleAddNewUser({
                    id: Math.floor(Math.random() * 100 + 1) + "test",
                    name: name,
                    age: age,
                });
            };



    return (
            <>
                Toi ten la {name} nam nay {age} tuoi o{" "}
                {address}
                <form onSubmit={(event) => handleOnSubmit(event)}>
                    <label htmlFor="">Your Name</label>
                    <input
                        value={name}
                        type="text"
                        onChange={(event) => handleOnChangeInput(event)}
                    />
                    <label htmlFor="">Your Age</label>
                    <input
                        value={age}
                        type="text"
                        onChange={(event) => handleOnChangeAge(event)}
                    />
                    <label htmlFor="">Your Address</label>
                    <input
                        value={address}
                        type="text"
                        onChange={(event) => handleOnChangeAddress(event)}
                    />
                    <button>Submit</button>
                </form>
            </>
    );
}
export default AddUserInfor;

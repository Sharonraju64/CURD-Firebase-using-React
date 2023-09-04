import React from 'react';
import StartFirebase from './firebase';
import {set, ref, /*update, remove, get, child*/} from 'firebase/database';
import './Crud.css';
export default class Curd extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            db:'',
            username:'',
            firstname:'',
            lastname:'',
            phonenumber:'',
            dob:''
        }
        this.interface = this.interface.bind(this);
    }
    componentDidMount(){
        this.setState({
            db: StartFirebase()
        });
    }
    render(){
        return(
            <>
                <h2>CRUD OPERATIONS</h2>
                <label>Enter Username</label>
                <input type='text' id='user' value={this.state.username}
                onChange={e =>{this.setState({username: e.target.value});}}/>
                <br/><br/>

                <label>Enter Firstname</label>
                <input type='text' id='fullname' value={this.state.firstname}
                onChange={e =>{this.setState({firstname: e.target.value});}}/>
                <br/><br/>

                <label>Enter Lastname</label>
                <input type='text' id='lastname' value={this.state.lastname}
                onChange={e =>{this.setState({lastname: e.target.value});}}/>
                <br/><br/>

                <label>Phone Number</label>
                <input type='number' id='phone' value={this.state.phonenumber}
                onChange={e =>{this.setState({phonenumber: e.target.value});}}/>
                <br/><br/>

                <label>Date of Birth</label>
                <input type='date' id='dob' value={this.state.dob}
                onChange={e =>{this.setState({dob: e.target.value});}}/>
                <br/><br/> 

                <button id='add' onClick={this.interface}>Insert</button>
                <button id='update' onClick={this.interface}>Update</button>
                <button id='delete' onClick={this.interface}>Delete</button>
                <button id='search' onClick={this.interface}>Search</button>
            </>
        )
    }

    interface(event){
        const id = event.target.id;
        if(id ==='add'){
            this.insertData();
        }
        // else if(id ==='update'){
        //     this.updateData();
        // }
        // else if(id ==='delete'){
        //     this.deleteData();
        // }
        // else if(id ==='search'){
        //     this.searchData();
        // }
    }

    getAllInputes(){
        return{
            username: this.state.username,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phonenumber: Number(this.state.phonenumber),
            dob: this.state.dob
        }
    }

    insertData(){
        const db = this.state.db;
        const data = this.getAllInputes();
        set(ref(db,'Customer/'+data.username),{
            firstname: data.firstname,
            lastname: data.lastname,
            phonenumber: data.phonenumber,
            dob: data.dob
        })
        .then(()=>{alert('Data Added Successfully')})
        .catch((error)=>{alert("There was an error, datails: "+error)});
        this.setState({
            username:'',
            firstname:'',
            lastname:'',
            phonenumber:'',
            dob:''
        })
    }

    // updateData(){
    //     const db = this.state.db;
    //     const data = this.getAllInputes();
    //     update(ref(db,'Customer/'+data.username),{
    //         firstname: data.firstname,
    //         lastname: data.lastname
    //     })
    //     .then(()=>{alert('Data Updated Successfully')})
    //     .catch((error)=>{alert("There was an error, datails: "+error)});
    //     this.setState({
    //         username:'',
    //         firstname:'',
    //         lastname:'',
    //         phonenumber:'',
    //         dob:''
    //     })
    // }

    // deleteData(){
    //     const db = this.state.db;
    //     const username = this.getAllInputes().username;
    //     remove(ref(db,'Customer/'+username))
    //     .then(()=>{alert('Data Deleted Successfully')})
    //     .catch((error)=>{alert("There was an error, datails: "+error)});
    //     this.setState({
    //         username:'',
    //         firstname:'',
    //         lastname:'',
    //         phonenumber:'',
    //         dob:''
    //     })
    // }

    // searchData(){
    //     const dbref = ref(this.state.db);
    //     const username = this.getAllInputes().username;

    //     get(child(dbref, 'Customer/'+username)).then((snapshot) =>{
    //         if(snapshot.exists()){
    //             this.setState({
    //                 firstname: snapshot.val().firstname,
    //                 lastname: snapshot.val().lastname,
    //                 phonenumber: snapshot.val().phonenumber,
    //                 dob: snapshot.val().dob
    //             })
    //         }
    //         else{
    //             alert("No Data Found!");
    //         }
    //     })
    //     .catch((error)=>{alert("There was an error, details: "+error)});
    // }
}
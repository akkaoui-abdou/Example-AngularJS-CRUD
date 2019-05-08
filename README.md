AngularJS CRUD Example with Material Design – Step by Step Guide!
===

Demo
---


![alt text](https://github.com/akkaoui-abdou/tuto-react-display-more-component/blob/master/Demo.png)

props
state
setState


First step install react 
---

for install react use this commande in Terminal:

npm init react-app my-app



Second step start your app react 
---

for start your app in react use this commande in Terminal:

npm start


in file App.js add the script below 
---


```javascript

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class MyHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render (){
      return (
        <div>
          <img src={this.props.logo} width={this.props.longeur} alt="logo"/>
        </div>
      );
  }

}


class MyContent extends Component{

   constructor(props){
      super(props);
      this.state = {
        isToggled:true,
      };
  
      this.showval= this.showval.bind(this);
    }
  
  showval(e){
      e.preventDefault();
      this.setState(state=>({
        isToggled:!state.isToggled
      }));
  
   }


  render (){

const SectionDetail = {
  title :'titre Section 1',
  description :'description Section 1',
}

const Section1 = (props)=>{
  return <div>{props.section}<div>{SectionDetail.title}</div><div>{SectionDetail.description}</div></div>
}

const Section2 = (props)=>{
  return <div>{props.section}</div>
}



      return (
        <div className="container">
         <Section1 section ="Sesction 1"/>
         <Section2 section ="Sesction 2"/>
         <button onClick={this.showval}>{this.state.isToggled?' ON':'OFF'}</button>
        </div>
      );
  }

}

class MyFooter extends Component{

 

  render (){
    
      return (
        <div className="container">
        <div>Section Footer</div>
       
         
        </div>
      );
  }

}


class App extends Component {
   constructor(props){
      super(props);
      
      
      this.state = {employer: [
         {id:100,name:'LIONEL MESSI',age:36},
         {id:101,name:'CRISTIANO RONALDO',age:26},
         {id:102,name:'MOHAMED SALAH',age:22},
         {id:103,name:'IDIN HAZARD',age:43},
             ]
      };
      
      
      }
render() {

function ListeItem(props){
  return  (
                      <tr >
                        <td> {props.value.id} </td>
                        <td> {props.value.name} </td>
                        <td> {props.value.age} </td>
                    
                    </tr>)
              
            
       
}


function ListItems(props){
  const employer = props.employer;
  const ListItem = employer.map((number,index)=>
    <ListeItem key={index} value={number} ></ListeItem>
    );
    return (<div>
      <table><thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
             
                  </tr>
                  </thead>  
                  <tbody>  {ListItem} </tbody>
                 </table>
                 </div>
    )

}

 

    return (
      <div className="App">
        <MyHeader logo = {logo} longeur = '200' />
        <MyContent/>
        <ListItems employer ={this.state.employer} />
        <MyFooter/>
      </div>
    );
  }
}

export default App;



```
import React, { Component } from 'react';

class Statecomponent  extends Component {
    render() {
        return (
            <>
                <div className="container">
                <h1>state component</h1>
                    <p>
                    React Class components have a built-in state object. <br />

You might have noticed that we used state earlier in the component constructor section.<br />

The state object is where you store property values that belongs to the component.<br />

                        When the state object changes, the component re-renders.<br />
                        

                    </p>
                    <h3>Creating the state Object</h3>
                    <p>The state object can contain as many properties as you like:</p>
                    <pre>
      this.state =  <br />
         brand: "Ford", <br />
         model: "Mustang", <br />
         color: "red", <br />
        year: 1964
                    </pre>
                        <h3>Using the state Object</h3>
                    <p>Refer to the state object anywhere in the component by using the <b> "this.state.propertyname" </b> syntax:</p>
                    
                    <h3>Changing the state Object</h3>
                    <p>
                    To change a value in the state object, use the <b> "this.setState()" </b> method. <br />

When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).
                    </p>
                </div>
            </>
        );
    }
}

export default  Statecomponent ;
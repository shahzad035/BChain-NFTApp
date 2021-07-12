import React, { Component } from 'react'
import "react-drop-zone/dist/styles.css";
import { StyledDropZone } from 'react-drop-zone';

export class AddTransaction extends Component {
    render() {
        return (
           <div>
            <form>
              <div className="form-control">
                <label htmlFor="text">Name</label>
                <input type="text" placeholder="Enter Name..." />
              </div>
              <div className="form-control">
                <label htmlFor="amount">Price</label>
                <input type="number" placeholder="Enter Price..." />
              </div>
              <div className="form-control">
                  <label htmlFor="description">Description</label>
                  <br /><textarea type="description" rows="4" cols="47"></textarea>
              </div>
              <br/>
              <StyledDropZone />
              <br/>
              <div style={{width:"350px"}}>
              <div style={{float:"left", width:"120px"}}><button className="btn">Save</button></div>
              <div style={{float:"left", width:"110px"}}>&nbsp;</div>
              <div style={{float:"left", width:"120px"}}><button className="btn">Cancel</button></div>
              </div>
              
            </form>
           </div>
        )
    }
}

export default AddTransaction

import React, { Component } from 'react';
import Categories from '../../containers/Categories';


export default class Home extends Component {
    render (){
        return (
            <div>
                <h2>Home Page</h2>
                <Categories />
                
            </div>
        )
    }
}
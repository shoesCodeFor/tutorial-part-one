import React from "react";
import Link from "gatsby-link";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavbarTest extends React.Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.setState.isOpen
        });
    }
    render() {
        return (
            <div style={{ color:'tomato' }}>
                <h1>Welcome to Gatsby</h1>
                <p>What a world!</p>
                <img src="https://i.chzbgr.com/full/4994391296/hB3E19313/" alt=""/>
                <br/>
                <div>
                    <Link to="/page-2/">Page 2</Link>
                </div>
                <div>
                    <Link to="/counter/">Counter</Link>
                </div>
            </div>
        );
    }

}


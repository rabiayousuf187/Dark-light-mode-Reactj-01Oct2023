import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
// Import necessary packages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
// import { ArrowRight, HeartFill } from 'react-bootstrap-icons';
// Add the icons to the library
// library.add(faCoffee, faUser);
const NavbarComp = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // Initially, the isOpen state is set to false, which makes the navbar collapsed.
    return (
        <>
            <Navbar expand="lg" {...args}>
                <NavbarBrand href="/">Material Kit React</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            <i class="bi bi-grid-3x3-gap-fill"></i>COMPONENTS
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                UPGRADE TO PRO
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                            <FontAwesomeIcon icon="coffee" />DOWNLOAD
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"><FontAwesomeIcon icon="coffee" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                            <FontAwesomeIcon icon="coffee" />
                            </NavLink>
                        </NavItem>
                        
                        
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                            <FontAwesomeIcon icon="coffee" />
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;

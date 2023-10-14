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
    // NavbarText,
} from 'reactstrap';

const NavbarComp = (args) => {
    const {compClass} = args;

    console.log("NAVBAR props === ", compClass)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // Initially, the isOpen state is set to false, which makes the navbar collapsed.
    return (
        <>
            <Navbar expand="xl" {...args} className={`left-menu ${compClass}`}>
                <NavbarBrand href="/">Material Kit React</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto left-menu" navbar>
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
                                <i class="bi bi-cast"></i> UPGRADE TO PRO
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <i class="bi bi-cloud-arrow-down-fill"></i>DOWNLOAD
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://twitter.com/"><i class="bi bi-twitter"></i></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.facebook.com/">
                                <i class="bi bi-facebook"></i>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://www.instagram.com/">
                                <i class="bi bi-instagram"></i>
                            </NavLink>
                        </NavItem>
                        {args.children}
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default NavbarComp;

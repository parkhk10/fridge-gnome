import React from 'react';
import { Menu, Input, Container, Icon } from "semantic-ui-react";

function MenuBar() {
    return (
        <div>
            <Container>
            <Menu inverted fixed="top">
                <Menu.Item name='home'> Fridge Gnome </Menu.Item>
                <Menu.Item
                name='messages'
                // onClick={this.handleItemClick}
                >
                    My Fridge
                </Menu.Item>
                <Menu.Item
                name='Grocery List'
                />
                <Menu.Menu position='right'>
                <Menu.Item>
                <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                name='logout'
                // onClick={this.handleItemClick}
                />
                </Menu.Menu>
            </Menu>
            </Container>
        </div>
    )
};

export default MenuBar;
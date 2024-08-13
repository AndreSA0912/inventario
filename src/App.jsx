import React from 'react';
import './App.css';

const buttonClass = "px-4 py-2 rounded-lg hover:bg-opacity-80";
const listItemClass = "flex items-center justify-between py-2 border-b border-border";

const InventoryManagementSystem = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-primary-foreground">
            <h1 className="text-3xl font-bold mb-8">Inventory Management System</h1>
            <div className="flex space-x-4 mb-4">
                <button className={`bg-primary text-primary-foreground ${buttonClass}`}>Create</button>
                <button className={`bg-accent text-accent-foreground ${buttonClass}`}>Update</button>
                <button className={`bg-destructive text-destructive-foreground ${buttonClass}`}>Delete</button>
            </div>
            
            <div className="max-w-md w-full bg-card shadow-lg rounded-lg p-4">
                <h2 className="text-lg font-bold mb-2">Inventory List</h2>
                <ul>
                    <ListItem name="Product 1" quantity="10 units" />
                    <ListItem name="Product 2" quantity="5 units" />
                    <ListItem name="Product 3" quantity="20 units" />
                </ul>
            </div>
        </div>
    );
};

const ListItem = ({ name, quantity }) => {
    return (
        <li className={listItemClass}>
            <span>{name}</span>
            <span>{quantity}</span>
        </li>
    );
};

export default InventoryManagementSystem;

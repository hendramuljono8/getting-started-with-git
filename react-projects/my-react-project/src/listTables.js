function GroceryList ({items}) {
    return (
        <ul>
            {items.map((item)=> (
                <li>{item}</li>
            ))}
        </ul>
    );
}

export default GroceryList;
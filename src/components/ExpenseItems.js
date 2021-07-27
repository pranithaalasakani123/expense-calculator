import './ExpenseItem.css';
function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>march 27th 2030</div>
            <div className="expense-item__description">
                <h2 >Car Insurence</h2>
                <div className="expense-item__price">$200</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
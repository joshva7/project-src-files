import '../CssCompontens/Cards.css'
const Cards = () => {
  return (
    <div className='container m-5'>
        <table className='Cart_tb'>
            <thead className='Cart_head'>
                <tr >
                    <th>Product</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody  className='Cart_head Ct_body'>
                <tr>
                    <td>joystick</td>
                    <td>564</td>
                    <td>656</td>
                </tr>
            </tbody>
        </table>
        <div className='Ct_process'>
            <div className='Ct_coupen'>
                <input type='text' placeholder='Coupon Code' className='Ct_input'/>
                <button className='Ct_btn'>Apply Coupon</button>
            </div>
            <div className='Ct_payament_det'>
                <h5>Card Total</h5>
                <div className='Ct_payment_inside_box'>
                <p>Subtotal:</p>
                <p><span>564</span></p>
                </div>
                <div className='Ct_payment_inside_box'>
                <p>Shipping:</p>
                <p><span>Free</span></p>
                </div>
                <div className='Ct_payment_inside_box_totle'>
                <p>Total:</p>
                <p><span>564</span></p>
                </div>
                <button className='Ct_payment_inside_btn'>Process to checkout</button>
            </div>
        </div>
    </div>
  )
}

export default Cards

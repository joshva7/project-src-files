import { Link } from "react-router-dom"
import '../CssCompontens/Account.css'
const Accountpage = (props) => {
  return (
    <>
    <div className="Acc_Title container>">
        <div >
            <span><Link to={'/'} className="Acc_link">Home</Link></span>
            <span className="Acc_link">/</span>
            <span>My Account</span>
        </div>
        <div>
            <p>Welcome<span className="Ac_title_color">!Md Rime|</span></p>
        </div>
    </div>

    <div className="container Acct_pg_box">
        <div className="">
                <h5>Manage My Account</h5>
            <ul className="Acct_liste">
                <li>My Profile</li>
                <li>Address Book</li>
                <li>My payments Options</li>
            </ul>
            <h5>My Orders</h5>
            <ul className="Acct_liste">
                <li>My Returns</li>
                <li>My Cancellations</li>
            </ul>
            <h5>My WhishList</h5>
        </div>
            {/* Side box */}
        <div className="Acc_detials_div">
        <div>
            <h3>Edit Your Profile</h3>
        </div>
        <div className="Acc_Name">
            <div className="Acc_lable_box">
            <label>First Name</label>
            <label>Last Name</label>
            </div>
            <div className="Acc_name_label">
            <input placeholder="MD" className="Acc_input_box"/>
            <input placeholder="Rimel" className="Acc_input_box"/>
            </div>
        </div>
        <div className="Acc_Name">
            <div className="Acc_lable_emal_box">
            <label>Email</label>
            <label>Address</label>
            </div>
            <div className="Acc_name_label">
            <input placeholder="MD" className="Acc_input_box_email" />
            <input placeholder="Rimel"  className="Acc_input_box_email"/>
            </div>
        </div>
        <div className="Acc_Password">
            <label>Password Changes</label>
            <input placeholder="CurrentPassword" className="Acc_pass_box"/>
            <input placeholder="New Password" className="Acc_pass_box"/>
            <input placeholder="Confirm NewPassword" className="Acc_pass_box"/>
        </div>
        <div className="Acc_btn_box">
            <button className="Acc_cancle">Cancle</button>
            <button className="Acc_btn_save">Save Change</button>
        </div>
        </div>
           
    </div>
    </>
  )
}

export default Accountpage
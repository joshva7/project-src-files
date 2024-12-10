import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreenButton,faDisplay,faCameraRetro,faHeadphones,faGamepad,faClock} from '@fortawesome/free-solid-svg-icons'
import '../CssCompontens/Catageory.css'
const Catagres = () => {
    const list = [
        {
            catageory: "phone",
            brandlogo: <FontAwesomeIcon icon={faMobileScreenButton} className='font-awesom' />
        },
        {
            catageory: "Computer",
            brandlogo: <FontAwesomeIcon icon={faDisplay} className='font-awesom' />
        },
        {
            catageory: "SmartWatch",
            brandlogo:<FontAwesomeIcon icon={faClock} className='font-awesom' />
        },
        {
            catageory: "Camaera",
            brandlogo: <FontAwesomeIcon icon={faCameraRetro} className='font-awesom' />
        },
        {
            catageory: "HeadPhone",
            brandlogo: <FontAwesomeIcon icon={faHeadphones} className='font-awesom' /> 
        },
        {
            catageory: "Gaming",
            brandlogo: <FontAwesomeIcon icon={faGamepad} className='font-awesom' />
        }
    ]
    return (
        <>
            <div className="container Ti-box">
                <div>
                    <div className="Ti-timer mt-5">
                        <div className="Ti-Titles"></div>
                        <span className="Ti-date">Categories</span>
                    </div>
                </div>
                <div className='Fs-box-time mt-3'>
                    <span>
                        <h3 className='Ti-H3 Cat-h3'>Browse By Category</h3>
                    </span>
                </div> 
                <div className='list-card-box mt-5'>
                {list.map((item) => { 
                    return <div className='list-card p-2'>
                        <p>{item.brandlogo}</p>
                        <p className='list-para'>{item.catageory}</p>
                    </div>
                })}
                </div>
            </div>
        </>
    )
}

export default Catagres
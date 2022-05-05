import NewCartoonForm from "../components/cartoon/NewCartoonForm";
import { useNavigate } from 'react-router-dom'

let newCartoonsAdded = 0;

function NewCartoon() {
    
    const navigate = useNavigate();

    function onAddCartoonHandler(cartoon) {
        fetch('https://cartoons-b0c5a-default-rtdb.europe-west1.firebasedatabase.app/cartoons.json', 
        {
            method: 'POST',
            body: JSON.stringify(cartoon),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            newCartoonsAdded++;
            navigate('/');
        });
    }

    return (
        <div className="container">
            <h1 className="heading">Add New Cartoon</h1>
            <NewCartoonForm addCartoonHandler={onAddCartoonHandler} />
        </div>
    );
}

export default NewCartoon;
export { newCartoonsAdded };
import './Card.css';
function Card(props){
    return (
        <div className='Card-container'>
            <p className='Card-title'>{props.title}</p>
            <p className='Card-content'>{props.content}</p>
        </div>
    )
}

export default Card;

// separate component for displaying each feedback
function Feedback({id,name,review}) {
    return (
        <li id={id.toString()}> 
            <h3>{name}</h3>
            <div>{review}</div>
        </li>
    )
}
export default Feedback;
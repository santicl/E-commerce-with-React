function Tags(props) {
    return (
        <div key={props.i} className="Hashtag-popup_Hashtag">
            <span>#</span>
            <span> {props.name} </span>
        </div>
    );
}

export default Tags;
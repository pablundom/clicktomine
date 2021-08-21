import "./ItemIcon.css"

export let ItemIcon = ({image,...props}) =>{
    return (
        <div className="item-icon-container"><img src={"./assets/img/"+image}  alt="Stone"/></div>
    )
}
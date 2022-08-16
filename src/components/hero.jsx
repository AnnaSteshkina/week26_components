import './hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <img className="hero-img" src={props.url} alt="foto"/>
            <div className="hero-name">{props.name}</div>
            <div className="information">
                <div className="hero-universe"><strong>Вселенная: </strong>{props.universe}</div>
                <div className="hero-alter_ego"><strong>Альтер-эго: </strong>{props.alter_ego}</div>
                <div className="hero-type_of_activity"><strong>Вид деятельности: </strong>{props.type_of_activity}</div>
                <div className="hero-friends"><strong>Друзья: </strong>{props.friends}</div>
                <div className="hero-superpowers"><strong>Суперспособности: </strong>{props.superpowers}</div>
                <div className="hero-more_detailed"><strong>Подробнее: </strong>{props.more_detailed}</div>
            </div>
        </div>
    );
}
    
export default Hero;
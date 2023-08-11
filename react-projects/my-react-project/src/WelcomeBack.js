import "./WelcomeBack.css"

function WelcomeBack({name="valued customer", adjective="nice"}) {
    return <p>Welcome back, <span className="username">{name}</span>!</p>;
  }

  export default WelcomeBack;
import Container from "../../components/Container/container";
import "./about.css"
// import Button from "../../components/UI/Button/button";
// import Title from "../../components/UI/Title/title";

const AboutScreen = () => {
  return (
    <div className="about-screen">
      <Container>
        <h1>Welcome .</h1>
        <p className="sub-title">This is my first challenge with Html&CSS.</p>
        <img src="/image.png"/>
        <p className="info">This app created by <a href="/">Aon2023</a></p>
        {/* <Title level={3}>About Screen</Title>
        <Button onPress={(msg) => alert("Alert From About" + msg)} size="sm">
          Click Me!
        </Button> */}
      </Container>
    </div>
  );
};

export default AboutScreen;

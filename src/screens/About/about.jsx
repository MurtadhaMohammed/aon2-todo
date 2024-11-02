import Container from "../../components/Container/container";

const Title = ({ level = 1, children }) => {
  if (level === 1) return <h1>{children}</h1>;
  if (level === 2) return <h2>{children}</h2>;
  if (level === 3) return <h3>{children}</h3>;
};

const Button = ({ size = "md", children, onPress }) => {
  const sizesStyle = {
    md: {
      height: 48,
      padding: "0px 14px",
      fontSize: 18,
      borderRadius: 8,
    },
    sm: {
      height: 32,
      padding: "0px 12px",
      fontSize: 14,
      borderRadius: 8,
    },
  };

  return (
    <button onClick={()=> onPress("Hi")} style={sizesStyle[size]}>
      {children}
    </button>
  );
};

const AboutScreen = () => {

  return (
    <div>
      <Container>
        <Title level={3}>About Screen</Title>
        <Button onPress={(msg) => alert("Alert From About"+ msg)} size="sm">Click Me!</Button>
      </Container>
    </div>
  );
};

export default AboutScreen;

const Button = ({ size = "md", children, onPress = () => {} }) => {
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
    <button onClick={() => onPress("Hi")} style={sizesStyle[size]}>
      {children}
    </button>
  );
};

export default Button;

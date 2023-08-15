import "./ButtonComponent.css";

function ButtonComponent(props) {
  const { children, colorBg, colorText } = props;

  const styles = {
    backgroundColor: colorBg,
    color: colorText
  };

  return (
    <>
      <button className="buttonComp" onClick={props.onTouch} style={styles}>
        {children}
      </button>
    </>
  );
}

export default ButtonComponent;

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
import { actionCreators, selectorCounter } from "../features/counter";

export const Counter = () => {
  // console.log(useSelector((state) => selectorCounter(state)));
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => selectorCounter(state));

  // const { counter } = useSelector((state) => state.counter);
  // console.log(counter.counter);

  const increment = () => {
    dispatch(actionCreators.increment());
  };
  const decrement = () => {
    dispatch(actionCreators.decrement());
  };

  return (
    <>
      <Card title="Counter Redux:" bordered={true} hoverable={true}>
        <Row style={{ alignItems: "center" }}>
          <Col md={9} />
          <Col md={2}>
            <Button
              size="large"
              icon={<MinusOutlined />}
              shape="circle"
              onClick={decrement}
            />
          </Col>
          <Col md={4}>
            <span
              style={{ fontSize: "2rem", fontWeight: "bold", padding: "2rem" }}
            >
              {counter.counter}
            </span>
          </Col>
          <Col md={2}>
            <Button
              size="large"
              icon={<PlusOutlined />}
              shape="circle"
              onClick={increment}
            />
          </Col>
          <Col md={9} />
        </Row>
      </Card>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   ...selectorCounter(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   actionCreators: bindActionCreators(actionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row, Card } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from "../redux";

export const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: actionTypes.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: actionTypes.DECREMENT });
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
              style={{ fontSize: "2rem", fontWeight: "bold", padding: "4rem" }}
            >
              {counter}
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

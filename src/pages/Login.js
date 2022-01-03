import React from "react";
import { Button, Grid, Input, Text } from "../elements";
import { setCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  const login = () => {
    dispatch(userActions.logIn({ user_name: "perl" }));
  };
  return (
    <React.Fragment>
      <Grid padding={16}>
        <Text type="heading">로그인 페이지</Text>
      </Grid>
      <Grid padding={16}>
        <Input
          label="로그인"
          value={id}
          _onChange={changeId}
          placeholder="아이디를 입력하세요."
        />
        <Input
          label="비밀번호"
          value={pwd}
          _onChange={changePwd}
          type="password"
          placeholder="비밀번호를 입력하세요."
        />
      </Grid>

      <Button
        text="로그인"
        _onClick={() => {
          console.log("로그인함!");
          login();
        }}
      />
    </React.Fragment>
  );
};

export default Login;

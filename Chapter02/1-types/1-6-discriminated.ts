{
  // 2.11 필수 타입! Discriminated Union
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login2(id: string, password: string): LoginState {
    if (password === "1234") {
      return {
        result: "success",
        response: {
          body: "logged in!",
        },
      };
    } else {
      return {
        result: "fail",
        reason: "password is wrong!",
      };
    }
  }

  // printLoginState(state)
  // success -> 🎇 body
  // fail -> 🎃 resaon
  function printLoginState2(state: LoginState): void {
    if (state.result === "success") {
      console.log(`🎇 ${state.response.body}`);
    } else {
      console.log(`🎃 ${state.reason}`);
    }
  }
}

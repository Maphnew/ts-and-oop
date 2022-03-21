{
  // 2.10 진정한 타입스크립트의 시작! Union 타입
  // Union Types: OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("up");
  move("down");
  move("left");
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    if (password === "1234") {
      return {
        response: {
          body: "logged in!",
        },
      };
    } else {
      return {
        reason: "password is wrong!",
      };
    }
  }

  // printLoginState(state)
  // success -> 🎇 body
  // fail -> 🎃 resaon
  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log(`🎇 ${state.response.body}`);
    } else {
      console.log(`🎃 ${state.reason}`);
    }
  }
}

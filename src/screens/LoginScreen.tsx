import { FC, FormEvent, useState } from "react";

import { Button, Divider, Select } from "antd";

import QDBlogo from "../assets/qdb-logo.svg";
import { getUserData } from "../slices/dataUserSlice";
import { selectUserFetchStatus } from "../selectors/seletors";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { FetchStatus, USER_LENGTH } from "../constants/constants";

const usersArray = Array.from({ length: USER_LENGTH }, (_, index) => index + 1);

export const LoginScreen: FC = () => {
  const dispatch = useAppDispatch();
  const fechStatus = useAppSelector(selectUserFetchStatus);
  const [userNumber, setUserNumber] = useState<undefined | string>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userNumber) {
      dispatch(getUserData(userNumber));
    }
  };

  return (
    <form
      method="post"
      onSubmit={(e) => handleSubmit(e)}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#e3f6fd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img height={310} src={QDBlogo} className="App-logo" alt="logo" />

      <label>
        Select a user:
        <Select
          autoFocus
          listHeight={320}
          placeholder="Select a user"
          style={{ width: 120 }}
          onChange={setUserNumber}
          options={usersArray.map((user) => ({
            value: user,
            label: user,
          }))}
        />
      </label>
      <Divider />

      <Button
        disabled={!userNumber}
        loading={fechStatus === FetchStatus.LOADING}
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
    </form>
  );
};

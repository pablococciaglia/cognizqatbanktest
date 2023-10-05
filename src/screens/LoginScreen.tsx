import { FormEvent, useState, FC } from "react";
import { Button } from "antd";
import { getPersonData } from "../service/personApi";
import { BASE_URL } from "../constants/constants";

const usersArray = Array.from({ length: 10 }, (_, index) => index + 1);

export const LoginScreen: FC = () => {
  const [userNumber, setUserNumber] = useState<undefined | string>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userNumber) {
      getPersonData(`${BASE_URL}${userNumber}`);
    }
  };

  return (
    <form method="post" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Select a user:
        <select
          name="selectedUser"
          onChange={(e) => setUserNumber(e.target.value)}
          defaultValue={"noSelection"}
        >
          <option value={"noSelection"} disabled>
            Choose here
          </option>
          {usersArray.map((user) => (
            <option key={`loginPage-${user}`} value={user}>
              {user}
            </option>
          ))}
        </select>
      </label>
      <hr />
      <Button
        disabled={!userNumber}
        loading={false}
        type="primary"
        htmlType="submit"
      >
        Submit
      </Button>
    </form>
  );
};

import React, {FC} from "react";
import {IUser} from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({user}) => {
  return(
    <div style={{padding: "15px", border: "solid 1px red"}} >
      {`${user.name} проживает в городе: ${user.address.city}`}
    </div>
  )
}
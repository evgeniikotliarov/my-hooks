import React, {FC, useEffect, useState} from "react";
import {IUser} from "../types/types";
import axios from "axios";
import {UserItem} from "../components/UserItem";
import List from "../components/List";

interface UserListProps {
  users: IUser[]
}

export const UserList: FC<UserListProps> = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers().then();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }
  return(
    <div className={"container"} style={{paddingTop: "50px"}}>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
    </div>
  )
}
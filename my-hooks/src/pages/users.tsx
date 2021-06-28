import React, {FC, useEffect} from "react";
import {IUser} from "../types/types";
import {UserItem} from "../components/UserItem";
import List from "../components/List";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

interface UserListProps {
  users: IUser[]
}

export const UserList: FC<UserListProps> = () => {
  const {users, error, loading} = useTypedSelector(state => state.user);
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return(
    <div className={"container"} style={{paddingTop: "50px"}}>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
    </div>
  )
}
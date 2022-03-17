import { useContext } from "react"
import LoadingAnime from "../layout/LoadingAnime"
import UserItem from "./UserItem"
import GithubContext from "../../context/github/GithubContext"
const UserResults = () => {
  const {loading,users} = useContext(GithubContext)

  if(!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) =>
          <UserItem user={user} key={user.id} />
        )}
      </div>
    )
  } else {
    return <LoadingAnime />
  }
}

export default UserResults
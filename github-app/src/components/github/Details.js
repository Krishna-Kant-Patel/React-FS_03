import { Box } from "@chakra-ui/react";
import {React, useContext} from "react";
import ContextApi from "./ContexAPI";

function Details(props) {
  const {usersdata} = useContext(ContextApi)
  return <>
   {usersdata &&
    <Box p="10px">User Details
    <br/>
   
   <p>User ID: {usersdata.login}</p>
   
   <br/>
   <p>Location: {usersdata.location}</p>
   
   <br/>
   <h2>Followers : <span>{usersdata.followers} </span> Following : <span> {usersdata.following} </span></h2>
   <br/>
   <h2>Repositories : <span>{usersdata.public_repos} </span></h2>
   </Box>

   }
   </>
}

export default Details;
import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import ContextApi from "./ContexAPI";

function Profile(props) {
  const {usersdata} = useContext(ContextApi)
  // console.log(usersdata)
  return <>
    {usersdata &&
      <Box p="10px" textAlign="center">
      <img
        src= {usersdata.avatar_url}
        height={200}
      />
      <br/>
      <Heading size="lg">{usersdata.name}</Heading>
      <br/>
      <p>Company Name: {usersdata.company}</p>
      <br/>
      <p> Bio: {usersdata.bio}
      </p>
      <br></br>

      <Button color="green"><a href={usersdata.html_url}>Profile</a></Button>
    </Box>

    }
    </>
}

export default Profile;
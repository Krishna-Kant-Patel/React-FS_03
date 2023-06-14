import { Box, Heading, Input, Button, Flex } from "@chakra-ui/react";
import {React, useContext} from "react";
import ContextApi from "./ContexAPI";
import axios from 'axios';

function Search() {
  const {setUsers} = useContext(ContextApi)
  function getUsersData(Data){
        axios.get(`https://api.github.com/users/${Data}`).then((res) => {
      // console.log(res);
      setUsers(res.data);
      
    }).catch(()=>{
      console.log(Error)
    })
    }
    let nName = ''
  return (
    <Box>
      <Box mb="15px">
        <Heading size="lg" color="green">
          GITHUB PROJECT
        </Heading>
      </Box>

      <Flex>
        <Input placeholder="Enter Github User Id" onChange={((event)=>{
                 nName = event.target.value
               getUsersData(event.target.value)
              //  console.log(usersdata)
        })} />
        <Button variant="outline" onClick={(() => {
          getUsersData(nName)
        })} color="green" p="10px 70px">
          Search
        </Button>
      </Flex>
    </Box>
  );
}

export default Search;
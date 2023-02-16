import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import './Homepage.css'

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent className="homepage">
      <Box
      // color: white; outline: none; border: 5px ridge;;  #256d97
      style={{border:"5px ridge"}}
        color="white"
        bg="#256d97"
        d="flex"
        fontFamily="none"
        justifyContent="center"
        p={3}
        w="100%"
        m="100px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Candara" fontWeight="bold" >
          Peak Chat 💬
        </Text>
      </Box>
      <Box bg="#fbfff7" w="100%" p={4} borderRadius="lg" borderWidth="20px" border="">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab fontWeight="bold">Login</Tab>
            <Tab fontWeight="bold">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;

import { Img } from "@chakra-ui/image"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import React from "react"
import Header from "../components/header"
// import BackgroundImage from "../assets/Rectangle 5655.png"
const Home =  () => {
    return (
        <Box 
        background="linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('/assets/Rectangle 5655.png')" 
        backgroundSize="cover" 
        height="100vh" width="100%">
            <Header />
            {/* Content */}
            <Box maxWidth="80%" marginX="auto" paddingY="3rem" color="#fff">
                <Flex justifyContent="space-between">
                    <Box paddingTop="150px">
                        <Heading as="h1" fontSize="60px" fontWeight="bold"> <span className="light">We are</span> Pixpers</Heading>
                        <Heading as="h3"> We're providing</Heading>
                        <Text> <span className="yellow"> /> </span> Web Applications {"{React, NodeJs, PHP, Ruby}"} </Text>
                        <Text> <span className="yellow"> /> </span> Database Design {"{MySQL, NoSQL, PostGreSQL, MERN}"} </Text>
                        <Text> <span className="yellow"> /> </span> Mobile Applications {"{Flutter, Swift, Kotlin}"} </Text>
                        <Text> <span className="yellow"> /> </span> User Interface Design {"{System Design, Component, Prototype}"} </Text>
                        <Text> <span className="yellow"> /> </span> UX Design {"{User Journey Insight, Action Flow, HIFI Wireframe}"} </Text>
                        <Text> <span className="yellow"> /> </span> Manual + Automation Testing {"{\"Outsourcing\"}"} </Text>
                    </Box>
                    <Img 
                        src="./assets/Group 24863.png"
                        position="absolute"
                        right="0"
                        top="0"
                        height="100%"
                    />
                </Flex>
              
            </Box>
        </Box>
    )
}
 
export default Home
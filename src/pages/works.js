import { Img } from "@chakra-ui/image"
import { Box, Flex, Heading } from "@chakra-ui/layout"
import React from "react"
import Header from "../components/header"

const Works =  () => {
    return (
        <Box 
        background="linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8)), url('/assets/Rectangle 5655.png')" 
        backgroundSize="cover" 
        height="100vh" width="100%">
            <Header />
            {/* Content */}
            <Box maxWidth="80%" marginX="auto" paddingY="3rem" color="#fff">
                <Flex justifyContent="space-between">
                    <Box paddingY="150px">
                    <Heading as="h1" fontSize="100px" fontWeight="bold"> <Box fontWeight="100"> We are </Box>Digital Agency </Heading>
                    </Box>
                    <Img 
                        src="./assets/Group 24863.png"
                        position="absolute"
                        right="0"
                    />
                </Flex>
              
            </Box>
        </Box>
    )
}
 
export default Works
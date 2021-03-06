import { Button } from "@chakra-ui/react"
import { Box, Flex, List, ListItem } from "@chakra-ui/layout"
import React, {useState} from "react"
import { useToggleMenu } from "./useToggleMenu";


const buttonstyle = {
    fontWeight:"800", 
    fontSize:"80px", 
    color:"#fff", 
    background:"transparent",
    border:"0",
    fontFamily:"inherit", 
    cursor:"pointer"
}

export default function Header() {

    const [Menu, setMenu] = useState(false);
    const [values, handleClick] = useToggleMenu({
        fullScreenMenu: false,
        about: false,
        works: false,
        why: false,
        hire: false,
        services: false
    });

    const handleMenu = () => setMenu({Menu: !Menu});
    // console.log(values);

    return(
        <Box position="absolute" top="0" width="100%" zIndex="1000">
            <Flex justifyContent="space-between" maxWidth="80%" marginX="auto" paddingY="3rem" color="#fff">
                <Flex>
                {/* Logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="17.758" height="17.758" viewBox="0 0 17.758 17.758">
                    <g id="Group_24853" data-name="Group 24853" transform="translate(-205.621 -46.621)">
                        <rect id="Rectangle_5696" data-name="Rectangle 5696" width="13" height="13" rx="1" transform="translate(208 49)" fill="#283148"/>
                        <rect id="Rectangle_5697" data-name="Rectangle 5697" width="13" height="13" rx="1" transform="translate(205.621 53.121) rotate(-30)" fill="#06ebbf"/>
                    </g>
                </svg>

                <Box marginX="1.5rem"> Mazen Pacha</Box>
                </Flex>
                {/* Navigations */}
                <Box>
                    <Button name="fullScreenMenu" onClick={handleMenu} color="#fff" background="transparent" border="0" padding="0" cursor="pointer">
                    <Box marginX="1.5rem"> Navigations </Box>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28.826" height="21" viewBox="0 0 28.826 21">
                        <g id="Group_24750" data-name="Group 24750" transform="translate(-1845.174 -59)">
                            <line id="Line_5" data-name="Line 5" x1="16.787" transform="translate(1846.674 60.5)" fill="none" stroke="#06ebbf" strokeLinecap="round" strokeWidth="3"/>
                            <line id="Line_7" data-name="Line 7" x1="16.787" transform="translate(1855.713 78.5)" fill="none" stroke="#06ebbf" strokeLinecap="round" strokeWidth="3"/>
                            <line id="Line_6" data-name="Line 6" x1="25.826" transform="translate(1846.674 69.5)" fill="none" stroke="#06ebbf" strokeLinecap="round" strokeWidth="3"/>
                        </g>
                    </svg>
                    </Button>
                </Box>
                {/* Lets Talk */}
                <Box>
                    <Button color="#fff" background="transparent" border="0" padding="0" cursor="pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.535" height="17" viewBox="0 0 21.535 17">
                            <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(-1.607 -5)">
                                <path id="Path_64010" data-name="Path 64010" d="M4.875,6h15A1.881,1.881,0,0,1,21.75,7.875v11.25A1.881,1.881,0,0,1,19.875,21h-15A1.881,1.881,0,0,1,3,19.125V7.875A1.881,1.881,0,0,1,4.875,6Z" fill="none" stroke="#06ebbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                <path id="Path_64011" data-name="Path 64011" d="M21.75,9l-9.375,6.563L3,9" transform="translate(0 -1.125)" fill="none" stroke="#06ebbf" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                            </g>
                        </svg>
                        <Box marginX="1.5rem"> Let's Talk </Box>

                    </Button>
                </Box>
            </Flex>
            {/* Menu */}
            {Menu && 
                <Box position="absolute" top="0" left="0" background="#394D5C" width="100%" height="100vh">
                    <Box maxWidth="80%" marginX="auto" paddingY="50px"> 
                        <Flex className="">
                            <Box>
                                <List spacing={3}>   
                                    <ListItem> <Button name="about" onClick={handleClick} {...buttonstyle}>  ABOUT US </Button></ListItem>
                                    <ListItem> <Button name="works" onClick={handleClick} {...buttonstyle}>   WORKS </Button></ListItem>
                                    <ListItem> <Button name="why" onClick={handleClick} {...buttonstyle}>   WHY Pixpers? </Button></ListItem>
                                    <ListItem> <Button name="hire" onClick={handleClick}  {...buttonstyle}>   Hire us </Button></ListItem>
                                    <ListItem> <Button name="services" onClick={handleClick}  {...buttonstyle}>  SERVICES </Button></ListItem>
                                </List>
                                
                            </Box>
                            {/* Content depending on what button is clicked */}
                            <Box maxWidth="50%" marginX="auto" fontSize="21px" color="white" paddingY="30px">
                                {values.about && ( 
                                <div> 
                                    Hello World!
                                </div>)}
                                {values.works && ( 
                                <div> 
                                    Hello World2!
                                </div>)}
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            }
        </Box>
    )
}
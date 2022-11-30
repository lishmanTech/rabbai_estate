import  Link  from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Button } from '@chakra-ui/react';
import { FcHome, FcMenu, FcAbout } from 'react-icons/fc';
import { BsSearch } from "react-icons/bs";
import { FiKey  } from 'react-icons/fi'
import {
    Alert,
    VStack,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
  } from '@chakra-ui/react';
  const lish =()=>{
    alert('Please Scroll down, and click on the icon with a horizontal line to filter through our database of houses')
  }
  const salee =()=>{
    alert('Please Scroll down to explore our database of houses for SALE')
  }
  const rentt =()=>{
    alert('Please Scroll down to explore our database of houses for RENT')
  }

const Navbar = () =>(

    <Flex p="2" borderBottom="1px" borderColor="gray.100">
        <Box display="flex" >
        <Box fontSize="3xl" color="blue.400" fontWeight="Bold">
             <Link href="/" paddingLeft="2">RabbaiHome</Link> 
        </Box>
        <Box>
              <Button pr={3} marginTop="5" paddingLeft="5" colorScheme="gray.600" fontSize="sm" variant="link">
                Home
              </Button>
            </Box>
            </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" onClick={lish} passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" onClick={salee} passHref>
                        <MenuItem icon={<FcAbout />}>For Sale</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" onClick={rentt} passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);


export default Navbar;
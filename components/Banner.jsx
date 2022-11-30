import {
    Box,
    Button,
    Container,
    Heading,
    Grid,
    Badge,
    FormControl,
    Input,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import estate from '../asset/images/Newestate.jpg'
  import Customercare from '../asset/images/customercare.jpg'
  import lifestyle from '../asset/images/Lifestyle.jpg'
  import imageThree from '../asset/images/Arabs.jpg';
  import { ArrowForwardIcon } from '@chakra-ui/icons';
  
  function Banner() {
    return (
      <>
        {/* <Box
          color={{
            sm: 'red',
            md: 'blue',
            lg: 'green',
            xl: 'cyan',
            base: 'black',
          }}
        >
          This is a color box sample
        </Box> */}
        <header>
         
        </header>
        <Box>
          {/* main punch text */}
          <Container maxW="container.xl">
            <Box
              display="flex"
              alignItems="center"
              py="20"
              flexDirection={{
                sm: 'column',
                md: 'row',
                lg: 'row',
                xl: 'row',
                base: 'column',
              }}
            >
              <Box mr="6">
                <Heading as="h1" size="2xl">
                  <Box fontWeight="black">
                    Feel Free... There are so many Houses to check in our DATABASE
                  </Box>
                </Heading>
                <Box mt="6" fontWeight="medium">
                  Join a group fine people in your new neighboorhood, We have houses in all the corridors
                  of the UAE. Thousands of people trust us!
                  you can interact with us both online and in person!
                </Box>
              </Box>
              <Box w="100%">
                <Image w="100%" src={estate} alt="illustration" />
              </Box>
            </Box>
          </Container>
          {/* three boxes */}
          <Container maxW="container.xl" mt={10}>
            <Grid
              templateColumns={{
                sm: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(3, 1fr)',
                xl: 'repeat(3, 1fr)',
                base: 'repeat(1, 1fr)',
              }}
              gap={6}
            >
              <Box>
                <Image
                  w="100%"
                  borderRadius="lg"
                  src={Customercare}
                  alt="image three"
                />
                <Button colorScheme="teal" variant="link" mt="5">
                  Connect with our Customer Care
                  <ArrowForwardIcon w="10" h="30" />
                </Button>
              </Box>
              <Box>
                <Image
                  w="100%"
                  borderRadius="lg"
                  src={lifestyle}
                  alt="image three"
                />
                <Button colorScheme="teal" variant="link" mt="5">
                  Life Style in the UAE
                  <ArrowForwardIcon w="10" h="30" />
                </Button>
              </Box>
              <Box>
                <Image
                  w="100%"
                  borderRadius="lg"
                  src={imageThree}
                  alt="image three"
                />
                <Button colorScheme="teal" variant="link" mt="5">
                  Explore the Arabian culture
                  <ArrowForwardIcon w="10" h="30" />
                </Button>
              </Box>
            </Grid>
          </Container>
          {/* pills */}
          <Container maxW="container.xl">
            <Box
              direction="row"
              display="flex"
              flexWrap="wrap"
              justifyContent={{
                sm: 'flex-start',
                md: 'space-between',
                lg: 'space-between',
                xl: 'space-between',
                base: 'flex-start',
              }}
              my="10"
            >
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                textTransform="normal"
                color="#ffffff"
                bg="black"
              >
                Restaurants aeound
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                textTransform="normal"
                bg="black"
              >
                Make Your Choice
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                textTransform="normal"
                bg="black"
              >
                Maps
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                textTransform="normal"
                bg="black"
              >
                Transportations
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                textTransform="normal"
                bg="black"
              >
                Nearest Hospital
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                textTransform="normal"
                bg="black"
              >
                Family Life in Dubai
              </Badge>
              <Badge
                borderRadius="3xl"
                px={4}
                py={2}
                mr="4"
                mb="4"
                color="#ffffff"
                textTransform="normal"
                bg="black"
              >
                Taxi services
              </Badge>
            </Box>
          </Container>
          {/* last header section */}
        </Box>
      </>
    );
  }
  
  export default Banner;
  
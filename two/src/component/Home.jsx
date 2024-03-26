import React from 'react';
import {Box, Container, Heading, Image, Stack, Text} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1 (1).jpg';
import img2 from '../assets/1 (2).jpg';
import img3 from '../assets/1 (3).jpg';
import img4 from '../assets/1 (4).jpg';
import img5 from '../assets/1 (5).jpg';

const headingOptions= {
    pos:"absoltue",
    left:"50%",
    transform: "translate(-50%, -50%)",
    textTransform: 'uppercase',
    p: '4',
   
}


const Home = () => {
  return (
    <Box>
        <MyCarousel />

        <Container maxW ={'container.xl'} mainH={'100vh'} p ={'16'}>
            <Heading
            textTransform={'uppercase'}
            py='2'
            w ={'fit-content'}
            borderBottom={'2px solid'}
            m ={'auto'}
            >
                Services
            </Heading>

            <Stack 
            h={'full'}
            p = {'4'}
            alignItems= {'center'}
            direction= {['column', 'row']}
            >
                <Image src={img4} h={['40' ,'400']} borderRadius={'full'} />

                <Text 
                 letterSpacing ={'widest'} 
                 lineHeight = {'190%'} 
                 p={['4' , '16']}
                 textAlign={'center'}
                 >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore quam, velit corrupti asperiores reprehenderit facilis quae dolorum ipsam fugit ipsa dolores harum aperiam voluptates ut, animi excepturi expedita ad ex minus itaque aut sapiente eum. Ab, neque dolor. Ea assumenda odit tempora soluta modi. Quaerat expedita unde minima sapiente dolorum quasi ab placeat incidunt voluptates, commodi reiciendis, culpa voluptatum asperiores? Placeat nam voluptate esse culpa, sit, ab, ipsam illum saepe nisi ea architecto quas officia non maiores unde recusandae?
                </Text>
            </Stack>
        </Container>



    </Box>
    )}
    const MyCarousel = () => (
        <Carousel
        autoPlay
        infiniteLoop
        interval = {1000}
        showStatus ={false}
        showThumbs ={false}
        showArrows= {false}>
            
            <Box w ="full" h={'100vh'} >
             <Image src={img1} />
             <Heading bgColor={'blackAlpha.600'} color ={'white'} {...headingOptions}>
                Watch the Future
             </Heading>
            </Box>
            <Box w ="cover" h={'100vh'} >
             <Image src={img2} />
             <Heading bgColor={'blackAlpha.600'} color ={'white'} {...headingOptions}>
                The Gamer World
             </Heading>
            </Box>
            <Box w ="cover" h={'100vh'} >
             <Image src={img3} />
             <Heading bgColor={'blackAlpha.600'} color ={'white'} {...headingOptions}>
                We are the Maker
             </Heading>
            </Box>
        </Carousel>
    )

export default Home;
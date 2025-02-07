import React from 'react'
import {Box , Button, Heading ,HStack,Text ,  Input, Stack , VStack} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (

    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
        <Stack direction={['column' , 'row']} >
            <VStack w={'full'} alignItems={'stretch'} px={'4'} > 

                <Heading size ='md' textTransform={'uppercase'}>
                    Subscribe to get Update
                </Heading>
               
                <HStack 
                   borderBottom={'2px solid white'} py={'2'}>
                    <Input 
                    placeholder='Enter Email here...'
                    border={'none'}
                    borderRadius={'none'}
                    outline={'none'}          
                    />

                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                     <AiOutlineSend size={'20'}/>
                    </Button>
                
                </HStack>
            </VStack>  
            <VStack
             w={'full'}
             borderLeft={['none' , '1px solid white']}
             borderRight={['none' , '1px solid white']}
             >
                <Heading 
                 textTransform={'uppercase'} textAlign={'center'} >
                    VedioHub
                </Heading>
                <Text>All rights received</Text>
         

            </VStack>
            <VStack
             w={'full'}
                       
             >
                <Heading size ={'md'} textTransform={'uppercase'} textAlign={'center'} >
                    Social Media
                </Heading>
                <Button  variant={'link'} colorScheme={'white'} >
                    <a target={'blank'} href="">Youtube</a>
                </Button>
                <Button  variant={'link'} colorScheme={'white'} >
                    <a target={'blank'} href="">Twitter</a>
                </Button>
                <Button  variant={'link'} colorScheme={'white'} >
                    <a target={'blank'} href="">Instagram</a>
                </Button>

            </VStack>
           
            
        </Stack> 
    </Box>
    
  )
}

export default Footer
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';

const Videos = () => {
  const videoArr =[
    'https://youtu.be/MpQbwtSiZ7E',
    'https://youtu.be/Ghjq2MPWHF0',
    'https://youtu.be/z8j0nZDo8WQ',
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0]);



  return(
     <Stack direction={['column', 'row']} h={'100vh'} >
        <VStack w={'full'}>
            <video  
              controls
              controlsList='nodownload'
              src={videoSrc}
              style={{
                width:'100%',
              }}
            ></video>

            <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflow={'auto'} >
                 <Heading>Sample Video </Heading>
                   <Text>
                       This is a sample video for testing and demo.
                   </Text>
           </VStack>
        </VStack>
        
        <VStack 
            w={['full' , 'xl']}
            alignItems={'stretch'}
            p={'8'} 
            spacing={'8'}
            overflowY={'auto'}
            >
                {
                  videoArr.map((item, index)=>(
                    <Button 
                      variant={'ghost'}
                      colorScheme='purple'
                      onClick={()=>setVideoSrc(item)}
                     >
                       Lecture { index+1 }
                    </Button>
                  ))
                }
        </VStack>
     </Stack>
  )
}

export default Videos;
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function About() {
    return (
        <>
            <Box
                backgroundImage='https://raw.githubusercontent.com/MeherDeepak-2005/CS-IA/main/ppm-3.png'
                backgroundSize={'contain'}
                backgroundPosition='center'
                height='40vh'
                marginY='20px'
                backgroundRepeat={'no-repeat'}
                display='flex'
                alignItems={'center'}
            >
                <Heading backgroundColor='whitesmoke' fontWeight='400' margin='auto'>
                    About Us
                </Heading>

            </Box>
            <Text textAlign={'center'} maxW='80%' margin='auto'>
            PPM Industries is a Private Limited Company located in Hyderabad, Telangana which manufactures Paper Core and Tube products that was established by the Owner Mrs. D.Rama and the Managing Director Mr. D.Naveen.
            The company focuses on paper products like manufacturing paper cores and tubes. The company has its office and factory in Ramachandrapuram, Hyderabad.
            The company supplies its products to many places with its main market in Hyderabad and a few regions around Hyderabad.

            </Text>
        </>
    )
}

export default About

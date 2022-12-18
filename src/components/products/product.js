import { Button, Center, Heading, HStack, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom'

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState();

    const [cookies, setCookies] = useCookies();


    useEffect(() => {
        axios(`http://127.0.0.1:5000/get/product/${productId}`, {
            method: "GET"
        }).then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
    }, []);

    const addtoCart = () => {
        axios(`http://127.0.0.1:5000/add/cart/${product.id}`, {
            method: "POST",
            data: {
                "customerId": cookies.customerId
            }
        }).then((res) => { console.log(res.status); }).catch((err) => { console.log(err); })
    }

    return (
        <>
            <Heading textAlign={'center'} fontWeight={'300'}>
                {product?.name}
            </Heading>
            <HStack maxW={'80vw'} margin='auto' marginTop='1.5rem' flexWrap={'wrap'} justifyContent='space-evenly'>
                {
                    product?.images?.map((image) => {
                        return <Image height='50vh' src={`http://127.0.0.1:5000/${image}`} />
                    })
                }
            </HStack>
            <Text maxW='80vw' margin='auto' marginTop='1.5rem'>
            This Paper tube Product consists of paper or paperboard sheet layers wound together to form strong, hollow, and usually cylindrical shapes. The paper layers are laminated or bonded together using adhesives. The wall thickness of the tube can vary depending on the number of layers wrapped during manufacturing.
Paper tubes are also known as paper cores, paperboard tubes, paper cans, fiber drums, fiber tubes, paper tubing, wound tubes, composite cans, coreboard tubes, and cardboard tubes. While widely used everywhere, the term “cardboard tube” is a misnomer. Cardboard consists of three kraft layers with the central layer corrugated.

            </Text>
            <Center marginTop={'20px'}>
                <Button onClick={() => { addtoCart() }}>
                    Add to cart
                </Button>
            </Center>

        </>
    )
}

export default Product

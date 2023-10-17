import React from 'react'
import CardItem from './CardItem'
import useFetch from '../../CustomHook/useFetch'
import {Row , Col , Spinner} from 'react-bootstrap';
import { motion } from "framer-motion";

const CardList = () => {
    const {data , loading} = useFetch('https://fakestoreapi.com/products')
    console.log(data);
    if(loading) {
        return (
            <Row className="justify-content-md-center align-items-center ">
                <Spinner animation="border" variant="warning" className='fs-6'/>
            </Row>
        )
    }
  return (

    <Row className="justify-content-md-center mt-3">
        {data.map((item) => {
            return (
                <Col md={6} sm={12} lg={4} key={item.title} className="mb-4">
                                  <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -150 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1,
                    delay: 0.25,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  x: 0,
                }}
                animate={{ scale: 1 }}
              >
                    <CardItem 
                        title={item.title} 
                        image={item.image} 
                        price={item.price} 
                        description={item.description} 
                        category={item.category}
                    />
                    </motion.div>
                </Col>
            )
        })}
    </Row>


    
  )
}

export default CardList
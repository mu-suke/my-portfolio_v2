import { Badge, Box } from '@chakra-ui/layout'
import { NextPage } from 'next'
import React from 'react'
import { BackButton } from './BackButton'

const Card = () => {
  return (
    <Box boxShadow='0rem 0.75rem 2.625rem 0rem rgb(40 39 48 / 52%)' borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6" backgroundColor='rgba(40, 39, 48, 0.922)'>
        <BackButton />
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Card
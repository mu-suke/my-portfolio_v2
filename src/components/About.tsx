import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Img } from '@chakra-ui/react'
import React from 'react'
import { BackButton } from './common/BackButton'
import { Motion } from '@/components/Layout/Motion'

export const About: React.FC = () => {
  const property = {
    imageUrl: '/about.jpg',
    imageAlt: 'about image',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }
  return (
    <Motion>
      <Box
        boxShadow='0rem 0.75rem 2.625rem 0rem rgb(40 39 48 / 52%)'
        borderRadius='lg'
        overflow='hidden'
      >
        <Img
          src={property.imageUrl}
          alt={property.imageAlt}
          objectFit='cover'
          width='100%'
          height='300'
        />
        <Box p='6' backgroundColor='rgba(40, 39, 48, 0.922)'>
          <BackButton />
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.beds} beds &bull; {property.baths} baths
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    </Motion>
  )
}

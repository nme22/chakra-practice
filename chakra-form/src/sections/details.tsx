import { 
     FormControl,
     FormLabel, 
     Input, 
     Select, 
     Checkbox, 
     Button, 
     VStack, 
     Heading, 
     Text, 
     SimpleGrid, 
     GridItem,
     useBreakpointValue,    
    } from "@chakra-ui/react"

const Details = () => {
    const colSpan = useBreakpointValue({ base: 2, md: 1});
    return (
        <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        >
            <VStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Your Details</Heading>
                <Text>If you already have an account, click here to log in.</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="502 Gotcha Dr."/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="New York"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={colSpan}>
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select>
                            <option value="USA"> United States of America</option>
                            <option value="UAE"> United Arab Emirates</option>
                            <option value="NMK">North Macedonia</option>
                            <option value="DE"> Germany</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Checkbox defaultChecked>Shipped to billing address</Checkbox>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button colorScheme="brand" size="lg" w="full">Place Order</Button>
                </GridItem>
            </SimpleGrid>
            
            
        </VStack>
    )
}

export default Details;
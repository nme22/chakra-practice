import { FormControl, FormLabel, Input, Select, Checkbox, Button, VStack, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react"

const Details = () => {
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
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="John"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Doe"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder="1502 Gotcha Dr."/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>City</FormLabel>
                        <Input placeholder="New York"/>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
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
                    <Button size="lg" w="full">Place Order</Button>
                </GridItem>
            </SimpleGrid>
            
            
        </VStack>
    )
}

export default Details;
import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { CartWidget } from "../CartWidget"
import { useAuth } from '../../hooks/useAuth';
 
const FAKE_CATEGORIES = [
  {
    id: 1,
    label: "Sports",
  },
  {
    id: 2,
    label: "IT",
  },
  {
    id: 3,
    label: "Home",
  },
  {
    id: 4,
    label: "Furnitures",
  },
  {
    id: 5,
    label: "Tools",
  },
];



export const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const { logout } = useAuth();

    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Box>All Sales</Box>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Categories
                        </MenuButton>
                        <MenuList>
                            {FAKE_CATEGORIES.map((category) => {
                                return <MenuItem key={category.id}>{category.label}</MenuItem>;
                            })}
                        </MenuList>
                    </Menu>

                    <Flex alignItems={"center"}>
                        <CartWidget />
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={"https://avatars.dicebear.com/api/male/username.svg"}
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={"https://avatars.dicebear.com/api/male/username.svg"}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Joaquin Saavedra</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem onClick={() => {logout()}}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
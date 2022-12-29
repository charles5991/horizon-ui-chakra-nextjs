import React from "react";
// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuthLayout from "layouts/auth/Default";
// Assets
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { Formik, Field } from "formik";

export default function SignIn() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
  const googleText = useColorModeValue("navy.700", "white");
  const googleHover = useColorModeValue(
    { bg: "gray.200" },
    { bg: "whiteAlpha.300" }
  );
  const googleActive = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.200" }
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <DefaultAuthLayout illustrationBackground={"/img/auth/auth.png"}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Register
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Register your account here!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          {/* <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            bgColor={googleBg}
            color={googleText}
            fontWeight="500"
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
          >
            <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
            Sign in with Google
          </Button>
          <Flex align="center" mb="25px">
            <HSeparator />
            <Text color="gray.400" mx="14px">
              or
            </Text>
            <HSeparator />
          </Flex> */}
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmPass: "",
              // rememberMe: false,
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel
                    display="flex"
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    mb="8px"
                    htmlFor="email"
                  >
                    Email
                  </FormLabel>
                  <Field
                    as={Input}
                    isRequired={true}
                    id="email"
                    name="email"
                    type="email"
                    variant="auth"
                    fontSize="sm"
                    ms={{ base: "0px", md: "0px" }}
                    placeholder="mail@email.com"
                    mb="24px"
                    fontWeight="500"
                    size="lg"
                    value=""
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    display="flex"
                    htmlFor="password"
                  >
                    Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      variant="auth"
                      isRequired={true}
                      fontSize="sm"
                      placeholder="Min. 8 characters"
                      mb="24px"
                      size="lg"
                      type={show ? "text" : "password"}
                      value=""
                      validate={(value: string | any[]) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 8 characters";
                        }

                        return error;
                      }}
                    />{" "}
                    <InputRightElement
                      display="flex"
                      alignItems="center"
                      mt="4px"
                    >
                      <Icon
                        color={textColorSecondary}
                        _hover={{ cursor: "pointer" }}
                        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                        onClick={handleClick}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel
                    ms="4px"
                    fontSize="sm"
                    fontWeight="500"
                    color={textColor}
                    display="flex"
                    htmlFor="confirmPass"
                  >
                    Confirm Password
                  </FormLabel>
                  <InputGroup size="md">
                    <Field
                      as={Input}
                      id="confirmPass"
                      name="confirmPass"
                      variant="auth"
                      isRequired={true}
                      fontSize="sm"
                      placeholder="Min. 8 characters"
                      mb="24px"
                      size="lg"
                      value=""
                      type={show ? "text" : "password"}
                      validate={(value: string | any[]) => {
                        let error;

                        if (value.length < 5) {
                          error = "Password must contain at least 6 characters";
                        }

                        return error;
                      }}
                    />{" "}
                    <InputRightElement
                      display="flex"
                      alignItems="center"
                      mt="4px"
                    >
                      <Icon
                        color={textColorSecondary}
                        _hover={{ cursor: "pointer" }}
                        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                        onClick={handleClick}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                {/* <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="start"
                  maxW="100%"
                  mt="0px"
                >
                  <Text
                    color={textColorDetails}
                    fontWeight="400"
                    fontSize="14px"
                    as={Checkbox}
                    id="rememberMe"
                    name="rememberMe"
                    colorScheme="yellow"
                  >
                    Remember me?
                  </Text>
                </Flex> */}
                <FormControl>
                  <Button
                    fontSize="sm"
                    bg="orange"
                    fontWeight="500"
                    w="100%"
                    h="50"
                    mb="24px"
                    type="submit"
                  >
                    Register
                  </Button>
                </FormControl>
              </form>
            )}
          </Formik>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="14px">
              Already register?
              <Link href="/auth/sign-in">
                <a>
                  <Text color="orange" as="span" ms="5px" fontWeight="500">
                    Sign in
                  </Text>
                </a>
              </Link>{" "}
              Here
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </DefaultAuthLayout>
  );
}
